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
            this.set_titletext("공통코드관리");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1293,827);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCd\" type=\"STRING\" size=\"100\"/><Column id=\"groupNm\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"groupNm\"/><Col id=\"groupCd\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCd\" type=\"STRING\" size=\"256\"/><Column id=\"groupNm\" type=\"STRING\" size=\"256\"/><Column id=\"useFg\" type=\"STRING\" size=\"256\"/><Column id=\"createUser\" type=\"STRING\" size=\"256\"/><Column id=\"createDt\" type=\"STRING\" size=\"256\"/><Column id=\"updateUser\" type=\"STRING\" size=\"256\"/><Column id=\"updateDt\" type=\"STRING\" size=\"256\"/><Column id=\"groupDesc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFm", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCd\" type=\"STRING\" size=\"256\"/><Column id=\"groupNm\" type=\"STRING\" size=\"256\"/><Column id=\"useFg\" type=\"STRING\" size=\"256\"/><Column id=\"createUser\" type=\"STRING\" size=\"256\"/><Column id=\"createDt\" type=\"STRING\" size=\"256\"/><Column id=\"updateUser\" type=\"STRING\" size=\"256\"/><Column id=\"updateDt\" type=\"STRING\" size=\"256\"/><Column id=\"groupDesc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/><Column id=\"codeCd\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"codeSeq\" type=\"STRING\" size=\"256\"/><Column id=\"groupCd\" type=\"STRING\" size=\"256\"/><Column id=\"useFgo\" type=\"STRING\" size=\"256\"/><Column id=\"useFg\" type=\"STRING\" size=\"256\"/><Column id=\"createUser\" type=\"STRING\" size=\"256\"/><Column id=\"createDt\" type=\"STRING\" size=\"256\"/><Column id=\"updateUser\" type=\"STRING\" size=\"256\"/><Column id=\"updateDt\" type=\"STRING\" size=\"256\"/><Column id=\"codeGbn\" type=\"STRING\" size=\"256\"/><Column id=\"codeDesc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"groupCd\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"groupCd\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"52","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","89","34","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","625","15","157","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnTest",null,"9","86","34","97",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("테스트");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm","550","18","74","16",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("코드/명");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGroupCode","810","18","74","16",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupCode","885","15","157","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTo","59","9","191","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div01","0","67","500","631",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","8","74","16",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staCnt","120","8","74","16",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("총 0 건");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grdMst","0","37","500","574",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.getSetter("no").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" text=\"그룹코드\"/><Cell col=\"2\" text=\"그룹명\"/><Cell col=\"3\" text=\"사용여부\" displaytype=\"normal\"/><Cell col=\"4\" text=\"최초등록자\"/><Cell col=\"5\" text=\"최초등록시간\"/><Cell col=\"6\" text=\"최종수정자\"/><Cell col=\"7\" text=\"최종수정시간\"/><Cell col=\"8\" text=\"그룹설명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:groupCd\" displaytype=\"mask\" textAlign=\"center\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;mask&apos; : &apos;none&apos;\"/><Cell col=\"2\" text=\"bind:groupNm\" textAlign=\"center\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"3\" text=\"bind:useFg\" displaytype=\"checkboxcontrol\" textAlign=\"center\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"4\" text=\"bind:createUser\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:createDt\" textAlign=\"center\" displaytype=\"expr:createDt == null ? none : date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:updateUser\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:updateDt\" textAlign=\"center\" displaytype=\"expr:updateDt == null ? none : date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:groupDesc\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02",null,"67","750","302","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div02");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","538","5","65","29",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btnDel","610","5","65","29",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btnSave","682","5","65","29",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staTitle","10","8","74","16",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_text("그룹코드내역");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.addChild(obj.name, obj);

            obj = new Div("div01","10","40",null,"52","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtCdLeng","585","15","150","23",null,null,null,null,null,null,this.div02.form.div01.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.div02.form.div01.addChild(obj.name, obj);

            obj = new Static("staCtgrCd","10","18","54","16",null,null,null,null,null,null,this.div02.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div01.addChild(obj.name, obj);

            obj = new Static("staCtgrNm","260","18","54","16",null,null,null,null,null,null,this.div02.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div01.addChild(obj.name, obj);

            obj = new Static("staCdLeng","520","18","54","16",null,null,null,null,null,null,this.div02.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("코드길이");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_visible("false");
            this.div02.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtCtgrCd","85","15","150","23",null,null,null,null,null,null,this.div02.form.div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.div02.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtCtgrNm","345","15","150","23",null,null,null,null,null,null,this.div02.form.div01.form);
            obj.set_taborder("5");
            this.div02.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","10","90",null,"52","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_visible("false");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtOrder","585","15","150","23",null,null,null,null,null,null,this.div02.form.div02.form);
            obj.set_taborder("0");
            this.div02.form.div02.addChild(obj.name, obj);

            obj = new Static("staTask","10","18","54","16",null,null,null,null,null,null,this.div02.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("관련업무");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div02.addChild(obj.name, obj);

            obj = new Static("staFrntCd","260","18","54","16",null,null,null,null,null,null,this.div02.form.div02.form);
            obj.set_taborder("2");
            obj.set_text("관리화면");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div02.addChild(obj.name, obj);

            obj = new Static("staOrder","520","18","54","16",null,null,null,null,null,null,this.div02.form.div02.form);
            obj.set_taborder("3");
            obj.set_text("순서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div02.addChild(obj.name, obj);

            obj = new Combo("cboTask","86","15","150","23",null,null,null,null,null,null,this.div02.form.div02.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div02_form_div02_form_cboTask_innerdataset = new nexacro.NormalDataset("div02_form_div02_form_cboTask_innerdataset", obj);
            div02_form_div02_form_cboTask_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">TITLE</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">CONTENTS</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");
            obj.set_innerdataset(div02_form_div02_form_cboTask_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div02.form.div02.addChild(obj.name, obj);

            obj = new Edit("edtFrntCd","345","15","150","23",null,null,null,null,null,null,this.div02.form.div02.form);
            obj.set_taborder("5");
            this.div02.form.div02.addChild(obj.name, obj);

            obj = new Div("div03","10","140",null,"52","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_visible("false");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtEtc01","585","15","150","23",null,null,null,null,null,null,this.div02.form.div03.form);
            obj.set_taborder("0");
            this.div02.form.div03.addChild(obj.name, obj);

            obj = new Static("staSysCd","10","18","64","16",null,null,null,null,null,null,this.div02.form.div03.form);
            obj.set_taborder("1");
            obj.set_text("시스템코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div03.addChild(obj.name, obj);

            obj = new Static("staUserCd","260","18","64","16",null,null,null,null,null,null,this.div02.form.div03.form);
            obj.set_taborder("2");
            obj.set_text("사용자코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div03.addChild(obj.name, obj);

            obj = new Static("staEtc01","520","18","54","16",null,null,null,null,null,null,this.div02.form.div03.form);
            obj.set_taborder("3");
            obj.set_text("기타1");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div03.addChild(obj.name, obj);

            obj = new CheckBox("chkSysCd","91","15","150","20",null,null,null,null,null,null,this.div02.form.div03.form);
            obj.set_taborder("4");
            obj.set_text("사용");
            this.div02.form.div03.addChild(obj.name, obj);

            obj = new CheckBox("chkUserCd","351","15","150","20",null,null,null,null,null,null,this.div02.form.div03.form);
            obj.set_taborder("5");
            obj.set_text("사용");
            this.div02.form.div03.addChild(obj.name, obj);

            obj = new Div("div04","10","190",null,"52","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_visible("false");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtEtc04","585","15","150","23",null,null,null,null,null,null,this.div02.form.div04.form);
            obj.set_taborder("0");
            this.div02.form.div04.addChild(obj.name, obj);

            obj = new Static("staEtc02","10","18","54","16",null,null,null,null,null,null,this.div02.form.div04.form);
            obj.set_taborder("1");
            obj.set_text("기타2");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div04.addChild(obj.name, obj);

            obj = new Static("staEtc03","260","18","54","16",null,null,null,null,null,null,this.div02.form.div04.form);
            obj.set_taborder("2");
            obj.set_text("기타3");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div04.addChild(obj.name, obj);

            obj = new Static("staEtc04","520","18","54","16",null,null,null,null,null,null,this.div02.form.div04.form);
            obj.set_taborder("3");
            obj.set_text("기타4");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div04.addChild(obj.name, obj);

            obj = new Edit("edtEtc02","85","15","150","23",null,null,null,null,null,null,this.div02.form.div04.form);
            obj.set_taborder("4");
            this.div02.form.div04.addChild(obj.name, obj);

            obj = new Edit("edtEtc03","345","15","150","23",null,null,null,null,null,null,this.div02.form.div04.form);
            obj.set_taborder("5");
            this.div02.form.div04.addChild(obj.name, obj);

            obj = new Div("div05","10","240",null,"52","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtRemark","85","15","650","23",null,null,null,null,null,null,this.div02.form.div05.form);
            obj.set_taborder("0");
            this.div02.form.div05.addChild(obj.name, obj);

            obj = new Static("staRemark","10","18","54","16",null,null,null,null,null,null,this.div02.form.div05.form);
            obj.set_taborder("1");
            obj.set_text("그룹설명");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div02.form.div05.addChild(obj.name, obj);

            obj = new Div("div03",null,"366","750","332","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div03");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddDtl","538","5","65","29",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btnDelDtl","610","5","65","29",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btnSaveDtl","682","5","65","29",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.div03.addChild(obj.name, obj);

            obj = new Grid("grdDtl",null,"49","750","264","0",null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsDtlList");
            obj.getSetter("no").set("true");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"상태\" displaytype=\"expr:state == &apos;0&apos; ? &apos;none&apos; : &apos;text&apos;\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"코드명\"/><Cell col=\"4\" text=\"순번\"/><Cell col=\"5\" text=\"그룹코드\"/><Cell col=\"6\" text=\"사용여부\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"최초등록자\"/><Cell col=\"9\" text=\"최초등록시간\"/><Cell col=\"10\" text=\"최종수정자\"/><Cell col=\"11\" text=\"최종수정시간\"/><Cell col=\"12\" text=\"코드구분\"/><Cell col=\"13\" text=\"코드설명\"/><Cell col=\"14\" text=\"ROWTYPE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"mask\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"expr:state == &apos;0&apos;? &apos;none&apos; : &apos;text&apos;\"/><Cell col=\"2\" text=\"bind:codeCd\" displaytype=\"text\" textAlign=\"center\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:codeNm\" textAlign=\"center\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"4\" displaytype=\"mask\" text=\"bind:codeSeq\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:groupCd\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:useFgo\" textAlign=\"center\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:useFg\" textAlign=\"center\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:createUser\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"9\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:createDt\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:updateUser\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"11\" displaytype=\"expr:updateDt == null ? none : date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:updateDt\" textAlign=\"center\"/><Cell col=\"12\" displaytype=\"text\" text=\"bind:codeGbn\" textAlign=\"center\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"13\" displaytype=\"normal\" text=\"bind:codeDesc\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"14\" expr=\"dataset.getRowType(currow)\"/></Band></Format></Formats>");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staTitle","10","8","74","16",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            obj.set_text("상세코드");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staCnt","120","8","74","16",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("5");
            obj.set_text("총 0 건");
            obj.set_cssclass("sta_WF_SubTitle");
            this.div03.addChild(obj.name, obj);

            obj = new Static("staInfo","180","8","174","16",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_text("공통코드를 확정하세요");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form.div01.form
            obj = new Layout("default","",0,0,this.div02.form.div01.form,function(p){});
            this.div02.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form.div02.form
            obj = new Layout("default","",0,0,this.div02.form.div02.form,function(p){});
            this.div02.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form.div03.form
            obj = new Layout("default","",0,0,this.div02.form.div03.form,function(p){});
            this.div02.form.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form.div04.form
            obj = new Layout("default","",0,0,this.div02.form.div04.form,function(p){});
            this.div02.form.div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form.div05.form
            obj = new Layout("default","",0,0,this.div02.form.div05.form,function(p){});
            this.div02.form.div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,function(p){});
            this.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div02.form.div01.form.edtCtgrCd","value","dsFm","groupCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div02.form.div01.form.edtCtgrNm","value","dsFm","groupNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div02.form.div05.form.edtRemark","value","dsFm","groupDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample002Transaction.xfdl", function() {
        /**
        *  transaction sample
        *@FileName sample002Transaction
        *@Creator
        *@CreateDate 2025/04/16
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
        * include 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/

        /***********************************************************************************************
        * 1. FORM EVENT 영역(onload, onbeforeclose)
        ***********************************************************************************************/

        this.addEventHandler("onload",function(obj,e)
        {
        	 this.fnInit();
        },this);


        /**
         * @description 초기세팅
        **/
        this.fnInit = function()
        {

        };


        /**
        * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
        * @return {boolean} true(화면 닫지 않음) / false(화면 닫음)
        */
        this.cfnClose = function()
        {
            if(this.gfnDsIsUpdated(this.dsList)){
        	   return true;
        	}
        	return false;
        };


        /************************************************************************************************
        * 2. CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        **/
        this.fnCallback = function(id,code,msg)
        {
        	// 에러 시 화면 처리 내역
        	if(code != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "svcSearch":

        			trace(this.dsList.saveXML());

        			var cnt = this.dsList.rowcount;


        			break;

        		case "svcSearchDtl":

        			trace(this.dsDtlList.saveXML());

                  break;

        		case "svcSave":

        			// 재조회
        			this.fnSearch();

        			break;

        		case "svcSaveDtl":

        			// 저장 되었습니다.
        			this.gfnAlert("저장 되었습니다.",(yes)=>{
        			     // 재조회
        		    	this.fnSearch();

        			});


        			break;

        		default :

        			break;
        	}
        };

        /************************************************************************************************
        * 3. CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * @description 조회
        **/
        this.fnSearch = function ()
        {
        	// 조회조건 설정

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

         	this.dsSearch.setColumn(0, "groupCd", this.divSearch.form.edtGroupCode.value);

        	// trace(this.dsSearch.saveXML());

        	 var id      = "svcSearch";  						// transaction을 구분하기 위한 svc id값
        	 var url     = "com/selectCommCodeListWithMap.do"; // trabsaction을 요청할 주소
        	 var inds    = "dsSearch=dsSearch"; 				// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	 var outds   = "dsList=output1";                    // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
             var callback = "fnCallback";

        	 this.gfnTran(id, url, inds, outds,callback);

        	 // 또는 function calllback  // codesnipet : gfnTran(function calllback)
        	 //  this.gfnTran(id, url, inds, outds, (code,msg)=>{
        	// 	        if(code < 0) return;
        	//   });
        };

        /**
         * @description 상세 조회
        **/
        this.fnDtlSearch = function ()
        {
        	// 조회조건 설정

        	this.dsDtlSearch.clearData();
        	this.dsDtlSearch.addRow();

         	this.dsDtlSearch.setColumn(0, "groupCd", this.dsList.getColumn(this.dsList.rowposition, "groupCd"));

        //	trace(this.dsDtlSearch.saveXML());

        	 var id      = "svcSearchDtl";
        	 var url     = "com/selectCommCodeDtlListWithMap.do";
        	 var inds    = "dsDtlSearch=dsDtlSearch";
        	 var outds   = "dsDtlList=output1";
             var callback = "fnCallback";
        	 this.gfnTran(id, url, inds, outds, callback);

        };

        /**
         * @description 메인 그리드 저장
        **/
        this.fnSave = function()
        {

            var id      = "svcSave";
            var url     = "com/updateGroupCodeWithMap.do";
            var inds    = "input1=dsList:U";
            var outds   = "";
            var callback = "fnCallback";
            this.gfnTran(id, url, inds, outds,callback);
        };

        /**
         * @description 상세 그리드 저장
        **/
        this.fnDtlSave = function()
        {
            var id      = "saveDtl";
            var url     = "com/login.do";
            var inds    = "input1=dsDtlList:U";
            var callback = "fnCallback";
            this.gfnTran(id, url, inds,callback);

        };

        /************************************************************************************************
        * 4. 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * @description 메인 그리드 추가
        **/
        this.fnAdd = function()
        {

        	var nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow, "useFg", "1");

        	this.div02.form.div01.form.edtCtgrNm.set_readonly(true);
        	this.div02.form.div05.form.edtRemark.set_readonly(true);
        };

        /**
         * @description 메인 그리드 삭제
        **/
        this.fnDel = function()
        {
        	if(this.dsDtlList.getRowCount() != 0)
        	{
        		alert("상세코드가 존재하는 그룹코드는 삭제할수 없습니다.");
        		return;

        	} else {

        		this.dsList.deleteRow(this.dsList.rowposition);
        	}
        };

        /**
         * @description 상세 그리드 추가
        **/
        this.fnAddDtl = function()
        {
        	if(this.dsList.rowcount == 0)
        	{
        		alert("그룹코드가 존재하지 않으면 추가할수 업습니다.");
        		return;

        	} else {

        		var aRow = this.div03.form.grdDtl.addRow();

        		this.div03.form.grdDtl.setColumn(aRow, "codeSeq", 	(this.div03.form.grdDtl.getColumn((this.div03.form.grdDtl.rowcount - 2), "codeSeq") + 1));
        		this.div03.form.grdDtl.setColumn(aRow, "groupCd", 	this.dsList.getColumn(this.dsList.rowposition, "groupCd"));
        		this.div03.form.grdDtl.setColumn(aRow, "useFg", 	"1");
        	}
        };

        /**
         * @description 상세 그리드 삭제
        **/
        this.fnDelDtl = function()
        {
        	this.dsDtlList.deleteRow(this.dsDtlList.rowposition);
        };

        /************************************************************************************************
        * 5. 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * @description 조회 버튼
        **/
        this.btnSearch_onclick = function(obj,e)
        {
        	// 조회
        	this.fnSearch();
        };

        /**
         * @description 메인 그리드 행이 바뀔떄
        **/
        this.dsList_onrowposchanged = function(obj,e)
        {
        	var grt = this.dsList.getRowType(this.dsList.rowposition);

        	if(grt != 2)
        	{
        		this.dsFm.copyRow(0, this.dsList, this.dsList.rowposition);

        		// 상세 조회
        		this.fnDtlSearch();

        	} else if(grt == 2) {

        		this.dsFm.clearData();
        		this.dsFm.addRow();
        	}
        };

        /**
         * @description 검색창 엔터 입력
        **/
        this.edtGroupCode_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		// 조회
        		this.fnSearch();
        	}
        };

        /**
         * @description 메인 그리드 클릭시 한번에 에디트 가능하도록
        **/
        this.grdMst_oncellclick = function(obj,e)
        {
        	this.div01.form.grdMst.showEditor(true);
        };

        /**
         * @description 상세 그리드 클릭시 한번에 에디트 가능하도록
        **/
        this.grdDtl_oncellclick = function(obj,e)
        {
        	this.div03.form.grdDtl.showEditor(true);
        };

        /**
         * @description 추가 버튼
        **/
        this.btnAdd_onclick = function(obj,e)
        {
        	if(obj.name == "btnAdd")
        	{
        		// 메인 그리드 행추가
        		this.fnAdd();

        	} else if(obj.name == "btnAddDtl") {

        		// 샹세 그리드 행추가
        		this.fnAddDtl();
        	}
        };

        /**
         * @description 삭제 버튼
        **/
        this.btnDel_onclick = function(obj,e)
        {
        	if(obj.name == "btnDel")
        	{
        		// 메인 그리드 행삭제
        		this.fnDel();

        	} else if(obj.name == "btnDelDtl") {

        		// 샹세 그리드 행삭제
        		this.fnDelDtl();
        	}
        };

        /**
         * @description 저장 버튼
        **/
        this.btnSave_onclick = function(obj,e)
        {
        	if(obj.name == "btnSave")
        	{
        		// 변경사항 체크
        		if (this.gfnDsIsUpdated(this.dsList) == false)
        		{
        			if (this.gfnDsIsUpdated(this.dsFm) == false)
        			{
        				// 변경된 내역이 없습니다.
        				this.gfnAlert("msg.save.nochange");
        				return;

        			} else {

        				 // 변경된 내역을 저장 하시겠습니까?
        				 this.gfnConfirm("그룹코드 내역을 저장하시겠습니까?",(yes)=>{

        					    if(yes)
        						{
        							this.div02.form.div01.form.edtCtgrNm.set_readonly(false);
        							this.div02.form.div05.form.edtRemark.set_readonly(false);

        							var groupCdDtl = this.div02.form.div01.form.edtCtgrCd.value;
        							var groupCdFind = this.dsList.findRow("groupCd", groupCdDtl);

        							// 그룹명 세팅
        							this.dsList.setColumn(groupCdFind, "groupNm", 	this.div02.form.div01.form.edtCtgrNm.value);
        							this.dsList.setColumn(groupCdFind, "groupDesc", this.div02.form.div05.form.edtRemark.value);

        							trace(this.dsList.saveXML());

        							// 메인 그리드 저장
        							this.fnSave();

        						} else {

        							trace("save cancel");
        							return;
        						}
        				 });

        			}

        		} else {


        			 // 변경된 내역을 저장 하시겠습니까?
        			 this.gfnConfirm("그룹코드를 저장하시겠습니까?",(yes)=>{

        				    if(yes)
        					{
        						// 메인 그리드 저장
        						this.fnSave();

        					} else {

        						trace("save cancel");
        						return;
        					}
        			 });

        		}

        	} else if(obj.name == "btnSaveDtl") {

        		// 변경사항 체크
        		if (this.gfnDsIsUpdated(this.dsDtlList) == false)
        		{
        			// 변경된 내역이 없습니다.
        			this.gfnAlert("msg.save.nochange");
        			return;

        		} else {

        			 // 변경된 내역을 저장 하시겠습니까?
        			 this.gfnConfirm(msgId,(yes)=>{

        				if(yes)
        				{
        					// 상세 그리드 저장
        					this.fnDtlSave();

        				} else {

        					trace("dtlSave cancel");
        					return;
        				}
        			 });

        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.edtGroupCode.addEventHandler("onkeydown",this.edtGroupCode_onkeydown,this);
            this.div01.form.staTitle.addEventHandler("onclick",this.div01_staTitle_onclick,this);
            this.div01.form.grdMst.addEventHandler("oncellclick",this.grdMst_oncellclick,this);
            this.div02.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.div02.form.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.div02.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.div02.form.staTitle.addEventHandler("onclick",this.div02_staTitle_onclick,this);
            this.div03.form.btnAddDtl.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.div03.form.btnDelDtl.addEventHandler("onclick",this.btnDel_onclick,this);
            this.div03.form.btnSaveDtl.addEventHandler("onclick",this.btnSave_onclick,this);
            this.div03.form.grdDtl.addEventHandler("oncellclick",this.grdDtl_oncellclick,this);
            this.div03.form.staTitle.addEventHandler("onclick",this.div03_staTitle_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("sample002Transaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
