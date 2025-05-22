/**
*  Grid 관련 라이브러리
*  @FileName 	Grid.js
*  @Creator 	#{J}
*  @CreateDate 	2025.04.15
*/

/********************************************************************************************
*● gfnSetGrid     :  Grid에 기능 추가(공통)
*● gfnSetGridCellProp  : 그리드 셀  공통 
*● gfnGrid_onheadclick : 그리드헤드클릭 이벤트 [Sort, Checkbox]
*● gfnGrid_onkeydown : 그리드키다운 이벤트 [cellcopypaste]
*● _gfnGridUserHeaderFlg : 유저헤더사용여부반환
*● _gfnGirdUserHeaderExcuteSort : 유저헤더를 이용한 정렬
*● _gfnGridSetSortStatus : 정렬가능여부리턴
*● _gfnGridGetBodyCellIndex : head cell에 match되는 body cell을 얻어온다
*● _gfnGridGetBindColumnNameByIndex : index로 binding 된 컬럼명을 얻어온다.tnwj
*● _gfnGridExecuteSort : 소트를 실행한다
*● _gfnGridGetGridCellObject : Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
*● _gfnClearSortMark : 그리드의 Sort Mark 제거
*● gfnGrid_onrbuttondown : 마우스 우클릭 이벤트
*● gfnPopupmenu_onmenuclick : gfnCreatePopupMenu 내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
*● _gfnGridSetCssclass : _gfnGridSetCssclass 행고정/해제시 css설정
*● _gfnHeadCheckSelectAll : 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크 ALL/None)
*● _gfnMakeGridPopupMenu : 마우스우클릭시 표현될 팝업메뉴생성
*● gfnSetGrdCopy   : 그리드 복사 함수
*● _getGridUserProperty :  그리드에 유저프로퍼티를 Array형태로 반환한다.
*● _gfnGridcellFix :  그리드 우클릭 셀고정
*● _gfnGridCellFree : 그리드 우클릭 셀고정해제
*● _gfnGridFilter : 셀그리드 우클릭 필터
*● _gfnGridCellFilterFree : 그리드 우클릭 셀필터해제
*● _gfnGridCellReplace : 그리드 우클릭 찾기/바꾸기
*● _gfnGridColHideShow : 그리드 우클릭 컬럼 숨기기/보이기
*● _gfnGridExcelExport : 그리드 우클릭 엑셀익스포트
*● _gfnGridExcelImport : 그리드 우클릭 POPUPMENU 내부함수
*● _gfnGridPersonalize : 그리드 우클릭  그리드 개인화
*● _getUniqueId : 유니크한 아이디 사용
*● _getPageUniqueId : 유니크한 화면아이디 사용
*● _gfnGridPersonalizeExcute : 그리드 우클릭 그리드 개인화실행.
*● gfnFindGridText : 주어진 문자열을 그리드에서 찾는다.
*● gfnReplaceGridText : 주어진 문자열을 그리드에서 찾아서 바꿀 문자열로 변경한다.
*● _replaceGridCellText : 바꾸기에 의해 찾아진 행, 셀 인덱스에 해당하는 데이터를 실제 변경한다.
*● gfnReplaceIgnoreCase : 문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
*● _replaceDateMaskValue : 날짜형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
*● _parseDateMask : 날짜형 마스크 구문을 분석합니다.
*● _replaceNumberMaskValue : 숫자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
*● _compareFindText : 문자열을 비교하여 찾아진 결과를 반환
*● gfnGetBindColumnType : 데이터의 타입반환
*● _gfnGridCopyEventForRuntime : copy event
*● _gfnGirdGetPasteData : paste데이터생성
*● _gfnGridPasteEvent : paste event
*● _gfnGridCopyEventForChrome : copy event(chrome)
*● _createTextarea : cell copy and paste (크롬용 텍스트에어리어생성)
*● gfnCreateCalPopDiv : 그리드 달력 팝업 생성
*********************************************************************************************/

/**
* @class Grid에 기능 추가
* @param {Object} obj	- 대상그리드
* @return N/A
* @example
* ===================================
grid 기능 property  
1. uopen :false   팝업메뉴 사용안함 
2. usort :false   소트 사용안함 
3. ucopy :false   복사기능 사용안함
* ===================================
* this.gfnSetGrid(this.grdMain);	
*/
_pForm.gfnSetGrid = function(objGrid)
{    
    if(this.isNull(objGrid)) return;
    const grdFrCount = objGrid.getFormatColCount();
	const oForm     =  this.gfnGetTopLevelForm(this); 
	
	if(grdFrCount == 0 ) return; 
	
	//Grid의 binddataset설정
	let objDs = objGrid.getBindDataset();
	
	// grid에 바인드된 Dataset이 없는 경우 return;
	if (this.gfnIsNull(objDs)) {
		return;
	}
	// Validation에서 foucus 처리시 사용
	else {
		objDs.bindgrid = objGrid;
	}	
	
// 	objGrid.orgformat = objGrid.getCurFormatString();
// 	
// 	let gdsGridPersonal = app.gdsGridPersonal;
// 	//let sFormatId = this._getUniqueId(objGrid);			
// 	let sFormatId  = `${this._getUniqueId(objGrid)}_${evUserId}`;
// 	let nFormatRow = gdsGridPersonal.findRow("formatId", sFormatId);
// 	let oGridPersonal;
//     
// 	if( nFormatRow > -1){
// 		
// 		let sFormat = "<Formats>" + gdsGridPersonal.getColumn(nFormatRow, "colDesc") + "</Formats>";
// 		let grdId = oForm.name + "_"+ objGrid.name;
// 		
// 		if(oForm.isValidObject(grdId)){
// 			// Remove Object form Parent Form  
// 			oForm.removeChild(grdId); 
// 			oGridPersonal = oForm[grdId];
// 			// Destroy Object  
// 			oGridPersonal.destroy(); 
// 			oGridPersonal = null;		
// 		}
// 		oGridPersonal = new Grid(grdId, 0, 0, 0, 0, null, null); 
// 		// Add Object to Parent Form  
// 		oForm.addChild(grdId, oGridPersonal); 
// 		oGridPersonal.visible = false;
// 		// Show Object  
// 		oGridPersonal.show(); 		
// 		
// 		oGridPersonal.formats = sFormat;		
// 		
// 		let grdColCntFrom  = objGrid.getFormatColCount();
// 		let grdColCntTo    = oGridPersonal.getFormatColCount();		
// 		
// 		if(grdColCntFrom != grdColCntTo){  // 컬럼 정보 비교
// 			
// 	        this.gfnToast("추가된 컬럼 정보가 존재합니다. 초기화 합니다."); // 추가된 컬럼 정보가 존재합니다. 초기화 합니다.
// 			objGrid.orgformat2 = objGrid.getFormatString();
// 			this._gfnGridPersonalizeInit(objGrid);    //초기화
// 		}else{
// 			
// 			objGrid.orgformat2 = gdsGridPersonal.getColumn(nFormatRow, "colOrgDesc");			
// 			objGrid.formats = sFormat;	
// 		}				
// 		
// 	}
// 	else{
// 		objGrid.orgformat2 = objGrid.getFormatString();
// 	}
	
	/* grid 기능 property  
	* upopmenu :false   팝업메뉴 사용안함 
	* usort :false   소트 사용안함 
	* ucopy :false   복사기능 사용안함
	*/  
	// this._gfnMakeGridPopupMenu(objGrid,arrProp,"header");//popupmenu 생성
	const isTreeCell = objGrid.getCellProperty("body",0,"displaytype");
	if(objGrid["upopmenu"]  != "false"  && isTreeCell != "treeitemcontrol"){
		this._gfnMakeGridPopupMenu(objGrid,"header");//popupmenu 생성
		objGrid.addEventHandler("onrbuttondown", this.gfnGrid_onrbuttondown, this);	    
	}
	
	this.gfnSetGridCellProp(objGrid);   // 그리드 cell 옵션 처린
	
	/*********************************************** 이벤트추가 START ***********************************************/	
	// sort	
	if(objGrid["usort"] != "false" ) objGrid.addEventHandler("onheadclick", this.gfnGrid_onheadclick, this); 	//헤드클릭이벤트추가
    // copy 
	if(objGrid["ucopy"] != "false" ) objGrid.addEventHandler("onkeydown", this.gfnGrid_onkeydown, this);
	
};	

/*
*	그리드 셀  공통 
*@param {component} Grid
*/ 
_pForm.gfnSetGridCellProp = function (oGrid)
{
    if(!!!oGrid) return;	
	
	
	for( let ncell=0; ncell < oGrid.getCellCount("body"); ncell++){
		
		let bandProp = oGrid.getFormatColProperty(ncell,"band");
		let headDipsType = oGrid.getCellProperty("head",ncell,"displaytype");
		let bodyDispType = oGrid.getCellProperty("body",ncell,"displaytype");
		
		
		if(bodyDispType=="checkboxcontrol"){  //head
			oGrid.setCellProperty("head",ncell,"checkboxtruevalue","Y");
			oGrid.setCellProperty("head",ncell,"checkboxfalsevalue","N");	
			
		}
		
		if(bodyDispType=="checkboxcontrol"){ // body
			oGrid.setCellProperty("body",ncell,"checkboxtruevalue","Y");
			oGrid.setCellProperty("body",ncell,"checkboxfalsevalue","N");			
			
			
		}
		
		//if(bandProp == "left")  this._gfnGridcellFix(oGrid, ncell, 0);   //열고정 시 라인칼라 추가	
	}
};


/**
* @class  그리드헤드클릭 이벤트 [Sort, Checkbox]
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	   - 헤드클릭이벤트
* @return  N/A
* @example
* objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
*/
_pForm.gfnGrid_onheadclick = function(objGrid, e)
{
	
	const sType = objGrid.getCellProperty("head", e.cell, "displaytype");
    
	if (sType == "checkboxcontrol"){
		//head display type이 checkbox일 경우 all/none check기능추가
		this._gfnHeadCheckSelectAll(objGrid, e.cell);
	}else{
		//sort
		if(objGrid.usort != "false"){
			
			let multiple = false;
			if ( e.ctrlkey ) multiple = true;// Ctrl 키			
			
			// 정렬 상태 변경이 성공하면 정렬을 실행한다.
			var rtn = this._gfnGridSetSortStatus(objGrid, e.cell, multiple);
			
			if(rtn){
				this._gfnGridExecuteSort(objGrid);
			}
			
		}
	}
};

/**
* @class  그리드키다운 이벤트 [cellcopypaste]
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	   - 키다운이벤트
* @return  N/A
* @example
* objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
*/
_pForm.gfnGrid_onkeydown =function(objGrid, e){
	const keycode = e.keycode;
	const sBrowser = system.navigatorname;
	
	if(e.ctrlkey){
		if(keycode == 67){
			//copy(복사)			
			
			this.gfnSetGrdCopy(objGrid, e);
		}else if(keycode == 86){
			
			//2020.03.02 grid copy보완
			const nIdx = objGrid.currentcell;
			const varProperty = objGrid.getCellProperty( "body", nIdx, "edittype" );
			if("normal" == varProperty || "text" == varProperty 
				|| "textarea" == varProperty || "date" == varProperty){
				return;
			}
			
			//paste(붙여넣기)
			this._gfnGridPasteEvent(objGrid, e);
		}
	}
};


