(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"parentCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuGroup\" type=\"STRING\" size=\"32\"/><Column id=\"url\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuCd\">M120003</Col><Col id=\"menuNm\">탑메뉴1</Col><Col id=\"parentCd\">M000120</Col><Col id=\"menuLvl\">0</Col><Col id=\"menuGroup\">0</Col><Col id=\"url\"/><Col id=\"sort\">1203</Col><Col id=\"menuPath\">개발자샘플 &gt; </Col><Col id=\"icon\">url(&apos;theme://images/titlebar_icon.png&apos;)</Col></Row><Row><Col id=\"menuCd\">M220003</Col><Col id=\"menuNm\">탑메뉴2</Col><Col id=\"parentCd\">M100121</Col><Col id=\"menuLvl\">0</Col><Col id=\"menuGroup\">0</Col><Col id=\"sort\">1203</Col><Col id=\"menuPath\">개발자샘플 &gt; </Col><Col id=\"icon\">url(&apos;theme://images/titlebar_icon.png&apos;)</Col></Row><Row><Col id=\"menuCd\">M320003</Col><Col id=\"menuNm\">탑메뉴1_2</Col><Col id=\"menuLvl\">1</Col><Col id=\"menuGroup\">0</Col><Col id=\"icon\">url(&apos;theme://images/titlebar_icon.png&apos;)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","665","50","135","81",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","767","140","176","62",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            obj.set_icon("url(\'theme://images/titlebar_icon.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","429","152","171","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","650","133","97","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","690","250","540","321",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("sample::sample004Message.xfdl");
            this.addChild(obj.name, obj);

            obj = new Menu("menuTop","820","55",null,null,"90","587",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTopMenu");
            obj.set_idcolumn("menuCd");
            obj.set_levelcolumn("menuLvl");
            obj.set_captioncolumn("menuNm");
            obj.set_iconcolumn("icon");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","27","32","313","540",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_url("frame::frmLeftS.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","398","57","154","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::sample004Message.xfdl");
            this._addPreloadList("fdl","frame::frmLeftS.xfdl");
        };
        
        // User Script
        this.registerScript("test001.xfdl", function() {
        /**
        *
        *@FileName test001
        *@Creator
        *@CreateDate 2025/04/28
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
        * include 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.addEventHandler("onload", function(obj,e)
        	{

        	},this);

        /*
        *@description 화면 이동 후 넘어온 값 처리
        *@param {string}{object}{array} 넘어온 아규먼트 처리
        */
        this.cfnMoveOnActie = function(param)
        {
        	//trace("fnMoveOnActie formName ===>" + this.name + "<> parg ====> " + param);
        };

        /**
        * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
        * @return {boolean} true(화면 닫지 않음) / false(화면 닫음)
        */
        this.cfnClose = function()
        {
        	return false;
        };

        /**
        * //paging 버튼 // next prev 클릭 이벤트 후처리
        * @param {number} 누른 페이지
        * @param {number} 시작데이터rownum계산
        * @return
        * @example
        * @memberOf
        */
        this.cfnPaging_onclick = function(nPage,nRecordOffset)
        {
        	trace(" ## nPage : " +nPage + "<> nRecordOffset : " + nRecordOffset);

        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnCallback = function(id,code,msg)
        {
        	// 에러 시 화면 처리 내역
        	if(code < 0) return;

        	switch(id) {
        	case "":
        		break;

        	default:
        	}

        };

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         *
         * @param {string}
         * @return
         * @example
         * @memberOf
         */
        this.fnSetUserTest = function ()
        {

        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.Button00_onclick = function(obj,e)
        {
        	alert("id : " + app.id);

        };

        this.Button01_onclick = function(obj,e)
        {
        	// 	 let objDivPaging = new Div();
        	// 	//objDivPaging.init("divPage", 0, 5, 800, 23, null, null);
        	// 	//	objDivPaging.init("divPage", 0, 0, 800, 23, null, null);
        	// 	//objDivPaging.init("divPage", 0, 0, null, null,0 , 0);
        	// 	objDivPaging.init("Div", 30, 120, 196, 46, null, null);
        	var objDivPaging = new Div("Div", 0, 5, 800, 23, null, null);
        	objDivPaging.text = "divpaging";
        	objDivPaging.border = "1px solid red";
        	objDivPaging.background = "#ffffaa";

        	alert(" objDivPaging : " + objDivPaging);
            this.addChild(objDivPaging.name, objDivPaging);
            objDivPaging.show();


        	let objBtnFirst = new Button("btnFirst", 0, 0, 100,100, null, null);
        	objBtnFirst.border = "1px solid red";
        	objBtnFirst.background = "#ffffaa";
        	objDivPaging.addChild(objBtnFirst.name, objBtnFirst);
        	objBtnFirst.show();


        };

        this.Button02_onclick = function(obj,e)
        {
        	// Create Object
        	// var objDiv = new Div();
        	// objDiv.init("Div", 30, 120, 196, 46, null, null);

        	// objDiv.init("Div", null, null, 300, "400px", "80%", 300);
        	// or
        	let objDiv = new Div("Div", 30, 120, 196, 46, null, null);
        	//var objDiv = new Div("Div", null, null, 300, "400px", "80%", 300);

        	// Add Object to Parent Form
        	this.addChild("Div", objDiv);

        	// Insert Object to Parent Form
        	//this.insertChild(1, "Div", objDiv);

        	// Remove Object form Parent Form
        	//this.removeChild("Div");

        	// Show Object
        	objDiv.show();
        	objDiv.background = "#ffffaa";
        	objDiv.text = "text";

        	alert(" this.Div :  " + objDiv.name);


        };

        this.Button03_onclick = function(obj,e)
        {
        	trace(" max : " +this.Div00.form.vscrollbar.max);
        };

        this.Button04_onclick = function(obj,e)
        {
        	// 원하는 글자
        	var message = "브라우저 하단에 표시할 메시지입니다.";

        	// 하단 영역에 글자 표시
        	document.getElementById('bottom-banner').textContent = message;
        	document.getElementById('bottom-banner').style.display = 'block';
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("test001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
