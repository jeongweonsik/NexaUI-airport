(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("TopFrame");
            this.set_cssclass("frm_TF");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1598,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"parentCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuGroup\" type=\"STRING\" size=\"32\"/><Column id=\"url\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"menuCd\">M120003</Col><Col id=\"menuNm\">탑메뉴1</Col><Col id=\"parentCd\">M000120</Col><Col id=\"menuLvl\">0</Col><Col id=\"menuGroup\">0</Col><Col id=\"url\"/><Col id=\"sort\">1203</Col><Col id=\"menuPath\">개발자샘플 &gt; </Col></Row><Row><Col id=\"menuCd\">M220003</Col><Col id=\"menuNm\">탑메뉴2</Col><Col id=\"parentCd\">M100121</Col><Col id=\"menuLvl\">0</Col><Col id=\"menuGroup\">0</Col><Col id=\"sort\">1203</Col><Col id=\"menuPath\">개발자샘플 &gt; </Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_SEARCH_YN\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_APPROVE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_EDIT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LEVEL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AUTH_PRINT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"TOP_MENU\" type=\"STRING\" size=\"32\"/><Column id=\"PARENT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LINK\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NAVI\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTopBtn","270","0","1220",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divTop");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","0","210",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Incheon Airport");
            obj.set_cssclass("sta_TF_Logo");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1598,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        * top frame
        *@FileName frmTop
        *@Creator
        *@CreateDate 2024/10/30
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
        this.fvFirstGap 		= 0;
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 26;
        this.fvTotWidth         = 0
        this.fvTopBtnPrefix 	= "TOP_";
        this.btnTopSel;

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.frm_onload = function(obj,e)
        {
        };

        this.fnSetInit = function ()
        {
        // 	this.fnSetUserInfo();
         	this.fnSetTopMenu();
        // 	this.frmTop_onsize();
        };

        /**
        * @description topmenu 셋팅
        */
        this.fnSetTopMenu = function ()
        {
        	let sFilter = this.colInfo.menu.lvl + " == '0' ";//&& " + this.FRAME_MENUCOLUMNS.useYn + " == 'Y'";
        	app.gdsMenu.filter(sFilter);
        	// Top 메뉴 복사
        	this.dsTopMenu.copyData(app.gdsMenu, true);
         	app.gdsMenu.filter("");


        	for (let i = 0; i < this.dsTopMenu.getRowCount(); i++)
        	{

        		//	let sMenuCd   = this.dsTopMenu.getColumn(i,this.colInfo.menu.cd);
        	    let sTopId  =  this.dsTopMenu.getColumn(i,this.colInfo.menu.cd);
        		let sMenuNm = this.dsTopMenu.getColumn(i,this.colInfo.menu.nm);
        		//trace(" ## sTopId : " + sTopId + "<> sMenuNm : "  + sMneuNm);
        		this.fnCreateTopMenu(sTopId, sMenuNm,i);
        	}

        	this.divTopBtn.width = this.fvTotWidth;
            this.divTopBtn.form.resetScroll();
        	this.resetScroll();

        	//메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };


        /**
         * @description 버튼 redraw
         */
        this.fnRedrawBtn = function ()
        {
        	// 모든 버튼 체크
        	this.fnCheckShowBtnAll();


        };


        /**
         * @description 모든 버튼 체크
         */
        this.fnCheckShowBtnAll = function ()
        {
        	if (this.dsTopMenu.rowcount == 0) return;

        	var objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + this.dsTopMenu.getColumn(0, this.colInfo.menu.cd));
        	var objTopLast = this.fnFindObj(this.fvTopBtnPrefix + this.dsTopMenu.getColumn(this.dsTopMenu.rowcount - 1, this.colInfo.menu.cd));

        	var nLeft = objTopFirst.getOffsetLeft();
        	var nRight = objTopLast.getOffsetRight();

        	if (this.divTopBtn.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        };


        /**
         * @description menu tab 버튼 첫번째 이동 함수
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var sTopId;
        	var objTop;
        	var objTopFirst;

        	nIndex = this.fnGetFirstTopIndex();

        	if (nIndex < 0) return;

        	if (nMoveIdx < 0) return;

        	if (nMoveIdx >= this.dsTopMenu.rowcount) return;

        	sTopId = this.dsTopMenu.getColumn(nIndex, this.colInfo.menu.cd);
        	objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	sTopId = this.dsTopMenu.getColumn(nMoveIdx, this.colInfo.menu.cd);
        	objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	var nShiftPos = objTop.getOffsetLeft() - objTopFirst.getOffsetLeft();
        	for (var i = 0; i < this.dsTopMenu.rowcount; i++)
        	{
        		sTopId = this.dsTopMenu.getColumn(i, this.colInfo.menu.cd);
        		objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);
        		objTop.move(objTop.getOffsetLeft() - nShiftPos, objTop.getOffsetTop());
        	}
        };

        /**
         * @description menu top 버튼 첫번째 index 가져오는 함수
         */
        this.fnGetFirstTopIndex = function ()
        {
        	for (let i=0; i < this.dsTopMenu.rowcount;i++)
        	{
        		const sTopId  = this.dsTopMenu.getColumn(i, this.colInfo.menu.cd);
        		const objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);
        		if (this.gfnIsNull(objTop) == false)
        		{
        			if (0 <= objTop.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        };




        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
        * 사용자 정보 셋팅
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.fnSetUserInfo = function ()
        {
        	//  let userNm =  app.gdsUserInfo.getColumn(this.colInfo.user.nm);
        	//
        	// 	this.divRightForm.form.staUserInfo.text = userNm + "<fc v='#9899A7'>님 환영합니다.</fc>";
        	// 	this.divRightForm.form.resetScroll();
        	// 	this.resetScroll();
        };


        /**
        * @description Top menu creation
        */
        this.fnCreateTopMenu = function (sTopId, sName,idx)
        {
        //     let objPrevTab = this.fnGetLeft(sTopId)[0];
        	let nLeft   = this.fnGetLeft(sTopId)[1] || 0;

        	// Creating page button
        	let objBtn = new Button();
        	objBtn.init(this.fvTopBtnPrefix + sTopId,nLeft, 0, 0, null, null, 0);
        	this.divTopBtn.form.addChild(objBtn.name, objBtn);

        	objBtn.text = sName;
        	// objBtn.cssclass = idx == 0 ? "btn_TF_Menu_S" : "btn_TF_Menu";
        	objBtn.cssclass = "btn_TF_Menu";
        	objBtn.show();
        //	if(idx == 0 && objBtn.cssclass == "btn_TF_Menu_S") this.btnTopSel =  objBtn;
        	// 버튼 width 셋팅
        	objBtn.fittocontents = "width";
            objBtn.addEventHandler("onclick",this.btnTopMenu_onclick,this);
        	let nWidth = objBtn.getOffsetWidth();
        //	let ngap = this.dsTopMenu.getRowCount()-1 == idx ? 0 : this.fvBtnGap;
        	let ngap =  0;
        	this.fvTotWidth  +=   Number(nWidth) + ngap;

        };

        /**
        * top button click 시
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.btnTopMenu_onclick = function (obj,e)
        {
        // 	this.btnTopSel.cssclass = "btn_TF_Menu";
        // 	obj.cssclass = "btn_TF_Menu_S";
        // 	this.btnTopSel = obj;
        //
        // 	let sTopMenu = obj.name.split("_")[1];
        //
        // 	app.frame.lefts.fnSetMenuL(sTopMenu)
        };

        /**
        * @description 이전 버튼을 기준으로 버튼위치 리턴
        */
        this.fnGetLeft = function (sTopId)
        {
        	let nCurRow = this.dsTopMenu.findRow( this.colInfo.menu.cd, sTopId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	let objPrevTab = this.fnFindObj(this.fvTopBtnPrefix + this.dsTopMenu.getColumn(nCurRow - 1, this.colInfo.menu.cd));
        	let nSize = objPrevTab.getOffsetRight() + this.fvBtnGap;

        	return [objPrevTab,nSize];
        };

        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {

        	return this.divTopBtn.form.components[sId];
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*
        *	onsize
        */

        this.frmTop_onsize = function(obj,e)
        {
        		// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        	// this.resetScroll();
        };


        //logout click
        this.divRightForm_btnLogout_onclick = function(obj,e)
        {
            this.gfnSetLogout();
        };


        /************************************************************************
        * 메뉴 검색 event
        ************************************************************************/

        // 검색어 입력 시
        this.txtMenuSearch_onkeyup = function(obj,e)
        {
        	//	this.setPdvMenuSearchOpen();
            if(e.keycode == 13 && !this.isNull(obj.value)){
        		app.gdsMenu.filter("");
        		let inp = nexacro.trim(this.gfnRemoveSpecialChar(obj.value) ||"");  // 특수문자제거 추가
             	this.setDecorateFilter(inp);
        	}
        };

        //메뉴검색 실행시
        this.btnMenuSearch_onclick = function(obj,e)
        {
        	let inp = nexacro.trim(obj.value ||"");
        	this.setDecorateFilter(inp);
        };



        //검색용 dataset filter copy
        this.setDecorateFilter = function(inp)
        {
        	let pdiv          = this.pdivMenuSearch;
        	let grd           = pdiv.form.grdMenuList;
        	let gdsMenu        = app.gdsMenu;
        	let dsMenuSearch  = grd.getBindDataset();   // 검색용 원본 dataset
        	let dsFind        = this.dsMenuFind;    // 검색 결과용 dataset

        	grd.set_enableredraw(false);

        	let colNm = isNaN(inp) ? this.colInfo.menu.nm : this.colInfo.menu.cd;

        	gdsMenu.filter("String("+colNm+").indexOf('" +inp + "')>=0 && "+this.colInfo.menu.link+" != null");
        	dsMenuSearch.clearData();
        	dsMenuSearch.copyData(gdsMenu,true);
            let workForm = this.gfnGetCurrentForm();

            let nVal, nLen = "";
        	let arrLen = "";
        	let cnt = 0;
        	let rtnVal = "";

        	for(let i = 0; i < dsMenuSearch.getRowCount(); i++)
        	{
        		nVal    = dsMenuSearch.getColumn(i, this.colInfo.menu.nm);
        		nLen    = nVal.indexOf(this.txtMenuSearch.value);
        		cnt = 0;
        		arrLen = new Array()
        		while(nLen >= 0)
        		{
        			arrLen[cnt] = nLen;
        			nLen = nVal.indexOf(this.txtMenuSearch.value, nLen+1, nVal.length);
        			cnt += 1;
        		}

        		if(arrLen.length > 0)
        		{

        			rtnVal = this.setCombination(arrLen, nVal, this.txtMenuSearch.value);

        			dsMenuSearch.setColumn(i, this.colInfo.menu.nm, rtnVal);
        		}
        	}
        	grd.enableredraw = true;
        	gdsMenu.filter('');
        	this.fnPidvOpenMenuGrd_onsize();

        }


        this.setCombination = function(ary, nVal, strSear)
        {
        	var len = 0;
        	for(var i = ary.length-1; i >= 0; i--)
        	{
        		len = ary[i] + strSear.length
        		nVal = nVal.substr(0, ary[i])+ "<b v='true'><fc v='#036CE5'>" + strSear +"</fc></b>" +nVal.substr(len);

        	}
        	return nVal;
        }


        /*
        *	글자 수에  높이 사이즈 조정 popup 오픈
        */

        this.fnPidvOpenMenuGrd_onsize = function(h)
        {
            let pdiv = this.pdivMenuSearch;
        	let grd = pdiv.form.grdMenuList;
        	let ds  = grd.getBindDataset();
        	let grdHeaderHeight = grd.getFormatRowProperty(0,"size");
        	let nHeight = ds.getRowCount() > 20 ? 20 : ds.getRowCount();

        	nHeight = Number(nHeight) * Number(grdHeaderHeight) +2;
        	let nHBkSize = h || 2;
        	let ngap = 20;
            let ngapTop = 4;

        	if(ds.rowcount == 0){
        		this.txtMenuSearch.value = null;
        		this.txtMenuSearch.displaynulltext = this.gfnGetMessage("10147"); //해당 값을 찾을 수 없습니다.
        		this.btnMenuSearch.setFocus();
        		return;
        	}else{
        		this.txtMenuSearch.displaynulltext = null;
        		this.txtMenuSearch.setFocus();
        	}

        	ds.set_rowposition(-1);
            grd.height = nHeight;
            pdiv.height = nHeight + nHBkSize;
        	pdiv.width = Number(this.txtMenuSearch.getOffsetWidth()) + ngap ;

        	let nTop        = Number(this.txtMenuSearch.height) +ngapTop;
            let nLeft       = Number(this.txtMenuSearch.width) - Number(pdiv.width) +ngap;

        	pdiv.trackPopupByComponent(this.txtMenuSearch,nLeft,nTop);

        }


        this.txtMenuSearch_onchanged = function(obj,e)
        {
            let inp = nexacro.trim(obj.value ||"");

         	this.setDecorateFilter(inp);
        };

        this.pdivMenuSearch_grdMenuList_oncellclick = function(obj,e)
        {
            let ds = obj.getBindDataset();
        	let sMenuId = ds.getColumn( e.row, this.colInfo.menu.cd);  //menuCode
        	let menuNm = ds.getColumn( e.row, this.colInfo.menu.nm);  //menuName
        	let menuLink = ds.getColumn(e.row, this.colInfo.menu.link);  //menuUrl

        	if(this.isNull(menuLink)) return;

        	this.txtMenuSearch.value = "";
        	this.pdivMenuSearch.closePopup();
        	this.gfnOpenMenu(sMenuId, "");
        	//	this.gfnOpenMenu(sMenuId, objParam , true);   // 초기화 url 오픈 시 사용

        };

        this.pdivMenuSearch_grdMenuList_onkeyup = function(obj,e)
        {
        	if(e.keycode  == 13){
        		let ds = obj.getBindDataset();
        		let nrow = obj.currentrow;
        		let sMenuId = ds.getColumn( nrow, this.colInfo.menu.cd);  //menuCode
        		let menuNm = ds.getColumn( nrow, this.colInfo.menu.nm);  //menuName
        		let menuLink = ds.getColumn(nrow, this.colInfo.menu.link);  //menuUrl

        		if(this.isNull(menuLink)){

        			this.txtMenuSearch.value = null;
        			this.txtMenuSearch.displaynulltext = this.gfnGetMessage("10149"); //메뉴ID가 존재하지 않습니다.
        			this.btnMenuSearch.setFocus();
        			return;
        		}

        		this.txtMenuSearch.value = "";
        		this.pdivMenuSearch.closePopup();
        		this.gfnOpenMenu(sMenuId, "",false);


        	}
        };


        //open User Setting  popdiv
        this.divRightForm_btn00_00_01_onclick = function(obj,e)
        {
        	let pdiv = this.pdivUserSetting;
            let btnUser = this.divRightForm.form.btnUserSetting;
            let nGapTop = 4;

        	let nTop        = Number(btnUser.height) +nGapTop;
        	let nLeft       = Number(btnUser.width) /2 - Number(pdiv.width) /2;

        	pdiv.trackPopupByComponent(btnUser,nLeft,nTop);
        };

        this.divRightForm_btnAlam_onclick = function(obj,e)
        {
        	let pdiv = this.pdivAlam;
            let btnAlam = this.divRightForm.form.btnAlam;
            let nGapTop = 4;

        	let nTop        = Number(btnAlam.height) +nGapTop;
        	let nLeft       = Number(btnAlam.width) /2 - Number(pdiv.width) /2;

        	pdiv.trackPopupByComponent(btnAlam,nLeft,nTop);
        };

        //stte map
        this.btnSieteMap_onclick = function(obj,e)
        {
        	let pdiv = this.pdivSiiteMap;
        	let btnSiteMap = this.btnSieteMap;
        	let nGapTop = 4;
        	let nTop        = Number(btnSiteMap.height) + nGapTop;
        	let nLeft       = Number(btnSiteMap.width) /2 -10;
        	let nwidth      = Number(app.frame.vFrs.width) ;
        	let nHeight     =  Number(app.frame.vFrs.height) -Number(this.height)+4;

             pdiv.form.setFirtScroll();
        	 pdiv.trackPopupByComponent(btnSiteMap,nLeft,nTop,nwidth,nHeight,"popDivCallback",false);

        };


        this.popDivCallback = function (id,menucd)
        {

        	if(!!menucd){

        	  this.gfnOpenMenu(menucd, "");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_onload,this);
            this.addEventHandler("onsize",this.frmTop_onsize,this);
            this.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