/**
* @class 유저헤더사용여부반환
* @param {Object} objGrid - 대상그리드
* @return 유저헤더사용여부 true/false
* @example
* this._gfnGridUserHeaderFlg(this.grdMain);
*/
_pForm._gfnGridUserHeaderFlg = function (objGrid)
{
	return false;
};

/**
* @class 유저헤더를 이용한 정렬
* @param {Object} grid - 대상그리드
* @return N/A
* @example
* this._gfnGirdUserHeaderExcuteSort(objGrid);
*/
_pForm._gfnGirdUserHeaderExcuteSort = function (objGrid, headCellIndex, multiple)
{
	const bindCol = objGrid.getCellProperty("head", headCellIndex, "calendarweekformat");
	if( this.gfnIsNull(bindCol)) return false; //헤더에 바인드없음
	
	let bodyCellIdx = 0;
	const nbodyCnt = objGrid.getCellCount("body");
	
	for( let i=0; i<nbodyCnt; i++){
		let tmp =  objGrid.getCellProperty("body", i, "text");
		if( tmp == bindCol ){
			bodyCellIdx = i;
			break;
		}
	}
	let rtn = this._gfnGridSetSortStatus(objGrid, headCellIndex, multiple, "", bodyCellIdx);
	if(rtn){
		this._gfnGridExecuteSort(objGrid,multiple);
	}
};

/**
* @class 정렬가능여부리턴
* @param {Object} grid - 대상그리드
* @param {Number} headCellIndex - 대상셀INDEX
* @param {Boolean}multiple - 멀티소트여부 
* @param {Number} sortStatus - 소트상태  
* @return{Boolean} sort 가능/불가능 여부
* @example
* this._gfnGridSetSortStatus(obj, e.cell, multiple);	
*/
_pForm._gfnGridSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus, bodyCellIndex)
{    
	// head cell index 에 해당하는 body cell index
	if( this.gfnIsNull(bodyCellIndex)){
		bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, headCellIndex);
	}
	if ( bodyCellIndex < 0 ) return false;
	
	// body cell index 에 해당하는 바인드 컬럼명
	let columnName = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);
	if ( this.gfnIsNull(columnName) ){
		trace("Check Grid body cell bind value");
		return false;
	}
	
	if ( this.gfnIsNull(isMultiple) ) isMultiple = false;
	if ( this.gfnIsNull(sortStatus) ) sortStatus = -1;
	
	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
	if ( this.gfnIsNull(grid.sortInfos) ){
		grid.sortInfos = {};
	}
	
	// 정렬대상컬럼 (순서중요)
	if ( this.gfnIsNull(grid.sortItems) ){
		grid.sortItems = [];
	}
	
	
	let sortInfos = grid.sortInfos,
	sortItems    = grid.sortItems,
	
	//sortMulti  =  grid.sortMulti,
	sortInfo = sortInfos[columnName],
	sortItem,
	status;
	
	if ( this.gfnIsNull(sortInfo) )
	{
		let headText = grid.getCellText(-1, headCellIndex);
		
		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
		let refCell = this._gfnGridGetGridCellObject(grid, "head", headCellIndex);
		sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell,cellCnt : -1};
	}
	
	// set sort status
	if ( isMultiple ) {		
		
		status = sortInfo.status;
		
		if ( sortStatus == -1 ) {
			if ( status == 0 ) {
				sortInfo.status = 1;
			} 
			else if ( status == 1 ) {
				sortInfo.status = 2;
			} 
			else if ( status == 2 ) {
				sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
			}
		}
		else {
			sortInfo.status = sortStatus;
		}
		
		
		if(sortInfo.cellCnt == -1 )
		{   
			this.pSortNumber++;
			sortInfo.cellCnt = this.pSortNumber; 
		}	
		
		
	}else {
		
		for (let p in sortInfos) {
			if ( sortInfos.hasOwnProperty(p) )
			{
				sortInfo = sortInfos[p];
				//소트 카운트 초기화
		        this.pSortNumber =  0;
				sortInfo.cellCnt = -1; 
				
				if ( p == columnName ) {
					status = sortInfo.status;
					
					if ( sortStatus == -1 ) {
						if ( status == 0 ) {
							sortInfo.status = 1;
						} 
						else if ( status == 1 ) {
							sortInfo.status = 2;
						} 
						else if ( status == 2) {
							sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
						}
					}else {
						sortInfo.status = sortStatus;
					}
				}else {
					
					sortInfo.status = 0;
				}		
				
				if ( sortInfo.status == 0 ){
					for (var j=0, len2=sortItems.length; j<len2; j++) {
						if ( sortItems[j] !== columnName ) {
							sortItems.splice(j, 1);
							break;
						}
					}
				}
			}
		}
	}
	
	// 컬럼정보 등록
	let hasItem = false;
	for (let i=0, len=sortItems.length; i<len; i++) {
		if ( sortItems[i] == columnName ) {
			hasItem = true;
			break;
		}
	}	
	if ( !hasItem ){
		sortItems.push(columnName);
	}
	return true;
}; 

