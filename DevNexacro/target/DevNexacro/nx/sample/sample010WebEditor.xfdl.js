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

            
            // UI Components Initialize
            obj = new Static("sta03","20","70",null,"150","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("cornsilk");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","26","220","464","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H30");
            obj.set_background("RGBA(36,19,214,0.33)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","704","450","59","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_text("<=");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","704","404","59","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_text("=>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","770","250",null,"460","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("divWebEditor","14","266","677","432",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("cmmWebEditor");
            obj.set_visible("true");
            obj.set_url("cmm::cmmWebEditor.xfdl");
            obj.getSetter("ureadonly").set("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","260",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("웹에디터(sample012)");
            obj.set_cssclass("sta_GA_Header");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWebEditor
            obj = new Layout("default","",0,0,this.divWebEditor.form,function(p){});
            this.divWebEditor.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmWebEditor.xfdl");
        };
        
        // User Script
        this.registerScript("sample010WebEditor.xfdl", function() {
        /**
        *  웹에디터 샘플
        *@FileName  sample010WebEditor
        *@Creator
        *@CreateDate 2025/04/30
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
         * includes
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/

        this.addEventHandler("onload",function(obj,e)
        {
        	/*  readonly여부
        	*@param {boolean} false : 기본(생략가능)
        					  true: : 툴바제거 읽기기능
        	*/
        	 this.divWebEditor.init(false);

        },this);


        //webEidtor onload  실행시 사용
        this.cfnEditor_onload = function (id,userData)
        {
            if(id == "divWebEditor"){
        	  trace(" ## id : " +id + "<> userData : " +userData);
        	}
        };

        /*
         *	editor get value
         */
        this.btn00_onclick = function(obj,e)
        {
        	var sContents = this.txt00.value;
        	this.divWebEditor.setValue(sContents);
        };

        /*
         *	editor set value
         */
        this.btn01_onclick = function(obj,e)
        {
        	var sEditorData = this.divWebEditor.getValue();
        	this.txt00.value = sEditorData;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("sample010WebEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
