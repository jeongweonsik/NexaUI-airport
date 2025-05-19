(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample006FileUpDownload");
            this.set_titletext("파일 업/다운");
            if (Form == this.constructor)
            {
                this._setFormPosition(1293,827);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_SIZE\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MODIFY_DT\" type=\"datetime\" size=\"17\"/><Column id=\"ORIGINAL_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_PATH\" type=\"string\" size=\"32\"/><Column id=\"MODIFY_ID\" type=\"string\" size=\"32\"/><Column id=\"CREATE_DT\" type=\"datetime\" size=\"17\"/><Column id=\"NOTE\" type=\"string\" size=\"32\"/><Column id=\"FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXT\" type=\"string\" size=\"32\"/><Column id=\"CREATE_ID\" type=\"string\" size=\"32\"/><Column id=\"GFILE_SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_SEQ\" type=\"bigdecimal\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInFileUp", this);
            obj._setContents("<ColumnInfo><Column id=\"fileId\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fileId\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"fileId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_AT\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FILE_SEQ\">asfdsf</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","0","60",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("File UPLOAD/DOWNLOAD ");
            obj.set_cssclass("sta_WF_GuideTxt01");
            this.addChild(obj.name, obj);

            obj = new Static("staSub","0","sta02:0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 업/다운로드 샘플");
            obj.set_cssclass("sta_WF_GuideTxt01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5","141","265","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1) file upload/Down 공통(webBrowser전용)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("divFileUp","20","200",null,"260","503",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("cmmFileUpDown");
            obj.getSetter("ureadonly").set("false");
            obj.getSetter("uopenmode").set("multi");
            obj.getSetter("uextaccept").set("");
            obj.getSetter("umbsizeaccept").set("10");
            obj.getSetter("ugfileseq").set("");
            obj.getSetter("uauth").set("btnDialog:false,btnFileDeleteAll:false,btnFileDownLoadAll:false");
            obj.set_url("cmm::cmmFileUpDown.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileUpGetDataset","16","divFileUp:10","117","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("getDatasetFileUP");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSearch","btnFileUpGetDataset:4","470","72","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일조회");
            this.addChild(obj.name, obj);

            obj = new Button("btDsFileUpCopy","btnFileSearch:4","470","106","38",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(" datasset  복사");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","461","61","490","103",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("*=====  user property    =====*\r\n1. uopenmode      : single, multi\r\n2. ureadonly      : 기본은 false   true  : 파일다운로드 기능만     false : 파일 업/ 다운   \r\n3. uextaccept    : 파일형식 제한\r\n4. umbsizeaccept  : 사이즈 제한");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSelect",null,"221","122","39","130",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일선택/업로드");
            this.addChild(obj.name, obj);

            obj = new Edit("txtFileNm",null,"221","231","36","btnFileSelect:8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"221","96","39","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00",null,"txtFileNm:10","461","173","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsUpload");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_SIZE\"/><Cell col=\"1\" text=\"MODIFY_DT\"/><Cell col=\"2\" text=\"ORIGINAL_FILE_NM\"/><Cell col=\"3\" text=\"FILE_PATH\"/><Cell col=\"4\" text=\"MODIFY_ID\"/><Cell col=\"5\" text=\"CREATE_DT\"/><Cell col=\"6\" text=\"NOTE\"/><Cell col=\"7\" text=\"FILE_NM\"/><Cell col=\"8\" text=\"FILE_TYPE\"/><Cell col=\"9\" text=\"FILE_EXT\"/><Cell col=\"10\" text=\"CREATE_ID\"/><Cell col=\"11\" text=\"GFILE_SEQ\"/><Cell col=\"12\" text=\"FILE_SEQ\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_SIZE\"/><Cell col=\"1\" text=\"bind:MODIFY_DT\"/><Cell col=\"2\" text=\"bind:ORIGINAL_FILE_NM\"/><Cell col=\"3\" text=\"bind:FILE_PATH\"/><Cell col=\"4\" text=\"bind:MODIFY_ID\"/><Cell col=\"5\" text=\"bind:CREATE_DT\"/><Cell col=\"6\" text=\"bind:NOTE\"/><Cell col=\"7\" text=\"bind:FILE_NM\"/><Cell col=\"8\" text=\"bind:FILE_TYPE\"/><Cell col=\"9\" text=\"bind:FILE_EXT\"/><Cell col=\"10\" text=\"bind:CREATE_ID\"/><Cell col=\"11\" text=\"bind:GFILE_SEQ\"/><Cell col=\"12\" text=\"bind:FILE_SEQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFieSearch",null,"170","98","37","22",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("fielSearch");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("파일 업/다운(sample006)");
            obj.set_cssclass("sta_GA_Header");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetAuth","20","522","114","42",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("버튼권한(set)");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetAuth","156","522","114","42",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("버튼권한(get)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFileUp
            obj = new Layout("default","",0,0,this.divFileUp.form,function(p){});
            this.divFileUp.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1293,827,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmFileUpDown.xfdl");
        };
        
        // User Script
        this.registerScript("sample008FileUpDownload.xfdl", function() {
        /**
        *  파일 업/다운 샘플
        *@FileName  sample008FileUpDownload
        *@Creator 	{J}
        *@CreateDate 2025/05/16
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/

        //1. uopenmode    : single, multi
        //2. ureadonly    : 기본은 false   true  : 파일다운로드 기능만     false : 파일 업/ 다운
        //3. uextaccept   : 파일형식 제한
        //4. mbsizeaccept : 사이즈 제한

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.addEventHandler("onload",function(obj,e)
        {

        },this);


        /************************************************************************
         * callback
         ************************************************************************/
        // file 조호 콜벡
        this.cfnTranFileUpDownCallback= function (id,code, msg ,dsUpload)
        {

              if(code < -1 ) return;

        		 switch(id) {
        		 case "svcSelectFileInfo":   //파일조회
        			break;
        		 case "svcDeleteFileList":  // 파일삭제

        			break;

        		 }

        };

        /**
        *   파일 다이얼로그 callback
        * @param {string} 호출 파일 Up/Download 구분자
        * @param {string} 파일이름
        * @param {string} 파일사이즈
        * @param {object} virture file
        * @return
        * @example
        * @memberOf
        */
        this.cfnFileDialog_onclose = function (id,filename,fileExt,filesize,vFile)
        {

          // trace(" ## cfnFileDialog_onclose id : " + id + "<> filename : " + filename + "<> filesize : " +filesize + "<> vFile : " + vFile);

          // this.gfnLog({id:id,filename:filename,filesize:filesize,vFile:vFile});

        	if(id==" fileUp_divFileUp")
        	{
        	  this.txtFileNm.value = filename;
        	//  alert(" vFile : " +vFile + "<> filesize : " +filesize);
        	//     this.gfnFileUpload(e.virtualfiles);
        	}
        };



        /**
        * @ 파일 업로드 콜벡
        * 파일 업로드 결과에 대한 Response 를 onsuccess 이벤트의 "e.datasets" 속성으로 전달할 수 있습니다.
        "e.datasets" 속성은 XML 또는 SSV 형식의 DataSet 으로 구성되어야 합니다.
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.cfnFileUp_success = function (id,obj,resDs)
        {
           this.console.log(" ## cfnFileUp_success :::>>> ");
           this.console.log(" id  : " +id + "<> obj : " + obj );
           this.console.log(" fileUpload resultDataset == > "  +resDs.saveXML());
        };

        //file up error
        this.cfnFileUp_onerror = function (id,obj,e)
        {
           this.gfnAlert(" 파일 업로드 에러 ");
           return;
        };
        /**
         *
         * @param {string}  service id
         * @param {number} erororcode
          * @param {string} errrMsg
         * @return
         * @example
         * @memberOf
         */
        this.fnCallback = function(id,code,msg)
        {
        	// 에러 시 화면 처리 내역
        	if(code < 0) return;

        	switch(id) {
        	case "svcFileSearch":

        	    alert(" svcFileSearch success");
        		break;

        	default:
        	}
        };

        /************************************************************************
         * transaction
         ************************************************************************/


        /************************************************************************
        * @description 파일선택 end
        ************************************************************************/
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //
        //
        // this.btnSave_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        //     trace(" rowcont====  " +objTaPage1.divFileUp00.form.dsUpload.rowcount);
        // 	trace(" objTaPage1.divFileUp00.form.canUpload()====  " +objTaPage1.divFileUp00.form.canUpload());
        //
        // //	if ( !objTaPage1.divFileUp00.form.canUpload() && objTaPage1.divFileUp00.form.dsUpload.rowcount == 0 ) {
        // 	if (this.divFileUp.canUpload()){
        //
        // 		var sMsgId = "5531";  //"파일을 선택 해 주세요."
        // 		var arrArg = [];
        // 		this.gfnAlert(sMsgId,arrArg,function(id,res){});
        // 		return;
        // 	}
        //
        // 	if (objTaPage1.divFileUp00.form.canUpload() && objTaPage1.divFileUp00.form.dsUpload.rowcount > 0  )
        // 	{
        // 		 objTaPage1.divFileUp00.form.setFileUpload();
        // 	}
        // 	else
        // 	{
        // 		 objTaPage1.divFileUp00.form.fnSaveFile();
        // 	}
        //
        // };

        this.btnFileUpGetDataset_onclick = function(obj,e)
        {
        	var dsFileUp = this.divFileUp.getDsFileUp();
        };

        /*
         *	파일조회
         */

        this.btnFileSearch_onclick = function(obj,e)
        {
            var svcId    = "svcFileSearch";
        	var callback = "fnCallback";
        	this.divFileUp.tranFileSearch(svcId,callback);

        };

        // 파일 선택 후  업로드
        this.btnFileSelect_onclick = function(obj,e)
        {
            let fileid = "fileSelect";
            let uopenmode = "single";  //single or multi
        	let sAccept = ""; //기본 전체  ".png, .exe"   "image/png, application/*"
        	let dsUpload = this.dsUpload; // 업로드 데이타셋
        	let gFileSeq = "";
        	this.gfnFileDialog(fileid,uopenmode,sAccept,dsUpload,gFileSeq);


        };

        // download
        this.btnDownload_onclick = function(obj,e)
        {
            var nRow = this.dsUpload.findRowExprNF("FILE_SEQ == undefined || FILE_SEQ == ''");

        	if (nRow < 0) return;

        	let fileSeq = this.dsUpload.getColumn(0,"FILE_SEQ");

        	this.gfnFileDownLoad(fileSeq);
        };


        // 파입업로드 dataset 복사
        this.btDsFileUpCopy_onclick = function(obj,e)
        {
        	this.divFileUp.setCopyDsFileUpload(this.dsUpload);
        };

        this.btnFieSearch_onclick = function(obj,e)
        {
        	var svcid    = "searchMsg";
        	var callback = "fnCallback";
        	var inDs     =  "inSys=dsIn";
            var outDs    = "dsUpload=outDs";
            var args     = {param1:"aaa"};

        	//trace(" object key  :" + Object.keys(args).length);
        	this.gfnTranFileSearch(svcid,callback,inDs,outDs,args);
        };

        // set gFileSeq
        this.btnSetGfileSeq_onclick = function(obj,e)
        {
            let gSeq =  "aaaaaaaaaaaa";
        	this.divFileUp.setGfileSeq(gSeq);
        };

        //get gFileSeq
        this.btnGetGfileSeq_onclick = function(obj,e)
        {
        	let gSeq = this.divFileUp.getGfileSeq();
        };

        //버튼권한 클릭
        this.btnAuth_onclick = function(obj,e)
        {
            //btnDialog : 파일추가  btnFileDeleteAll : 파알전체삭제 btnFileDownLoadAll : "파일전체다운로드"
        	var sAuth = "btnDialog:true,btnFileDeleteAll:false,btnFileDownLoadAll:false";
        	this.divFileUp.setAuth(sAuth);
        };

        this.btnGetAuth_onclick = function(obj,e)
        {
        	var uauth =  this.divFileUp.getAuth();

        	uauth.split(",").forEach((cooms,idx)=>{
        	      if(cooms.indexOf(":") > -1){
        		     var sbutton = cooms.split(":")[0];
        			 var sEnable = cooms.split(":")[1];

        			this.console.log( " sbutton : " + sbutton +  "  sEnable : " +sEnable);


        		  }
        	});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnFileUpGetDataset.addEventHandler("onclick",this.btnFileUpGetDataset_onclick,this);
            this.btnFileSearch.addEventHandler("onclick",this.btnFileSearch_onclick,this);
            this.btDsFileUpCopy.addEventHandler("onclick",this.btDsFileUpCopy_onclick,this);
            this.btnFileSelect.addEventHandler("onclick",this.btnFileSelect_onclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.btnFieSearch.addEventHandler("onclick",this.btnFieSearch_onclick,this);
            this.btnSetAuth.addEventHandler("onclick",this.btnAuth_onclick,this);
            this.btnGetAuth.addEventHandler("onclick",this.btnGetAuth_onclick,this);
        };
        this.loadIncludeScript("sample008FileUpDownload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