/**
* @class head cell에 match되는 body cell을 얻어온다
* @param {Object}  grid 대상 Grid Component
* @param {Number} eadCellIndex head cell index
* @return{Number}  body cell index
* @example
* this._gfnGridSetSortStatus(obj, e.cell, multiple);	
*/ 
_pForm._gfnGridGetBodyCellIndex = function(grid, headCellIndex, useColspan) 
{	//, useColspan) 
	if( this.gfnIsNull(useColspan)) useColspan=false;
	// Max Head Row Index
	let maxHeadRow = 0 , i=0;
	let maxBodyRow = 0;
	for (len=grid.getCellCount("head"); i<len; i++) {
		var row = grid.getCellProperty("head", i, "row");
		if (maxHeadRow < row) {
			maxHeadRow = row;
		}
	}
	// Max Body Row Index
	for (len=grid.getCellCount("body"); i<len; i++) {
		var row = grid.getCellProperty("body", i, "row");
		if (maxBodyRow < row) {
			maxBodyRow = row;
		}
	}
	
	if (maxHeadRow == 0 && maxBodyRow == 0) {
		// 		var headcolspan = grid.getCellProperty("head", headCellIndex, "colspan");
		// 		var bodycolspan = grid.getCellProperty("body", headCellIndex, "colspan");
		// 		
		// 		if( headcolspan == bodycolspan ){
		// 			return headCellIndex;
		// 		}
		useColspan = true;
	}
	
	// Body Row 가 1개 이상일 경우
	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
	let cellIndex = -1;
	let sRow = -1;
	let nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
	let nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
	let nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));				
	
	if (maxHeadRow > maxBodyRow) 
	{
		sRow = nRow - (maxHeadRow - maxBodyRow);
		sRow = (sRow < 0 ? 0 : sRow);
	}
	else 
	{
		sRow = nRow;
	}
	let cRow, cCol, cColspan, cRowspan;
	for (let i=0, len=grid.getCellCount("body"); i<len; i++) 
	{
		cRow = parseInt(grid.getCellProperty("body", i, "row"));
		cCol = parseInt(grid.getCellProperty("body", i, "col"));	
		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));					
		cRowspan = parseInt(grid.getCellProperty("body", i, "rowspan"));
		if( cRowspan > 1 )
		{
			if ( useColspan ){
				if (sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}else{
				if (sRow >= cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}else{	
			if ( useColspan ){
				if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}else{
				if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}
	}
	return cellIndex;
};

/**
* @class body cell index로 binding 된 컬럼명을 얻어온다.
* @param {Object}  grid 대상 Grid Component
* @param {Number} eadCellIndex head cell index
* @return{String} column id
* @example
* this._gfnGridGetBindColumnNameByIndex(obj, e.cell);	
*/  
_pForm._gfnGridGetBindColumnNameByIndex = function(grid, index) 
{
	let text = "";
	let columnid = "";
	let subCell = grid.getCellProperty("body", index, "subcell");
	
	if ( subCell > 0 ){
		text = grid.getSubCellProperty("body", index, 0, "text");
	}
	else{
		text = grid.getCellProperty("body", index, "text");
	}
	
	if ( !this.gfnIsNull(text) ){
		if ( text.search(/^BIND\(/) > -1 ) {	
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} else if ( text.search(/^bind:/) > -1 ) {
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
};

/**
* @class 소트를 실행한다
* @param {Object}  grid 대상 Grid Component
* @return{String}  N/A
* @example
* this._gfnGridExecuteSort(obj);	
*/  
_pForm._gfnGridExecuteSort = function(grid,multiple) 
{
	let sortInfo, 
	sortItem,
	sortInfos = grid.sortInfos,
	sortItems = grid.sortItems,
	columnName,
	status,
	cell,
	sortString = "";
	let	oldsortInfox;
	
	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;
	
	// keystring 조합
	for (let i=0; i<sortItems.length; i++) {
		columnName = sortItems[i];
		sortInfo = sortInfos[columnName];
		status = sortInfo.status;
		
		cell = sortInfo.refCell;
		
		let grdCellIdx = grid.getBindCellIndex("body", columnName);
		
		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
		// 확인하여 없으면 제거해 준다.
		if ( this.gfnIsNull(cell) || grdCellIdx < 0 ){
			// 컬럼정보제거
			sortItems.splice(i, 1);
			sortInfos[columnName] = null;
			delete sortInfos[columnName];
			
			i--;
		}else if ( status > 0 ) {
			sortString += (status == 1 ? "+" : "-") + columnName;
		}
	}
	
	let ds = grid.getBindDataset();
	// keystring 확인
	let curKeyString = ds.keystring;
	let groupKeyString = "";
	
	if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 ){
		let sIndex = curKeyString.indexOf("S:");
		let gIndex = curKeyString.indexOf("G:");
		
		if ( sIndex > -1 ){
			groupKeyString = "";
		}else{
			if ( gIndex < 0 )
			{
				groupKeyString = "G:"+curKeyString;
			}
			else
			{
				groupKeyString = curKeyString;
			}
		}
	}else{
		let temps = curKeyString.split(",");
		let temp;
		for (let i=0,len=temps.length; i<len; i++){
			temp = temps[i];
			if ( temp.length > 0 && temp.indexOf("S:") < 0 ){
				if ( temp.indexOf("G:") < 0 )
				{
					groupKeyString = "G:"+temp;
				}else{
					groupKeyString = temp;
				}
			}
		}
	}
	
	if ( sortString.length > 0 ){
		let sortKeyString = "S:"+sortString;
		
		if ( groupKeyString.length > 0 ){
			ds.keystring = sortKeyString + "," + groupKeyString;
		}else{
			ds.keystring = sortKeyString;
		}
		
		grid.sortKeyString = sortKeyString;
	}else{		
		ds.keystring = groupKeyString;
		grid.sortKeyString = "";
	}
	
	// 정렬표시
	const type = this.MARKER_TYPE;
	let index, marker;
	let grdCellCss;
	let oldcell = 0;
	for (let p in sortInfos) {
		if ( sortInfos.hasOwnProperty(p) ){		 
			
			sortInfo = sortInfos[p];			
			cell = sortInfo.refCell;
			
			if ( cell )
			{
				
				index = cell._cellidx;
				var sortStatus = sortInfo.status;
				var pMultiCnt = sortInfo.cellCnt == -1 || sortInfo.cellCnt == -2 ? "" : "(" +sortInfo.cellCnt+")";
				
				marker = this.gfnDecode(sortStatus, 1, this.MARKER[0], 2, this.MARKER[1],  "");
			    if(this.gfnIsNull(marker)) pMultiCnt = "";
				
				grid.setCellProperty( "head", index, "text", sortInfo.text + " " +marker + pMultiCnt);
				
			}
		}
	}
};

/**
* Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
* @param {Grid} grid 대상 Grid Component
* @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
* @param {number} index 얻고자 하는 cell 의 index
* @return {object} cell object
*/
_pForm._gfnGridGetGridCellObject = function(grid, band, index)
{
	// 내부속성을 통해 얻어온다.
	let refCell;
	let format = grid._curFormat;
	if (format){
		if ( band == "head" ){
			refCell = format._headcells[index];
		}
		else if ( band == "body" ){
			refCell = format._bodycells[index];
		}
		else if ( band == "summ" || band == "summary" ){
			refCell = format._summcells[index];
		}
	}
	return refCell;
};

/**
* @class 그리드의 Sort Mark 제거
* @param {Object} Grid 대상그리드
* @return N/A
*/  
_pForm._gfnClearSortMark = function(obj)
{
	let sortInfos = obj.sortInfos;
	let sortItems = obj.sortItems;
	
	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;
	
	// 정렬상태 초기화.
	for( let j=0; j<sortItems.length;j++){
		let col = sortItems[j];
		let sortInfo = sortInfos[col];
		sortInfo.status = 0;	
	}
	
	// 정렬실행
	this._gfnGridExecuteSort(obj);
	
	// 정보 초기화
	obj.sortInfos = {};
	obj.sortItems = [];
};

/**
* @class  마우스 우클릭 이벤트
* @param  {Object} objGrid	- 대상그리드
* @param  {Event}  e		- 우클릭이벤트 
* @return  N/A
* @example
* this._gfnGetHeadBodyIndex(this.grdMain, this.dsMain);	
*/
_pForm.gfnGrid_onrbuttondown = function (objGrid, e)
{
	//if(e.row == -9) return;
    if(e.row  == -1) return;    //헤더 클릭 시	
	
	let innerds;
	let pform = this.gfnGetTopLevelForm(this); 
	let space = "  ";
	
	if(e.row != -1)
	{
		
		let bindnm = objGrid.binddataset;
		let gdsGridPopupMenu =  nexacro.getApplication().gdsGridPopupMenu;
		objGrid.popupMenu.grid = objGrid;
		objGrid.popupMenu.cellindex = e.cell;
		objGrid.popupMenu.rowindex = e.row;
		objGrid.popupMenu.pform   = this;
		
		// trackPopupByComponent 이용 : 하단에서 위치 오류 발생, 패치 2018년 9월 예정
		let x = nexacro.toNumber(system.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objGrid, 0));
		let y = nexacro.toNumber(system.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objGrid, 0));     
		
		objGrid.popupMenu.trackPopupByComponent(objGrid, x, y);	
		
	}
};

/**
* @class  gfnCreatePopupMenu 내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
* @param {Object} objGrid	- 대상그리드
* @param {Evnet}  e 		- 팝업메뉴클릭이벤트
* @return N/A
*/
_pForm.gfnPopupmenu_onmenuclick = function (objMenu, e)
{ 
	const sBrowser   = system.navigatorname;
	const selectId   = e.id;
	const grid 	   = objMenu.grid;
	
	let thisForm   = objMenu.pform;
	let innerds    = objMenu.innerdataset;
	let nCellIndex = objMenu.cellindex;	
	let nRowIndex  = objMenu.rowindex;
	let captionCol = objMenu.captioncolumn;
	let topForm   = this.gfnGetTopLevelForm(this);
	let pform      = innerds.indexOf("gds") > -1 ?  app: topForm;  
	let findKey    =  pform[innerds].findRow("id",e.id);
	let captionNm   = pform[innerds].getColumn(findKey,captionCol);
	let bSucc       = "";	
	let uExcelGrid = grid;
	
	if("uexcelgrd" in grid) uExcelGrid = topForm[grid.uexcelgrd];
	
	if(selectId == "colbind") return;      
	
	switch(nexacro.trim(selectId)) {
		
	case "copy" :  // 복사 		
		this.gfnSetGrdCopy(grid);			
		break;		
	case "selectrow" :  //선택(row);
		grid.selecttype = "row";
		break;
	case "selectcell" : //선택(cell)
		grid.selecttype = "cell";
		break;
	case "selectmultirow" : //멀티(row)
		grid.selecttype = "multirow";		
		break;
	case "selectarea" : //멀티(area)
		grid.selecttype = "multiarea";				
		break;			
	case "filter" :  // 필터
		this._gfnGridAddFilter(grid);
		break;
	case "filterCancel" :  // 필터취소
		this._gfnGridCellFilterFree(grid);
		break;			
	case "find" :  // 찾기	
		this._gfnGridCellFind(grid,nCellIndex,nRowIndex);
		break;							
	case "colfix" :  // 열고정				
		this._gfnGridcellFix(grid, nCellIndex, nRowIndex);
		break;
	case "colfixHide" :  // 열고정 해제		
		this._gfnGridCellFree(grid);
		break;
	case "colHide" :  // 컬럼 숨기기		
		this._gfnGridColHideShow(grid, nCellIndex,true);
		break;
	case "colHideCancel" :  //  컬럼 숨기기 해제			
		this._gfnGridColHideShow(grid, nCellIndex,false);
		break;
	case "excelExport" : // 엑셀 직접 출력			
		this.gfnExcelExport(uExcelGrid);			
		break;
	case "excelExportSeCol" :  // 엑셀저장 팝업 (컬럼선택);			
		this._gfnSelectExcelPopup(uExcelGrid,nCellIndex);       
		break;
		
	case "personal" :  // 그리드 저장(개인화)		
		this._gfnGridPersonalize(grid);
		break;			
	case "initial" :  // 그리드 초기화
		grid.formats  = "<Formats>" + grid.orgformat2 + "</Formats>";
		this._gfnGridPersonalizeInit(grid);  
		
		// grid.formats = "<Formats>" + grid.orgformat2 + "</Formats>";
		break;
		
	default:   // 사용자 팝업	
		
		break;			
	}
	
};

/**
* 엑셀 저장 팝업(컬럼선택)
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm._gfnSelectExcelPopup = function (grid,nCellIndex)
{
    let params  = {id: "popExcelExport", url : "cmm::cmmExcelSelect.xfdl"
		,titletext:"엑셀저장(컬럼선택)",paramGrid:grid};
	
	this.gfnShowModal( params,(resGrid)=>{
			
			if(!this.isNull(resGrid)){
				//   this.console.log( "resGrid : " +resGrid);
			}
			
		});
};


/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
셀필터(cellFilter)
* @param {Object} objGrid - 대상그리드	
* @param {Number} nCell - 셀필터 셀 인덱스
* @return N/A
* @example
* this._gfnGridFilter(this.grdMain);	
*/
_pForm._gfnGridAddFilter = function(objGrid)
{
	// grdObj._uHeaderChk = true;  	
	let sPopupCallBack = "gfnGridFilterCallback";		
	let oparam = {id :"cmmGridFilter",url: "cmm::cmmGridFilter.xfdl",pvGrid:objGrid ,titletext:'필터팝업'};
	this.gfnShowModal( oparam,
		sPopupCallBack
	);
};
/**
* @class  _gfnGridSetCssclass 행고정/해제시 css설정
* @param {Object} objGrid	- 대상그리드
* @return N/A
* @example
* this._gfnGridSetCssclass(this.grdMain);	
*/
_pForm._gfnGridSetCssclass = function (objGrid)
{
	let clname = "Cell_WF_Fixed";
	clname = nexacro.wrapQuote(clname);
	
	objGrid.enableredraw = false;
	
	for( let k=0; k<objGrid.getFormatColCount(); k++){
		var expr = "";
		if( objGrid.fixedRow >= 0 ){
			expr = "expr:comp.fixedRow==currow?"+clname+":''";
		}
		objGrid.setCellProperty("body", k, "cssclass", expr);
	}
	objGrid.enableredraw = true;
	objGrid.setFixedRow(objGrid.fixedRow);
};


/**
* @class  그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크 ALL/None)
* @param {Object} objGrid - 대상그리드
* @param {Evnet}  e	   - 헤드클릭이벤트
* @param {Evnet}  sCheck	   "Y" :전체 체크 "N" : "전체해제"
* @return  N/A
* @example
* this._gfnHeadCheckSelectAll(objGrid, ncell,"Y"); //ALL CHECK
*/
_pForm._gfnHeadCheckSelectAll = function (objGrid, ncell, sCheck)
{
	if(objGrid.readonly == true) return;
	
	let sType,sTypeBody;
	let sChk;
	let sVal;
	let sChkVal;
	let oDsObj;
	let nHeadCell  = ncell;
	let nBodyCell;
	let nSubCnt = objGrid.getSubCellCount("head", nHeadCell);
	
	oDsObj  = objGrid.getBindDataset();	
	
	if(oDsObj.getRowCount() < 1) return;
	
	
	
	if(objGrid.getCellCount("body") != objGrid.getCellCount("head") && objGrid.getCellCount("head")> 0) {
		
		nBodyCell = parseInt(objGrid.getCellProperty("head", nHeadCell, "col"));
	} else {
		
		nBodyCell = nHeadCell;
	}
	
	if(objGrid.getCellCount("head")> 0){
		sType = objGrid.getCellProperty("head", nHeadCell, "displaytype");
		if(sType != "checkboxcontrol") 	return;
	}	
	
    sTypeBody = objGrid.getCellProperty("body", nBodyCell, "displaytype");
	sChkVal = objGrid.getCellProperty("body", nBodyCell, "text");
	
	if(this.isNull(sChkVal)) return;	
	if(sTypeBody != "checkboxcontrol") 	return;
	
	sChkVal = sChkVal.toString().replace("bind:", "");
	
	if(!this.gfnIsNull(sCheck)) sVal = sCheck == "Y" ? "N" : "Y"; 
	else if(objGrid.getCellCount("head")> 0)  sVal = objGrid.getCellProperty("head", nHeadCell, "text");
	else return;
	
	//그리드 전체 체크 후 처리
    oDsObj.updatecontrol = false;	
    sChk = sVal == "Y" ?  "N" : "Y";	
	
	if(objGrid.getCellCount("head")> 0) objGrid.setCellProperty("head", nHeadCell, "text", sChk);
	
	// Body셋팅
	oDsObj.enableevent =false;
	for(let i=0 ; i< oDsObj.rowcount ; i++) {
		
		oDsObj.setColumn(i, sChkVal, sChk);		
	}
	oDsObj.enableevent = true;
	
	//trace(" oDsObj : " + oDsObj.saveXML());
	
	//그리드 전체 체크 후 처리
	if(nexacro._isFunction(this.cfnHeadAfterCheckSelectAll)) 
	{
		this.cfnHeadAfterCheckSelectAll(objGrid,ncell);
	}
	
	oDsObj.updatecontrol = true;
	
};

/**
* @class  마우스우클릭시 표현될 팝업메뉴생성
* @param  {Object} objGrid	- 대상그리드
* @return  N/A
* @example
* this._gfnGetHeadBodyIndex(this.grdMain, this.dsMain);	
*/
_pForm._gfnMakeGridPopupMenu = function (objGrid, stype)
{
	
   	const objParentForm = objGrid.parent;
	const objPopupDs = app.gdsGridPopupMenu;
	const sPopMenu = "popMenu_"+objGrid.name+"_"+  this.gfnGetMenuCd();
	
	//popupmenu 동적 생성
	const objPopMenu = new PopupMenu(sPopMenu,null, null, 130, 464);
//	objPopMenu.cssclass = "Pmnu_WF_List";
	objParentForm.addChild(objPopMenu.name, objPopMenu);
	objPopMenu.innerdataset = objPopupDs.name;
	//objPopMenu.maxwidth = 464;
	
	objPopMenu.captioncolumn = "caption";	
	objPopMenu.enablecolumn = "enable";
	objPopMenu.idcolumn = "id";
	objPopMenu.levelcolumn = "level";
 	objPopMenu.setEventHandler("onmenuclick", this.gfnPopupmenu_onmenuclick, objParentForm);
	objPopMenu.show();
	
	objPopMenu.itemheight = 29;
	// objPopMenu._utype = stype;
	objPopMenu.grid = objGrid;
	objGrid.popupMenu = objPopMenu;
};

/**
* 그리드 복사
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnSetGrdCopy  = function (objGrid, e)
{
	//copy(복사)			
	
	if(this.gfnIsNexacro()){
		this._gfnGridCopyEventForRuntime(objGrid, e);
	}else {
		this._gfnGridCopyEventForChrome(objGrid, e);
	}
	//그리드 복사 되었습니다. 생성
	this.gfnToast("10162"); //복사되엇습니다.
};

//////////////////////////////////////////////////////////////////////////Popupmenu//////////////////////////////////////////////////////////////////////////
/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
셀고정(colfix)
* @param {Object} objGrid  - 대상그리드
* @param {Number} nCellIdx - 셀고정 셀인덱스
* @param {Number} nRowIdx  - 셀고정 로우 인덱스
* @return N/A
* @example
* this._gfnGridcellFix(this.grdMain, 1, 2);	
*/
_pForm._gfnGridcellFix = function (objGrid, nCellIdx, nRowIdx)
{
	let sBandType;
	sBandType = "Body";
	// 	if(nRowIdx == -1) sBandType = "Head";
	// 	else if(nRowIdx == -2) sBandType = "Summary";
	// 	else sBandType = "Body";
	
	let nCol 	 = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "col"));
	let  nColSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "colspan"));
	let nRowSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nCellIdx, "rowspan"));
	let  nVal = objGrid.getCellpos
	let nMaxCol = 0;
	let nRealCol;
	let nRealColSpan;
	let nRealCol_end;
	
	objGrid.enableredraw = false;
	
	objGrid.setFormatColProperty(0, "band", "body");	
	
	for (let i=0; i<objGrid.getCellCount("Head"); i++)
	{
		nRealCol = nexacro.toNumber(objGrid.getCellProperty("Head", i, "col"));
		nRealColSpan = nexacro.toNumber(objGrid.getCellProperty("Head", i, "colspan"));
		nRealCol_end = nRealCol+nRealColSpan-1;
		if ( nRealCol == nCol||nRealCol_end==nCol)
		{
			
			if(nRealColSpan>1)
			{
				//objGrid.setCellProperty("Head", i, "line", "1 solid #dcdbdaff,2 solid #919191ff");
				objGrid.setCellProperty("Head", i, "border", "1px solid #A3A4B7, 1px solid #4d4e65, 1px solid #A3A4B7, 1px solid #BFC0D2");
				nCol = nRealCol_end;
			}else
			{
				
				
				//objGrid.setCellProperty("Head", i, "line", "1 solid #dcdbdaff,2 solid #919191ff");
				objGrid.setCellProperty("Head", i, "border", "1px solid #A3A4B7, 1px solid #4d4e65, 1px solid #A3A4B7, 1px solid #BFC0D2");
				nCol = nRealCol_end;
			}
		}else
		{
			objGrid.setCellProperty("Head", i, "border", "");
		}
	}
	
	for (let i=0; i<objGrid.getCellCount("Body"); i++){	
		
		if (objGrid.getCellProperty("Body", i, "col") == nCol)
		{
			
			//objGrid.setCellProperty("Body", i, "line", "1 solid #dcdbdaff,2 solid #919191ff");
			objGrid.setCellProperty("Body", i, "border", "1px solid #CACACA, 1px solid #4d4e65, 1px solid #CACACA, 1px solid #DDDDDD");
		}
		else
		{
			
			//objGrid.setCellProperty("Body", i, "line", "");
			objGrid.setCellProperty("Body", i, "border", "");
		}
	}	
	
	objGrid.uCellMoving = objGrid.cellmovingtype;
	objGrid.cellmovingtype = "none";
	
	let bandProp = objGrid.getFormatColProperty(nCol,"band");
	if(bandProp != "left") objGrid.setFormatColProperty(nCol, "band", "left");	
	objGrid.enableredraw = true;
};


