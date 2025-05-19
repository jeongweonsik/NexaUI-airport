(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmConfirm");
            this.set_titletext("확인창");
            this.set_cssclass("frm_POP_Message");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0",null,null,"70","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_POP_BtnArea");
            this.addChild(obj.name, obj);

            obj = new Static("staType","24","24","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_TitleMsgSuccess");
            obj.set_text("Success");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_SecondaryMd");
            obj.set_defaultbutton("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"60","30","btnCancel:6","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_PrimaryMd");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","480","30","370","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_TitleMsgInfo");
            obj.set_visible("false");
            obj.set_text("Information");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","480","70","370","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_TitleMsgSuccess");
            obj.set_visible("false");
            obj.set_text("Success");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","480","150","370","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_TitleMsgError");
            obj.set_visible("false");
            obj.set_text("Error");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","480","190","370","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_TitleMsgQuestion");
            obj.set_visible("false");
            obj.set_text("Question");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00_00","480","110","370","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_cssclass("sta_POP_TitleMsgWarning");
            obj.set_text("Warning");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","64","70",null,null,"30","80",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_POP_Message");
            obj.set_text("Nexacro N 개발 라이선스가 발급되었습니다.");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel00",null,null,"73","30","30","-50",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("아니오");
            obj.set_defaultbutton("true");
            obj.set_cssclass("btn_POP_SecondaryMd");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk00",null,null,"73","30","btnCancel00:6","-50","73",null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("예");
            obj.set_defaultbutton("true");
            obj.set_cssclass("btn_POP_PrimaryMd");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseTitle",null,"20","30","30","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_POP_Close2");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmConfirm.xfdl", function() {
        /**
        * 메시지 창(confirm) 공통 폼
        *@FileName  cmmConfirm
        *@Creator
        *@CreateDate 2025/04/18
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

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.formOnload = function(obj,e)
        {
        	const sContents = this.getOwnerFrame().paramContents;
            const sparamType = this.getOwnerFrame().paramType;

           // this.console.log(sContents);
           	this.fnMsgSetting(sContents);
        	this.fnMsgSetType(sparamType);
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ***********************************************************************************************/

        /**
        * @description 메세지설정
        */
        this.fnMsgSetting = function (sMsgContent)
        {
           this.staMsgContent.set_text(sMsgContent);
           //this.staMsgContent.set_value(sMsgContent);
        };


         /**
          * msg type 설정
          */
         this.fnMsgSetType = function (scode)
         {

        	if(this.gfnIsNull(scode)) scode = "";
        	let sCss = "";

        		switch(scode) {
        	case "q": //question
        		sCss = "sta_POP_TitleMsgQuestion";
        		break;
        	case "e":  //error
        		sCss = "sta_POP_TitleMsgError";
        		break;
        	case "i" : //info
        		sCss = "sta_POP_TitleMsgInfo";
        		break;
        	case "w" : //waring
        		sCss = "sta_POP_TitleMsgWarning";
        		break;
        	default:
        		sCss = "sta_POP_TitleMsgSuccess";
        		break;
        	}

        	this.staType.set_cssclass(sCss);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description 취소버튼
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close(false);
        };

        this.btnCloseTitle_onclick = function(obj,e)
        {
        	this.close("x");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.Static06_01.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.btnCancel00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnOk00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnCloseTitle.addEventHandler("onclick",this.btnCloseTitle_onclick,this);
        };
        this.loadIncludeScript("cmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
