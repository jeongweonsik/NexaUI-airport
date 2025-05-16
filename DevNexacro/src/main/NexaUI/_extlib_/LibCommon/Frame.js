/**  
*  프레임 셋 및 공통 관련
*  @FileName 	Frame.js 
*  @Creator 	#{J}
*  @CreateDate 2025.04.15
*  @Desction   		
*/

/********************************************************************************************
*● _gfn_on_loadFom : form onload 공통
*● gfnInitComp : form open 시 컴퍼넌트 초기화 처리
*● gfnOnkeydown : form key evnet
*● gfnOpenMenu : 윈도우 메뉴 화면 오픈전 체크
*● gfnNewMdi : 신규 윈도우 화면을 생성하고 open 시킴
*● gfnSetStoreMenu : save menu(local storage)
*● gfnLoadStoreMenu : load menu(local storage)
*● gfnSetOpenMenuDs : 열린화면 데이터셋에 추가
*● gfnRemoveOpenMenuDs : 열린화면 제거  
*● gfnGetMenuCd : 메뉴 ID 가져오는 함수
*● gfnGetMenuNm : 메뉴 명 가져오는 함수
*● gfnGetFrameArgs : 화면이동 아규먼트 가져오는 함수
*● gfnGetCurrentForm : 현재 열려있는 폼
*● gfnGetFrameWinId :  winId 가져오는 함수
*● gfnGetMenuAuth :  버튼 권한 가져오는 함수
*● gfnGetFrameNo :  frameNo 가져오는 함수
*● gfnNewMain : page url 변경(main 페이지에서 화면 호출할때 사용)
*● gfnLoadDsStore :  load menu(local storage)
*● gfnSaveDsStore  : 쿠키 저장 load
*● gfnGetServerUrl : 서비스(transaction) URL 가져오는 함수
*● gfnGetApplication : 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드
*● gfnCboSelectText  :  콤보 라벨 추가( =전체=  =선택= )
*● gfnInSelectText  :  공통코드 콤보  라벨 추가( =전체=  =선택= )
*● gfnGetComCodeFilter : 공통코드 필터
*● gfnSetFrame  : mainfraem  set size  
*● gfnIsLocal : 프로젝트 로컬 실행 
*● gfnSetFrame  : 메인 프레임 전환(login,mdi)
*● gfnIsMainFrame : 메인프레임 활성화 여부 체크
*● gfnIsWork    : work 메인 활성화 체크
*● gfnLeftFrameShowHide : 레프트 프페임 펼침/접힘
*● gfnReload  : 프로젝트 reload
*● gfnSetTotal  : total 수량 설정 함수
*● gfnMdiClose  : mdi menu close(menuid)
*● gfnCurrontMdiClose : 현재 menu close
*********************************************************************************************
*  메인포털 페이지 라이브러리(로그인,회원가입,FAQ,Q&A
*********************************************************************************************
*● gfnIsVali :  validation(필수) 체크 함수
*● gfnNewMain : page url 변경(main 페이지에서 화면 호출할때 사용)
*● gfnMmberSetUrl : 회원가입 변경 페이지 함수(이용약관 동의,가입정보입력,업체회원가입,회원가입완료()
*● gfnGetMemberArgs : 회원가입 변경 페이지 아규먼트 가져오는 함수
*● gfnMemberArgsInit : 회원가입 아규먼트 초기화
*● gfnInitLoginWindow : 전용 브라우저 초기화 후 로그인 페이지 이동
*● gfnGetLocationUrl :  포털 http url 가져오는 함수
*● gfnGoMdiHome : 업무 홈으로 이동
*● gfnGoLogin : 로그인 페이지로 이동
*● gfnGetScreenId : 현재의 screen id 가져 오는 함수
*● gfnIsLogin : 로그인 여부
*● gfnGetApplicationId : application id 가져오는 함수 
*● gfnGetUrlFolder : 현재 context 폴더 가져오는 함수
*● gfnSetLogout   : 로그아웃 실행 함수
*● gfnInitAddrSrc : 주소 index html src tag 추가
*● gfnIsNexaBrowser : 넥사크로 브라우저 여부를 반환한다.
*● getSvcUrl : 서버환경 별로 셋팅할 주소값을 반환한다.
*● getPrjUrl : project Url 가져오는 함수
*********************************************************************************************/