/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
셀고정해제(colfree)
* @param {Object} objGrid - 대상그리드
* @return N/A
* @example
* this._gfnGridCellFree(this.grdMain);	
*/
_pForm._gfnGridCellFree = function(objGrid)
{
    // objGrid.cellmovingtype = "col";
	// 	for(let i=0; i< objGrid.getFormatColCount(); i++){		
	// 		if(objGrid.getFormatColProperty(i, "band")	== "left"){
	// 		    objGrid.setFormatColProperty(i, "band", "body");	
	// 			objGrid.setCellProperty("head", i, "border", "1px solid #a3a4b7,1px solid #bfc0d2");   
	// 			objGrid.setCellProperty("Body", i, "border", "1px solid #cacaca,1px solid #dddddd");
	// 			break;
	// 		}	
	// 	}
	
	for (let i=0 ; i<objGrid.getCellCount("Body"); i++){
	    objGrid.setCellProperty("head", i, "border", "");   
		objGrid.setCellProperty("Body", i, "border", "");
	}	
	this.console.log(  "objGrid.uCellMoving : " +objGrid.uCellMoving);
	if(objGrid.uCellMoving){
	
	  objGrid.cellmovingtype = objGrid.uCellMoving;
	}
	
	
	this.gv_CellIndex = -1;
};



/**
*  소트항목 초기화 
* @param {objGrid} 소트 Reset 할 그리드
* @return 
* @example
* @memberOf 
*/
_pForm.gfnGrdSertCancel = function (objGrid,flag)
{
   	if(this.gfnIsNull(objGrid))
	{
		alert(" gfnGrdSertCancel param objGrid null ");
		return;
	}
	let pflag = flag || false;   // 취소 여부 flag
	this._gfnClearSortMark(objGrid);
	objGrid.sortInfos = {};
	objGrid.sortItems = [];
	this.pSortNumber = 0;
	this.SORT_TOGGLE_CANCE = true;
	
	const parentFormId      = objGrid.name + "_" + this.gfnGetMenuCd();   // 그리드명_현재MenuId
	
	let sFilGrdSortList = parentFormId + "_Sort";  // 쿠키 (소트항목 그리드) 저장 변수
	let sPrivateGrdSort = nexacro.getPrivateProfile( sFilGrdSortList);  //소트항목
	
	if(this.gfnIsNotNull(sPrivateGrdSort))
	{	 
	    if(pflag)
		{
			
			var bSucc = nexacro.setPrivateProfile( sFilGrdSortList,"");  //소트항목 초기화 
			if(bSucc)
			{
			    const sMsgId = "10077"; // 삭제 되었습니다.				
		    	this.gfnToast(sMsgId);
				return;
			}
		}
		
	}
};


