(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDebug");
            this.set_titletext("DEBUGGING");
            this.set_border("1px solid #272b36");
            if (Form == this.constructor)
            {
                this._setFormPosition(1140,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGDS", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponents", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProperties", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariableType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">FORM</Col><Col id=\"NAME\">Form</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatasetView", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static27","20","20",null,"36","20",null,"1100",null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBgT");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00","20","55",null,"36","20",null,"1100",null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBgB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urkey","20","20","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabelT");
            obj.set_text("LOCAL");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalFilter","448","25","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("필터해제");
            obj.set_cssclass("btn_WF_Inner");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLocal","526","25","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urkey01","690","20","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabelT");
            obj.set_text("Grid");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urkey00","20","55","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabelB");
            obj.set_text("GLOBAL");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDataset","144","25","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsDataset");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGDS","144","60","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsGDS");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            obj.set_type("filterlike");
            obj.set_codecolumn("PATH");
            this.addChild(obj.name, obj);

            obj = new Button("btnGlobalFilter","448","60","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("필터해제");
            obj.set_cssclass("btn_WF_Inner");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrid","814","25",null,"26","25",null,"300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGrid");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Tab("tabComponent","20","111",null,"509","22",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabComponent);
            obj.set_text("Dataset");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdDataset","0","40",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsGridDataset");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("multiarea");
            obj.set_autosizingtype("both");
            obj.set_autosizebandtype("allband");
            obj.getSetter("unodata").set("false");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats/>");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","6","8","188","32",null,null,null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("1");
            obj.set_usedecorate("true");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabComponent);
            obj.set_text("SaveXML");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSaveXML","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage2.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.tabComponent);
            obj.set_text("Dataset To Grid");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSetGrid","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage3.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.tabComponent);
            obj.set_text("Grid Format");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtGridFormat","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage4.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.tabComponent);
            obj.set_text("Components");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdProperties","0","10","360",null,null,"0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsProperties");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"186\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:VALUE\" wordWrap=\"char\" displaytype=\"normal\" autosizerow=\"limitmax\"/></Band></Format></Formats>");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new TextArea("txtScript","370","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("1");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("tabpage6",this.tabComponent);
            obj.set_text("Variable");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdVariable","0","40",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsVariable");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"340\"/><Column size=\"926\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Combo("cboVariable",null,"10","140","26","0",null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsVariableType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Local");
            obj.set_value("FORM");
            obj.set_index("0");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static00",null,"10","101","26","cboVariable:10",null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_text("Variable Type");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InlineLabel");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("tabpage7",this.tabComponent);
            obj.set_text("Run Script");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtScript","0","40",null,null,"0","70",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("0");
            obj.set_value("//디버그 실행 예제\n//alert(this.opener.dsList.saveXML());");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Button("btnRunScript",null,"10","102","26","0",null,null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("1");
            obj.set_text("Run Script");
            obj.set_cssclass("btn_WF_Action");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new TextArea("txtResult","0",null,null,"60","0","0",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Edit("edtGlobal","526","60","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urkey01_00","690","55","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_DetailLabelB");
            obj.set_text("Component");
            this.addChild(obj.name, obj);

            obj = new Combo("cboComponents","814","60",null,"26","25",null,"300",null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsComponents");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabComponent.tabpage1.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage1.form,function(p){});
            this.tabComponent.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage2.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage2.form,function(p){});
            this.tabComponent.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage3.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage3.form,function(p){});
            this.tabComponent.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage4.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage4.form,function(p){});
            this.tabComponent.tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage5.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage5.form,function(p){});
            this.tabComponent.tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage6.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage6.form,function(p){});
            this.tabComponent.tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabComponent.tabpage7.form
            obj = new Layout("default","",0,0,this.tabComponent.tabpage7.form,function(p){});
            this.tabComponent.tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabComponent.tabpage5.form.txtScript","value","dsProperties","FUNCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabComponent.Tabpage8.form.btn_search","text","gds_lang","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabComponent.Tabpage8.form.btn_search","tooltiptext","gds_lang","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmDebug.xfdl", function() {
        /**
        * 디버깅 폼
        *@FileName  cmmDebug
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
         * include 선언부
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        //app = nexacro.getApplication();
        this.fvCurrentCombo = "cboDataset"; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {

        //    let menuLink;
        //    if(this.parent.parent.arguments) menuLink = this.parent.parent.arguments[this.colInfo.menu.link];
        //    else menuLink = this.opener.name;
        //
        //     menuLink = menuLink.replace(".xfdl","");
        //
        //     this.div00.form.txtMenuTitle.set_value(`(${menuLink})`);


        	this.fnSaveDatasetList(this.opener);
        	 this.fnSetInsertSelect();
        	this.fnMakeDatasetGrid();

        	// 글로벌 데이터셋을 가져온다.
        	this.fnSaveGDSList();
        	this.dsGDS.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
        	this.fnSaveGridList(this.opener);
        	this.cboGrid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
        	this.fnSaveComponetsList(this.opener);
        	this.cboComponents.set_index(0);

        	// 화면에서 사용되는 변수목록을 가져온다.
        	this.dsVariable.clearData();
        	this.fnSaveVariableList(this.opener);

        	// 글로벌 변수 목록을 가져온다.
        	this.fnSaveGlobalVariableList();
        	this.dsVariable.set_keystring("S:LVL+NAME");
        	//var sRunMode = nexacro.getEnvironmentVariable("evRunMode");

        	this.resetScroll();
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

         this.fnSetInsertSelect = function ()
         {
        	 let stxt =  "= 선택 =";

            // dataset
             let irow1  = this.dsDataset.insertRow(0);
        		this.dsDataset.setColumn(irow1, "PATH", "");
        		this.dsDataset.setColumn(irow1, "NAME", stxt);
        		this.cboDataset.set_index(0);

        	//global dataset
        	 let irow2  = this.dsGDS.insertRow(0);
        		this.dsGDS.setColumn(irow2, "PATH", "");
        		 this.dsGDS.setColumn(irow2, "NAME", stxt);
        		this.cboGDS.set_index(0);
         	//Grid
        	     let irow3  = this.dsGrid.insertRow(0);
        		 this.dsGrid.setColumn(irow3, "PATH", "");
        		 this.dsGrid.setColumn(irow3, "NAME", stxt);
        		this.cboGrid.set_index(0);

         	//component
        	let irow4  = this.dsComponents.insertRow(0);

        		this.dsComponents.setColumn(irow4, "PATH", "");
        		this.dsComponents.setColumn(irow4, "NAME", stxt);
        		this.cboComponents.set_index(0);

         };

         /**
         * @description 데이터셋의 목록을 찾아 저장한다.
        */
        this.fnSaveDatasetList = function(targetObj, fullpath)
        {
        	//trace("=============== fnSaveDatasetList targetObj.name : " + targetObj.name + " / fullpath : " + fullpath);
            let datasetlist = targetObj.objects;
            for(var i=0;i<datasetlist.length;i++)
            {
        		if( datasetlist[i]+"" == "[object Dataset]" )
        		{
        			// Grid 우측 팝업메뉴용 Dataset 제거
        			if (datasetlist[i].id.indexOf("dsPopupMenu_") == -1) {
        				let nRow = this.dsDataset.addRow();
        				this.dsDataset.setColumn(nRow, "NAME", datasetlist[i].id);

        				if( this.gfnIsNull(fullpath) )
        				{
        					this.dsDataset.setColumn(nRow, "PATH", datasetlist[i].id);
        				}
        				else
        				{
        					let displayname = fullpath+"."+datasetlist[i].id;
        					this.dsDataset.setColumn(nRow, "NAME", displayname);
        					this.dsDataset.setColumn(nRow, "PATH", fullpath+"."+datasetlist[i].id);
        				}
        			}
                }
            }

            let objList = targetObj.components;
            let sObjType;

            for(let i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveDatasetList(objList[i].form, objList[i].id+".form");
                    else
                        this.fnSaveDatasetList(objList[i].form, fullpath+"."+objList[i].id+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].tabpages;
                    for(let j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveDatasetList(tabPageList[j].form, objList[i].id+tabPageList[j].id+".form");
                        else
                            this.fnSaveDatasetList(tabPageList[j].form, fullpath+"."+objList[i].id+tabPageList[j].id+".form");
                    }
                }
            }
        };

        /**
         * @description 화면의 그리드목록을 저장한다.
        */
        this.fnSaveGridList = function(targetObj, fullpath)
        {
            let sObjType;

            let objList = targetObj.components;
            for(let i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

        		if( objList[i]+"" == "[object Grid]" )
        		{
                    let nRow = this.dsGrid.addRow();

        			let displayname = this.gfnIsNull(fullpath) ? objList[i].name : fullpath+"."+objList[i].name;
        			this.dsGrid.setColumn(nRow, "NAME", displayname);
                    //this.dsGrid.setColumn(nRow, "NAME", objList[i].name);

                    if (this.gfnIsNull(fullpath)) {
                        this.dsGrid.setColumn(nRow, "PATH", objList[i].name);
                    }
        			else {
                        this.dsGrid.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
        			}
                }

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveGridList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveGridList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    let tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveGridList(tabPageList[j].form, objList[i].name+tabPageList[j].name+".form");
                        else
                            this.fnSaveGridList(tabPageList[j].form, fullpath+"."+objList[i].name+tabPageList[j].name+".form");
                    }
                }
            }
        };


        /**
         * @description 화면의 모든 Object를 저장한다.
        */
        this.fnSaveComponetsList = function(targetObj, fullpath)
        {
            let sObjType;
            let objList = targetObj.components;
            for(let i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveComponetsList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveComponetsList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    let tabPageList = objList[i].tabpages;
                    for(let j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
        				{

                            this.fnSaveComponetsList(tabPageList[j].form, objList[i].name+"."+tabPageList[j].name+".form");
                        }else{
                            this.fnSaveComponetsList(tabPageList[j].form, fullpath+"."+objList[i].name+tabPageList[j].name+".form");
        				}
                    }
                }
                else
                {

        			if (!this.gfnIsNull(fullpath)) {
        	            let nRow = this.dsComponents.addRow();
        				let displayname = fullpath+"."+objList[i].name;
        				this.dsComponents.setColumn(nRow, "NAME", displayname);

        				if( this.gfnIsNull(fullpath) )
        					this.dsComponents.setColumn(nRow, "PATH", objList[i].name);
        				else
        					this.dsComponents.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
        			}
                }
            }
        };

        /**
         * @description 글로벌 데이터셋 목록을 만든다.
        */
        this.fnSaveGDSList = function()
        {
        	let applicationobj = app.all;
            for (let i=0;i<applicationobj.length;i++)
            {
        		if (applicationobj[i]+"" == "[object Dataset]")
        		{
        		    try
        		    {
                        if (applicationobj[i].id.indexOf(".") == -1)
                        {
                            var nRow = this.dsGDS.addRow();
                            this.dsGDS.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.dsGDS.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }
                    catch (e)
                    {
        				trace(">>>> e Message" + e);
                    }
        		}
            }
        };


        /**
         * @description Dataset을 GRID에 표시한다.
        */
        this.fnMakeDatasetGrid = function()
        {
            let dataset;
           	let cbcomboValue = this[this.fvCurrentCombo].value;

        	this.dsDatasetView.clearData();

        	    if(this.gfnIsNull(cbcomboValue))
        		{
        		  this.tabComponent.tabpage1.form.grdDataset.set_binddataset("");
                  this.tabComponent.tabpage1.form.grdDataset.set_formats("");
        		 return;
        		}

            if( this.fvCurrentCombo == "cboDataset" )
            {
        		if( this.cboDataset.index == -1  || this.gfnIsNull(this.cboDataset.value)) return;

                dataset = eval("this.opener."+this.cboDataset.value);
            }
            else
            {
                if( this.cboGDS.index == -1 || this.gfnIsNull(this.cboGDS.text)) return;

        		dataset = app[this.cboGDS.text];
            }


        	this.dsDatasetView.set_enableevent(false);
        	this.dsDatasetView.copyData(dataset);
        	this.dsDatasetView.set_enableevent(true);

            // 데이터셋의 정보가 존재하지 않으면
            if( dataset.getColCount() < 1 )
            {
                let formats = "";

        		formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns>\n';
        		formats += '<Column size="131"/>\n';
                formats += '</Columns>\n';
        		formats +='<Rows>\n';
        		formats +='<Row size="24"/>\n';
        		formats +='</Rows>\n';
        		formats +='<Band id="body">\n';
        		formats +='<Cell/>\n';
        		formats +='</Band>\n';
        	    formats +='</Format>\n';
        	    formats +='</Formats>\n';

                this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);

            }

            let columns = '    <Column size="30" />\n';
            let head    = '    <Cell col="0" text=""/>\n';
        	let body    = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for(let i=0;i<dataset.getColCount();i++)
            {
                let columinfo = dataset.getColumnInfo(i);
                let columname = "";
                let columsize = "";
                let columtype = "";

                try
                {
                     columname = columinfo.name;
                     columsize = parseInt(columinfo.size);
                     columtype = columinfo.type.toUpperCase();
                }
                catch(e)
                {
                     columname = "undefined";
                     columsize = 50;
                     columtype = "STRING";
                }

                //Sonar Qube Unused local variables should be removed 조치 JBC 2016-09-20
                //var columwidth= 100;
                let align     = "";

                if( columtype == "STRING" )
                {
                    columsize = columsize*9;

                    if( columsize < columname.length*9 )
                    {
                        columsize = columname.length*9;
                    }

                    if( columsize > 200 )
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="'+columsize+'" />\n';

                    align = 'style="align:left;"';
                }
                else if( columtype == "INT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "FLOAT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "DATE" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "TIME" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "DATETIME" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "BIGDECIMAL" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:right;"';
                }
                else
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:left;"';
                }

                head += '    <Cell col="'+(i+1)+'" text="'+columname+'"/>\n';
        		body += '    <Cell col="'+(i+1)+'" '+align+' text="bind:'+columname+'" displaytype="normal" />\n';
            }

            let formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n'+columns.substring(0,columns.length-1)+'\n</Columns>\n';
            formats += '<Rows>\n    <Row size="24" band="head" />\n    <Row size="24" />\n</Rows>\n';
            formats += '<Band id="head">\n'+head.substring(0,head.length-1)+'\n</Band>\n';
            formats += '<Band id="body">\n'+body.substring(0,body.length-1)+'\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

            this.tabComponent.tabpage1.form.grdDataset.set_binddataset(this.dsDatasetView.name);
            this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);


        	this.tabComponent.tabpage1.form.sta_totcnt.set_text("Total <fc v='#ff1414ff'><b v='true'>"+this.dsDatasetView.rowcount+"</b></fc> Row");
        };

        /**
         * @description 데이터셋의 내용을 XML로 표시한다.
        */
        this.fnMakeDatasetXml = function()
        {
            let dataset;
        	let cbcomboValue = this[this.fvCurrentCombo].value;

        	 	if(this.gfnIsNull(cbcomboValue))
        		{
        		  this.tabComponent.tabpage2.form.txtSaveXML.set_value("");
        		 return;
        		}

            if( this.fvCurrentCombo == "cboDataset" )
            {
                if( this.cboDataset.index == -1 ) return;
                dataset = eval("this.opener."+this.cboDataset.value);

            }
            else
            {
                if( this.cboGDS.index == -1 ) return;
        		dataset = app[this.cboGDS.text];
            }

            let text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="'+dataset.id+'">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.tabComponent.tabpage2.form.txtSaveXML.set_value(text);
        };

        /**
         * @description 데이터셋을 GRID로 자동생성해준다
        */
        this.fnMakeDatasetGridFormat = function()
        {
            this.tabComponent.tabpage3.form.txtSetGrid.set_value(this.tabComponent.tabpage1.form.grdDataset.formats);
        };

        /**
         * @description 화면의 그리드의 포맷을 가져온다.
        */
        this.fnMakeGridFormats = function()
        {
        		if(this.gfnIsNull(this.cboGrid.value))
        		{
        		     this.tabComponent.tabpage4.form.txtGridFormat.set_value("");
        			 return;
        		}

        	if( this.cboGrid.index == -1 ) return;

            let targetgrid = eval("this.opener."+this.cboGrid.value);

            let formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
            formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
            formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
            formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            let newcolumn = "";
            for(let i=0;i<targetgrid.getCellCount("Body");i++)
            {
                newcolumn += '    <Column size="'+targetgrid.getRealColSize(i, true)+'"/>\n';
            }
            formats = formats.split("<Columns>")[0]+"<Columns>\n"+newcolumn +"</Columns>"+formats.split("</Columns>")[1];

            this.tabComponent.tabpage4.form.txtGridFormat.set_value(formats);
            this.tabComponent.set_tabindex(3);
        };

        /**
         * @description 컴포넌트의 모든속성을 디스플레이한다
        */
        this.fnMakeCompoentsData = function()
        {

        	if(this.gfnIsNull(this.cboComponents.value))
        	{
        	  this.dsProperties.clearData();
        	  return;
        	}

            if( this.cboComponents.index == -1 ) return;
            let targetobj = eval("this.opener."+this.cboComponents.value);
            this.dsProperties.clearData();
            this.dsProperties.set_enableevent(false);
            for(let name in targetobj)
            {
                let value = targetobj[name]+"";

                if( name[0] == "_" ) continue;
                if( value == "[object Object]" ) continue;
                if( value.substring(0, 8) == "function" ) continue;
                if( value.substring(0, 7) == "control" ) continue;

                if( this.gfnIsNull(value) )
                {
                    let nrow = this.dsProperties.addRow();
                    this.dsProperties.setColumn(nrow, "NAME", name);
                    this.dsProperties.setColumn(nrow, "VALUE", "");
                }
                else
                {

                    // 이벤트에 대한 처리
                    if( value.indexOf("[object") != -1 )
                    {

                        if( value.indexOf("EventListener") != -1 )
                        {
                            let eventhandler = targetobj.getEventHandler(name, 0);

                            if( !this.gfnIsNull(eventhandler) )
                            {
                                var nrow = this.dsProperties.addRow();
                                this.dsProperties.setColumn(nrow, "NAME",    name);
                                this.dsProperties.setColumn(nrow, "VALUE",   "function");
                                this.dsProperties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.dsProperties.setColumn(nrow, "COLOR",    "red");
                            }
                        }
                    }
                    else
                    {
                        let nrow = this.dsProperties.addRow();
                        this.dsProperties.setColumn(nrow, "NAME",    name);
                        this.dsProperties.setColumn(nrow, "VALUE", value);
                    }
                }
            }

            this.dsProperties.set_enableevent(true);
            this.dsProperties.set_rowposition(0);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
        */
        this.fnSaveVariableList = function(targetObj, fullpath)
        {
        	let sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for(let name in targetObj)
            {
        		// 폼 변수는 fv로 Naming Rule 정의
        		let sVariName = name.substr(0,2);

                if (sVariName.toUpperCase() == "FV")
                {
        		//trace(" value : " +value + "<> name : " +name  "<> displayname : " +displayname);
                    // 제외처리대상변수명
                    let value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			let nRow = this.dsVariable.addRow();
        			let displayname = this.gfnIsNull(fullpath) ? "this."+name : fullpath+"."+name;


        			this.dsVariable.setColumn(nRow, "NAME",  displayname);
        			//this.dsVariable.setColumn(nRow, "NAME",  name);
        			this.dsVariable.setColumn(nRow, "VALUE", value);
        			this.dsVariable.setColumn(nRow, "TYPE",  "FORM");
        			this.dsVariable.setColumn(nRow, "LVL",   name.split(".").length);
                }
            }
        	this.dsVariable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            sObjType = "";
            var objList = targetObj.components;
            for(let i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveVariableList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveVariableList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    let tabPageList = objList[i].tabpages;
                    for(let j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveVariableList(tabPageList[j].form, objList[i].name+tabPageList[j].name+".form");
                        else
                            this.fnSaveVariableList(tabPageList[j].form, fullpath+"."+objList[i].name+tabPageList[j].name+".form");
                    }
                }
            }
        };

        /**
         * @description 글로벌 변수를 찾아 데이터셋에 저장한다.
        */
        this.fnSaveGlobalVariableList = function()
        {
            this.dsVariable.set_enableevent(false);

        	// Application 전역변수를 찾아낸다.
        	let targetObj = app;
            for(let name in targetObj)
            {
                // 글로벌 변수는 gv로 Naming Rule 정의
        		let sVariName = name.substr(0,2);
                if (sVariName.toUpperCase() == "GV")
                {
                    // 제외처리대상변수명
                    let value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			// 글로벌 변수는 하나만이 존재하기 때문에..
        			if( this.dsVariable.findRow("NAME", name) == -1 )
        			{
        				let nRow = this.dsVariable.addRow();
        				this.dsVariable.setColumn(nRow, "NAME",  name);
        				this.dsVariable.setColumn(nRow, "VALUE", value);
        				this.dsVariable.setColumn(nRow, "TYPE",  "GLOBAL");
        				this.dsVariable.setColumn(nRow, "LVL",   0);
        			}
                }
            }

        	this.dsVariable.set_enableevent(true);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 보여준다.
        */
        this.fnMakeVariableList = function()
        {
            this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");
            this.dsVariable.set_rowposition(0);
        };

        /**
         * @description 문장을 스크립트로 실행한다.
        */
        this.fnExecScript = function(obj,  e)
        {
            try
            {
        	    let result = eval(this.tabComponent.tabpage7.form.txtScript.text);
        	    if( this.gfnIsNull(result) ) result = "";

        	    this.tabComponent.tabpage7.form.txtResult.set_value("★★★ 성공 : "+result);
        	}
        	catch(ex)
        	{
        	    this.tabComponent.tabpage7.form.txtResult.set_value("＠＠＠ 실패 : "+ex);
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 선택한 TAB에 대한 처리를 한다.
        */
        this.tabComponent_onchanged = function(obj, e)
        {
        	 let tabindex = this.tabComponent.tabindex;
             this.tabComponent.tabpage1.form.sta_totcnt.set_text("Total <fc v='#ff1414ff'><b v='true'>0</b></fc> Row");

        	switch(tabindex)
        	{
        	    case 0: this.fnMakeDatasetGrid();       break;
        	    case 1: this.fnMakeDatasetXml();        break;
        	    case 2: this.fnMakeDatasetGridFormat(); break;
        	    case 3: this.fnMakeGridFormats();       break;
        	    case 4: this.fnMakeCompoentsData();     break;
        	    case 5: this.fnMakeVariableList();      break;
        	    default : break;
        	}
        };

        /**
         * @description 로컬 데이터셋의 내용을 보여준다.
        */
        this.cboDataset_onitemchanged = function(obj, e)
        {
            this.cboGDS.set_value("");
        	this.fvCurrentCombo = obj.name;
            this.edtLocal.set_value(obj.text);
        	this.edtGlobal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /**
         * @description 글로벌 데이터셋의 내용을 보여준다.
        */
        this.cboGDS_onitemchanged = function(obj, e)
        {
            this.cboDataset.set_value("");
        	this.fvCurrentCombo = obj.name;
            this.edtGlobal.set_value(obj.value);
        	this.edtLocal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /**
         * @description 컴포넌트의 모든 속성을 디스플레이한다.
        */
        this.cboComponents_onitemchanged = function(obj, e)
        {
            this.tabComponent.set_tabindex(4);
            this.tabComponent_onchanged();
        };

        /**
         * @description 변수의 형식을 선택한 타입으로 필터링한다.
        */
        this.tabComponent_tabpage6_cboVariable_onitemchanged = function(obj, e)
        {
            this.dsVariable.filter("");
            this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");
            this.dsVariable.set_rowposition(0);
        };

        /**
         * @description 로컬 데이터셋 바로 찾기 기능
        */
        this.edtLocal_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    let nrow = this.dsDataset.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {

        	        fvCurrentCombo = "local";
                    this.cboDataset.set_index(nrow);
                    this.fnMakeDatasetGrid();
                    this.cboDataset_onitemchanged(this.cboDataset);
                }
        	}
        };

        /**
         * @description 글로벌 데이터셋 바로 찾기 기능
        */
        this.edtGlobal_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    let nrow = this.dsGDS.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {
        	        this.fvCurrentCombo = "global";
                    this.cboGDS.set_index(nrow);
                    this.cboGDS_onitemchanged(this.cboGDS);
                    //this.fnMakeDatasetGrid();
        	    }
        	}
        };

        /**
         * @description  DATASET 으로 INSERT SQL 만들기
         */
        this.btnCreatSQL_onclick = function(obj,  e)
        {
            let insertsql = "";
        	let dataset = this.tabComponent.tabpage1.form.grdDataset.getBindDataset();
            for(let i=0;i<dataset.getRowCount();i++)
            {

                let columlist = "";
                let valuelist = "";
                for(let j=0;j<dataset.getColCount();j++)
                {
                    const columname  = dataset.getColID(j);
                    let columvalue = this.gfnNvl(dataset.getColumn(i, columname),"NULL");

                    if( columvalue != "NULL" ) columvalue = "'"+columvalue+"'";

                    if( j == 0 )
                    {
                        columlist = columname;
                        valuelist = columvalue;
                    }
                    else
                    {
                        columlist += ", "+columname;
                        valuelist += ", "+columvalue;
                    }
                }

                insertsql += "INSERT INTO "+dataset.id+" ("+columlist+") VALUES ("+valuelist+");\n";
            }

        	//trace( insertsql );
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", insertsql);
        };

        /**
         * @description 컴포넌트의 textvalue 값을 클립보드에 복사한다.
        */
        this.combo_onkeydown = function(obj,e)
        {
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", obj.text);
        };

        /**
         * @description 로컬 데이터셋 필터 초기화
        */
        this.btnLocalFilter_onclick = function(obj,e)
        {
            const dataset = eval("this.opener."+this.cboDataset.value);
            dataset.filter("");
        };
        /**
         * @description 글로벌 데이타셋 필터 초기화
        */
        this.btnGlobalFilter_onclick = function(obj,e)
        {
        	const dataset = app[this.cboGDS.text];
            dataset.filter("");
        };



        this.tabComponent_tabpage1_grdDataset_onkeydown = function(obj,e)
        {
        	let keycode = e.keycode;
        	let sBrowser = system.navigatorname;

        	if(e.ctrlkey){
        		if(keycode == 67){


        			//copy(복사)
        			if( this.gfnIsNexacro()){
        				this._gfnGridCopyEventForRuntime(obj, e);
        			}else {
        				this._gfnGridCopyEventForChrome(obj, e);
        			}

        			this.gfnToast();

        		}
        	}
        };



        this.btnInit_onclick = function(obj,e)
        {
        	this.reload();
        };

        //엑셀 다운로드
        this.tabComponent_tabpage1_btnExcelDown_onclick = function(obj,e)
        {
                let objGrid = this.tabComponent.tabpage1.form.grdDataset;
        		let bindds  = objGrid.getBindDataset();
        		if(bindds.getRowCount() == 0) return;

        		let scbotitle = this.gfnIsNotNull(this.cboDataset.value) ? this.cboDataset.text : this.cboGDS.text;
        		this.gfnExcelExport(objGrid,"DATASET_" + scbotitle  ,"DebugExcel_"+scbotitle +"_" + this.gfnToday());
        };


        this.Button00_onclick = function(obj,e)
        {
        	this.resetScroll();
             this.tabComponent.tabpage1.form.resetScroll();
        };

        this.cmmDebug_onsize = function(obj,e)
        {
           this.tabComponent.height = null;
           this.tabComponent.bottom = 20;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.cmmDebug_onsize,this);
            this.btnLocalFilter.addEventHandler("onclick",this.btnLocalFilter_onclick,this);
            this.edtLocal.addEventHandler("onkeydown",this.edtLocal_onkeydown,this);
            this.cboDataset.addEventHandler("onitemchanged",this.cboDataset_onitemchanged,this);
            this.cboDataset.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboGDS.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboGDS.addEventHandler("onitemchanged",this.cboGDS_onitemchanged,this);
            this.btnGlobalFilter.addEventHandler("onclick",this.btnGlobalFilter_onclick,this);
            this.cboGrid.addEventHandler("onitemchanged",this.fnMakeGridFormats,this);
            this.cboGrid.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.tabComponent.addEventHandler("onchanged",this.tabComponent_onchanged,this);
            this.tabComponent.tabpage1.form.grdDataset.addEventHandler("onkeyup",this.tabComponent_tabpage1_grdDataset_onkeydown,this);
            this.tabComponent.tabpage5.form.grdProperties.addEventHandler("onkeydown",this.tabComponent_tabpage1_grdDataset_onkeydown,this);
            this.tabComponent.tabpage5.form.txtScript.addEventHandler("onchanged",this.tabComponent_tabpage5_txtScript_onchanged,this);
            this.tabComponent.tabpage6.form.cboVariable.addEventHandler("onitemchanged",this.tabComponent_tabpage6_cboVariable_onitemchanged,this);
            this.tabComponent.tabpage7.form.btnRunScript.addEventHandler("onclick",this.fnExecScript,this);
            this.edtGlobal.addEventHandler("onkeydown",this.edtGlobal_onkeydown,this);
            this.cboComponents.addEventHandler("onitemchanged",this.cboComponents_onitemchanged,this);
            this.cboComponents.addEventHandler("onkeydown",this.combo_onkeydown,this);
        };
        this.loadIncludeScript("cmmDebug.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
