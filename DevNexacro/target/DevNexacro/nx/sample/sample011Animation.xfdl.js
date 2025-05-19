(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_animation_05");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnPlay","30","121","20","70",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("▶");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10","1","331",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Menu Area");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample011Animation.xfdl", function() {
        this.sample_animation_01_onload = function(obj,e)
        {
            var aniObj00 = new nexacro.Animation("Ani00", this);
            this.addChild("Ani00", aniObj00);
        	this.Ani00.addTarget("AniItem00", this.btnPlay, "width:20, left:329");
        	this.Ani00.addTarget("AniItem01", this.Div00, "width:300, left:30");
        	this.Ani00.setEventHandler("oncomplete", this.Ani00_oncomplete, this);
        	this.Ani00.easing = "easeInSine";

            var aniObj01 = new nexacro.Animation("Ani01", this);
            this.addChild("Ani01", aniObj01);
        	this.Ani01.addTarget("AniItem00", this.btnPlay, "width:20, left:30");
        	this.Ani01.addTarget("AniItem01", this.Div00, "width:1, left:30");
        	this.Ani01.setEventHandler("oncomplete", this.Ani01_oncomplete, this);
        	this.Ani01.easing = "easeInSine";
        };

        this.btnPlay_onclick = function(obj,e)
        {
        	if( obj.text == "▶")
        	{
        		this.Ani00.play();
        	} else {
        		this.Ani01.play();
        	}
        };

        this.Ani00_oncomplete = function(obj,e)
        {
          this.btnPlay.text = "◀";
        };

        this.Ani01_oncomplete = function(obj,e)
        {
          this.btnPlay.text = "▶";
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample_animation_01_onload,this);
            this.btnPlay.addEventHandler("onclick",this.btnPlay_onclick,this);
        };
        this.loadIncludeScript("sample011Animation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
