(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample007Calendar");
            this.set_titletext("공통달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,1390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"dtFrom\" type=\"STRING\" size=\"256\"/><Column id=\"dtTo\" type=\"STRING\" size=\"256\"/><Column id=\"dtMonth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dtFrom\">20171017</Col><Col id=\"dtTo\">20171231</Col><Col id=\"dtMonth\">201712</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn", this);
            obj._setContents("<ColumnInfo><Column id=\"calFrom\" type=\"STRING\" size=\"256\"/><Column id=\"calTo\" type=\"STRING\" size=\"256\"/><Column id=\"calMonth\" type=\"STRING\" size=\"256\"/><Column id=\"calYear\" type=\"STRING\" size=\"256\"/><Column id=\"calMMFrom\" type=\"STRING\" size=\"256\"/><Column id=\"calMMTo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"calFrom\">20100205</Col><Col id=\"calTo\">20100210</Col><Col id=\"calYear\">2010</Col><Col id=\"calMonth\">202305</Col><Col id=\"calMMFrom\">201002</Col><Col id=\"calMMTo\">201003</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">01</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">02</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">03</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">04</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">05</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column1\">06</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column1\">07</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column1\">08</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">20230101</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">20211005</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">20210505</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("grb00_00","8","83","480","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1.월달력");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grb00","516","71","496","369",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2.기간달력");
            this.addChild(obj.name, obj);

            obj = new Div("divCalFromTo","526","125","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("cmmCalFromTo");
            obj.getSetter("ureadonly").set("false");
            obj.getSetter("ubindds").set("dsIn,calFrom,calTo");
            obj.getSetter("uessential").set("false");
            obj.getSetter("uenable").set("true");
            obj.set_url("cmm::cmmCalFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnInitFrmTo","794","125","88","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","526","96","254","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화시 시작, 종료일자가 모두 없어짐");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFromDate","526","216","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("getFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("editFromDate","641","216","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetToDate","526","249","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("getToDate");
            this.addChild(obj.name, obj);

            obj = new Edit("editToDate","641","249","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFromDate","526","282","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("setFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetFrom","641","282","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("8");
            obj.set_value("20240901");
            obj.set_text("20240901");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFomToTrue","779","216","107","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("enable true");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFromToFalse","893","216","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("enable false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFromToTrue","779","249","107","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("readonly true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFromToFalse","893","249","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("readonly false");
            this.addChild(obj.name, obj);

            obj = new Button("btnEssentialFromFalse","893","282","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("essential false");
            this.addChild(obj.name, obj);

            obj = new Button("btnEssentialFromTrue","779","282","107","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("essential true");
            this.addChild(obj.name, obj);

            obj = new Div("divCalMM","25","137","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("cmmCalMM");
            obj.getSetter("ubindds").set("dsIn,calMonth");
            obj.getSetter("uessential").set("false");
            obj.getSetter("ureadonly").set("false");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMMDate","22","228","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("getFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("editFromMMDate","136","228","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMMDate","22","261","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("setFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetFrom00","136","261","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maxlength("6");
            obj.set_value("202409");
            obj.set_text("202409");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrueMM","262","228","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("enable true");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalseMM","372","228","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("enable false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyTrueMM","262","261","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("readonly true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFalseMM","372","261","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("readonly false");
            this.addChild(obj.name, obj);

            obj = new Button("btnEssentialFalseMM","372","294","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("필수 false");
            this.addChild(obj.name, obj);

            obj = new Button("btnEsseintialTrueMM","262","294","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("필수 true");
            this.addChild(obj.name, obj);

            obj = new Button("btnInitMM","377","137","88","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetBind","526","398","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("setBind");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveXML","641","398","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("dsIn 로그");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetBindMM","22","294","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("setBind");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveXML00","262","327","106","25",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("dsIn 로그");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","527","163","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("userporoporty (uessential   \r\n true: 필수 false : 기본)");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","714","163","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("ubindds : dsname,col,col2\r\nreadonly : ureadonly true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","25","174","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("userporoporty (uessential   \r\n true: 필수 false : 기본)");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","183","174","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("ubindds : dsname,col,col2\r\nreadonly : ureadonly true");
            this.addChild(obj.name, obj);

            obj = new Div("divCalMM00","143","137","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("cmmCalMM");
            obj.getSetter("ubindds").set("dsIn,calMonth");
            obj.getSetter("uessential").set("true");
            obj.getSetter("ureadonly").set("false");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divCalMM00_00","262","137","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("cmmCalMM");
            obj.getSetter("ubindds").set("dsIn,calMonth");
            obj.getSetter("uessential").set("true");
            obj.getSetter("ureadonly").set("true");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","243","109","71","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("readonly");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","137","108","71","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("essential");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetTo","641","317","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_maxlength("8");
            obj.set_value("20240930");
            obj.set_text("20240930");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetToDate","526","317","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("setToDate");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetToDate00","525","351","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("setFromToDate");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskFr","645","350","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_format("####-##-##");
            obj.set_value("20240901");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTo","750","350","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_format("####-##-##");
            obj.set_value("20240930");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","50",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("달력 (sample007)");
            obj.set_cssclass("sta_GA_Header");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetCalMMToday","22","330","106","34",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("setToday");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetTodayFrToMM","530","440","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("setToday");
            this.addChild(obj.name, obj);

            obj = new GroupBox("gboxLog","16","425","467","245",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("로그");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtA","27","447","447","213",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalFromTo
            obj = new Layout("default","",0,0,this.divCalFromTo.form,function(p){});
            this.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalMM
            obj = new Layout("default","",0,0,this.divCalMM.form,function(p){});
            this.divCalMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalMM00
            obj = new Layout("default","",0,0,this.divCalMM00.form,function(p){});
            this.divCalMM00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalMM00_00
            obj = new Layout("default","",0,0,this.divCalMM00_00.form,function(p){});
            this.divCalMM00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,1390,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공통달력");

                p.grb00_00.set_taborder("0");
                p.grb00_00.set_text("1.월달력");
                p.grb00_00.move("8","83","480","330",null,null);

                p.grb00.set_taborder("1");
                p.grb00.set_text("2.기간달력");
                p.grb00.move("516","71","496","369",null,null);

                p.divCalFromTo.set_taborder("2");
                p.divCalFromTo.set_text("cmmCalFromTo");
                p.divCalFromTo.getSetter("ureadonly").set("false");
                p.divCalFromTo.getSetter("ubindds").set("dsIn,calFrom,calTo");
                p.divCalFromTo.getSetter("uessential").set("false");
                p.divCalFromTo.getSetter("uenable").set("true");
                p.divCalFromTo.set_url("cmm::cmmCalFromTo.xfdl");
                p.divCalFromTo.move("526","125","248","30",null,null);

                p.btnInitFrmTo.set_taborder("3");
                p.btnInitFrmTo.set_text("초기화");
                p.btnInitFrmTo.move("794","125","88","28",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("초기화시 시작, 종료일자가 모두 없어짐");
                p.Static00.move("526","96","254","25",null,null);

                p.btnGetFromDate.set_taborder("5");
                p.btnGetFromDate.set_text("getFromDate");
                p.btnGetFromDate.move("526","216","108","28",null,null);

                p.editFromDate.set_taborder("6");
                p.editFromDate.set_readonly("true");
                p.editFromDate.move("641","216","131","28",null,null);

                p.btnGetToDate.set_taborder("7");
                p.btnGetToDate.set_text("getToDate");
                p.btnGetToDate.move("526","249","108","28",null,null);

                p.editToDate.set_taborder("8");
                p.editToDate.set_readonly("true");
                p.editToDate.move("641","249","131","28",null,null);

                p.btnSetFromDate.set_taborder("9");
                p.btnSetFromDate.set_text("setFromDate");
                p.btnSetFromDate.move("526","282","108","28",null,null);

                p.edtSetFrom.set_taborder("10");
                p.edtSetFrom.set_maxlength("8");
                p.edtSetFrom.set_value("20240901");
                p.edtSetFrom.move("641","282","131","28",null,null);

                p.btnEnableFomToTrue.set_taborder("11");
                p.btnEnableFomToTrue.set_text("enable true");
                p.btnEnableFomToTrue.move("779","216","107","28",null,null);

                p.btnEnableFromToFalse.set_taborder("12");
                p.btnEnableFromToFalse.set_text("enable false");
                p.btnEnableFromToFalse.move("893","216","109","28",null,null);

                p.btnReadonlyFromToTrue.set_taborder("13");
                p.btnReadonlyFromToTrue.set_text("readonly true");
                p.btnReadonlyFromToTrue.move("779","249","107","28",null,null);

                p.btnReadonlyFromToFalse.set_taborder("14");
                p.btnReadonlyFromToFalse.set_text("readonly false");
                p.btnReadonlyFromToFalse.move("893","249","109","28",null,null);

                p.btnEssentialFromFalse.set_taborder("15");
                p.btnEssentialFromFalse.set_text("essential false");
                p.btnEssentialFromFalse.move("893","282","109","28",null,null);

                p.btnEssentialFromTrue.set_taborder("16");
                p.btnEssentialFromTrue.set_text("essential true");
                p.btnEssentialFromTrue.move("779","282","107","28",null,null);

                p.divCalMM.set_taborder("17");
                p.divCalMM.set_text("cmmCalMM");
                p.divCalMM.getSetter("ubindds").set("dsIn,calMonth");
                p.divCalMM.getSetter("uessential").set("false");
                p.divCalMM.getSetter("ureadonly").set("false");
                p.divCalMM.set_url("cmm::cmmCalMM.xfdl");
                p.divCalMM.move("25","137","105","28",null,null);

                p.btnGetMMDate.set_taborder("18");
                p.btnGetMMDate.set_text("getFromDate");
                p.btnGetMMDate.move("22","228","108","28",null,null);

                p.editFromMMDate.set_taborder("19");
                p.editFromMMDate.set_readonly("true");
                p.editFromMMDate.move("136","228","120","28",null,null);

                p.btnSetMMDate.set_taborder("20");
                p.btnSetMMDate.set_text("setFromDate");
                p.btnSetMMDate.move("22","261","108","28",null,null);

                p.edtSetFrom00.set_taborder("21");
                p.edtSetFrom00.set_maxlength("6");
                p.edtSetFrom00.set_value("202409");
                p.edtSetFrom00.move("136","261","120","28",null,null);

                p.btnEnableTrueMM.set_taborder("22");
                p.btnEnableTrueMM.set_text("enable true");
                p.btnEnableTrueMM.move("262","228","106","28",null,null);

                p.btnEnableFalseMM.set_taborder("23");
                p.btnEnableFalseMM.set_text("enable false");
                p.btnEnableFalseMM.move("372","228","112","28",null,null);

                p.btnReadonlyTrueMM.set_taborder("24");
                p.btnReadonlyTrueMM.set_text("readonly true");
                p.btnReadonlyTrueMM.move("262","261","106","28",null,null);

                p.btnReadonlyFalseMM.set_taborder("25");
                p.btnReadonlyFalseMM.set_text("readonly false");
                p.btnReadonlyFalseMM.move("372","261","112","28",null,null);

                p.btnEssentialFalseMM.set_taborder("26");
                p.btnEssentialFalseMM.set_text("필수 false");
                p.btnEssentialFalseMM.move("372","294","112","28",null,null);

                p.btnEsseintialTrueMM.set_taborder("27");
                p.btnEsseintialTrueMM.set_text("필수 true");
                p.btnEsseintialTrueMM.move("262","294","106","28",null,null);

                p.btnInitMM.set_taborder("28");
                p.btnInitMM.set_text("초기화");
                p.btnInitMM.move("377","137","88","28",null,null);

                p.btnSetBind.set_taborder("29");
                p.btnSetBind.set_text("setBind");
                p.btnSetBind.move("526","398","108","28",null,null);

                p.btnSaveXML.set_taborder("30");
                p.btnSaveXML.set_text("dsIn 로그");
                p.btnSaveXML.move("641","398","131","28",null,null);

                p.btnSetBindMM.set_taborder("31");
                p.btnSetBindMM.set_text("setBind");
                p.btnSetBindMM.move("22","294","108","28",null,null);

                p.btnSaveXML00.set_taborder("32");
                p.btnSaveXML00.set_text("dsIn 로그");
                p.btnSaveXML00.move("262","327","106","25",null,null);

                p.sta01.set_taborder("33");
                p.sta01.set_text("userporoporty (uessential   \r\n true: 필수 false : 기본)");
                p.sta01.move("527","163","200","36",null,null);

                p.sta01_01.set_taborder("34");
                p.sta01_01.set_text("ubindds : dsname,col,col2\r\nreadonly : ureadonly true");
                p.sta01_01.move("714","163","200","36",null,null);

                p.sta01_00.set_taborder("35");
                p.sta01_00.set_text("userporoporty (uessential   \r\n true: 필수 false : 기본)");
                p.sta01_00.move("25","174","200","36",null,null);

                p.sta01_01_00.set_taborder("36");
                p.sta01_01_00.set_text("ubindds : dsname,col,col2\r\nreadonly : ureadonly true");
                p.sta01_01_00.move("183","174","200","36",null,null);

                p.divCalMM00.set_taborder("37");
                p.divCalMM00.set_text("cmmCalMM");
                p.divCalMM00.getSetter("ubindds").set("dsIn,calMonth");
                p.divCalMM00.getSetter("uessential").set("true");
                p.divCalMM00.getSetter("ureadonly").set("false");
                p.divCalMM00.set_url("cmm::cmmCalMM.xfdl");
                p.divCalMM00.move("143","137","112","28",null,null);

                p.divCalMM00_00.set_taborder("38");
                p.divCalMM00_00.set_text("cmmCalMM");
                p.divCalMM00_00.getSetter("ubindds").set("dsIn,calMonth");
                p.divCalMM00_00.getSetter("uessential").set("true");
                p.divCalMM00_00.getSetter("ureadonly").set("true");
                p.divCalMM00_00.set_url("cmm::cmmCalMM.xfdl");
                p.divCalMM00_00.move("262","137","112","28",null,null);

                p.Static02_00.set_taborder("39");
                p.Static02_00.set_text("readonly");
                p.Static02_00.set_font("bold 10pt \"맑은 고딕\"");
                p.Static02_00.move("243","109","71","28",null,null);

                p.Static02_00_00.set_taborder("40");
                p.Static02_00_00.set_text("essential");
                p.Static02_00_00.set_font("bold 10pt \"맑은 고딕\"");
                p.Static02_00_00.move("137","108","71","28",null,null);

                p.edtSetTo.set_taborder("41");
                p.edtSetTo.set_maxlength("8");
                p.edtSetTo.set_value("20240930");
                p.edtSetTo.move("641","317","131","28",null,null);

                p.btnSetToDate.set_taborder("42");
                p.btnSetToDate.set_text("setToDate");
                p.btnSetToDate.move("526","317","108","28",null,null);

                p.btnSetToDate00.set_taborder("43");
                p.btnSetToDate00.set_text("setFromToDate");
                p.btnSetToDate00.move("525","351","108","28",null,null);

                p.mskFr.set_taborder("44");
                p.mskFr.set_format("####-##-##");
                p.mskFr.set_value("20240901");
                p.mskFr.set_type("string");
                p.mskFr.move("645","350","95","30",null,null);

                p.mskTo.set_taborder("45");
                p.mskTo.set_format("####-##-##");
                p.mskTo.set_value("20240930");
                p.mskTo.set_type("string");
                p.mskTo.move("750","350","95","30",null,null);

                p.sta_00.set_taborder("46");
                p.sta_00.set_text("달력 (sample007)");
                p.sta_00.set_cssclass("sta_GA_Header");
                p.sta_00.move("0","0",null,"40","50",null);

                p.btnSetCalMMToday.set_taborder("47");
                p.btnSetCalMMToday.set_text("setToday");
                p.btnSetCalMMToday.move("22","330","106","34",null,null);

                p.btnSetTodayFrToMM.set_taborder("48");
                p.btnSetTodayFrToMM.set_text("setToday");
                p.btnSetTodayFrToMM.move("530","440","100","34",null,null);

                p.gboxLog.set_taborder("49");
                p.gboxLog.set_text("로그");
                p.gboxLog.move("16","425","467","245",null,null);

                p.txtA.set_taborder("50");
                p.txtA.move("27","447","447","213",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",600,400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalFromTo.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("sample007Calendar.xfdl", function() {

        /**
        * 사용자 달력 샘플
        *@MenuPath  C:\Temp\NexaAtiis\sample
        *@FileName  sample007Calendar
        *@Creator
        *@CreateDate 2024/09/30
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

        this.addEventHandler("onload",function(obj,e)
        {
        	let today = this.gfnToday();
        	let nRow  = this.dsList2.addRow();
         	this.dsList2.setColumn(nRow, "DATE", today);

        },this);


        this.fnLog = function (sTxt)
        {
            this.txtA.value = "";
        	this.txtA.value = sTxt;
        	//this.gboxLog.text = txt;
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /**
         *  dsIn savexml
         */
        this.btnSaveXML_onclick = function(obj,e)
        {
             this.fnLog(this.dsIn.saveXML());
        };

        //갑변경 1
        this.calComm_onchanged = function (compid,obj,e)
        {
        	//trace("compid : " + compid + "<> e.pretext : " + e.pretext +"<> e.posttext : "+ e.posttext);
        };

        //  값 변경 2
        this.dsIn_oncolumnchanged = function(obj,e)
        {

             // trace(" ## e.oldvalue : " + e.oldvalue);
        	//trace(" colid : " + e.columnid + "<> newvalue : " + e.newvalue);
        };



        /************************************************************************
         * 1.월력
         ************************************************************************/
        /*
         *	월력 초기화
         */
        this.btnInitMM_onclick = function(obj,e)
        {
        	this.divCalMM.init();
        	this.divCalMM00.init();
        	this.divCalMM00_00.init();
        };

        /**
         * 월력 getValue
         */
        this.btnGetMMDate_onclick = function(obj,e)
        {
        	 let sdate =  this.divCalMM.getValue();
        	 this.editFromMMDate.value = sdate;
        };

        /**
         * 월력 setValue
         */
        this.btnSetMMDate_onclick = function(obj,e)
        {
           let sdate = this.edtSetFrom00.value;
           this.divCalMM.setValue(sdate);
        };

        /*
         *월력 바인딩
         */
        this.btnSetBindMM_onclick = function(obj,e)
        {
        	let bindds = this.dsIn;
        	let sCol = "calMonth";
        	this.divCalMM.setBinds(bindds,sCol);
        };

        /*
         *	월력 setEnable true
         */
        this.btnEnableTrueMM_onclick = function(obj,e)
        {
        	this.divCalMM.setEnable(true);
        };

        /*
         *	월력 setEnable false
         */
        this.btnEnableFalseMM_onclick = function(obj,e)
        {
        	this.divCalMM.setEnable(false);
        };

        /*
         *	월력 readonly true
         */
        this.btnReadonlyTrueMM_onclick = function(obj,e)
        {
        	this.divCalMM.setReadonly(true);

        }

        /*
         *	월력 readonly false
         */
        this.btnReadonlyFalseMM_onclick = function(obj,e)
        {
        	this.divCalMM.setReadonly(false);
        };

        /*
         *	월력 필수 true
         */
        this.btnEsseintialTrueMM_onclick = function(obj,e)
        {
        	this.divCalMM.setEssential(true);
        };

        /*
         *	월력 필수 false
         */
        this.btnEssentialFalseMM_onclick = function(obj,e)
        {
        	this.divCalMM.setEssential(false);
        };

        /************************************************************************
         * 2. 기간달력
         ************************************************************************/
        /*
         *	초기화
         */
        this.btnInitFrmTo_onclick = function(obj,e)
        {
            var today = this.gfnToday();
        	this.divCalFromTo.init(today);
        };

        /*
         *	get fromDate
         */
        this.btnGetFromDate_onclick = function(obj,e)
        {
        	let frdate = this.divCalFromTo.getFromDate();
        	this.editFromDate.value = frdate;
           // trace(" frdate : " +frdate );
        };


        /*
         *	enable true
         */
        this.btnEnableFomToTrue_onclick = function(obj,e)
        {
        	this.divCalFromTo.setEnable(true);
        };

        this.btnEnableFromToFalse_onclick = function(obj,e)
        {
        	this.divCalFromTo.setEnable(false);
        };

        /*
         *	get toDate
         */
        this.btnGetToDate_onclick = function(obj,e)
        {
        	let toDate = this.divCalFromTo.getToDate();
        	this.editToDate.valu = toDate;

        };

        /*
         *	setr readonly true
         */
        this.btnReadonlyFromToTrue_onclick = function(obj,e)
        {
        	this.divCalFromTo.setReadonly(true);
        };

        /*
         *	set readonly false
         */
        this.btnReadonlyFromToFalse_onclick = function(obj,e)
        {
        	this.divCalFromTo.setReadonly(false);
        };

        /*
         *	set FromDate
         */
        this.btnSetFromDate_onclick = function(obj,e)
        {
        	this.divCalFromTo.setFromDate(this.edtSetFrom.value);
        };

        /*
         *	set ToDate
         */
        this.btnSetToDate_onclick = function(obj,e)
        {
        	this.divCalFromTo.setToDate(this.edtSetTo.value);
        };

        /*
         *	필수 true
         */
        this.btnEssentialFromTrue_onclick = function(obj,e)
        {
        	this.divCalFromTo.ssetEssential(true);
        };

        /*
         *	필수 false
         */
        this.btnEssentialFromFalse_onclick = function(obj,e)
        {
        	this.divCalFromTo.ssetEssential(false);
        };


        this.btnSetToDate00_onclick = function(obj,e)
        {
           let frDate = this.mskFr.value;
           let toDate =  this.mskTo.value;

           this.divCalFromTo.setFromToDate(frDate,toDate);

        };


        /************************************************************************
         * 기간(월력)
         ************************************************************************/

        // 기간(월력) 초기화
        this.btnInit_onclick = function(obj,e)
        {
        	this.divCalFromTo.init();
        };

        //기간(월력)  getFromDate
        this.btnGetMMFromDate_onclick = function(obj,e)
        {
        	var frDate = this.divCalMMFromTo.getFromDate();


        	this.editMMfromDate.value = frDate;
        };

        //기간(월력)  enable true
        this.btnMMEnableTrue_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setEnable(true);
        };

        //기간(월력)  enable false
        this.btnMMEnableFalse_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setEnable(false);
        };

        //기간(월력) getToDate
        this.btnGetMMToDate_onclick = function(obj,e)
        {
        	var toDate = this.divCalMMFromTo.getToDate();
        	this.editMMToDate.value = toDate;
        };

        //기간(월력) setReadOnly
        this.btnMMReadonlyTrue_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setReadonly(true);
        };

        this.btnMMReadonlyFalse_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setReadonly(false);
        };

        //기간(월력) setFromDate
        this.btnSetMMFromDate_onclick = function(obj,e)
        {
           var frDate = this.edtSetMMFrom.value;
        	this.divCalMMFromTo.setFromDate(frDate);
        };

        //기간(월력) setToDate
        this.btnSetMMToDate_onclick = function(obj,e)
        {
           var toDate =  this.edtSetMMTo.value;

        	this.divCalMMFromTo.setToDate(toDate);
        };


        //기간(월력) 필수 true
        this.btnMMEssentialFromTrue_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setEssential(true);
        };

        //기간(월력) 필수 false
        this.btnMMEssentialFromFalse_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setEssential(false);
        };


        //기간(월력) setBind
        this.btnSetMMBind_onclick = function(obj,e)
        {
            var bindds = this.dsIn;
        	var sCol = "calMonth";
        	this.divCalMMFromTo.setBind(bindds,sCol);
        };

        this.btnSetMMFroMto_onclick = function(obj,e)
        {
            var frDate = this.mskMMFr.value;
        	var toDate  = this.mskMMTo.value;
        	 this.divCalMMFromTo.setFromToDate(frDate,toDate);
        };


        this.btnSetCalMMToday_onclick = function(obj,e)
        {

        	this.divCalMM.form.setToday();
        	this.divCalMM00.setToday();
        	this.divCalMM00_00.setToday();
        };



        this.btnSetTodayMM_onclick = function(obj,e)
        {

        };

        this.btnSetTodayMMFromTo_onclick = function(obj,e)
        {
        	this.divCalMMFromTo.setToday();
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.getValue2();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnInitFrmTo.addEventHandler("onclick",this.btnInitFrmTo_onclick,this);
            this.btnGetFromDate.addEventHandler("onclick",this.btnGetFromDate_onclick,this);
            this.btnGetToDate.addEventHandler("onclick",this.btnGetToDate_onclick,this);
            this.btnSetFromDate.addEventHandler("onclick",this.btnSetFromDate_onclick,this);
            this.btnEnableFomToTrue.addEventHandler("onclick",this.btnEnableFomToTrue_onclick,this);
            this.btnEnableFromToFalse.addEventHandler("onclick",this.btnEnableFromToFalse_onclick,this);
            this.btnReadonlyFromToTrue.addEventHandler("onclick",this.btnReadonlyFromToTrue_onclick,this);
            this.btnReadonlyFromToFalse.addEventHandler("onclick",this.btnReadonlyFromToFalse_onclick,this);
            this.btnEssentialFromFalse.addEventHandler("onclick",this.btnEssentialFromFalse_onclick,this);
            this.btnEssentialFromTrue.addEventHandler("onclick",this.btnEssentialFromTrue_onclick,this);
            this.btnGetMMDate.addEventHandler("onclick",this.btnGetMMDate_onclick,this);
            this.btnSetMMDate.addEventHandler("onclick",this.btnSetMMDate_onclick,this);
            this.btnEnableTrueMM.addEventHandler("onclick",this.btnEnableTrueMM_onclick,this);
            this.btnEnableFalseMM.addEventHandler("onclick",this.btnEnableFalseMM_onclick,this);
            this.btnReadonlyTrueMM.addEventHandler("onclick",this.btnReadonlyTrueMM_onclick,this);
            this.btnReadonlyFalseMM.addEventHandler("onclick",this.btnReadonlyFalseMM_onclick,this);
            this.btnEssentialFalseMM.addEventHandler("onclick",this.btnEssentialFalseMM_onclick,this);
            this.btnEsseintialTrueMM.addEventHandler("onclick",this.btnEsseintialTrueMM_onclick,this);
            this.btnInitMM.addEventHandler("onclick",this.btnInitMM_onclick,this);
            this.btnSetBind.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSaveXML.addEventHandler("onclick",this.btnSaveXML_onclick,this);
            this.btnSetBindMM.addEventHandler("onclick",this.btnSetBindMM_onclick,this);
            this.btnSaveXML00.addEventHandler("onclick",this.btnSaveXML_onclick,this);
            this.btnSetToDate.addEventHandler("onclick",this.btnSetToDate_onclick,this);
            this.btnSetToDate00.addEventHandler("onclick",this.btnSetToDate00_onclick,this);
            this.btnSetCalMMToday.addEventHandler("onclick",this.btnSetCalMMToday_onclick,this);
            this.btnSetTodayFrToMM.addEventHandler("onclick",this.btnSetTodayFrToMM_onclick,this);
            this.dsIn.addEventHandler("oncolumnchanged",this.dsIn_oncolumnchanged,this);
        };
        this.loadIncludeScript("sample007Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
