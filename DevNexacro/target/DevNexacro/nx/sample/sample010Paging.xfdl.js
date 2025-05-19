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
            this.set_titletext("페이징 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"pageNumber\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/><Column id=\"pageNumber\" type=\"STRING\" size=\"256\"/><Column id=\"pageSize\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"totalCount\">1000</Col><Col id=\"pageNumber\">0</Col><Col id=\"pageSize\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_LANG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">ADMIN</Col><Col id=\"USER_PW\">1</Col><Col id=\"USER_LANG\">ko</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("페이징 샘플");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("staSub","0","sta02:0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("웹 페이징 샘플");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Guide");
            obj.set_text("h20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","10","426",null,"35","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmPaging.xfdl");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.getSetter("urecords").set("50");
            obj.getSetter("upage").set("0");
            obj.getSetter("urecordsOffset").set("0");
            obj.getSetter("utotalCount").set("0");
            obj.getSetter("upageCount").set("10");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","124",null,null,"10","94",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"90","53","29","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.getSetter("uWord").set("search");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetRecords","440","13","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("getRecords");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetCurrentPage","btnGetRecords:3","13","108","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("getCurrentPage");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetRecordsOffset","440","53","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("getRecordsOffset");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetTotalCount","btnGetRecordsOffset:3","53","108","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("getTotalCount");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetRecords","690","15","103","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("setRecords");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetCurrentPage","800","15","103","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("setCurrentPage");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetRecordsOffset","690","55","103","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("setRecordsOffset");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetTotalCount","800","55","103","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("setTotalCount");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","960","32","50","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("sample010Paging.xfdl", function() {
        /**
        * 페이징 샘플
        *@FileName  sample010Paging
        *@Creator
        *@CreateDate 2025/04/28
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

        // 1. divPaging user property 설정
        //   urecords="30"   //목록갯수
        //   upage="0"        //페이지번호
        //   urecordsOffset="0"   //시작rownum
        //   utotalCount="0"  //전체데이터갯수
        //   upageCount="0"    //실제표출페이지갯수

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.addEventHandler("onload",function(obj,e)
        {
        	// this.divPage.urecords = 50; // 레코드 수 설정
        },this);


        /**
        * //paging 버튼 // next prev 클릭 이벤트 후처리
        * @param {number} 누른 페이지
        * @param {number} 시작데이터rownum계산
        * @return
        * @example
        * @memberOf
        */
        this.cfnPaging_onclick = function(nPage,nRecordOffset)
        {

         //   alert("nPage : " + nPage + "<> nRecordOffset : " + nRecordOffset);
           this.fnSearch(); //조회함수호출
        //	trace(" ## nPage : " +nPage + "<> nRecordOffset : " + nRecordOffset);
        }


        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        /**
        * @description TRANSACTION콜백 트랜젝션 후, 반드시페이지 메이킹 함수 호출
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        	case "svcSearch":
        		//	trace(" dsList : "  + this.dsList.saveXML());
        			this.fnPagingSetting(); //make paging
        		break;
        	}
        };

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        // /**
        // * @description 조회이벤트
        // */
        this.fnSearch = function(obj,e)
        {
        	// 조회조건 설정
        	//데이터를 넘길 경우 데이터셋에 추가해서 넘기는 방식과
        	//아규먼트를 추가해서 넘기는 방식 모두 사용가능
        	this.dsSearch.clearData();

        // var nRecords = Number(this.divPage.records)
        //	var nPageNumer = Number(this.divPage.page) * nRecords;

        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "pageNumber", this.divPage.getPageNumber());
        	this.dsSearch.setColumn(nRow, "pageSize"  , this.divPage.urecords);
        //	alert(" this.divPage.getPageNumber() : " + this.divPage.getPageNumber());
        	trace(" ##current page === > " +this.divPage.upage);  // 현재 페이지
        	trace(" ##records  === > " + this.divPage.urecords);   // 페이징 수량
        	trace(" ##dsSearch === > " + this.dsSearch.saveXML());

            var id    = "svcSearch";
        	var url   = "cmm/Paging.do";
        	var inds  = "input1=dsSearch";
        	var outds = "dsList=output1"
        	+ " dsPagingInfo=dsPagingInfo";
        	var callback = "fnCallback";
        	this.gfnTran(id, url, inds, outds, callback);

        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
        * @description 최초조회시, 전역변수 초기화
        */
         this.fnPageInit = function ()
         {
          //  var nPgesize = this.fvTabpage1.divPage.form.fnGetPageSize();
         	//pagin info init setting
        	//this.fvRecords=this.cboPageSize.value; //목록갯수
        	//this.fvRecords= nPgesize; //목록갯수
        	//this.fvPage=0;	 								 //페이지번호
        	//this.fvRecordsOffset=0;							 //시작rownum
        	//this.fvPageCount = 10;							 //실제표출페이지갯수

        	this.fnSearch();
         };

        /**
        * @description 페이징만들기
        */
        this.fnPagingSetting = function ()
        {
        	var totalCnt =  nexacro.toNumber(this.dsPagingInfo.getColumn(0, "totalCount")); //전체로우갯수
             if(this.isNull(totalCnt)) return;


        	// alert(" ## totalCnt : " +totalCnt);
        	this.divPage.callPaging(totalCnt);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description 조회버튼이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
          this.fnPageInit();
        };

        // //get Records
        this.btnGetRecords_onclick = function(obj,e)
        {
        	var nRecrds = this.divPage.urecords;
            trace(" ### nRecrds : " + nRecrds);
        };

        //get current page
        this.btnGetCurrentPage_onclick = function(obj,e)
        {
        	var nPage = this.divPage.upage;
            //현재 page
        	 trace(" ### nPage : " + nPage);
        };

        //get getRecordsOffset
        this.btnGetRecordsOffset_onclick = function(obj,e)
        {
        	 var nRecordOffset = this.divPage.urecordsOffset;
        	  trace(" ### nRecordOffset : " + nRecordOffset);
        };
        //get getTotalCount
        this.btnGetTotalCount_onclick = function(obj,e)
        {
        	var nGetTotalCount = this.divPage.utotalCount;
        	    trace(" ### nGetTotalCount : " + nGetTotalCount);
         };


        // set Records(가져올 페이징 수 설정)
        this.btnSetRecords_onclick = function(obj,e)
        {
              this.divPage.urecords = 1000;
        };
        // 현재 page 설정
        this.btnSetCurrentPage_onclick = function(obj,e)
        {
        	this.divPage.upage = 0;
        };

        // 시작rownum 설정
        this.btnSetRecordsOffset_onclick = function(obj,e)
        {
        	this.divPage.urecordsOffset = 0;
        };

        // 전체데이터갯수
        this.btnSetTotalCount_onclick = function(obj,e)
        {
            var totCnt = 100000;
        	this.divPage.utotalCount = totCnt ;

        };

        this.Button00_onclick = function(obj,e)
        {
        	var totalCnt =  nexacro.toNumber(this.dsPagingInfo.getColumn(0, "totalCount")); //전체로우갯수

        	this.divPage.callPaging(totalCnt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd00.addEventHandler("oncelldblclick",this.tab00_Tabpage1_grd00_oncelldblclick,this);
            this.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btnGetRecords.addEventHandler("onclick",this.btnGetRecords_onclick,this);
            this.btnGetCurrentPage.addEventHandler("onclick",this.btnGetCurrentPage_onclick,this);
            this.btnGetRecordsOffset.addEventHandler("onclick",this.btnGetRecordsOffset_onclick,this);
            this.btnGetTotalCount.addEventHandler("onclick",this.btnGetTotalCount_onclick,this);
            this.btnSetRecords.addEventHandler("onclick",this.btnSetRecords_onclick,this);
            this.btnSetCurrentPage.addEventHandler("onclick",this.btnSetCurrentPage_onclick,this);
            this.btnSetRecordsOffset.addEventHandler("onclick",this.btnSetRecordsOffset_onclick,this);
            this.btnSetTotalCount.addEventHandler("onclick",this.btnSetTotalCount_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("sample010Paging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