/**
* 프포젝트 공통 (onload)
* @param {obj} form 
* @param {e} event 
* @return 
* @example
* @memberOf 
*/
_pForm._gfn_on_loadForm = function (obj,e)
{
	if(obj == "[object Form]" )
	{	
		
		const pform   = obj;
		const parentForm = obj.parent;	
		// const objForm  = obj;
		this.ownerFrame = this.getOwnerFrame();	
		this.menuCd = "";
		let params;
	//	trace(" obj.name: " + obj.name);
		
		if(this.gfnIsQuickView()) nexacro.getApplication().mainframe.showtitlebar = true;
		// trace(" ## this.ownerFrame.id : " + this.ownerFrame.id + " <> this.ownerFrame.titletext: " + this.ownerFrame.titletext);
		if(!!this.ownerFrame.arguments){
				
			parmas =  this.ownerFrame.arguments[this.colInfo.menu.params];	
			this.menuCd  = this.ownerFrame.arguments[this.colInfo.menu.cd];	
			if(!!parmas &&  nexacro._isFunction(this.cfnMove_onactive)) this.cfnMove_onactive(parmas);		   
			
		} 	
		
		if(this.opener ) /// form onload 팝업 일 경우		  
		{  		
		
			if(obj.parent instanceof nexacro.ChildFrame)
			{	
				if('titletext' in this.ownerFrame 
					&& this.gfnIsNotNull(this.ownerFrame['titletext']) ){
					//ownerFrame.titletext = ownerFrame.titletext;	
					this.titletext = this.ownerFrame.titletext;
				}else{
					
					this.ownerFrame.titletext = '';		
					this.titletext = '';
				}							 	
				
				// 팝업 파라미터를 폼 변수로 입력
				if(this.ownerFrame._arg){
					
					// Modal Pop
					Object.entries(this.ownerFrame._arg).forEach(([key,value],idx) => {		
								this[key] = value;						  
						});	
					
				}else if(this.ownerFrame._variables){
					
					//Modeless  popup
					Object.entries(this.ownerFrame._variables).forEach(([key,value]) => {	
							
							if(!!this.ownerFrame[value]){
								this[value] = this.ownerFrame[value];		
							}																						  
						});							    
				}
			}
		}		
		
		this.gfnInitComp(obj);		 // component scan
		this.addEventHandler( "onkeyup", function(obj,e){					
				this.gfnOnkeydown(obj,e);
			},this);	
	}
	
};	

/**
* @class form open 시 Component 초기화 처리 <br>
* @param {Object} obj - 화면
* @return N/A
* @example ㅁ
* this.gfnInitComp(this);
*/
_pForm.gfnInitComp = function(objForm)
{   
	const arrComp = objForm.components;
	const nLength = arrComp.length;
	
	if(this.gfnIsFrameForm(objForm)) return;
	
	for (let i=0; i<nLength; i++){     
		
		if (arrComp[i] instanceof nexacro.Div){
		    let _div = arrComp[i];		
			
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.isNull(_div.url)) this.gfnInitComp(_div.form);
			
			
		}else if (arrComp[i] instanceof nexacro.Tab){			
			let nPages = arrComp[i].tabpages.length;
			for (let j=0; j<nPages;j++)
			{	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.isNull(arrComp[i].tabpages[j].url)) this.gfnInitComp(arrComp[i].tabpages[j].form);
			}
		}else{				
			// Grid 처리
			if (arrComp[i] instanceof nexacro.Grid) {
				let _grid = arrComp[i];
				
				_grid.cellsizingtype = "col" ;
				_grid.cellmovingtype = "col" ;
				_grid.autoenter      = "select" ;
				
				if(_grid.unodata != 'false') _grid.nodatatext = this.gfnGetMessage("1401");		 //데이타가 존재하지 않습니다.
				
				this.gfnSetGrid(_grid);   // 그리드 공통 실행			
			}
			
			// Edit 처리
			if (arrComp[i] instanceof nexacro.Edit){
			    let _edit = arrComp[i];
				//clear 버튼 생성
// 				if (arrComp[i].ubtnclear == "true") {
// 				
// 					this._gfnSetEditMsClear(_edit);
// 				}
				
				
			}else if (arrComp[i] instanceof nexacro.CheckBox){
				let _checkbox = arrComp[i];
				_checkbox.falsevalue = "N";
				_checkbox.truevalue ="Y";
				
			}else if(arrComp[i] instanceof nexacro.Button){		
				
			    let _button = arrComp[i];	
				
//  				if(("uauth" in _button) 
// 					&& !this.isNull(_button["uauth"])){				
// 					
// 					let colNm   = "";
// 					let menuCd  = this.gfnGetMenuCd();
// 					
// 					if(_button.uauth == "search")          colNm = this.colInfo.menu.searchYn;
// 					else if(_button.uauth == "print")     colNm = this.colInfo.menu.printYn;
// 					else if(_button.uauth == "edit")     colNm = this.colInfo.menu.editYn;
// 					else if(_button.uauth == "approve") colNm = this.colInfo.menu.appRoveYn;
// 					
// 					let buttonAuth = app.gdsMenu.lookupAs( this.colInfo.menu.cd,menuCd,colNm);
// 					if(buttonAuth == "N")  _button.visible = false;
// 					
//  				}
				
			}
			
		}
	}
};



