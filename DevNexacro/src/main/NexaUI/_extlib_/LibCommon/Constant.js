/**  
*  공통 변수 선언
*  @FileName 	Variable.js 
*  @Creator 	#{J}
*  @CreateDate 2025.04.15
*  @Desction   		
*/


_pForm.colInfo = {
	user : {
		id : "id"   // 사용자id
		,nm : "nm"   // 사용자명
		,email :"email"  //사용자 이메일
	},
	msg : {
		cd : "msgCd"
		,nm : "msgNm"  
	},
	menu :{  
		cd        : "menuCd"     // 메뉴코드
		,nm        : "menuNm"     // 메뉴명
		,pcd       : "parnetCd"   // 상위 코드
		,lvl       : "menuLvl"    // 메뉴레벨	
		,gcd       : "menuGroup"  // 메뉴그룹	
		,url       : "url"        // menuUrl	
		,navi      : "menuPath"   // MENU_NAVI
		,params    : "params"     // 메뉴파라메터	 
		,winid     : "winId"     // 활성화 된 ID
		,max       : 15    		 //열리는 프레임 최대 갯수
		,key  :    "openMenu"    // 저장key(local storage);
		,tabid   : "tabId"       // menu tabId
	},
	file : {
		seq   : "fileSeq", 
		gseq  : "gfileSeq",
		nm    : "fileNm",   
		nmorg : "originalFileNm",
		size  : "fileSize",  //파일 사이즈
		ext   : "fileExt"    // 파일 확장자
	}
	
};

let users = [];
let data = {id:"", menuId:[]};


/************************************************************************
* 피일 업/다운 변수
************************************************************************/
/**
* 채도가 0이면 색상은 undefined 이다.<br>
* 이때 색상값을 처리하기 위한 값.
*/    
_pForm.HUE_VALUE_WHEN_SATURATION_IS_ZERO = 160;

_pForm.oObjDialogNm = "FileDialog_";
_pForm.oObjDialogTransferNm = "FileUpTransfer_";
_pForm.oObjFileDownTransfer = "FileDownTransfer_";
_pForm.oDsFileDialog   = "";
_pForm.oSvcId = "fileUp_";
_pForm.sObjDialogNm = "";
_pForm.sObjDialogTransferNm = "";
_pForm.sObjFileDownTransfer = "";
_pForm.sDsFileDialog   = "";
_pForm.sSvcId = "";


/************************************************************************
*  Grid 변수
************************************************************************/
//grid propertiy
_pForm.defaultmenulis = "sort,colfix,filter,initial,replace,colhide,export"; // 기본 메뉴
_pForm.selectmenulist = "no,status,checkbox,checkbox_status,replace,colhide,export,import,personal,cellcopypaste,userheader";	// 선택(옵션) 메뉴 - griduserproperty 설정시에만 작동
//_pForm.popupmenulist  = "colfix,rowfix,filter,replace,colhide,export,import,personal,initial";					// 팝업 메뉴 전체 목록
_pForm.popupmenulist = "colfix,filter,initial,replace,colhide,export,import,personal,userheader";
//소트
// 헤더 클릭시 정렬 false= 오름/내림 true= 오름/내림/없음
_pForm.SORT_TOGGLE_CANCEL = true;
_pForm.MARKER_TYPE = "text"; // 정렬 표시자 구분 (text or image)
// Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정 
//_pForm.MARKER = ["▲", "▼"];// [오름차순표시, 내림차순표시]
//_pForm.MARKER = ["cell_WF_Up", "cell_WF_Down"];// [오름차순표시, 내림차순표시]
_pForm.MARKER = ["↑", "↓"];// [오름차순표시, 내림차순표시]
//cell copy and paste 시 chorme용 textarea 저장 object
_pForm.tragetGrid = "";
_pForm.propugrd = false;   
_pForm.pSortNumber = 0;   //sort number count 초기 -1

/************************************************************************
*  Log 관련 변수
************************************************************************/
/**
* query 메소드의 where 조건 cache.
* @private
* @memberOf this
*/		
_pForm._parseQueryCache= [];

/**
* 연산자 함수 목록.
* @private
* @memberOf 
*/
_pForm._operators = {
	// ==
	"equal" : function(a, v){
		
		if (_pForm.gfnIsNull(v))
		{
			return _pForm.gfnIsNull(a);
		}
		
		return a == v;
	},
	// !=
	"notEqual" : function(a, v){
		return a != v;
	},
	// >
	"greaterThan" : function(a, v){
		return a > v;
	},
	// >=
	"greaterThanEqual" : function(a, v){
		return a >= v;
	},	
	// <
	"lessThan" : function(a, v){
		return a < v;
	},
	// <=
	"lessThanEqual" : function(a, v){
		return a <= v;
	},		
	// *=
	"contains" : function(a, v){
		return a && a.indexOf(v) > -1;
	},	
	// ^=
	"startWith" : function(a, v){
		return a && a.substr(0, v.length) == v;
	},
	// $=
	"endWith" : function(a, v){
		return a && a.substr(a.length-v.length) == v;
	}
};


/************************************************************************
* transaction 변수
************************************************************************/
_pForm.lvCheck = false;	

/************************************************************************
* validation 
************************************************************************/

/************************************************************************
* 업무 폼 
************************************************************************/


delete _Porm;