/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
셀필터(cellFilter)
* @param {Object} objGrid - 대상그리드	
* @param {Number} nCell - 셀필터 셀 인덱스
* @return N/A
* @example
* this._gfnGridFilter(this.grdMain);	
*/
_pForm._gfnGridDelFilter = function(objGrid)
{ 
	//	 if(!grdObj._uHeaderChk || this.gfnIsNull(grdObj._uHeaderChk) ) return;
	//if(this.lv_HeaderRow  ==  0 ) return;
	grdObj.deleteContentsRow( "head",this.lv_headerRow );
	
	this.lv_HeaderRow = 0;
	grdObj._uHeaderChk = false;
	
	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
셀필터해제(cellfilterfree)
* @param {Object} objGrid - 대상그리드	
* @param {Number} nCell - 셀필터 셀 인덱스
* @return N/A
* @example
* this._gfnGridCellFilterFree(this.grdMain);	
*/
_pForm._gfnGridCellFilterFree = function(objGrid)
{
	const objDs = objGrid.getBindDataset();
	objDs.filterstr = "";	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
찾기/바꾸기
* @param {Object} objGrid - 대상그리드	
* @param {Number} nCell - 셀필터 셀 인덱스
* @return N/A
* @example
* this._gfnGridCellFind(this.grdMain);	
*/
_pForm._gfnGridCellFind= function(objGrid,nCellIndex,nRowIndex)
{
	const sTitle = "찾기";   //찾기/바꾸기
	let orgselecttype = objGrid.selecttype;	
	let objGrdCell  = objGrid.currentcell;	
    let objCurrentRow = objGrid.currentrow;
	const ds = objGrid.getBindDataset();
	const surl = "cmm::cmmGridFind.xfdl";
	
	let oparam = {id :"cmmFindReplace",url: surl, titletext:sTitle};
	let oArg = {pvGrid:objGrid, pvStrartRow:nRowIndex, pvSelectCell:nCellIndex, pvSelectType:orgselecttype
		,pvCurrentcell:objGrdCell};	
	Object.assign(oparam,oArg);   
	
	this.gfnShowModal( oparam, (resVar)=>{
			
			//select type rollback
			if(!!orgselecttype){
				
				if(!!resVar){
				
					orgselecttype = resVar[0];
					objGrdCell   = resVar[1];
					objCurrentRow = resVar[2];
						
				}	
								
				objGrid.selecttype = orgselecttype;
				if(orgselecttype=="row" ||orgselecttype=="multirow"){
					
					objGrid.selectRow(objCurrentRow);
				}
				
			}
			
		}
	);		  
	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
컬럼 숨기기/보이기
* @param {Object} objGrid - 대상그리드	
* @param {Number} nCell - 셀필터 셀 인덱스
* @return N/A
* @example
* this._gfnGridColHideShow(this.grdMain);	
*/
_pForm._gfnGridColHideShow = function(objGrid,ncell,isShow)
{   	
	if(isShow)
	{  
	    let nTotCellCnt = objGrid.getCellCount("body");
		let nCntCell  = 0;
		
	  	for( let cellIdx=0; cellIdx < objGrid.getCellCount("body"); cellIdx++){
		    
			if( objGrid.getRealColSize(cellIdx,false)  <= 1){
			    nCntCell++;
			}
		}
		
		   // cell 1 남을 경우 return;
		if((objGrid.getCellCount("body")-1)  == nCntCell){
		  return;
		}

        let pcell =  String(ncell);
		let nGridHeight  = objGrid.getRealColSize(ncell,false);	
		
		
		if(this.gfnIsNotNull(objGrid.orgNcell))
		{
			objGrid.orgNcell = objGrid.orgNcell + "," + pcell + ":"+ nGridHeight;
		}
		else
		{
			objGrid.orgNcell = String(pcell) + ":"+ nGridHeight;
		}
		
	  
		objGrid.setRealColSize("body",ncell,0,false);
		
		
			
		//if(objGrid.orgNcell.indexOf(",") > -1)  objGrid.orgNcell = objGrid.orgNcell + "," + ncell;
		
	}
	else
	{
		if(this.gfnIsNotNull(objGrid.orgNcell))
		{   
			let arrSize = objGrid.orgNcell.split(",")
			
			for (let i=0; i<arrSize.length;i++)
			{
				let nTargetCell = nexacro.toNumber(arrSize[i].split(":")[0]);
				let nTargetSize = nexacro.toNumber(arrSize[i].split(":")[1]);
				objGrid.setRealColSize("body",nTargetCell,nTargetSize,false);					  
				//trace(" nTargetCell : " +nTargetCell + "<> nTargetSize : " + nTargetSize);
			}
		}
		objGrid.orgNcell = "";
	}
	
	
	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
엑셀익스포트
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnGridExcelExport(this.grdMain);	
*/
_pForm._gfnGridExcelExport = function(objGrid)
{
	this.gfnExcelExport(objGrid, "*?*?*?*?*?*?*?","");
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
엑셀임포트
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnGridExcelImport(this.grdMain);	
*/
_pForm._gfnGridExcelImport = function(objGrid)
{
	var sDataset = objGrid.binddataset;
	this.gfnExcelImport(sDataset, "sheet1", "A2", "fnImportCallback", objGrid.name + sDataset , this);
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 개인화
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnGridPersonalize(this.grdMain);	
*/
_pForm._gfnGridPersonalize = function(objGrid)
{
	let sOrgFormat = objGrid.orgformat2;
	let sCurFormat = objGrid.getCurFormatString();
	
	this._gfnGridPersonalizeExcute(objGrid);
	
};


/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 개인화내용 저장을 위해 유니크한 아이디를 구성한다.
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnGridPersonalize(this.grdMain);	
*/
_pForm._getUniqueId = function (objGrid)
{
	let sFormId;
	let oForm = objGrid.parent; //대상FORM조회
	
	while (true)
	{
		if(oForm instanceof nexacro.ChildFrame){
			break;
		}else{
			oForm = oForm.parent;
		}
	}
	
	return  oForm.name + "_" + this.gfnGetComponentFullName(objGrid);
	
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 개인화내용 저장을 위해 유니크한 화면아이디를 구성한다.
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnPageUniqueId(this.grdMain);	
*/
_pForm._getPageUniqueId = function (objGrid)
{
	// this.console.log(" this.gfnGetComponentFullName(objGrid) : " + this.gfnGetComponentFullName(objGrid));
	var sFormId;
	var oForm = objGrid.parent; //대상FORM조회
	
	if (this.gfnIsQuickView())
	{
		return this.name;
	}
	
	while (true)
	{
		if(oForm instanceof nexacro.ChildFrame){
			break;
		}else{
			oForm = oForm.parent;
		}
	}
	sFormId = oForm.name;
	
	
	if( sFormId.indexOf("FRAMEWORK_") > -1 ){
		//팝업과 workform구분
		sFormId = "divWork_" + oForm.form.divWork.form.name;
	}
	
	var otf = objGrid.parent.parent;
	if( otf instanceof nexacro.Tabpage){
		//탭안에 그리드가 있을경우
		sFormId += "_" + otf.parent.name +"_"+ otf.name;
	}else if( otf instanceof nexacro.Div && otf.name != "divWork"){
		//div안에 그리드가 있을경우
		sFormId += "_" + otf.name;	
	}
	
	
	return sFormId;
};



/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 개인화실행.
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnGridPersonalize(this.grdMain);	
*/
_pForm._gfnGridPersonalizeExcute = function (objGrid)
{
	
    const evUserId = nexacro.getEnvironmentVariable("evUserId");	
	let sUiId		   = `${this._getPageUniqueId(objGrid)}_${evUserId}` ;
	let sFormatId      = `${this._getUniqueId(objGrid)}_${evUserId}`;
	let nFormatColCnt  = objGrid.getFormatColCount();	
	let sFormat 	= objGrid.getCurFormatString(false);
	let sOrgFormats = objGrid.getFormatString();
	let objGds = app.gdsGridPersonal;
	let nFindRow = objGds.findRow("formatId", sFormatId);
	
	//trace(" ## objGrid : " +objGrid +  "< > nFindRow " +nFindRow);
	if ( nFindRow == -1 ){
		
		let nRow = objGds.addRow();
		objGds.setColumn(nRow, "uiId", sUiId);				// 화면아이디
		objGds.setColumn(nRow, "formatId", sFormatId);	// 그리드아이디
		objGds.setColumn(nRow, "colDesc", sFormat);
		objGds.setColumn(nRow, "colOrgDesc", sOrgFormats);
		objGds.setColumn(nRow, "colCnt", nFormatColCnt);
	} else{
		
		objGds.setColumn(nFindRow, "uiId", sUiId);				// 화면아이디
		objGds.setColumn(nFindRow, "formatId", sFormatId);	// 그리드아이디
		objGds.setColumn(nFindRow, "colDesc", sFormat);
		objGds.setColumn(nFindRow, "sOrgFormat", sOrgFormats);
		objGds.setColumn(nFindRow, "colCnt", nFormatColCnt);
	}
	
	
	//개인화 저장
	let sXML = objGds.saveXML();	
	let bSucc =  nexacro.setPrivateProfile("gdsGridPersonal", sXML);	
	if(bSucc)
	{	  
		
		this.gfnToast("10108");// 저장 되었습니다.
	}
	
};

/**
* @class 그리드 개인화 초기화<br>
그리드 개인화실행.
* @param {Object} objGrid - 대상그리드	
* @return N/A
* @example
* this._gfnGridPersonalize(this.grdMain);	
*/
_pForm._gfnGridPersonalizeInit = function (objGrid)
{
    const evUserId = nexacro.getEnvironmentVariable("evUserId");
	let objGds    = app.gdsGridPersonal;		
	let sUiId		   = `${this._getPageUniqueId(objGrid)}_${evUserId}`;
	let sFormatId      = `${this._getUniqueId(objGrid)}_${evUserId}`;
	let nFindRow  = objGds.findRow("formatId", sFormatId);	
	
	
	if(nFindRow > -1){
		objGds.deleteRow(nFindRow);	
		let sXML = objGds.saveXML();	 
		let bSucc =  nexacro.setPrivateProfile("gdsGridPersonal", sXML);	
		
		this.gfnToast("10161");  // 정상적으로 처리 되었습니다.
	}
};
//////////////////////////////////////////////////////////////////////////POPUPMENU CALLBACK///////////////////////////////////////////////////////////

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 개인화 메세지콜백
* @param {String} sid - popupid	
* @param {String} rtn - return value	 
* @return N/A
* @example
* this.gfnGridFormatChangeFormatCallback("TEST", "");	
*/
_pForm.gfnGridFormatChangeMsgCallback = function (sid, rtn)
{
	//TODO.
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 찾기/바꾸기 팝업 콜백
* @param {String} sid - popupid	
* @param {String} rtn - return value	 
* @return N/A
* @example
* this.gfnReplaceCallback("TEST", "");	
*/
_pForm.gfnReplaceCallback = function (sid, rtn)
{
	//TODO
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 필터 팝업 콜백
* @param {String} sid - popupid	
* @param {String} rtn - return value	 
* @return N/A
* @example
* this.gfnGridFilterCallback("TEST", "");	
*/
_pForm.gfnGridFilterCallback = function (sid, rtn)
{
	//TODO
};

/**
* @class 그리드 우클릭 POPUPMENU 내부함수<br>
그리드 컬럼숨기기/보이기
* @param {String} sid - popupid	
* @param {String} rtn - return value	 
* @return N/A
* @example
* this.gfnColumnHidCallback("TEST", "");	
*/
_pForm.gfnColumnHidCallback = function (sid, rtn)
{
	//TODO
};

//////////////////////////////////////////////////////////////////////////POPUPMENU FUNCTION///////////////////////////////////////////////////////////
/**
* @class   주어진 문자열을 그리드에서 찾는다.
* @param {Object} grid - 대상그리드	
* @param {String} findText - 찾을 문자열	
* @param {Object} option - 찾기옵션	
* @return {Object} 찾은 열과행
* @example
* this.gfnFindGridText(this.fv_grid, txt, option);
*/
_pForm.gfnFindGridText = function (grid, findText, option)
{
	grid.lastFindText = findText;
	grid.lastFindOption = option;
	
	// 찾을 옵션
	let direction = option.direction;
	let position = option.position;
	let scope = option.scope;
	let condition = option.condition;
	let strict = option.strict;
	
	let dataset = grid.getBindDataset();
	let startCell = ( position == "current" ? grid.currentcell : grid.lastFindCell );
	let startRow = ( position == "current" ? grid.currentrow : grid.lastFindRow );
	
	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
	if ( scope == "col" && !this.gfnIsNull(option.cell) )
	{
		startCell = option.cell;
	}
	
	//	this.console.log(" startCell  : " +startCell);
	
	let findRow = findCell = -1;
	let rowCnt = dataset.rowcount;
	let bodyCellCnt = grid.getCellCount("body");
	
	// 대소문자 구분
	if ( !strict )
	{
		findText = findText.toUpperCase();			
	}
	
	if ( direction == "prev" )
	{
		startRow -= 1;	
		if ( startRow < 0 )
		{
			startRow = rowCnt-1;
		}
	}
	else
	{
		startRow += 1;
		if ( startRow >= rowCnt )
		{
			startRow = 0;
		}
	}
	
	let loopCnt = rowCnt;
	while ( loopCnt > 0 )
	{
		// 문자열 비교
		if ( this._compareFindText(grid, startRow, startCell, findText, condition, strict) )
		{
			findRow = startRow;
			findCell = startCell;
			break;
		}
		
		// 방향 (이전, 다음)
		if ( direction == "prev" )
		{
			startRow -= 1;
			if ( startRow < 0 )
			{
				startRow = rowCnt-1;
			}				
		}
		else
		{
			startRow += 1;
			if ( startRow > (rowCnt-1) )
			{
				startRow = 0;
			}
		}
		
		loopCnt--;
	}
	// 마지막 찾은 위치 지정
	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
	if ( findRow > -1 && findCell > -1 )
	{
		grid.lastFindRow = findRow;
		grid.lastFindCell = findCell;
	}
	
	return [findRow, findCell];
};

/**
* @class   주어진 문자열을 그리드에서 찾아서 바꿀 문자열로 변경한다.
* @param {Object} grid - 대상 Grid Component
* @param {String} findText - 찾을 문자열
* @param {String} replaceText - 바꿀 문자열
* @param {Object} option - 찾을 옵션
* @param {Boolean} all - 모두 바꾸기 여부
* @return {Number} 변경 항목 개수.
* @example
*this.gfnReplaceGridText(grid, findText, replaceText, option, bAllChg);
*/
_pForm.gfnReplaceGridText = function(grid, findText, replaceText, option, all)
{
	// F3 발생 시 마지막 찾은 문자열 계속 찾기 위해 값 지정
	grid.lastFindText   = findText;
	grid.lastFindOption = option;
	
	if (this.gfnIsNull(all) )
	{
		all = false;
	}
	
	
	// 찾을 옵션 ( 바꾸기의 범위는 특정 칼럼만 지원) 
	let direction = option.direction;
	let position = option.position;
	let condition = option.condition;
	let strict = option.strict;
	let cell = option.cell;	
	let dataset = grid.getBindDataset();//this.gfnLookup(grid.parent, grid.binddataset);
	
	// 바꾸기의 범위는 특정 칼럼만 지원
	let startCell = option.cell;
	let startRow;
	
	if ( position == "current" )
	{
		startRow = grid.currentrow;
	}
	else
	{
		let lastReplaceRow = grid.lastReplaceRow;
		if ( this.gfnIsNull(lastReplaceRow) )
		{
			startRow = 0;
		}
		else
		{
			startRow = lastReplaceRow;
		}
	}
	
	let results = [];
	let findRow = findCell = -1;		
	let rowCnt = dataset.rowcount;
	let bodyCellCnt = grid.getCellCount("body");
	
	// 바꿀 문자열 목록에 등록
	//this.appendFindReplaceCache("replace", replaceText);
	
	// 대소문자 구분
	if ( !strict )
	{
		findText = findText.toUpperCase();	
	}
	
	// 열 범위 바꾸기
	let result;
	let loopCnt = rowCnt;
	while ( loopCnt > 0 )
	{
		// 문자열 비교
		if ( this._compareFindText(grid, startRow, startCell, findText, condition, strict) )
		{
			findRow = startRow;
			findCell = startCell;
			result = this._replaceGridCellText(grid, findRow, findCell, findText, replaceText, strict);
			results.push(result);
			if ( !all ) break;
		}
		
		// 방향 (이전, 다음)
		if ( direction == "prev" )
		{
			startRow -= 1;
			if ( startRow < 0 )
			{
				startRow = rowCnt-1;
			}				
		}
		else
		{
			startRow += 1;
			if ( startRow > (rowCnt-1) )
			{
				startRow = 0;
			}
		}
		
		loopCnt--;
	}
	
	// 마지막 바꾸기 위치 지정
	grid.lastReplaceRow = findRow;
	return results;
};

/**
* @class   바꾸기에 의해 찾아진 행, 셀 인덱스에 해당하는 데이터를 실제 변경한다.
* @param {Object} grid 대상 Grid Component
* @param {Number} findRow 찾아진 행 인덱스
* @param {Number} findCell 찾아진 셀 인덱스
* @param {String} findText 찾을 문자열
* @param {String} replaceText 바꿀 문자열
* @param {Boolean} strict 대소문자 구분
* @return {Object} result - 결과
* @example
* this._replaceGridCellText(grid, findText, replaceText, option, bAllChg);
*/
_pForm._replaceGridCellText = function(grid, findRow, findCell, findText, replaceText, strict)
{
	let result = {'replace': true, 'message': this.gfnGetMessage("100000016", "") , 'row': findRow, 'cell': findCell};
	
	// expr 등에 의해 셀이 실제 입력 가능한지 테스트 후 처리
	let dataset = grid.getBindDataset();//this.gfn_Lookup(grid.parent, grid.binddataset);
	dataset.rowposition = findRow;
	grid.setCellPos(findCell);
	
	// 	if ( editable )
	// 	{
	// 		grid.showEditor(false);
	// 	}
	// 	else
	// 	{
	// 		 return;
	// 	}
	let displayType = grid.getCellProperty("body", findCell, "displaytype");
	let editType 	= grid.getCellProperty("body", findCell, "edittype");
	let text 		= grid.getCellProperty("body", findCell, "text");
	let bindColid 	= text.replace("bind:", "");
	
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	let dataType = this.gfnGetBindColumnType(grid, findCell);
	if ( this.gfnIsNull(displayType) || displayType == "normal" )
	{
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
			displayType = "text";
		}
	}
	
	let replace;
	let replaceVal;
	let columnValue = dataset.getColumn(findRow, bindColid);
	let displayValue = grid.getCellText(findRow, findCell);
	if ( displayType == "number" || displayType == "currency" )
	{
		// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 변경
		if ( displayType == "currency" )
		{
			var code = findText.charCodeAt(0);
			if ( code == 65510 || code == 92 )
			{
				findText = findText.substr(1);
			}
			
			code = replaceText.charCodeAt(0);
			if ( code == 65510 || code == 92 )
			{
				replaceText = replaceText.substr(1);
			}
			
			code = displayValue.charCodeAt(0);
			if ( code == 65510 || code == 92 )
			{
				displayValue = displayValue.substr(1);
			}			
		}
		
		// 셀에 보여지는 값에서 찾는 문자열 값을 변경
		
		// 대소문자 구분
		if ( strict )
		{
			displayValue = displayValue.replace(findText, replaceText);
		}
		else
		{
			displayValue = this.gfnReplaceIgnoreCase(displayValue, findText, replaceText);
		}		
		
		// 숫자형 이외 제거
		replaceVal = this._replaceNumberMaskValue(displayValue);
	}
	else if ( displayType == "date"|| displayType == "calendarcontrol" )
	{
		if ( columnValue == null )
		{
			// 값이 없을때 보이는 "0000-01-01" 과 같이 
			// 텍스트에서 찾아 질 경우가 있다.
			result.replace = false;
			result.message = this.gfnGetMessage("10093", ""); // "유효한 날짜가 아닙니다.";		
			
		}
		else	
		{							
			var mask = grid.getCellProperty("body", findCell, "calendardateformat");
			var ret = this._replaceDateMaskValue(columnValue, displayValue, findText, replaceText, mask, strict);			
			replaceVal = ret[1];
			
			if ( ret[0] == false )
			{
				result.replace = false;
				result.message = ret[2];
			}
		}
	}
	else
	{
		// 대소문자 구분
		if ( strict )
		{
			replaceVal = columnValue.replace(findText, replaceText);
		}
		else
		{
			replaceVal = this.gfnReplaceIgnoreCase(columnValue, findText, replaceText);
		}					
	}
	
	if ( result.replace )
	{
		dataset.setColumn(findRow, bindColid, replaceVal);
	}
	
	return result;
};

/**
* @class   문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
* @param {String} sOrg - 원래 문자열( 예 : "aaBBbbcc" )
* @param {String} sRepFrom - 찾고자 하는 문자열( 예 : "bb" )
* @param {String} sRepTo - 치환될 문자열 ( 예 : "xx" )
* @return {String} 치환된 문자열 ( 예 : "aaxxxxccxx" ).
* @example
* this.gfnReplaceIgnoreCase(str, findStr, "x");
*/
_pForm.gfnReplaceIgnoreCase = function( sOrg, sRepFrom, sRepTo )	
{
	let pos, nStart=0, sRet="";
	
	while(1)
	{
		pos = sOrg.toLowerCase().indexOf(sRepFrom.toLowerCase(), nStart)
		
		if( pos < 0 )
		{
			sRet += sOrg.substr( nStart );
			break;
		}
		else
		{
			sRet += sOrg.substr( nStart, pos - nStart);
			sRet += sRepTo;
			nStart = pos+sRepFrom.length;
		}
	}
	
	return sRet;
};

/**
* @class  날짜형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
* @param {*} columnValue - 변경전 데이터셋의 실제 값
* @param {String} displayValue - 보여지는 문자열
* @param {String} findText - 찾을 문자열
* @param {String} replaceText - 바꿀 문자열
* @param {String} mask - 마스크 속성값
* @param {Boolean} strict - 대소문자 구분 여부
* @return {Object} 변환정보 (날짜여부, 변경된 문자열, 에러메시지)
* @example
* this._replaceDateMaskValue(str, findStr, "x");
*/
_pForm._replaceDateMaskValue = function(columnValue, displayValue, findText, replaceText, mask, strict)
{		
	if ( this.gfnIsNull(replaceText) )
	{
		// 바꿀 문자열이 빈값이 되지 않도록 패딩
		replaceText = replaceText.padRight(findText.length, " ");
	}
	
	// 1. 현재 보이는 값에서 문자열을 찾아 바꿀 문자열로 변경
	var replaceDisplayValue;
	
	// 대소문자 구분
	if ( strict )
	{
		replaceDisplayValue = displayValue.replace(findText, replaceText);
	}
	else
	{
		replaceDisplayValue = this.gfnReplaceIgnoreCase(displayValue, findText, replaceText);
	}
	
	// 바꿀 값이 없다면 값을 제거한다.
	if ( this.gfnIsNull(replaceDisplayValue.trim()) )
	{
		return [true, null];
	}
	
	// 2. mask 문자 분리
	let arrMask = this._parseDateMask(mask);
	
	// 3. 변경한 값과 마스크 값을 비교하면서 실제 값을 추출하고 유효날짜 판단
	let tmpStr = "";
	let isDate = true;
	let errorMsg = "";
	let valueIndex = 0;
	let displayIndex = 0;
	let dateValue = [];
	let errorValue = [];
	let checkMask;
	let checkDayIndex = -1;
	let checkYearValue = "";
	let checkMonthValue = "";
	
	for (let i=0,len=arrMask.length; i<len ; i++ )
	{
		checkMask = arrMask[i];
		if ( !this.gfnIsDigit(checkMask) )
		{
			switch (checkMask)
			{
			case 'yyyy' :
				tmpStr = replaceDisplayValue.substr(displayIndex, 4);
				
				if ( tmpStr.length != 4 || !nexacro.isNumeric(tmpStr) )
				{
					isDate = false;	
					errorMsg = this.gfnGetMessage("100000087", "");  //"연도가 올바르지 않습니다.";
					
				}
				
				
				
				// 일자체크를 위해
				checkYearValue = tmpStr;
				
				dateValue[dateValue.length] = tmpStr.trim(" ");
				errorValue[errorValue.length] = tmpStr.trim(" ");
				displayIndex += 4;					
				valueIndex += 4;
				break;
			case 'yy' :
			case 'MM' :
			case 'dd' :
			case 'hh' :
			case 'HH' :
			case 'mm' :
			case 'ss' :
				tmpStr = replaceDisplayValue.substr(displayIndex, 2);
				
				if ( tmpStr.length == 2 && nexacro.isNumeric(tmpStr) )
				{
					if ( checkMask == "yy" )
					{
						// 앞 두자리를 원본 데이터로 채운다.
						tmpStr = columnValue.substr(valueIndex, 2) + tmpStr;
						
						// 일자체크를 위해
						checkYearValue = tmpStr;
					}					
					else if ( checkMask == "MM" )
					{
						if ( parseInt(tmpStr) < 1 || parseInt(tmpStr) > 12 )
						{
							isDate = false;   
							errorMsg =this.gfnGetMessage("100000088", ""); //"월이 올바르지 않습니다.";
						}
						
						// 일자체크를 위해
						checkMonthValue = tmpStr;
					}
					else if ( checkMask == "dd" )
					{
						// 윤년을 적용하기 위해서는 연도가 필요한데 
						// 무조건 연도(yyyy, yy)가 일(dd) 보다 앞에 온다는
						// 보장이 없으므로 루프가 끝난 후 체크한다.
						checkDayIndex = dateValue.length;
					}
					else if ( checkMask == "hh" || checkMask == "HH" )
					{
						if ( parseInt(tmpStr) < 0 || parseInt(tmpStr) > 23 )
						{
							isDate = false;								
							errorMsg = this.gfnGetMessage("100000089", ""); //"시간이 올바르지 않습니다.";
						}
						
						
					}
					else if ( checkMask == "mm" || checkMask == "ss" )
					{
						if ( parseInt(tmpStr) < 0 || parseInt(tmpStr) > 59 )
						{
							isDate = false;
							errorMsg = this.gfnGetMessage("100000090", ""); //"분이 올바르지 않습니다.";
						}
					}
				}
				else
				{
					isDate = false;
					errorMsg = this.gfnGetMessage("100000091", "");  //"날짜 형식이 올바르지 않습니다.";
				}
				
				dateValue[dateValue.length] = tmpStr.trim(" ");	
				errorValue[errorValue.length] = tmpStr.trim(" ");	
				displayIndex += 2;
				valueIndex += 2;
				break;
			} // end switch
		}
		else
		{
			// dateValue 는 실제 적용할 값이므로 skip 하자
			
			// 마스크 문자가 아닌 경우 표시문자 이므로 원래 값의 것을 사용
			errorValue[errorValue.length] = displayValue.charAt(checkMask);
			displayIndex += 1;
		}
	}
	
	// 일자 유효 체크
	if ( !this.gfnIsNull(checkYearValue) && 
		!this.gfnIsNull(checkMonthValue) && checkDayIndex > -1 )
	{
		let dt = checkYearValue + checkMonthValue + "01";
		let inputDay = parseInt(dateValue[checkDayIndex]);
		let lastDay = this.gfnGetMonthLastDay(dt);
	}
	
	if ( isDate )
	{
		return [isDate, dateValue.join("")];
	}
	else
	{
		return [isDate, errorValue.join(""), errorMsg];
	}
};

/**
* @class  날짜형 마스크 구문을 분석합니다.
* @param {String} mask - mask 마스크 속성값
* @return {Object} 구문값
* @example
* this._parseDateMask("yyyy-MM-dd");
*/
_pForm._parseDateMask = function(mask)
{
	arrMask = [];
	let dateMaskCache;
	let maskArr = mask.split("");	
	let tmpStr = "";
	let tokenStr = "";
	let seq = 0;
	
	for (let i=0,len=mask.length; i<len;)
	{
		tmpStr = mask.substr(i, 4);
		if ( tmpStr == "yyyy" )
		{
			arrMask[seq] = tmpStr;
			i += 4;
			seq++;
			continue;
		}
		
		// ddd => 요일은 입력할 수 없다.		
		tmpStr = mask.substr(i, 3);
		if ( tmpStr == "ddd" )
		{
			//arrMask[seq] = tmpStr;
			i += 3;
			//seq++;
			continue;
		}						
		
		// hh의 경우 (Calendar는 HH이며 그리드는 둘다 동작함)
		tmpStr = mask.substr(i, 2);
		if ( tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
			tmpStr == "HH" || tmpStr == "hh" || tmpStr == "mm" || tmpStr == "ss" )
		{
			arrMask[seq] = tmpStr;
			i += 2;
			seq++;
			continue;
		}
		
		tokenStr = maskArr[i];
		
		// 입력되지 않으므로 skip.
		if ( tokenStr == "H" || tokenStr == "M" ||
			tokenStr == "d" || tokenStr == "m" || tokenStr == "s" )
		{
			//arrMask[seq] = tokenStr;
			//seq++;
		}
		else
		{
			arrMask[seq] = i;
			seq++;					
		}
		i++;
	}
	
	//dateMaskCache[mask] = arrMask;
	
	return arrMask;
};

/**
* @class  숫자형으로 마스크 처리된 문자열에서 실제 값을 얻어온다.
* @param {String} mask - 숫자형 문자열
* @return {String} 변환값 문자열
* @example
* this._replaceNumberMaskValue("20170808");
*/
_pForm._replaceNumberMaskValue = function(numString)
{
	numString = numString.trim();
	
	let numReg = /[0-9]/;
	let bPoint = false; // 소숫점은 1개만 인정.
	let bInside = false; // 부호는 숫자가 나오기 전에만 인정.
	let c, buf = [];
	
	for(let i=0, len=numString.length; i<len; i++ ) 
	{
		c = numString.charAt(i);
		if( ( c == '+' || c == '-') && ( bInside === false) ) 
		{
			// 부호는 숫자가 나오기 전에만 인정.
			buf.push(c);
			bInside = true;
		}
		else if( numReg.test(c) ) 
		{
			// 숫자인경우 인정.
			buf.push(c);
			bInside = true;
		}
		else if( c == "." && bPoint === false ) 
		{
			// 소숫점은 1회만 인정.
			buf.push(c);
			bPoint = true;
			bInside = true;
		}
		else if( c != "," )
		{
			return "";
		}
	}
	return buf.join("");
};

/**
* @class   주어진 행, 셀 인덱스에 해당하는 그리드 데이터와 <br>
* 문자열을 비교하여 찾아진 결과를 반환
* @param {Object} grid - 대상 Grid Component
* @param {Number} row - 찾을 행 인덱스
* @param {Number} cell - 찾을 셀 인덱스
* @param {String} findText - 찾을 문자열
* @param {String} condition - 찾을 조건(equal/inclusion)
* @param {Boolean} strict - 대소문자 구분 (true/false)
* @return {Boolean} - 찾기 성공.
* @example
* this._compareFindText(grid, startRow, startCell, findText, condition, strict) 
*/
_pForm._compareFindText = function(grid, row, cell, findText, condition, strict)
{
	let cellText = grid.getCellText(row, cell);
	if( this.gfnIsNull(cellText))return;
	let displayType = grid.getCellProperty("body", cell, "displaytype");
	
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	if ( this.gfnIsNull(displayType) || displayType == "normal" )
	{
		var dataType = this.gfnGetBindColumnType(grid, cell);
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
	if ( displayType == "currency" )
	{
		var code = cellText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			cellText = cellText.substr(1);
		}
		
		code = findText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			findText = findText.substr(1);
		}
	}
	
	// 대소문자 구분
	if ( !strict )
	{
		cellText = cellText.toUpperCase();
	}
	// 일치/포함
	if ( condition == "equal" )
	{
		if ( findText == cellText )
		{
			return true;
		}
	}
	else 
	{
		if ( cellText.indexOf(findText) > -1 )
		{			
			return true;
		}
	}
	
	return false;
};

/**
* @class   데이터의 타입반환
* @param {Object} grid - 대상 Grid Component
* @param {Number} cell - 찾을 셀 
* @return {Object} - 찾기 성공.
* @example
*  this.gfnGetBindColumnType(grid, cell);
*/
_pForm.gfnGetBindColumnType = function(grid, cell)
{
	let dataType = null;
	let dataset = this.gfnLookup(grid.parent, grid.binddataset);
	let bindColid = grid.getCellProperty("body", cell, "text");
	bindColid = bindColid.replace("bind:", "");
	
	if ( !this.gfnIsNull(bindColid) )
	{
		let colInfo = dataset.getColumnInfo(bindColid);
		if ( !this.gfnIsNull(colInfo) )
		{
			dataType = colInfo.type;
		}
	}
	
	return dataType;
};

//////////////////////////////////////////////////////////////////////////CELL COPY AND PASTE//////////////////////////////////////////////////////////////////////////
/**
* @class copy event(nexacro, ie)
* @param {Object} obj- 대상그리드
* @param {Event}  e - key down event
* @return N/A
* @example
* this._gfnGridCopyEventForRuntime(obj, e);	
*/
_pForm._gfnGridCopyEventForRuntime = function (obj, e)
{
	
	let startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;
	
	let endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	let startcol = 0;
	let endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	let colSeperator = "\t";
	let copyData = "";
	let checkIndex = {};
	
	for (let i = startrow; i <= endrow; i++) {
		for (var j = startcol; j <= endcol; j++) {
			let value = obj.getCellValue(i,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(i,j);
				}
			}else{
				//2020.03.09 null일경우 공백값 셋팅.
				if (j < endcol) {
					copyData += colSeperator;
				}
			}
		}
		if (i < obj.selectendrow) {
			copyData += "\r\n";
		}
	}
	
	copyData += "\r\n";
	system.clearClipboard();
	
	system.setClipboard("CF_TEXT",copyData);
	
	
	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
};

/**
* @class paste데이터생성
* @param {String} browser - 브라우저
* @return paste데이터 
* @example
* this._gfnGirdGetPasteData("nexacro");	
*/
_pForm._gfnGirdGetPasteData = function (browser)
{
	let copyData = "";
	if( browser == "nexacro" || browser == "IE"){
		copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
	}else{
		var ta = this.tragetGrid["ta"];
		
		if(!ta) return;
		
		copyData = ta.value;
		document.body.removeChild(ta);
		
		this.tragetGrid["ta"] = undefined;
	}
	return copyData;
	
};

/**
* @class paste event
* @param {Object} obj- 대상그리드
* @param {Event}  e - key down event
* @return N/A
* @example
* this._gfnGridPasteEvent(obj, e);	
*/
_pForm._gfnGridPasteEvent = function (obj, e)
{
	let browser = system.navigatorname;
	let copyData = this._gfnGirdGetPasteData(browser);
	
	if( this.gfnIsNull(copyData)) return;
	
	let colSeperator = "\t";
	let rowData ="";
	if( browser == "nexacro" || browser =="IE"){
		rowData = copyData.split("\r\n");
		if(rowDataCount < 1) {
			e.stopPropagation();
			return;
		}
	}else{
		rowData = copyData.split(/[\n\f\r]/); 
	}
	
	let rowDataCount = rowData.length - 1;			
	
	obj.enableevent =false;
	obj.enableredraw = false; 
	
	var datasetName = obj.binddataset;
	var ds = obj.getBindDataset();
	
	ds.enableevent =false; 
	
	let grdCellCount = obj.getCellCount("body");
	let rowCount = ds.getRowCount();
	
	let startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;
	
	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	let startcol = 0;
	let endcol = 0;
	
	let addedColumnCount = 0 ;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
		
		//2020.03.03 grid에 추가된 no,status,checkbox 가 있으면 복사시 skip하도록 수정.
		// 		let arrProp = this._getGridUserProperty(obj);
		// 		if(this.gfnContains(arrProp, 'no', false) == true){
		// 			addedColumnCount++;
		// 		}
		// 		if(this.gfnContains(arrProp, 'status', false) == true){
		// 			addedColumnCount++;
		// 		}
		// 		if(this.gfnContains(arrProp, 'checkbox', false) == true || this.gfnContains(arrProp, 'checkbox_status', false) == true ){
		// 			addedColumnCount++;
		// 		}
		
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	
	let currRow = startrow;
	let cellIndex = startcol;
	let maxColumnCount = 0;
	let checkIndex = {};	
	
	for (let i = 0; i < rowDataCount; i++)
	{
		if(rowCount <= currRow)
		{
			ds.addRow();
		}
		
		var columnData = rowData[i].split(colSeperator);
		
		var columnLoopCount ;
		//2020.03.03  grid에 추가된 no,status,checkbox 가 있으면 복사시 skip하도록 수정.
		if( obj.selecttype == "row" || obj.selecttype == "multirow"){
			columnLoopCount = cellIndex + columnData.length + addedColumnCount;
		}else{
			columnLoopCount = cellIndex + columnData.length;
		}
		
		if(columnLoopCount > grdCellCount) {
			columnLoopCount = grdCellCount;
		}
		
		if(maxColumnCount < columnLoopCount) {
			maxColumnCount = columnLoopCount;
		}
		
		var k = 0;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{
			var colHeadTemp = obj.getCellProperty("head", j, "text");
			var colTemp = obj.getCellProperty("body", j, "text");
			var colid;
			if( this.gfnIsNull(colTemp) )
			{
				colid = obj.getCellProperty("body", j, "text");
			}
			else
			{
				colid = obj.getCellProperty("body", j, "text").substr(5);
			}
			
			if( obj.selecttype == "row" || obj.selecttype == "multirow"){
				//2020.03.03  grid에 추가된 no,status,checkbox 가 있으면 복사시 skip하도록 수정.
				// 				if(colid == "CHK" || (colHeadTemp == "ICON" && colid == null)){
				// 					continue;
				// 				}
			}
			
			var tempValue = columnData[k];
			if(!this.gfnIsNull(tempValue))
			{
				ds.setColumn(currRow, colid, tempValue);
			}else{
				//2020.03.09 null일 경우 공백값 셋팅
				ds.setColumn(currRow, colid, tempValue);
			}
			
			k++;
		}
		currRow++;
	}
	
	ds.rowposition = currRow;	
	
	endrow = endrow + rowDataCount - 1;
	endcol = maxColumnCount - 1;
	
	system.clearClipboard();
	
	obj.enableredraw = true;
	obj.enableevent = true;
	ds.enableevent = true; 
	
	obj.selectArea(startrow, startcol, endrow, endcol);
	
	let areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**
* @class copy event(chrome)
* @param {Object} obj- 대상그리드
* @param {Event}  e - key down event
* @return N/A
* @example
* this._gfnGridCopyEventForChrome(obj, e);	
*/
_pForm._gfnGridCopyEventForChrome = function (obj, e)
{
	let startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;
	
	let endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	let startcol = 0;
	let endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	
	let colSeperator = "\t";
	let copyData = "";
	
	for (let i = startrow; i <= endrow; i++) {
		for (let j = startcol; j <= endcol; j++) {
			let value = obj.getCellValue(i,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(i,j);
				}
			}else{
				//2020.03.09 null일경우 공백값
				copyData += colSeperator;
			}
			
		}
		if (i < obj.selectendrow) {
			copyData += "\r\n";
		}
	}
	
	copyData += "\r\n";

     this.gfnCopyStringToClipboard(copyData);

   
// 	let ta = this._createTextarea(copyData);
// 	this.tragetGrid = obj;
// 	this.tragetGrid["ta"] = ta;
// 	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
// 	if(!!e) e.stopPropagation();
//	e.stopPropagation();
};

/*
 *	web copy clipboard 2025/01/03
 */
 
_pForm.gfnCopyStringToClipboard = function(string) {

    if(system.navigatorname == "nexacro") return;
		function handler (event){
			event.clipboardData.setData('text/plain', string);
			event.preventDefault();
			document.removeEventListener('copy', handler, true);
		}

		document.addEventListener('copy', handler, true);
		document.execCommand('copy');
}

/**
* @class cell copy and paste (크롬용 텍스트에어리어생성)
* @param {String} innerText- value
* @return{Object} 텍스트에어리어 오브젝트
* @example
* this._createTextarea("꼬부기");	
*/
_pForm._createTextarea = function(innerText)
{
	let ta = document.createElement('textarea');
	ta.id = "textAreabyCopyAndPaste";
	ta.style.position = 'absolute';
	ta.style.left = '-1000px';
	ta.style.top = document.body.scrollTop + 'px';
	ta.value = innerText;
	
	document.body.appendChild(ta);
	ta.select();
	
	return ta;
};

/*
*	개발자용 그리드 저장 공통 함수
*/
_pForm.gfnGridSavePersonal = function(objGrid)
{
	this._gfnGridPersonalizeExcute(objGrid);
};


/*
*	개발자용 그리드 초기화
* @param {component} grid
*/
_pForm.gfnGridInitial = function(grid)
{
	grid.formats = "<Formats>" + grid.orgformat2 + "</Formats>";
	//this._gfnGridAddProp(grid);
};


/**
* @class  그리드 체크 박스 전체 선택/해제
* @param {comp} Grid 
* @param {number} cell no 
* @param {number,string}  '1' : 선택 '0' : 해제 
* @return 
* @example
this.gfnSetGrdChkAll(objGrd,0,"1");  //선택
this.gfnSetGrdChkAll(objGrd,0,"0");  //해제
* @memberOf 
*/
_pForm.gfnSetGrdChkAll = function(oGrid,nCell,sChk)
{
	let sCol= oGrid.getCellProperty("body", nCell, "text");
	let sDisplayType = oGrid.getCellProperty("body", nCell, "displaytype");
	let bindds      = oGrid.getBindDataset();
	
	if(sCol.indexOf("bind:") == -1) return; 
	else sCol = sCol.replace("bind:","");
	
	
	if(sDisplayType == "checkboxcontrol"){
		
        bindds.enableevent =false;
		for (let i=0; i<bindds.getRowCount();i++)
		{ 
			//	bindds.setColumn(i,"COL_CHK",sChk);
			bindds.setColumn(i,sCol,sChk);
		}
		bindds.enableevent = true;      
		
	}
	
}

/**
* @  그리드 컨텥츠 별 
* @param {object} grid 
* @param {array} head: 헤드 건스  body : body건수  summ : summary 건수 
* @return 
* @example
var grdObj = this.Grid00;
var arrType = ["head","body","summ"];
var grdContensCnt = this.gfnGetGridContentsCnt(grdObj,arrType);

trace(" ## grdContensCnt : " + grdContensCnt); 
* @memberOf 
*/
_pForm.gfnGetGridContentsCnt = function (grd,arrType)
{	
	if(this.gfnIsNull(grd) || this.gfnIsNull(arrType)) return;
	
	let objGrd = grd;
	let stype = "";   
	let jsonRes = {head:0,body:0,summ:0};
	
	for(let c=0; c<arrType.length;c++)
	{
	    stype = arrType[c];
		
		if(stype == "head")
		{
			let nCount = grd.getCellCount("head");
			for(let i=0; i<nCount; i++){
				if( i == nCount-1 )
				jsonRes["head"] = nexacro.toNumber(objGrd.getCellProperty("head", i, "row")+1);
				
			}
		}
		
		
		if(stype == "body")
		{ 
			let nCount1 = objGrd.getCellCount("body");
			for(let j=0; j<nCount1; j++){
				if( j == nCount1-1 )
				jsonRes["body"] = nexacro.toNumber(objGrd.getCellProperty("body", j, "row")+1);
			}
		}
		
		
	    if(stype == "summ")
		{ 
			let nCount2 = objGrd.getCellCount("summ");
			for(let k=0; k<nCount2; k++){
				if( k == nCount2-1 )
				jsonRes["summ"] = nexacro.toNumber(objGrd.getCellProperty("summ", k, "row")+1);
			}
		}
		
	}
	
	return jsonRes;
	
};


/**
* @ 그리드 달력 팝업 생성
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnCreateCalPopDiv = function (stype,ogrid,erow,ncoll)
{
	let id = "PDIVCALGRD_" + this.name ;
	let objPopupDiv;
	let url = stype=="grd_Drop" ? "cmm::cmmMultiComboGrid.xfdl" : "cmm::cmmCal.xfdl";
	let width = stype=="grd_Drop" ? 210 : 203;;
	let height = stype=="grd_Drop" ? 209 : 240;
	if(this.isValidObject(id)) 
	{
		objPopupDiv = this[id];
		objPopupDiv.ucomp = ogrid;   //user type 
		objPopupDiv.uprop = [erow,ncoll];
		
		if(nexacro._isFunction(objPopupDiv.form.foOnSetInit)) objPopupDiv.form.foOnSetInit();
		return this[id];
	}
	
	objPopupDiv = new PopupDiv(id, -1, -1, width, height);
	
	// Add Object to Parent Form  
	this.addChild(id, objPopupDiv); 
	objPopupDiv.url = url;
	objPopupDiv.ucomp = ogrid;   //user type 
	objPopupDiv.uprop = [erow,ncoll];
	
	// Show Object  
	objPopupDiv.show(); 
	
    return objPopupDiv;
};



delete _pForm;