/**
* @class 폼 로드시에 대상 Edit 컴포넌트 IE의 -ms-clear 동일한 기능으로 동작
* @param {Edit}           대상 Edit 컴포넌트
* @return N/A
*/
_pForm._gfnSetEditMsClear = function (oEdt)
{	
	if (!oEdt.ubtnclear) return;	
	var _oParent = oEdt.parent;

	// "Edit 컴포넌트명 + _X"
	var sClrBtnNm = oEdt.name + "_" + "X";
	
	// 현재 Edit 컴포넌트를 기준으로 Button의 위치를 셋팅한다.
	var nWidth = parseInt(oEdt.getOffsetWidth()	);
	var nHeight= parseInt(oEdt.getOffsetHeight());
	var nTop   = parseInt(oEdt.getOffsetTop()	);
	var nLeft  = parseInt(oEdt.getOffsetLeft()	);
	
	// 생성될 Button의 Width, Height 값
	var nBtnWidth = nHeight-3;
	var nBtnHeight= nHeight;
	
	// 현재 Edit 컴포넌트가 있는 위치에 Button을 생성한다.
	// Edit와 Button은 1:1 관계이다.	
	var oBtn = new Button();  
	oBtn.init(sClrBtnNm, nLeft+(nWidth-nBtnWidth), nTop, nBtnWidth, nBtnHeight, null, null);
	
	// Button은 항상 Edit와 함께 움직이도록 한다.
	oBtn.set_left(oEdt.name + ":" + (nBtnWidth*-1));
	
	// Button의 Default 값은 false
	oBtn.visible = true;

	// Style cssclass로 셋팅한다. (Ex. oBtn.set_cssclass('btnMsClear');)
	// 	oBtn.set_icon("URL('theme://btn_del.png')");
	// 	oBtn.set_iconPosition("left");
	// 	oBtn.set_background("transparent");
	// 	oBtn.set_border("0px none");
    oBtn.cssclass = "btn_WF_Clear";
	
	
	// taborder 사용하지 않는다.
	oBtn.tabstop = false;
	
	_oParent.addChild(sClrBtnNm, oBtn); 
	oBtn.show();
	
	// Button Event 제어
	oBtn.addEventHandler("onclick"  	, function (obj, e) {
			
			oEdt.set_value(null);
			oEdt.setCaretPos(0);										
			oEdt.setFocus();	
			
			oBtn.visible = false;
			
		}, this);
	
	oBtn.addEventHandler("onsetfocus"	, function (obj, e) {
			
			oEdt.setFocus();
			
		}, this);  
	
	// Edit Event 제어								   
	// Edit 컴포넌트 클릭 시 입력된 내용이 존재시에 X 아이콘이 나타난다.
	oEdt.addEventHandler("oneditclick"	, function (obj, e) {
			
			if (!this.gfnIsNull(oEdt.value)) 
			oBtn.set_visible(true );
			else 							   
			oBtn.visible = false;
			
		}, this);	
	// Edit Event 제어								   
	// Edit 컴포넌트에서 포커스가 나가면 X 아이콘은 없어진다.
	oEdt.addEventHandler("onsetfocus"	, function (obj, e) {
			
			if (!this.gfnIsNull(oEdt.value)) 
			oBtn.set_visible(true );
			
		}, this);   									  
	
	// Edit Event 제어								   
	// Edit 컴포넌트에서 포커스가 나가면 X 아이콘은 없어진다.
	oEdt.addEventHandler("onkillfocus"	, function (obj, e) {
			
			if (_oParent.getFocus().name!=oBtn.name) 
			oBtn.visible = false;
			
		}, this);   
	
	// Edit 컴포넌트 입력 시 입력된 내용이 존재시에 X 아이콘이 나타난다.
	oEdt.addEventHandler("oninput"		, function (obj, e) {
			
			if (!this.gfnIsNull(oEdt.value)) 
			oBtn.visible = true;	
			else 							   
			oBtn.visible = false;
			
		}, this);
	
};

/**
* form onsize 변경시
* @return 
* @example
* @memberOf public
*/ 
_pForm.gfnFormOnsize = function(obj,e)
{	
    const pForm = obj;
	const nLeft = (_pForm.width  / 2) - Math.round((_pForm.divForm.form.getOffsetWidth())  / 2);
	const nTop  = Math.round((_pForm.height / 2)) - Math.round((_pForm.divForm.form.getOffsetHeight()) / 2);
	
	if (nLeft <= 0)
	{  
		_pForm.divForm.form.setOffsetLeft(0);
	}
	else
	{	
		_pForm.divForm.setOffsetLeft(nLeft);
		
		if(nTop  >  1) _pForm.divForm.setOffsetTop(nTop);
		else _pForm.divForm.setOffsetTop(0);	
	}
	
	_pForm.resetScroll();
};

/**
* @description 각 화면에서 단축키 지정
*/
_pForm.gfnOnkeydown = function(obj, e)
{    

	//단축키 ctrl + `
	if(e.ctrlkey 
		&& (e.keycode == 229 || e.keycode == 192))
	{	
		let oparam = {id:"popDebug",url: "cmm::cmmDebug.xfdl",resize :"true",autosize:"true",width:"1080",height:"703",titletext:"DEBUGGING"};	// 모달리스는 form의 width,height를 지정해야 가운데 정렬 
		this.gfnOpen( oparam,    //opener
			(resVar) => {
			//	trace(" gfnOnkeydown res modeless ==>  " + resVar);
			}
		);
	}
};

_pForm.gfnIsFrameForm = function (objForm)
{
	if( objForm.name == "FrmLeft"  || objForm.name == "frmLogin"
		|| objForm.name == "frmLoginS" || objForm.name =="frmMdi"
		|| objForm.name == "frmTop" || objForm.name == "frmWork"
		|| objForm.name == "cmmDebug"){
		return true;
	}else{
		return false;
	}
};

