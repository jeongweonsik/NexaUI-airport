(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testForm02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"5\"/><Column id=\"nm\" type=\"STRING\" size=\"100\"/><Column id=\"url\" type=\"STRING\" size=\"100\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">10001</Col><Col id=\"nm\">메뉴1</Col><Col id=\"url\">test::test001.xfdl</Col><Col id=\"winId\">win_10001</Col></Row><Row><Col id=\"cd\">10002</Col><Col id=\"nm\">메뉴2</Col><Col id=\"url\">test::test002.xfdl</Col><Col id=\"winId\">win_10002</Col></Row><Row><Col id=\"cd\">10003</Col></Row><Row><Col id=\"cd\">10004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuJSON", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"5\"/><Column id=\"nm\" type=\"STRING\" size=\"100\"/><Column id=\"url\" type=\"STRING\" size=\"100\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSaveProfile","140","256","166","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("saveMenu");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoadMenu","317","256","166","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("loadMenu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","514","257","144","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","698","259","126","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","146","344","757","228",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMenuJSON");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"cd\"/><Cell col=\"1\" text=\"nm\"/><Cell col=\"2\" text=\"url\"/><Cell col=\"3\" text=\"winId\"/></Band><Band id=\"body\"><Cell text=\"bind:cd\"/><Cell col=\"1\" text=\"bind:nm\"/><Cell col=\"2\" text=\"bind:url\"/><Cell col=\"3\" text=\"bind:winId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","851","260","131","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","485","76",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("테스트02");
            obj.set_font("normal 50pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testForm02.xfdl", function() {
        /**
        *
        *@FileName  testForm02
        *@Creator
        *@CreateDate 2025/04/23
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************
         *
         ************************************************************************/
        this.addEventHandler("onload",function(obj,e)
        {

        },this);



        this.btnSaveProfile_onclick = function(obj,e)
        {
        	this.gfnSaveDsStore("openMenu",this.dsMenu);

        };

        this.btnLoadMenu_onclick = function(obj,e)
        {
           const rowCnt = this.gfnLoadDsStore("openMenu",this.dsMenuJSON);
        };

        this.Button00_onclick = function(obj,e)
        {
        	//trace(" strDsJson : " + strDsJson);
        };

        this.Button01_onclick = function(obj,e)
        {
        //	trace(" this.dsMenuJSON : " + this.dsMenuJSON.saveXML());
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.dsMenu.deleteRow(0);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSaveProfile.addEventHandler("onclick",this.btnSaveProfile_onclick,this);
            this.btnLoadMenu.addEventHandler("onclick",this.btnLoadMenu_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("testForm02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
