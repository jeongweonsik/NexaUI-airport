(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test004FileP");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divFileUp","0","0","498","260",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("cmmFileUpDown");
            obj.getSetter("ureadonly").set("false");
            obj.getSetter("uopenmode").set("multi");
            obj.getSetter("uextaccecpt").set("");
            obj.getSetter("umbsizeaccept").set("10");
            obj.getSetter("ugfileseq").set("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFileUp
            obj = new Layout("default","",0,0,this.divFileUp.form,function(p){});
            this.divFileUp.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,260,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("test004FileP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