/**
* @class _gfnOpenMenu (frame open) [내부함수]
* @param  : sMenuId : 화면ID
* @param  : objParam : 화면에 넘길 파라미터 Object 
* @param  : bReload	: 화면을 리로드 할지 여부
* @return : bReturn : 화면오픈 성공여부
* @example :  this._gfnOpenMenu(sMenuId, objParam);
*/
_pForm.gfnOpenMenu  = function(sMenuId, objParam,pReload)
{
	// Null Check
	if (this.gfnIsNull(sMenuId)) return false;
    let bReload  = pReload || false;	 
    let nRow     = app.gdsMenu.findRow( this.colInfo.menu.cd, sMenuId);
	let sWinId   = app.gdsOpenMenu.lookupAs(this.colInfo.menu.cd, sMenuId, this.colInfo.menu.winid);    
	let objForm  = app.frame.work.all[sWinId];
	
	// 기존에 오픈된 화면이 있는 경우 처리
	if (objForm != null) 
 	{
// 		if (bReload == true) {		 // 화면 reload 처리 시 
// 			// 변경된 데이터가 있는 경우 confirm, 그외는 그냥 reload
// 			if (!this.gfnIsNull(objForm.form.fnWorkFrameClose) && objForm.form.fnWorkFrameClose() == false) 
// 			{ 
// 				return false;
// 			}else{
// 				
// 				app.frame.mdi.form.isActiveFrame(sWinId);
// 				app.frame.work.form.fnSetUrl();   // reset 처리
// 				
// 			}
// 	    }else{// active 처리
			app.frame.mdi.form.isActiveFrame(sWinId);
	//	}
		return;
		
	}
	
	if (app.gdsOpenMenu.rowcount >= this.colInfo.menu.max) 
	{
		// 열린 메뉴 최대 갯수는 [{0}]입니다.
		this.gfnAlert("10151", [this.colInfo.menu.max],"e");
		return false;
	} else 
	{
		
		this.gfnNewMdi(sMenuId, nRow, objParam,bReload);
	}
	
	return true;
};

/**
* @class gds_menu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
* @param {String} sMenuId - menuId
* @param {Number} nRow - gds_menu의rowpostion
* @param  {Object} objParam - 화면에 넘길 파라미터 Object 
* @param {Boolean} bReload	- 화면을 리로드 할지 여부(디폴트 : false)
* @return N/A
*/
_pForm.gfnNewMdi = function(sMenuId, nRow, objParam,pReload)
{
    if(this.isNull(sMenuId)) return; 	
		
	let sParnetCd	= app.gdsMenu.lookupAs(this.colInfo.menu.cd, sMenuId,this.colInfo.menu.pcd);
	let sMenuNm  	= app.gdsMenu.lookupAs(this.colInfo.menu.cd, sMenuId,this.colInfo.menu.nm);
	let sMenuUrl	= app.gdsMenu.lookupAs(this.colInfo.menu.cd, sMenuId,this.colInfo.menu.url);
    let sMenuNavi	= app.gdsMenu.lookupAs(this.colInfo.menu.cd, sMenuId,this.colInfo.menu.navi);
	let bReload     = pReload || false;
	
    if(this.gfnIsNull(sMenuUrl)) return;		// MenuUrl 이 없으면 return
	
	var sWinId = "FRAMEWORK_" +  sMenuId ; 
	if(pReload != true){
	   var res = this.gfnSetOpenMenuDs(sWinId, sMenuId, sMenuNm, sMenuUrl);		// 열린메뉴 화면 삽입
	}	
	
	var objNewWin = new ChildFrame;
	
	objNewWin.init(sWinId, 0, 0, app.frame.work.getOffsetWidth() - 0, app.frame.work.getOffsetHeight() - 0);
	app.frame.work.addChild(sWinId, objNewWin);
	
	//objNewWin.set_tooltiptext(sWinId);
	objNewWin.arguments = [];
	objNewWin.showtitlebar = false;
	objNewWin.openstatus = "maximize";
	objNewWin.showcascadetitletext = false;
	objNewWin.titletext = sMenuNm;
    objNewWin.arguments[this.colInfo.menu.params]   = objParam;
	objNewWin.arguments[this.colInfo.menu.winid] 	= sWinId;
	objNewWin.arguments[this.colInfo.menu.cd] 		= sMenuId;
	objNewWin.arguments[this.colInfo.menu.nm] 		= sMenuNm;
	objNewWin.arguments[this.colInfo.menu.url] 	    = sMenuUrl;
	objNewWin.arguments[this.colInfo.menu.navi]     = sMenuNavi;
	objNewWin.arguments[this.colInfo.menu.params]   = objParam;		
	
	objNewWin.set_formurl("frame::frmWork.xfdl");
	
	app.frame.mdi.form.fnAddTab(sWinId, sMenuNm);   //mdi tab button add	
	app.frame.mdi.form.isActiveFrame(sWinId);
	
	objNewWin.show();
};


/**
 * save menu(local storage)
 * @return 
 * @example
 this.gfnSaveProfOpenMenu();
 * @memberOf 
 */
_pForm.gfnSetStoreMenu =  function ()
{
    let ds   = this.dsMenu;
	let sdata = ds.saveBIN();

	let key = this.colInfo.menu.key;	
	 nexacro.setPrivateProfile(key,sdata);
};

/**
 * 로컬데이타  key 식제
 * @return 
 * @example
 this.gfnRemoveStoreMenu("openMenu");
 * @memberOf 
 */
_pForm.gfnRemoveStoreMenu =  function (key)
{
   let userId = nexacro.getEnvironmentVariable("evUserId");
   if(!!!key && !!!userId) return;

	key = `${key}_${userId}`;	
	
	nexacro.removePrivateProfile(key);
	
};


/**
 * 로컬데이타  load
 * @return {number} dataset rowcount
 * @example
 this.gfnLoadDsStore("openMenu",app.gdsOpenMenu);
 * @memberOf 
 */
