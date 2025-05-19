(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAlert");
            this.set_titletext("알림창");
            this.set_cssclass("frm_POP_Message");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0",null,null,"70","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_POP_BtnArea");
            this.addChild(obj.name, obj);

            obj = new Static("staType","24","24",null,"28","36",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TitleMsgInfo");
            obj.set_text("Information");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","480","30","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_TitleMsgInfo");
            obj.set_visible("false");
            obj.set_text("Information");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","480","70","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_TitleMsgSuccess");
            obj.set_visible("false");
            obj.set_text("Success");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00","480","190","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_TitleMsgQuestion");
            obj.set_visible("false");
            obj.set_text("Question");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02_00_00","480","110","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("sta_POP_TitleMsgWarning");
            obj.set_text("Warning");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_defaultbutton("true");
            obj.set_cssclass("btn_POP_PrimaryMd");
            obj.set_fittocontents("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_02","480","150","320","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_TitleMsgError");
            obj.set_visible("false");
            obj.set_text("Error");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("txtMsgContent","64","70",null,null,"30","80",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_POP_Message");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloeTItle",null,"20","30","30","20",null,null,null,null,null,this);
            obj.set_taborder("8");
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
        this.registerScript("cmmAlert.xfdl", function() {
        /**
        * 메시지 창 공통(Alert)
        *@MenuPath
        *@FileName  cmmAlert
        *@Creator
        *@CreateDate 2023/07/12
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

        	this.fnMsgSetting(sContents);
        	this.fnMsgSetType(sparamType);
        	this.resetScroll();

        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        /**
        * @description 메세지설정
        */
         this.fnMsgSetting = function (sMsgContent)
         {
        	this.txtMsgContent.text = sMsgContent;
        	//this.txtMsgContent.set_value(sMsgContent);
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

        	this.staType.cssclass = sCss;
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/


        this.btnClose_onclick = function(obj,e)
        {

        };


        this.btnCloeTItle_onclick = function(obj,e)
        {
        	this.close("x");
        };

        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCloeTItle.addEventHandler("onclick",this.btnCloeTItle_onclick,this);
        };
        this.loadIncludeScript("cmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
