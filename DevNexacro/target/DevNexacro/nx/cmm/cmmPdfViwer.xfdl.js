(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPdfViwer");
            this.set_titletext("pdf viwer popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webPdf","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("ureadonly").set("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,800,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPdfViwer.xfdl", function() {
        /**
        * pdf viwer 공통폼
        *@FileName  cmmPdfViwer
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
        this.web = this.webPdf;   // set component
        this.sulr = "";

        this.fomrOnload = function(obj,e)
        {
        	this.surl = this.parentUrl;
        	this.setReport();
        };



        this.setReport = function ()
        {
           this.webPdf.set_url(this.surl);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fomrOnload,this);
        };
        this.loadIncludeScript("cmmPdfViwer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