_pForm.gfnLoadDsStore =  function (key,ds)
{
    let userId = nexacro.getEnvironmentVariable("evUserId");
    if(!!!key && !!!ds && !!!userId) return;
	
	key = `${key}_${userId}`;
	let sdata =  nexacro.getPrivateProfile(key);	
	let rowCnt = ds.loadBIN(sdata);
	return rowCnt;
};

/**
 * 로컬데이타  저장
 * @return {boolean} true/false
 * @example
 this.gfnSaveProfOpenMenu("openMenu",app.gdsOpenMenu);
 * @memberOf 
 */
_pForm.gfnSaveDsStore = function (key,ds)
{
     let userId = nexacro.getEnvironmentVariable("evUserId");
   //  if(!!!key && !!!ds) return
	 if(!!!key && !!!ds && !!!userId) return;
   
	let sdata  = ds.saveBIN();
	key = `${key}_${userId}`;
	nexacro.removePrivateProfile(key);
	return nexacro.setPrivateProfile(key,sdata);
	
};

/**
* @class 열린화면 데이터셋에 추가 <br>
* @param {String} sWinId : childframe key
* @param {String} sMenuid : 메뉴ID
* @param {String} sTitle : 화면명
* @param {String} sMenuUrl : 화면 URL
* @param {String} sGroupId : 그룹ID
* @param {String} sPrgmId : 프로그램ID
* @return N/A
*/
_pForm.gfnSetOpenMenuDs = function(sWinId, sMenuId, sTitle, sMenuUrl)
{
    //열린메뉴 menuid 중복체크
	if(app.gdsOpenMenu.findRow(this.colInfo.menu.cd,sMenuId) > -1) return;
	
	let nRow = app.gdsOpenMenu.addRow();
	app.gdsOpenMenu.setColumn(nRow, this.colInfo.menu.win, sWinId);
	app.gdsOpenMenu.setColumn(nRow, this.colInfo.menu.cd, sMenuId);
	app.gdsOpenMenu.setColumn(nRow, this.colInfo.menu.nm, sTitle);	
	app.gdsOpenMenu.setColumn(nRow, this.colInfo.menu.url, sMenuUrl);	

	return this.gfnSaveDsStore("openMenu",app.gdsOpenMenu);  // key 저장
};

/**
* 열린화면 제거 
* @param {string} winId
* @return 
* @example
* @memberOf 
*/
_pForm.gfnRemoveOpenMenuDs = function (winId)
{
	let findRow = app.gdsOpenMenu.findRow(this.colInfo.menu.winid,winId);
	if(findRow > -1) app.gdsOpenMenu.deleteRow(findRow);
};

/**
* @class 메뉴 ID 가져오는 함수 
* @return  {string} current menuid
* @example
var smenuId = this.gfnGetWinId();
trace(smenuId);   // S00001
* @memberOf 
*/
_pForm.gfnGetWinId = function()
{
   if(!!!app.frame || this.gfnIsQuickView()) return "";
   
    let pform = this.getOwnerFrame();
	if(this.opener){
		pform  = this.gfnGetCurrentForm();
	}
	
	if(!!!pform.arguments) return this.name;
	return pform.arguments[this.colInfo.menu.winid];	
	
};

/**
* @class 메뉴 ID 가져오는 함수 
* @return  {string} current menuid
* @example
var smenuId = this.gfnGetMenuCd();
trace(smenuId);   // S00001
* @memberOf 
*/
_pForm.gfnGetMenuCd= function()
{
   if(!!!app.frame || this.gfnIsQuickView()) return this.name;
	
   if(this.gfnIsQuickView()) return;
    let pform = this.getOwnerFrame();
	if(this.opener){
		pform  = this.gfnGetCurrentForm();
	}
	
    if(!!!pform.arguments) return this.name;
	return pform.arguments[this.colInfo.menu.cd];	
	
};

/**
* @class 메뉴 명 가져오는 함수 
* @return  {string} current menuid
* @example
var smenuNm = this.gfnGetMenuNm();
trace(smenuNm);   // 메뉴명1
* @memberOf 
*/
_pForm.gfnGetMenuNm = function()
{   
    if(!!!app.frame || this.gfnIsQuickView()) return "";
	
	let pform = this.getOwnerFrame();
	if(this.opener){
		pform  = this.gfnGetCurrentForm();
	}
	
	if(!!!pform.arguments) return this.name;
	return pform.arguments[this.colInfo.menu.nm];	
};


/**
* @class Frame 정보 가져오는 함수(windId 별)
* @param {string} winid
* @return 
oframe[winid]
* @example
this.gfnGetFrameWinId("win0001");
* @memberOf 
*/
_pForm.gfnGetMenLink= function ()
{
    if(!!!app.frame || this.gfnIsQuickView()) return "";
	let pform = this.getOwnerFrame();
	if(this.opener){
		pform  = this.gfnGetCurrentForm();
	}
	
	if(!!!pform.arguments) return this.name;
	return pform.arguments[this.colInfo.menu.url];	
};




/**
* menu  버튼 권한 가져오는 함수
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnGetMenuAuth = function ()
{
     if(!!!app.frame || this.gfnIsQuickView()) return "";
	 
    let pform = this.getOwnerFrame();
	if(this.opener){
		pform  = this.gfnGetCurrentForm();
	}
	
	if(!!!pform.arguments) return "";
	return pform.arguments[this.colInfo.menu.auth];	
};

/*
*	화면이동 아규먼트 가져오는 함수
*/

