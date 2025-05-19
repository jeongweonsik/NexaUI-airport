/**
 * @use 이미지 붙여넣기 업로드용으로 제작되었습니다.
 * @author kslee
 * @See nhn.husky.SE2M_PasteImage
 */
nhn.husky.SE2M_PasteImage = jindo.$Class({
    name: "SE2M_PasteImage",

    $init: function () { },

    //$ON_MSG_APP_READY: function () {
    //	this.oApp.exec("REGISTER_UI_EVENT", ["photo_attach", "click", "EVENT_EDITING_AREA_PASTE"]);
    //},
    callAjax: function (tempFile, imgBase64, sUploadURL) {
        var oApp = this.oApp;

        var oAjax = jindo.$Ajax(sUploadURL, {
            type: 'xhr',
            method: "post",
            async: false,
            onload: function (res) { // 요청이 완료되면 실행될 콜백 함수
                if (res.readyState() == 4) {
                    var result = JSON.parse(res._response.responseText);
                    if (!result.result) {
                        alert(result.message);
                        return;
                    }
                    var img = document.createElement("IMG");
                    img.src = result.filePath;
                    // 업로드된 이미지 추가
                    oApp.exec("PASTE_HTML", [img.outerHTML]);
                }
            },
            timeout: 3,
            onerror: function (a) {
                console.log(a);
            }
        });
        //oAjax.header("Content-Type", "multipart/form-data");
        oAjax.header("file-name", encodeURIComponent(tempFile.name));
        oAjax.header("file-size", tempFile.size);
        oAjax.header("file-Type", tempFile.type);
        oAjax.request({ img: imgBase64 });
        return oAjax;
    },
    pasteImage: function (file) {
        var obj = this;
        var oApp = this.oApp;
        var reader = new FileReader();
        reader.addEventListener("load", function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const LIMIT_WIDTH = 2000;
                const LIMIT_HEIGHT = 1000;
                let width = img.width;
                let height = img.height;
                let scaleFactor = 1;

                if (width > LIMIT_WIDTH) {
                    let prev = width;
                    width = LIMIT_WIDTH;
                    scaleFactor = LIMIT_WIDTH / prev;
                    height = height * scaleFactor;
                }

                if (height > LIMIT_HEIGHT) {
                    let prev = height;
                    height = LIMIT_HEIGHT;
                    scaleFactor = LIMIT_HEIGHT / prev;
                    width = width * scaleFactor;
                }

                canvas.width = width;
                canvas.height = height;

                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                let quality = 1;
                // let quality = 1 - width/img.width;
                // if (quality < 0.7) quality = 0.7;
                // Base64 변환
                const base64Image = canvas.toDataURL('image/jpeg', quality); // 0.7은 품질 설정 (0.0 ~ 1.0)
                const attached = document.createElement("IMG");
                if (base64Image.length > e.target.result.length) {
                    attached.src = e.target.result;
                } else {
                    attached.src = base64Image;
                }
                oApp.exec("PASTE_HTML", [attached.outerHTML]);
            };
            // var img = document.createElement("IMG");
            // img.src = e.target.result;
            // oApp.exec("PASTE_HTML", [img.outerHTML]);
            // var base64 = reader.result.replace('data:image/png;base64,', '');
            // try {
            //     if (!!base64) {
            //         //Ajax통신하는 부분. 파일과 업로더할 url을 전달한다.
            //         obj.callAjax(file, base64, '주소주소주소주소');
            //     }
            // } catch (e) { console.log(e); }
        });
        reader.readAsDataURL(file);
    },
    /**
     * paste 이벤트에서 이미지파일이 있으면 삽입
     */
    $ON_EVENT_EDITING_AREA_PASTE: function (we) {
        // 크롬이 아닌 경우는 skip
        //if (!jindo.$Agent().navigator().chrome) {
        //	return;
        //}
        // console.log(we);
        var clipboard = we.$value().clipboardData || {};
        var files = clipboard.files;
        if (!files || files.length === 0) {
            return;
        }
        we.stopDefault();
        for (var i = 0, len = files.length; i < len; i++) {
            var file = files[i];
            if (file.type.indexOf("image/") === 0) {
                if (file.size >= 10 * 1024 * 1024) {
                    alert("10MB 이내 파일만 붙여넣을 수 있습니다.");
                    return;
                }
                this.pasteImage(file);
            }
        }
    }
});