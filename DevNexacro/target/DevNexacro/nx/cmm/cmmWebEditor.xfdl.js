(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmWebEditor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webEditor","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("ureadonly").set("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",460,360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmWebEditor.xfdl", function() {
        /**
        * webEidtor 공통 폼
        *@FileName  cmmWebEditor
        *@Creator
        *@CreateDate 2025/04/18
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************
        * variable
        ************************************************************************/
        this.fvDocWeb    = "";
        this.fvRtnHeight = 257; //버튼사이즈
        this.readonly    = false;
        this.surl        = '';
        const parentForm = this.parent;

        /**
        * form onload
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.cmmWebEditor_onload = function(obj,e)
        {

        	this.webEditor.visible = false;
        	if(!(parentForm instanceof nexacro.Div)){
        		this.console.dev("현재폼은 division 이어야만 합니다.");
        	}

        };


        // webEditor 초기 설정
        this.init = function (param)
        {

        	this.setHeightSieze();
        	let bReadOnly = false;

        	if(("ureadonly" in parentForm) && !!parentForm.ureadonly){
        	    bReadOnly = parentForm.ureadonly ;
        	}

        	if(!!param) bReadOnly = param;


        	//  this.surl = this.gfnGetServerUrl() + "html/webEditor/index.html" + "?readonly="+this.readonly+"";
        	this.surl = webPath  + "editor/index.html" + "?readonly="+bReadOnly+"";

        	trace(" this.surl : " + this.surl);
        	this.webEditor.url = "";
        	this.webEditor.url = this.surl;
        };

        this.setHeightSieze = function ()
        {
        	if(this.readonly) this.fvRtnHeight = 207;
        	// else this.fvRtnHeight = 255;
        };

        //true /false
        this.setReadOnly = function (vReadOnly)
        {
        	// alert(" set ReadOnly " );
        	this.reload  = true;
            parentForm.ureadonly  = vReadOnly || false;
        	// 	this.init();
        };


        this.fnEditorCallback = function(sType)
        {
        	switch (sType)
        	{

        	case "onload" :
        		var sContents = "";
        		this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        		this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        		break;
        	}
        };

        this.set_on_resize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        	this.webEditor.set_visible(true);
        };


        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.webEditor.getProperty("document").getProperty("all");
        };


        this.webEditor_onusernotify = function(obj,e)
        {
        	try
        	{
        		if (e.userdata == "onload"){

        			let initHeight = this.webEditor.getOffsetHeight();
        			//initHeight-this.fvRtnHeight
        			this.set_on_resize(obj.getOffsetWidth(),initHeight-this.fvRtnHeight);
        			this.webEditor.visible = true;
        			let topForm = this.gfnGetTopLevelForm(this.parent);
        			let id = parentForm.name;


        			//form editor onload call
        			if (nexacro._isFunction(topForm["cfnEditor_onload"])){
        				topForm["cfnEditor_onload"](id,e.userdata);
        			}
        		}
        	}
        	catch(e){
        		trace("sampleNaverEditor.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };

        //web editor setting
        this.setValue = function (sContents)
        {
        	if(this.gfnIsNull(sContents)) sContents = "";
        	this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        	this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        };


        //web editor setting
        this.getValue = function (sContents)
        {
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
         	return this.fvDocWeb.getProperty("ir1").getProperty("value");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmWebEditor_onload,this);
            this.webEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.webEditor.addEventHandler("onsize",this.webEditor_onsize,this);
        };
        this.loadIncludeScript("cmmWebEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