_pForm.gfnGetFrameArgs = function ()
{
     if(!!!app.frame || this.gfnIsQuickView()) return "";
	 
    let pform = this.getOwnerFrame();
	
	if(this.opener){
		pform  = this.gfnGetCurrentForm();
	}
	
	if(!!!pform.arguments) return;
	return pform.arguments[this.colInfo.menu.params];	
};




/**
* 열려 있는 현재 form
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnGetCurrentForm = function ()
{
    if(!!app.frame && !this.gfnIsQuickView()){
	  	let activeWork   =  app.frame.work.getActiveFrame();		
	    if(activeWork)  return activeWork;
	}
   
	return "";
};


/**
* @class 서비스(transaction) URL 가져오는 함수 <br>
* @param n/a
* @return 
*/
_pForm.gfnGetServerUrl = function()
{
	let urlPath = "";
	urlPath = env.services["svcUrl"].url;	
	return urlPath;
};

/**
* @class 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드 <br>
* @param  none
* @return 
*/
_pForm.gfnGetApplication = function()
{
	return nexacro.getApplication();
};


/**  
*  공통코드 필터
*@param {object} 필터할 코드 값 : 명
*@param {component} 필터할 데이타셋
*@param {string}  선택 값 입력 옵션   (생락갸능) 값없음
'': 공백    's' : =선택=  'a' : =전체=
* @return 
* @example
var filterCode  = {HIGH_CD : "0001"}; 
var dsOutComCode    = this.dsOutComCode;  //화면에서 받아올 dataset
dsOutComCode  = this.gfnGetComCodeFilter(filterCode,dsOutComCode);
* @memberOf 
*/
_pForm.gfnGetComCodeFilter = function (param,targetDs)
{
	let ncnt = 0;
	let paramDataset = app.gdsComCode;
	
	if(this.isNull(targetDs)) return;
	targetDs.copyData(paramDataset);	
	targetDs.clearData();
	

	if(paramDataset.getRowCount() > 0)
	{
		paramDataset.filter("");
	    for (let key in param)
		{			
		    let	codecls = key;
			let fvClassCd = param[key];
			
			let fvClassCdRes = codecls.split(",");
			let fvClassCd2 = "";
			
			if(ncnt==0)
			{
				
				if(fvClassCdRes.length > 1)
				{
					for (let n=0; n<fvClassCdRes.length;n++)
					{
						if(n==0)
						{
							filterStr += "("+codecls+".toString() == '" + fvClassCdRes[n] + "'";							
						}
						else
						{							
							filterStr += " || "+codecls+".toString() == '" + fvClassCdRes[n] + "'";
							if( fvClassCdRes.length-1 == n) filterStr += ")";
						}
						
					}
				}
				else
				{
					filterStr = ""+codecls+".toString() == '" + fvClassCd + "'";
				}				
			}
			else
			{
				
				if(fvClassCdRes.length > 1)
				{
					for (var n=0; n<fvClassCdRes.length;n++)
					{
						if(n==0)
						{
							filterStr += " && ("+codecls+".toString() == '" + fvClassCdRes[n] + "'";
						}
						else
						{
							filterStr += " || "+codecls+".toString() == '" + fvClassCdRes[n] + "'";
							if( fvClassCdRes.length-1 == n) filterStr += ")";							
						}
						//trace("ncnt : " + ncnt + "<> fvClassCdRes : " +fvClassCdRes[n]);
					}
				}
				else
				{
					filterStr += " && "+codecls+".toString() == '" + fvClassCd + "'";
				}
				
			}
			
			//trace(" filterStr : " );
			ncnt++;     
			
		}
		paramDataset.filter(filterStr);
		targetDs.copyData(paramDataset,true);
		paramDataset.filter("");
		
		if(targetDs.getRowCount() < 1) this.console.error("[데이타 nul[ 해당 코드 값 filter 값이 존재하지 않습니다");
		
// 		if(!nexacro._isUndefined(selType)){
// 		    this.gfnInSelectText(targetDs,selType);
// 		}
		
	}
	else
	{ 
		alert(" gdsComCode 데이타가 존재하지 않습니다. 로그인 후 작업 진행 하셔야 합니다.");
	}
	
	return targetDs;
	
};


/*
*	콤보 라벨 추가( =전체=  =선택= )
* @param {comp}  combo 
* @param {string}  "" 공백 "a" (전체기본) "s" (선택)
*/
_pForm.gfnCboNullText =  function (cbo,sType)
{
    if(!!!cbo) return;
    let dsObj   = cbo.getInnerDataset();
	let codeCol = cbo.codecolumn;
	let dataCol = cbo.datacolumn;	
	
	if(!!!dsObj || !!!codeCol || !!!dataCol) return;
	
	dsObj.insertRow( 0 );
	dsObj.setColumn( 0 , codeCol  , "" );
	dsObj.setColumn( 0 , dataCol, this.gfnNullTxt(sType)); // - 전체 -		
};

