(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFindReplace");
            this.set_titletext("찾기");
            this.set_border("0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComboColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDirection", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data_ko\" type=\"STRING\" size=\"256\"/><Column id=\"data_en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">prev</Col><Col id=\"data_ko\">이전</Col><Col id=\"data_en\">previous</Col></Row><Row><Col id=\"code\">next</Col><Col id=\"data_ko\">다음</Col><Col id=\"data_en\">next</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosition", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data_ko\" type=\"STRING\" size=\"256\"/><Column id=\"data_en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">current</Col><Col id=\"data_ko\">현재위치</Col><Col id=\"data_en\">current</Col></Row><Row><Col id=\"code\">first</Col><Col id=\"data_ko\">처음부터</Col><Col id=\"data_en\">first</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data_ko\" type=\"STRING\" size=\"256\"/><Column id=\"data_en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">inclusion</Col><Col id=\"data_ko\">포함</Col><Col id=\"data_en\">inclusion</Col></Row><Row><Col id=\"code\">equal</Col><Col id=\"data_ko\">일치</Col><Col id=\"data_en\">equal</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","20","54",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBgB");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBgT");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","20","20","140","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("찾을 내용");
            obj.getSetter("uword").set("100000179");
            obj.set_cssclass("sta_WF_DetailLabelT");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","20","55","140","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("찾기 옵션");
            obj.getSetter("uword").set("100000182");
            obj.set_cssclass("sta_WF_DetailLabelB");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIsUpper","164","63","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대/소문자 구분");
            obj.getSetter("uword").set("100000190");
            this.addChild(obj.name, obj);

            obj = new Edit("edtContents","164","25",null,"26","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk2",null,null,"60","30","20","13",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_defaultbutton("false");
            obj.set_cssclass("btn_POP_PrimaryMd");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,null,"91","30","btnOk2:4","13",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다음 찾기");
            obj.getSetter("uword").set("100000192");
            obj.set_cssclass("btn_POP_SecondaryMd");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGridFind.xfdl", function() {
        /**
        * 그리드 편의기능 (찾기팝업)
        *@FileName  cmmGridFind
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
        this.fvGrid="",this.fvDs="",this.fvCellname="",this.fvOldValue="";
        this.fvOldCondition="",this.fvOldStrict="",this.fvOldCell="",this.fvOldCondition = "";
        this.fvSelectType = "cell";
        this.fvSelectRow=-1, this.fvCellIndex=0,this.fvNextCnt=0;
        this.totCnt = 0;
        this.fvOption ={
        	'direction' : "next",     // 아진/다음   prev,next
        	'position'  : "current",       // current : 현재위치 , first : 처음부터
        	'strict'    : ''    // 대소문자 구분

        };

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
            this.fvGrid       = this.pvGrid;
        	this.fvSelectRow  = this.pvStrartRow;
        	this.fvDs 		  = this.pvGrid.getBindDataset();
        	this.fvSelectType = this.pvSelectType;
        	this.fvCellIndex  = this.pvSelectCell;

        	this.fvGrid.selecttype = "ell";  // 그리드 선택영역 cell 변경
        	this.fvGrid._uFindRow  = -1;
        	this.fvGrid._uFindCell = -1;
            this.fvGrid.selectRow(-1,true);
        	this.fvDs.rowposition = -1;
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        /**
        * @description 각 컬럼 타입별 바꾸기 가능/불가능 설정
        */
        this.fnCheckType = function (val)
        {
        	let arr = ["normal","text","calendarcontrol","date","editcontrol","number","text","textareacontrol"];
        	return arr.includes(val);
        };

        /**
        * @class   데이터의 타입반환
        * @param {Object} grid - 대상 Grid Component
        * @param {Number} cell - 찾을 셀
        * @return {Object} - 찾기 성공.
        * @example
        *  this.getBindColumnType(grid, cell);
        */
        this.getBindColumnType = function (grid, cell)
        {
        	let dataType = null;
        	let dataset = grid.getBindDataset();
        	let bindColid = grid.getCellProperty("body", cell, "text");

        	if(this.isNull(bindColid)) return "";

        	bindColid = bindColid.replace("bind:", "");

        	if (!this.gfnIsNull(bindColid)){

        		let colInfo = dataset.getColumnInfo(bindColid);
        		if ( !this.gfnIsNull(colInfo)){
        			dataType = colInfo.type;
        		}
        	}

        	return dataType;
        };


        /*
        * 입려 검색 공통
        */
        this.nrow = 0;
        this.oldValue = "";

        this.setFindGridText = function (grid, inp, option)
        {
        	grid.lastFindText   = inp;
        	grid.lastFindOption = option;

        	// 찾을 옵션
        	let direction = option.direction; // 다음
        	let position = option.position;   // 현재위치
        	let strict   = option.strict;    // 대소문자 구분
        	let nextCnt  = grid._nextCnt;   // 다음 검색
        	let dataset  = grid.getBindDataset();


        	let findCol = "";
            let cellText = "";
        	let findCell = -1;
        	let findRow = -1;
        	//let ncell = 0 ;
        	let rowCnt = grid.rowcount;
        	let cellCnt = grid.getCellCount("body");
        	let totCellCnt  = cellCnt-1;
        	let loopCnt = rowCnt;
        	let startRow = 0;
        	let nrow = 0;
        	let ncell = 0;
        	let findRowExpr = "";


        	if(this.oldValue != inp){
        		nrow  = 0;
        		ncell = 0;
        		grid._uFindRow = -1;
        		 grid._uFindCell = -1;
        	}else{
        	    if(grid._uFindRow != -1){

        			nrow = grid._uFindRow;
        			grid._uFindRow = -1;
        		}


        		if(grid._uFindCell != -1){
        			ncell = grid._uFindCell + 1;

        		}

        	}

        	grid.enableevent = false;
        	dataset.enableevent = false;
        	for (nrow; nrow<rowCnt; nrow++)
        	{

        		if(ncell == cellCnt && grid._uFindRow != -1){
        			nrow = nrow + 1;
        		}

        		for (ncell; ncell<cellCnt;ncell++){

        			cellText = grid.getCellProperty("body",ncell,"text");

        			if(!!cellText){
        				if(cellText.indexOf("bind:") > -1){

        					colNm = cellText.replace("bind:","");
        					if ( this.setCompareFindText(grid, nrow, ncell, inp, "", strict) ){

        						findRow = nrow;
        						findCell = ncell;
        						grid._uFindRow = nrow;
        						grid._uFindCell = findCell;
        						//	this.console.log( " 111 this.findRow : " +  findRow  +  "<> findCell : " + findCell);

        					}

        				}

        			}

        			if(findRow > -1 && findCell> -1){

        				break;
        			}

        		}


        		if(ncell == cellCnt){
        			ncell= 0;
        		}

        		if(findRow > -1 && findCell> -1){

        			break;
        		}

        		startRow++;
        	}

        	grid.enableevent = true;
            dataset.enableevent = true;

        	if(findRow  == -1 ){   // 검색 결과 없을 시

        		grid._uFindRow  = -1;
        		grid._uFindCell = -1;
        	}


        	this.oldValue = inp;
        	return [findRow, findCell];

        };



        /*
        *	찾기 함수
        *@apram {string} posttext
        */
        this.setFindSearch = function (postTxt)
        {
            let txt = postTxt || this.edtContents.value ;
        	let option      = this.getOption();
        	let findRowCell = this.setFindGridText(this.fvGrid, txt, option);

        	if(this.isNull(findRowCell) || findRowCell[0] == -1){
        		this.gfnToast("10052"); //검색된 결과가 없습니다.
        		return false;
        	}


        	// this.fvDs
        	let findRow  = findRowCell[0];
        	let findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 ){
        	//	this.fvDs.enableevent = false;
        		this.fvDs.rowposition = findRow;
        		this.fvGrid.selectCell(findRow,findCell);
        		this.fvGrid.setCellPos(findCell);
        		this.fvGrid._useSelIndex = findCell;
        	//	this.fvDs.enableevent = true;
        		return true;
        	}
        	else
        	{
        		return false;
        		//this.alert("찾기 결과가 없습니다.");
        	}
        };

        this.setCompareFindText = function(grid, row, cell, findText, condition, strict)
        {
        	let cellCnt  = grid.getCellCount("body");
        	let cellText = grid.getCellText(row, cell);
        	let displayType = grid.getCellProperty("body", cell, "displaytype");


        	// displayType 이 normal일 경우
        	// dataType 을 체크하여 displayType 을 변경
        	if ( this.gfnIsNull(displayType) || displayType == "normal" )
        	{
        		let dataType = this.getBindColumnType(grid, cell);

        		if(this.isNull(dataType)) return false;

        		switch(dataType)
        		{
        		case 'INT' :
        		case 'FLOAT' :
        		case 'BIGDECIMAL' :
        			displayType = "number";
        			break;
        		case 'DATE' :
        		case 'DATETIME' :
        		case 'TIME' :
        			displayType = "date";
        			break;
        		default :
        			displayType = "string";
        		}
        	}

        	// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
        	if ( displayType == "currency" ){
        		let code = cellText.charCodeAt(0);
        		if ( code == 65510 || code == 92 ){
        			cellText = cellText.substr(1);
        		}

        		code = findText.charCodeAt(0);
        		if ( code == 65510 || code == 92 ){
        			findText = findText.substr(1);
        		}
        	}
        	//	this.console.log(  "cellText : " +cellText);
        	if(!this.isNull(cellText)){

        	  	// 대소문자 구분
        		if ( strict== "N" ){

        			cellText = cellText.toUpperCase();
        			findText = findText.toUpperCase();
        			//this.console.log( " cellText : " + cellText + "<> findText : " +findText);


        		}else{
        			cellText = cellText;
        			findText = findText;

        		}

        		// this.console.log( "cellText : " +cellText);

        		if(!this.isNull(cellText)){
        			if ( cellText.indexOf(findText) > -1 ){
        				return true;
        			}
        		}

        	}

        	return false;
        };

        /**
        * 검색 전체
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.setInitGrdPos = function (option)
        {

        	let cellOption = option.cell;
        	let cellNo = 0;
        	if(cellOption !="all") cellNo = cellOption;

        	this.fvGrid.selectRow(-1,true);
        	this.fvDs.rowposition = -1;//

        	// 	this.fvGrid.selectCell(0,cellNo);
        	// 	this.fvGrid.setCellPos(cellNo);

        };



        this.getOption = function (oparam)
        {
        	if(!!oparam) Object.assign(this.fvOption,oparam);


        	this.fvOption['strict']   = this.chkIsUpper.value;    // 대소문자 구분

        	return this.fvOption;
        };





        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description [닫기]버튼이벤트
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.fvGrid.selecttype = this.fvSelectType;
        	this.close();
        };

        /**
        * @description [대상컬럼콤보] 변경이벤트
        */
        this.cboCol_onitemchanged = function(obj,e)
        {
            // 전체  선택 일 경우 작업중
        	this.fvCellIndex = e.postvalue;

        };

        // key 입력후 엔터
        this.edtContents_onkeyup = function(obj,e)
        {
        	if(e.keycode ==13){
        		this.fvOption["direction"] = "next";
        		this.setFindSearch(obj.value);
        	}
        };


        //디음찾기
        this.btnNext_onclick = function(obj,e)
        {
        	this.fvOption["direction"] = "next";
        	this.setFindSearch(this.edtContents.value.trim());
        };

        this.btnOk_onclick = function(obj,e)
        {
            const selType  = this.fvGrid.selecttype;
            const cell  = this.fvGrid.currentcell;
            const row = this.fvGrid.getSelectedRows();

            let resArr = row == -1 ? "" : [selType,cell,row];

        	this.close(resArr);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtContents.addEventHandler("onkeyup",this.edtContents_onkeyup,this);
            this.btnOk2.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
        };
        this.loadIncludeScript("cmmGridFind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
