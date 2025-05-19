(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSub");
            this.set_titletext("프레임(Left메인)");
            this.set_visible("true");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            this.set_cssclass("frm_LF_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(262,826);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBlur","0","1",null,null,"3","4",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_boxShadow("inset 4px 3px 10px 0px #cacbd9");
            obj.set_background("#fafafc");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","2","72",null,"56","2",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_LF_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuSearch","2","12",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edi_LF_Sch");
            obj.set_displaynulltext("메뉴명을 입력하세요.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_LF_MenuSetting");
            obj.set_borderRadius("0px 0px 0px 20px");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu","5","132","50%","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("btn_LF_System_S");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","btnMenu:2%","132",null,"36","11",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("btn_LF_System");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","11","180","234",null,null,"2",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staName","100","11","149","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("한지성\r\n");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staName00","100","30","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("IT202501");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","156","27","8","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("|");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staName00_00","174","30","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대표이사");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","3","71","67",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사진");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",262,826,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /**
        * left frame
        *@FileName  frmLeft
        *@Creator 	{J}
        *@CreateDate 2025/05/13
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


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        **/
        this.frm_onlaod = function(obj,e)
        {

        	this.divLeft.url  = "frame::frmLeftS.xfdl";
        	this.divLeft.form.resetScroll();
        	this.resetScroll();

        	// trace(" ## width :  " + this.width);
        };

        this.fnSetInit = function ()
        {
           this.divLeft.form.fnSetInit();
        //   trace(" left height :  " + this.height);
        //   trace(" left getOffsetWidth :  " + this.getOffsetWidth());
        };

        this.btnMenu_onclick = function(obj)
        {
           this.fnSetMenuChange(obj.name);
        }

        this.fnSetMenuChange = function (menuNm)
        {
        	  let nidx = 0;

        	if(menuNm == "btnMyMenu") nidx = 1;

        	// this.fnSetMenuCss(nidx);
        	this.divLeft.form.fnSetStepMenu(nidx);
        };

        // 메뉴 버튼 css
        this.fnSetMenuCss = function (flag)
        {
        	//btnMymenu
        // 	if(flag == 1){
        // 	    this.btnMenu.cssclass = "btn_LF_Tab";
        // 	    this.btnMyMenu.cssclass = "btn_LF_LastTab_S";
        //
        // 	}else{
        // 	   this.btnMenu.cssclass = "btn_LF_Tab_S";
        // 	   this.btnMyMenu.cssclass = "btn_LF_LastTab";
        // 	 // this.btnMymenu.set_cssclass("btn_LF_LastTab");
        // 	}
        };


        /**
         * @description  tree 메뉴 경로 반환
        **/
        this.fnGetMenuPath = function (menuID)
        {
        	let nRow = app.gdsMenu.findRow(com.frame.menu.id, menuID);
        	if (nRow >= 0) return this.grdMenu.getTreePath(nRow);
        }


        //펼침 / 접힘 onclick
        this.btnSetExPand_onclick = function(obj)
        {
        //     var btnMenuCollApse = this.divLBottom.form.divHistory.form.btnMenuCollApse;
        // 	var btnSetExPand = this.divLBottom.form.divHistory.form.btnMenExpand;
        //
        //     if(obj.name == "btnMenExpand"){
        // 		  obj.cssclass = "btn_LF_Plus_S";
        // 	      btnMenuCollApse.cssclass = "btn_LF_Minus";
        // 	}
        //
        // 	if(obj.name == "btnMenuCollApse"){
        // 	      obj.cssclass = "btn_LF_Minus_S";
        // 	      btnSetExPand.cssclass = "btn_LF_Plus";
        // 	}
        //
        // 	this.divLeft.form.btnSetExPand_onclick(obj);

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.frm_onsize = function(obj,e)
        {
           // trace(" ##  this.divLeft.top : " + );
        	//trace("## e.cx : " + e.cx + "<> e.cy : " + e.cy);
        //	this.divLeft.height =  Number(e.cy) - Number(this.divLeft.top);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_onlaod,this);
            this.addEventHandler("onsize",this.frm_onsize,this);
            this.Div00.form.edtMenuSearch.addEventHandler("onkeyup",this.edtMenuSearch_onkeyup,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