/**
* 공통코드 콤보  라벨 추가( =전체=  =선택= )
* @param {dataset}  추가할 dataset 
* @param {string}  "" 공백 "a" (전체기본) "s" (선택)
* @return "login" "mainmain" 
* @example
* @memberOf 
*/
_pForm.gfnInSelectText =  function (dsCombo,colCode,colData,sType)
{   
	dsCombo.insertRow(0);
	dsCombo.setColumn( 0 , colCode   , "" );   
	dsCombo.setColumn( 0 , colData, this.gfnNullTxt(sType)); // - 선택 -		
};
//com.cd
//com.nm
/**
* @class  프로젝트 로컬 실행 여부
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnIsLocal = function()
{
	if (nexacro.getEnvironmentVariable("evRunMode") == "S" || nexacro.getEnvironmentVariable("evRunMode") == "L") 
	return true;
	else return false;	 
};


/**
* 메인 프레임 전환(login,mdi)
* @param {string} size parameter   init : 초기 로그인
* @return 
* @example
this.gfnSetFrame("login"); //login
this.gfnSetFrame("mdi"); //mdi
* @memberOf 
*/
_pForm.gfnSetFrame = function(p)
{  
	let sepSize;
	let path  =  Object.assign({},app.frame.path); 
	
	if(!!!p) return;  

	if( p =='login'){  
		
		if(!!!app.frame.login.formurl) app.frame.login.formurl = path.login; 
		app.frame.top.formurl = "";    // set path top
		app.frame.top.formurl  = path.top ;    // set path top
		app.frame.vFrs.separatesize = '*,0,0,0';
		app.frame.status = p;
		
	} else if( p == "mdi") {   
			
		if(!!!app.frame.top.formurl){
			app.frame.top.formurl = path.top;    // set path top
		} else {		
			app.frame.top.form.fnSetInit();
		}
		
		if(!!!app.frame.left.formurl){
		    app.frame.left.formurl = path.left;  //set path left 
		}else{
			
			 app.frame.left.form.fnSetInit();		
			//app.frame.lefts.fnSetInit();			
		}
		
		if(!!!app.frame.mdi.formurl) app.frame.mdi.formurl = path.mdi;  //set path mdi
		if(!!!app.frame.main.formurl) app.frame.main.formurl = path.main;  //set path main
		
		app.frame.vFrs.separatesize = '0,60,*,36';
		//app.frame.hfrs.separatesize = '264,*,40';
		app.frame.status = p;		

    }else if(p == "work") {  
		app.frame.vFrsWork.separatesize = "0,*";
	} else if(p == "main") {       
		app.frame.vFrsWork.separatesize = "*,0";
		//app.frame.hfrs.separatesize = '264,*,0';
		
	} 
	
};

/**
* Left frame show hide 
* @param {boolean}  true : 펼침 fale 접힙
* @return 
* @example
* @memberOf 
*/
_pForm.gfnLeftFramShowHide = function (b)
{
	if(b){   //펄친
		app.frame.hFrs.separatesize = "264,*";
	}else{ // 접힘
		app.frame.hFrs.separatesize = "0,*";
	}
};

/**
* 메인프레임 사이즈 체크
* @return "login" "mainmain" 
* @example
* @memberOf 
*/
_pForm.gfnIsMainFrame =  function ()
{
	if(app.frame.vFrs.separatesize == '*,0,0') return "login";
	else if(app.frame.vFrs.separatesize  == '0,60,*') return "mdi";
	else return null;
};

/**
*  work size 채크
* @return "main" "work" 
* @example
* @memberOf 
*/
_pForm.gfnIsWork = function ()
{
	let  vfrsWorkSize = app.frame.vFrsWork.separatesize;	 	  
	if( vfrsWorkSize  == "0,*,0") return "main";
	else if( vfrsWorkSize == '36,0,*') return "work";	   
	else return null;	   
};


/**
* 레프트 프페임 펼침/접힘
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnSetLeft = function ()
{
	
};
/**
* @class total text 설정 
* @param {component} total static componnnt
* @param {number} rowcount
* @return 
* @example
this.gfnSetTotal(this.Static00,this.ds.getRowCount());
* @memberOf 
*/
_pForm.gfnSetTotal = function (obj,nCnt)
{
    const pcnt = "Total : <fc v='#f33e46'>" + nCnt + "</fc>";	
	if(obj instanceof Static)  obj.usedecorate = true;
	
	obj.text = pcnt;
	obj.fittocontents = true;
	obj.parent.resetScroll();	
};


/**
* @class  mdi menu close(menuid)
* @param {string} menuid
* @return 
* @example
this.gfnMdiClose(menuid);
* @memberOf 
*/
_pForm.gfnMdiClose = function (menuid)
{
	if(app.gdsOpenMenu.getRowCount() == 0) return;
    const winid  = app.gdsOpenMenu.lookup(this.gvMenuColumns.menuId,menuid,this.gvMenuColumns.winId);	
	if(nexacro._isNull(winid)) return;
	//if(winid == 
    app.frame.mdi.form.fnMdiClose(winid);
	
};

/**
* @class 현재 menu 닫기
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnCurrontMdiClose = function ()
{
	var winid = this.gfnGetWinId();
	this.gfnMdiClose(winid);
};



/************************************************************************
* screen_main 메인포털 공통 (로그인,회원가입, FAQ, Q&A)
************************************************************************/


