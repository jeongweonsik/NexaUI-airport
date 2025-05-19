(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPaging");
            this.set_titletext("페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Combo("cboPageSize","15","269","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var cboPageSize_innerdataset = new nexacro.NormalDataset("cboPageSize_innerdataset", obj);
            cboPageSize_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">60</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">200</Col></Row><Row><Col id=\"datacolumn\">ALL</Col><Col id=\"codecolumn\"/></Row></Rows>");
            obj.set_innerdataset(cboPageSize_innerdataset);
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal","815","48","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            obj.set_text("총건수  : <fc v=\'red\'>0</fc>건");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","140","47","383","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("화면에서 중앙정렬");
            obj.set_visible("false");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","95","45","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","23.23%","166","515","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","35","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PageL");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","450","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PageR");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button06","0","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PageP");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button07","485","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PageN");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button08","85","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageS");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button09","120","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button10","155","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button11","190","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button12","225","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button13","260","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button14","295","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button15","330","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button16","365","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button17","400","0","30","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Page");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",960,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPaging.xfdl", function() {
        /**
        * 페이징 공통폼
        *@FileName  cmmPaging
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
        * FORM 변수 선언 영역
        ************************************************************************************************/
        const _parent = this.parent;
        this.nPageLeft=0; 			// div가운데 위치시키기 위한 left값
        this.callback = "";     // 조회함수
        // this.fvRecords=0;			// 목록수

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
              this.setInit();
        };

        // setting  paging letiable
        this.setInit = function ()
        {
        	if(_parent instanceof nexacro.Div){
        		// paging 변수 초기화 선언
        		if(!("urecords" in _parent))         _parent.urecrds = 0;       //목록갯수
        		if(!("upage" in _parent))            _parent.upage = 0;	 			//페이지번호
        		if(!("urecordsOffset" in _parent))  _parent.urecordsOffset = 0;	//시작rownum
        		if(!("utotalCount" in _parent)) 	 _parent.utotalCount = 0;		//전체데이터갯수
        		if(!("upageCount" in _parent))  	 _parent.upageCount = 0; 		//실제표출페이지갯수
        	}else{

        	       this.gfnDevLog("상위폼이 division 이여여만 합니다.");
        	 }
        };

        /**
        * @description CommPaging_onsize page size가 변경될때 호출
        */
        this.form_onsize = function(obj,e)
        {

          //  trace(" ## divPage ==> " + this.isValidObject("divPage"));
        //  dalert(" this.callback : " + this.callback);
        	//가운데로
        	if(this.isValidObject("divPage")) this.fnSetCenter(obj);
        };

        /**
        * @class   setTotal
        * @param {number} 건수 처리할 수
        * @return n/a
        * @example
        * this.divPage.form.setTotal(10);
        *
        */
        this.setTotal = function(ncnt)
        {
            if(this.staTotal){
        	    let nTotCnt = this.gfnAppendComma(nexacro.toNumber(ncnt),3);
        		let stTotal = "Total : <fc v='red'>"+nTotCnt+"</fc>건";
        		this.staTotal.text = stTotal;
        	}
        };

        /**
        * @description  page초기화
        */
        this.fnInitPage = function()
        {
        	if(this.isValidObject("divPage")) this.removeChild("divPage");
        };

        /**
        * @description  nCreatePage page갯수에 맞게 버튼 생성
        */
        //this.setPage = function(sFnCallback, nTotalCount, nRecords, nPage, nPageCount)
        this.callPaging = function( nTotalCount,callback)
        {

        	//this.fvRecords = nRecords;
        	let nRecords = _parent.urecords; 	// 목록수

        	this.callback = callback || "cfnPaging_onclick";	// 조회함수
        	let nTotalPageC; 					// 전체페이지갯수
        	/*전체페이지갯수 계산*/
        	if( Math.floor( nTotalCount % nRecords ) > 0 )
        	{
                nTotalPageC = Math.floor( nTotalCount / nRecords ) + 1;
            }else
            {
                nTotalPageC = Math.floor( nTotalCount / nRecords );
            }
            /*실제 페이지 갯수는 MAX 10개로 조정*/
        	let nPageScaleC = 10;
            let nPage  = _parent.upage;  // 페이지 번호

        	let nTermBtn = 5;		 //버튼사이
            let nTerm = 20;   		 //큰버튼과 숫자사이
            let nTernLastNum = 20; 	 //마지막숫자버튼과 뒤로버튼사이

        	let nLeft = 3;
        	let nTop = 0;
            let nWidth = 30;
            let nNumWidth = 30;
            let nHeight = 28;

            let objBtnPage;
            let sPageView = this.pageview;


            if (this.isNull(sPageView)) 	 sPageView = "all";
            if (this.isNull(nRecords)) 	 nRecords = 50;
            if (this.isNull(nPage)) 		 nPage = 0;
            if (this.isNull(nPageScaleC)) nPageScaleC = 10;
            if( nPageScaleC > 10 ) nPageScaleC = 10;

            //DIV 초기화
            if (this.isValidObject("divPage"))
        	{
        		this.divPage.destroy();
        		this.removeChild("divPage");
            }

            this.scrollbartype = "none";
            nPage = nPage + 1;

        	//현재페이지
            let uint = Math.floor( ( nexacro.toNumber( nPage ) - 1 ) / nexacro.toNumber( nPageScaleC ) );
        	uint = ( uint * nPageScaleC ) + 1;
        	//다음페이지
            let nextUnit = nexacro.toNumber( uint + nPageScaleC );
        	if( nextUnit > nTotalPageC) nextUnit = nTotalPageC + 1;

        	let ndivLeft = 0;

        	//div생성
        //     let objDivPaging = new Div();
        // 	objDivPaging.init("divPage", 0, 5, 800, 23, null, null);
        	//	objDivPaging.init("divPage", 0, 0, 800, 23, null, null);
        	//objDivPaging.init("divPage", 0, 0, null, null,0 , 0);
        	let objDivPaging = new Div("divPage", 0, 0, null, null,0 , 0);
        	 this.addChild(objDivPaging.name, objDivPaging);
            objDivPaging.show();

        	/*  let objDivPaging = this.divPage;*/

            //컨트롤버튼생성
            if (sPageView == "all" || sPageView == "number")
            {
        		/************************************************************************
        		* 첫페이지(<<) 버튼생성
        		************************************************************************/
        		let objBtnFirst = new Button("btnFirst", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnFirst.name, objBtnFirst);
        		objBtnFirst.cssclass = "btn_WF_PagingFirst";
        		//objBtnFirst.text = "<<";
        		objBtnFirst.page = 1;
        		objBtnFirst.addEventHandler("onclick", this.pageButton_onclick, this);
        		objBtnFirst.enable = true;

        		// 현재페이지가 '1'이면 비활성화
        		if( nPage == 1 ) objBtnFirst.enable = false;
        		objBtnFirst.show();
        		nLeft = nLeft + nWidth + nTermBtn;	//left값 계산

        		/************************************************************************
        		* 앞으로(<) 버튼생성
        		************************************************************************/
        		let objBtnBefore = new Button("btnBefore", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnBefore.name, objBtnBefore);
        		objBtnBefore.cssclass = "btn_WF_PagingPrev";
        		//objBtnBefore.text = "<";

        		//2020.2.25 페이지 이동 10페이지씩 변경
        		//objBtnBefore.page = nPage - 1;
        		let prePage = parseInt((nPage - 10)/10)*10+1;
        		objBtnBefore.page = prePage ;
        		objBtnBefore.addEventHandler("onclick", this.pageButton_onclick, this);
        		objBtnBefore.enable = true;
        		// 현재페이지가 '11'보다 작으면 비활성화
        		if( nPage < 11) objBtnBefore.enable = false;
        		nLeft = nLeft + nWidth + nTerm;	//left값 계산
        		objBtnBefore.show();

        		/************************************************************************
        		*페이징[1 2 3 4 5 6 7 8 9 10] 버튼생성
        		************************************************************************/
        		for(let i=uint; i<nextUnit; i++ )
        		{
        			if(i > nTotalPageC ) break; //페이지갯수만큼만 생성

        			objBtnPage = new Button("btnPage"+i,  nLeft, nTop, nNumWidth, nHeight, null, null);
        			objDivPaging.addChild(objBtnPage.name, objBtnPage);
        			objBtnPage.cssclass = "btn_WF_Paging";
        			objBtnPage.text = i;
        			objBtnPage.page = i;
        			objBtnPage.addEventHandler("onclick", this.pageButton_onclick, this);

        			if(i == nPage) objBtnPage.cssclass = "btn_WF_PagingS"; //누름표시
        			objBtnPage.show();

        			nLeft = nLeft + nNumWidth + nTermBtn; //left값 계산
        		}
        		nLeft = nLeft + nTernLastNum;//left값 계산
        		/************************************************************************
        		* 뒤로(>) 버튼생성
        		************************************************************************/
        		let objBtnNext = new Button("btnNext", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnNext.name, objBtnNext);
        		objBtnNext.cssclass = "btn_WF_PagingNext";
        		//objBtnNext.text = ">";
        		objBtnNext.addEventHandler("onclick", this.pageButton_onclick, this);
        		objBtnNext.enable = true;
        		//objBtnNext.page = nPage +1;
        		let nextPage = parseInt((nPage + 10)/10)*10+1;

        		objBtnNext.page = nextPage;
        		//trace("## nPage : " + nPage + "<> ### nextPage : " + nextPage + " <> ### nTotalPageC : " + nTotalPageC);
        		//Next페이지가 전체페이지갯수만큼이면 비활성화
        		if( nextPage >= nTotalPageC) objBtnNext.enable = false;
        		objBtnNext.show();
        		nLeft = nLeft + nWidth + nTermBtn; //left값 계산

        		/************************************************************************
        		* 마지막페이지(>>) 버튼생성
        		************************************************************************/
        		let objBtnEnd = new Button("btnEnd", nLeft, nTop, nWidth, nHeight, null, null);
        		objDivPaging.addChild(objBtnEnd.name, objBtnEnd);
        		objBtnEnd.cssclass = "btn_WF_PagingLast";
        		//objBtnEnd.text = ">>";
        		objBtnEnd.addEventHandler("onclick", this.pageButton_onclick, this);
        		objBtnEnd.page = nTotalPageC;
        		//현재페이지가 전체페이지갯수만큼이면 비활성화

        		if( nPage == nTotalPageC || nTotalPageC==0) objBtnEnd.enable = false;
        		objBtnEnd.show();
        		nLeft = nLeft + nWidth ;	//left값 계산
        	}

        	//생성된 컴포넌트 갯수에 따른 div의 Width 조절
        	objDivPaging.width = (nLeft + 8);

        	//가운데로
        	this.nPageLeft = ((800 - nLeft) / 2);
        	this.fnSetCenter(this);
        };

        /**  번호 , 넥사트 prev 클릭 event
        * @description  page이동함수
        */
        this.pageButton_onclick = function(obj)
        {
        	let nPage = nexacro.toNumber(obj.page)-1; 						//누른페이지
        	let nRecordOffset = nPage * nexacro.toNumber(_parent.urecords);	//시작데이터rownum계산
        	//callback함수호출
        	const sFuncNm  = "cfnPaging_onclick";
        	const parentForm = this.gfnGetTopLevelForm(_parent);

        	_parent.upage =  nPage;
        	_parent.urecordsOffset =  nRecordOffset;
        	if(nexacro._isFunction(parentForm[sFuncNm])) this.lookupFunc(sFuncNm).call(nPage,nRecordOffset);

        };

        /**
        * @description  pagingDiv가 가운데오도록
        */
        this.fnSetCenter = function(obj)
        {
            if(!this.isValidObject("divPage")) return;
        	const orgLeft = this.nPageLeft;
        	const orgWidth = 800;
        	const diffWidth = nexacro.toNumber(obj.getOffsetWidth()) - orgWidth;

         	this.divPage.move((parseFloat(orgLeft) + parseFloat(diffWidth/2)),0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.cboPageSize.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("cmmPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