/**
* 글로벌 데이타셋 초기화
* @return
* @example
* @memberOf
*/
_pForm.gfnInitLoginWindow = function()
{		
	//글로벌 dataset 삭제
	let applicationobj = app.all;
    for (let i=0;i<applicationobj.length;i++)
    {
		if (applicationobj[i]+"" == "[object Dataset]")
		{
		    try
		    {
                if (applicationobj[i].id.indexOf(".") == -1)
                {
                    let gds = applicationobj[i].id;
					if(gds.toLowerCase().indexOf("gridpopupmenu") == -1){
				        app[gds].clearData();
					}				
					
                }
            }
            catch (e)
            {
				trace(">>>> gfnInitLoginWindow e Message" + e);
            }
		}
    }
	
};


/*
*	현재의 screen id 가져 오는 함수
*@return screenid
*@example
* var screenid = this.gfnGetScreenId();
trace(screenid); // screen_info, 
*/

_pForm.gfnGetScreenId = function ()
{
	
	return nexacro.getApplication().screenid;
};


_pForm.gfnNullTxt = function (p)
{		 		 
	return  (p == "s" ? "선택" :  p == "a" ? "전체" : "");		 
};



/**
*  application id 가져오는 함수 
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnGetApplicationId = function ()
{
	return nexacro.getApplication().id ;
};



/*
*	현재 context 폴더 가져오는 함수
*/

_pForm.gfnGetUrlFolder = function ()
{
	let urlForder ="";
	
	if(system.navigatorname == "nexacro")
	{
		urlForder = nexacro.getProjectPath();	
		urlForder = urlForder.split("file://")[1].split("/");
		urlForder  = urlForder[urlForder.length-2];		 
	}
	else
	{ 
		let urlPath = window.location.protocol + "//" + window.location.host;
		urlForder =  nexacro.getProjectPath().split("//")[1].split("/")[1];	
	}
	
	return urlForder;
};


/**
* 전용 브라우저 url 변경
* @param {string} url
* @param {json}  arguments
* @return
* @example
* @memberOf
*/
_pForm.gfnGoFormUrl = function (surl,args)
{
	if(this.isNull(surl)) return;
	app.frame.work.fnSetUrl(surl,args);		
};

/**
* 개발틀 실행 모드 
* @param {string} 
* @return 
* @example
let isViewer = this.gfnIsQuickView();   
* @memberOf 
*/
_pForm.gfnIsQuickView = function ()
{
      
	if (this.name != "application" && (this.getOwnerFrame() && this.getOwnerFrame().name == "QuickViewFrame") || (this.parent && this.parent.parent && this.parent.parent.name == "QuickViewFrame")) {
		return  true;
	}

	 return false;
// 	
// 	if(nexacro.getEnvironmentVariable("evQuikView") == "Y")  return true;
// 	else return false;
};





/**
*  브라우저 전체화면으로 전환 (web browser 전용)
* @example
* @memberOf 
*/
_pForm.gfnEnterFullscreen = function() {
    
	if(this.gfnIsNexacro()) return;
	
    let element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

/**
* 브라우저 전체화면 종료
* @example
* @memberOf 
*/
_pForm.gfnExitFullscreen = function() {
    
	if(this.gfnIsNexacro()) return;
    
	if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}


/**
*  검색 영역 초기화
* @param {object} 검색영역 divsion
* @return 
* @example
* @memberOf 
*/
_pForm.gfnSearchReset = function (comp)
{
    let compList = 	this.gfnCompsQuery(comp, "isVisible == true && typeOf != 'Static' &&  typeOf != 'Form' &&   typeOf != 'Button'");
	
	compList.forEach((com,idx) =>{
			com.value = "";
		}); 
	
	
};


/**
* logout
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pForm.gfnSetLogout = function ()
{
	this.gfnLogoutTran();
	
	if(!this.gfnIsNexacro()){  //webbrowser
		
		window.top.location.reload();
		if (window.opener) {window.opener.top.location.reload(); self.close();} 
		
	}else{ // window runtime
		this.gfnInitLoginWindow();  //글로벌 데이타셋 초기화
		this.gfnSetFrame("login");  //set login frame		
	}
};

/**
 * 넥사크로 브라우저 여부를 반환한다.
 * @type {boolean}
 * @default false
 */
_pForm.gfnIsNexaBrowser = function ()
{
     
	 if (~nexacro.getProjectPath().indexOf("file:")) {
       return true;
     }
	 return false;
};

/**
 * 서버환경 별로 셋팅할 주소값을 반환한다.<br/>
 * 넥사크로 브라우저는 "http://localhost:8080"를 반환한다.
 * @type {string} 
 */
_pForm.getSvcUrl = function ()
{

  return urlPath;
//      if(~prjPath.indexOf("file:") 
// 	|| ~prjPath.indexOf("localhost") 
// 	){
// 	    return envSvcUrl;
// 	}else if(~prjPath.indexOf("127.0.0.1")){
// 	   return   "http://localhost:"+envSvcUrl.url.split(":")[2] + "/";	
// 	} else {
// 		return location.origin + "/";
// 	}

};


//project Url 가져오는 함수
_pForm.getPrjUrl = function ()
{

   return webPath;
// 		if(~nexacro.getProjectPath().indexOf("127.0.0.1")){
// 		return  nexacro.getProjectPath();
// 	}else{
// 	   return this.getSvcUrl() + "/nx/";
// 	}

};


/** 
* 임시 작업중 alert
*/
_pForm.alertjob = function()
{
	alert(" 개발 진행 중 입니다.");
};

delete _pForm;