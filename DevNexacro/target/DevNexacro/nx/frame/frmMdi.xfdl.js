(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("MdiFrame");
            this.set_cssclass("frm_MDI");
            if (Form == this.constructor)
            {
                this._setFormPosition(1598,36);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LINK\" type=\"STRING\" size=\"32\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBlur","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_boxShadow("inset 3px 3px 10px 0px #cacbd9");
            obj.set_background("#fafafc");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Div("divMenuButton",null,"0","174",null,"16","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuList",null,"6","24","24","0",null,null,null,null,null,this.divMenuButton.form);
            obj.set_taborder("0");
            obj.set_tooltiptext("열린탭목록");
            obj.set_cssclass("btn_MDI_TabList");
            this.divMenuButton.addChild(obj.name, obj);

            obj = new Button("btnHome","-4","0","76",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("메인화면");
            obj.set_text("MAIN");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","btnHome:0","0",null,null,"divMenuButton:0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","0","50","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tooltiptext("메뉴보이기");
            obj.set_cssclass("btn_MDI_MenuShow");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MDI_Menu","72","50","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면타이틀8글자...");
            obj.set_cssclass("btn_MDI_Menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02_00","232","50","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택화면타이틀8...");
            obj.set_cssclass("btn_MDI_Menu_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_03_00","368","60","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("닫기");
            obj.set_cssclass("btn_MDI_Extra_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MDI_Extra","208","60","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("닫기");
            obj.set_cssclass("btn_MDI_Extra");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","36","50","36","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tooltiptext("메인화면");
            obj.set_cssclass("btn_MDI_Home_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivOpenMenu",null,"90","202","302","10",null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Option");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOpenMenu","0","0",null,null,"0","0",null,null,null,null,this.pdivOpenMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MDI_TabList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.pdivOpenMenu.addChild(obj.name, obj);

            obj = new Button("btn00_02_00_00","260","134","160","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("선택화면타이틀8...");
            obj.set_cssclass("btn_MDI_Menu_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staInfoNavi","1630","12","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("메뉴1>메뉴2>메뉴3");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_visible("false");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"1","528","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenuButton.form
            obj = new Layout("default","",0,0,this.divMenuButton.form,function(p){});
            this.divMenuButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab
            obj = new Layout("default","",0,0,this.divTab.form,function(p){});
            this.divTab.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivOpenMenu.form
            obj = new Layout("default","",0,0,this.pdivOpenMenu.form,function(p){});
            this.pdivOpenMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1598,36,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {
        /**
        * mdi frame
        *@FileName  frmMdi
        *@Creator
        *@CreateDate 2024/10/21
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        this.fvFirstGap         = 0;
        this.fvBtnGap           = 0;
        this.fvTabHeight        = 36;
        this.fvTabWidth        =  187;
        this.fvTabExtraRightGap = 25;
        this.fvExtraWidth       = 18;
        this.fvExtraTop         = 9;
        this.fvExtraHeight      = 18;
        this.fvExtraBtnPrefix   = "EXTRA_";
        this.fvTabBtnPrefix     = "TAB_";
        this.fvMenuId = "";
        this.bClose;
        //css
        this.fvCssMdi    = "btn_MDI_Menu";
        this.fvCssMdiS   = "btn_MDI_Menu_S";
        this.fvCssExtra  = "btn_MDI_Extra";
        this.fvCssExtraS = "btn_MDI_Extra_S";
        this.fvCssHome   = "btn_MDI_Home";
        this.fvCssHomeS  = "btn_MDI_Home_S";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.formOnload = function(obj,e)
        {

        };

        /**
         * @description 메뉴 tab Button 동적생성
         * @param {string} sWindId - 메뉴키값
         * @param {string} sName - 메뉴명
         */
        this.fnAddTab = function (sWindId, sName)
        {

        	let nRow = this.dsTab.findRow(this.colInfo.menu.winid, sWindId);

        	if (nRow > -1) return nRow;

        	const sTabID = this.fvTabBtnPrefix + sWindId;

        	nRow = this.dsTab.addRow();
        	this.dsTab.setColumn(nRow, this.colInfo.menu.tabid , sTabID);
        	this.dsTab.setColumn(nRow, this.colInfo.menu.winid, sWindId);
        	this.dsTab.setColumn(nRow, this.colInfo.menu.nm, sName);

        	this.fnAddTabBtn(sTabID, sName);
        	this.fnRedrawTab();

        	this.bClose = true;

        	return nRow;
        }

        /*
        * 메뉴 현재 tab id가져오는 함수
        * @public
        * @param
        * @return  {string} WIN_ID
        * @example
        * @memberOf
        */
        this.fnGetCurTab = function ()
        {
        	if (this.dsTab.rowposition < 0) return false;

        	const sTtile  = this.dsTab.getColumn(this.dsTab.rowposition, this.colInfo.tab.nm);
        	return this.dsTab.getColumn(this.dsTab.rowposition, this.colInfo.menu.tabid);
        };

        this.fnIsMain = function (tabID)
        {
        	if(tabID.indexOf("winMAIN") >-1) return true;

        	return false;
        };

        /**
         * @description 메뉴 tab 신규 동적 생성
         * @param {string} sTabID - 메뉴키값
         * @param {string} sTabName - 메뉴명
         */
        this.fnAddTabBtn = function (sTabID, sTabName)
        {
        	let objTab;
        	let objBtn;
        	let sExBtnId = this.fvExtraBtnPrefix + sTabID;   //extra button id
        	this.fvMenuId  =    sTabID.substr( sTabID.lastIndexOf("_")+1);
            let sTabNavi    =  app.gdsMenu.lookupAs(this.colInfo.menu.cd,this.fvMenuId , this.colInfo.menu.navi);
        	let objTextWidth =  "";

        	if (this.gfnIsNull(this.fnFindObj(sTabID)))
        	{
        		objTab = new Button();
        		objTab.init(sTabID, this.fnGetLeft(sTabID), 0, this.fvTabWidth, this.fvTabHeight, null, null);
        		this.divTab.addChild(objTab.name, objTab);

        	}
            let nSize = 0;
            if(/[a-zA-Z]/.test(sTabName)) nSize =15;
        	else nSize = 24;

        	let txtLength =  this.gfnGetByteCount(sTabName);

            if(txtLength  > nSize){
        	   if(/[a-zA-Z]/.test(sTabName))  sTabName = sTabName.substr(0,txtLength-6) + "...";
               else sTabName = sTabName.substr(0,10) + "...";
        	}

        	objTab.text = sTabName;
             objTab.tooltiptext = sTabNavi;
        	objTab.cssclass = this.fvCssMdiS;
        	objTab.show();
        	objTab.setEventHandler("onclick", this.btnTab_onclick, this);
        	objTab.setEventHandler("onmouseenter", this.btnTab_onmouseenter, this);

        	if (this.fnFindObj(sExBtnId) == null)
        	{
        		objBtn = new Button();
        		objBtn.init(sExBtnId, objTab.getOffsetRight() - this.fvTabExtraRightGap, this.fvExtraTop, objTab.getOffsetRight() - this.fvTabExtraRightGap + this.fvExtraWidth - (objTab.getOffsetRight() - this.fvTabExtraRightGap), this.fvExtraTop + this.fvExtraHeight - this.fvExtraTop);
        		this.divTab.addChild(sExBtnId, objBtn);

        		objBtn.cssclass = this.fvCssExtraS;
        		//objBtn.set_cursor("pointer");
        		objBtn.show();
        		objBtn.setEventHandler("onclick", this.btnExtra_onclick, this);


        	}
        }


        /**
         * @description 화면 리사이징
         */
        this.form_onsize = function(obj,e)
        {
        	this.fnRedrawTab();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*
        *	mouse enter
        */
        this.btnTab_onmouseenter = function (obj,e)
        {
        	trace(" mouse enter === > ");
        };

        /**
         * mdi arrange 처리 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.btnArrange_onclick = function(obj,  e)
        {

           if(this.isNull(obj.name)) return;

           let strType = obj.name.replace("btn", "");

        	// this.console.log(" ## strType==> " + strType.toLowerCase());

        	this.fnArrangeWin(strType.toLowerCase());
        }

        /**
         * 열려있는 윈도우 화면을 정렬
         * @param	: 	strType: 정렬 타입
         * @return	:   N/A
         */
        this.fnArrangeWin = function(strType)
        {
            strType = strType.toLowerCase();
        	// workFrame영역에 open된 childFrame 갯수
        	const iFramesCnt = app.frame.work.frames.length;

        	if (this.dsTab.getRowCount() == 0) return;
             let i=0

        	switch (strType)
        	{
        		case "maximize" :

        		    const curWinId = app.frame.work.getActiveFrame().name;

        			for (; i<iFramesCnt; i++)
        			{
        				app.frame.work.frames[i].openstatus = "maximize";
        				app.frame.work.frames[i].showtitlebar = false;
        				app.frame.work.frames[i].border = "0px solid #C8D0DF";
        			}

        			this.isActiveFrame(curWinId);
        			break;

        		case "closeall" :
        		    let isCloseCheck = true;
        			for (i=iFramesCnt-1; i>=0; i--) {

        				let winId = app.frame.work.frames[i].name;
        				const sMenuNm = this.gfnGetLookupData(app.gdsOpenMenu,this.colInfo.menu.winid, winId, this.colInfo.menu.nm);

        				if (!app.frame.work.frames[i].form.isClosWork()){
        					let sMsgId = "10153";							//메세지ID
        					let arrArg = ["화면 " + sMenuNm ];				//현재
        					// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        					 // 변경된 내역을 저장 하시겠습니까?
        					 this.gfnConfirm(sMsgId,arrArg,(yes)=>{

        						   if(yes)  this.fnTabOnClose(winId);

        					 });
        					 break;
        				}else{
        				   this.fnTabOnClose(winId);
        				}
        			}

        			break;

        		default :

        			for (; i<iFramesCnt; i++)
        			{
        				app.frame.work.frames[i].showtitlebar = true;
        				app.frame.work.frames[i].border = "1px solid #949BA8,1px solid #C8D0DF,1px solid #C8D0DF,1px solid #C8D0DF";
        				app.frame.work.frames[i].titlebarheight = 30;
        			 	app.frame.work.frames[i].titlebar.maxbutton.enable = true;
        				app.frame.work.frames[i].titlebar.closebutton.setEventHandler("onclick",this.fnSetCloseButton_onclick,this);
        				app.frame.work.frames[i].titlebar.maxbutton.setEventHandler("onclick",this.fnSetMaxButton_onclick,this);
        			}

        			app.frame.work.arrange(strType);
        			break;
        	}
        };


        // close button onclick handler
        this.fnSetCloseButton_onclick = function (obj,e)
        {
            const sWinId = obj.parent.parent.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");
        	const sMenuId = this.gfnGetLookupData(app.gdsOpenMenu,this.colInfo.menu.winid, sWinId, this.colInfo.menu.cd);
        	const sMenuNm = this.gfnGetLookupData(app.gdsOpenMenu,this.colInfo.menu.winid, sWinId, this.colInfo.menu.nm);
        	const objFrame = app.frame.work.frames;
        	const objForm =  objFrame[sWinId].form;

        	let rtn = objForm.isClosWork();  // 화면단 저장여부 체크
        	obj.rtn  =rtn;

        	if (!rtn){
        	  let sMsgId = "10153";			//메세지ID
        	  let arrArg = ["화면 " + sMenuNm ];
        		// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        	 this.gfnConfirm(sMsgId,arrArg,(yes)=>{

        		   if(yes){
        			  obj.rtn = true;
        			  this.fnTabOnClose(sWinId);
        		   }

        	 });
        	}

        };

        // max button onclick handler
        this.fnSetMaxButton_onclick = function (obj,e)
        {
        	this.fnArrangeWin("maximize");
        };
        /**
         * @description MDI 버튼 재조정
         */
        this.fnRedrawTab = function (sGubn)
        {

             if (this.gfnIsNull(sGubn)) sGubn = "move";

        	//this.fnSetTabSpinBtnShow();

        	if (this.dsTab.rowcount < 1) return;

        	let objTabFirst = this.fnFindObj(this.dsTab.getColumn(0, this.colInfo.menu.tabid));
        	var nLeft = objTabFirst.getOffsetLeft();

        	let objTabLast  = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, this.colInfo.menu.tabid));
        	let nRight = objTabLast.getOffsetRight();

        	if (this.divTab.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        	} else
        	{
        		// 메뉴 추가 시 버튼 잘림 방지
        		if (sGubn == "add")
        		{
        			this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        		}
        	}
        }

        /**
         * @description MDI spin 버튼 활성/비활성화 처리
         */
        this.fnSetTabSpinBtnShow = function ()
        {
        	let objTab;

        	this.fnSetMenuButtonVisible();   // 버튼 제어 활성/비활성화

        	if (this.dsTab.rowcount == 0)
        	{
        		this.btnPreMdi.visible = false;
        		this.btnNexMdi.visible = false;
        		return;
        	}

        	objTab = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, this.colInfo.menu.tabid));
        	if (this.divTab.getOffsetWidth() < objTab.getOffsetRight())
        	{
        		this.btnNexMdi.set_visible(true);
        	} else
        	{
        		this.btnNexMdi.visible = false;
        	}

        	objTab = this.fnFindObj(this.dsTab.getColumn(0, this.colInfo.menu.tabid));
        	if (objTab.getOffsetLeft() < 0)
        	{
        		this.btnPreMdi.set_visible(true);
        	} else
        	{
        		this.btnPreMdi.visible = false;
        	}

        	if(!this.btnPreMdi.visible && !this.btnNexMdi.visible){
        	    this.divTab.set_right("divMenuButton:0px");
        	}else if(this.btnPreMdi.visible){
        	   this.divTab.set_right("btnPreMdi:0px");
        	}else if(!this.btnPreMdi.visible && this.btnPreMdi.visible){
        	  this.divTab.set_right("btnNexMdi:0px");
        	}
        	this.resetScroll();
        }

        /**
         * @description 메인/서브 디자인 적용
         */
        this.fnSetStyle = function(sType)
        {
        	if (sType == "sub")
        	{
        		// 서브일때 정렬 사용
        		//this.fnSetEnableArrange(true);

        		// 화면버튼 디자인 설정
        		let sCurWinId = app.frame.vFrsWork.getActiveFrame().name;
        		this.fnSetActive(this.fvTabBtnPrefix + sCurWinId.name);

        		// 메인버튼 디자인 설정
        		this.btnHome.set_cssclass(this.fvCssHome);
        	}
        	else
        	{
        		// 메인일때 정렬 사용못함
        		//this.fnSetEnableArrange(false);

        		// 메인버튼 디자인 설정
        		this.btnHome.set_cssclass(this.fvCssHomeS);

        		// 화면버튼 디자인 설정
        		this.fnSetActiveBtn("btnHome");
        	}
        };

        /**
         * @description cascade 제어버튼 활성/비활성
         * @param {Boolean} bEnable - 활성화여부
         */
        this.fnSetEnableArrange = function(bEnable) {
        	this.btnCloseAll.set_enable(bEnable);
        };

        /**
         * @description menu tab 현재 버튼 이동
         * @param {String} sTabID - 이동할 탭 ID
         */
        this.fnSetActive = function (sTabID)
        {
        	const nRow = this.dsTab.findRow(this.colInfo.menu.tabid, sTabID);
        	if (nRow < 0)
        	{
        		return false;
        	}

        	this.dsTab.set_rowposition(nRow);
        	this.fnSetActiveBtn(sTabID);

        	return true;
        }

        /**
         * @description menu tab 현재 버튼 이동
         * @param {String} sTabId - 활성화할 탭 ID
         */
        this.fnSetActiveBtn = function (sTabId)
        {
        	let objTab;
        	let objExtraBtn;

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		objTab = this.fnFindObj(this.dsTab.getColumn(i, this.colInfo.menu.tabid));
        		objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, this.colInfo.menu.tabid));

        		if(sTabId == this.dsTab.getColumn(i, this.colInfo.menu.tabid))
        		{
        			objTab.set_cssclass(this.fvCssMdiS);
        			this.fnShowTabBtn(i);
        			this.fnSetStyle('sub');
        		}
        		else
        		{
        		   objTab.set_cssclass(this.fvCssMdi);

        		}
        	}
        }

        /**
         * @description menu tab 현재 버튼 보여주는 함수
         * @param {String} nIdx - 탭버튼인덱스
         */
        this.fnShowTabBtn = function (nIdx)
        {
        	let n;
        	let nLeft;
        	let nRight;

        	let objTab = this.fnFindObj(this.dsTab.getColumn(nIdx, this.colInfo.menu.tabid));
        	nLeft = objTab.getOffsetLeft();
        	nRight = objTab.getOffsetRight();

        	if(0 <= nLeft && this.divTab.getOffsetWidth() >= nRight)
        	{
        		return;
        	}

        	if (nLeft < 0)
        	{
        		this.fnMoveFirst(nIdx);
        		return;
        	}

        	let nMoveIdx = nIdx;

        	for (var i = this.fnGetFirstTabIndex() + 1; i < this.dsTab.rowcount; i++)
        	{
        		objTab = this.fnFindObj(this.dsTab.getColumn(i, this.colInfo.menu.tabid));
        		if (nRight - objTab.getOffsetLeft() <= this.divTab.getOffsetWidth())
        		{
        			nMoveIdx = i;
        			break;
        		}
        	}

        	this.fnMoveFirst(nMoveIdx);
        }


        this.fnSetMenuButtonVisible = function (b)
        {
             if(this.dsTab.getRowCount() > 0) this.divMenuButton.set_visible(true);
        	 else  this.divMenuButton.visible = false;

        };
        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divTab.form.components[sId];
        }

        /**
         * @description menu tab 버튼 첫번째 이동 함수
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	let nIndex;
        	let sTabId;
        	let objTab;
        	let objExtraBtn;
        	let objTabFirst;

        	nIndex = this.fnGetFirstTabIndex();

        	if (nIndex < 0)
        	{
        		return;
        	}

        	if (nMoveIdx < 0)
        	{
        		return;
        	}
        	if (nMoveIdx >= this.dsTab.rowcount)
        	{
        		return;
        	}

        	sTabId = this.dsTab.getColumn(nIndex, this.colInfo.menu.tabid);
        	objTabFirst = this.fnFindObj(sTabId);

        	sTabId = this.dsTab.getColumn(nMoveIdx, this.colInfo.menu.tabid);
        	objTab = this.fnFindObj(sTabId);

        	var nShiftPos = objTab.getOffsetLeft() - objTabFirst.getOffsetLeft();
        	for (let i = 0; i < this.dsTab.rowcount; i++)
        	{
        		sTabId = this.dsTab.getColumn(i, this.colInfo.menu.tabid);
        		objTab = this.fnFindObj(sTabId);
        		objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + sTabId);
        		objTab.move(objTab.getOffsetLeft() - nShiftPos, objTab.getOffsetTop());
        		if(this.gfnIsNull(objExtraBtn) == false )
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() - nShiftPos, objExtraBtn.getOffsetTop());
        	}
        }

        /**
         * @description menu tab 버튼 첫번째 index 가져오는 함수
         */
        this.fnGetFirstTabIndex = function ()
        {
        	for (let i=0; i < this.dsTab.rowcount;i++)
        	{
        		let sTabID  = this.dsTab.getColumn(i, this.colInfo.menu.tabid);
        		let objTab = this.fnFindObj(sTabID);
        		if (this.gfnIsNull(objTab) == false)
        		{
        			if (0 <= objTab.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        }

        /**
         * @description 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * @param {string} sWinId : 윈도우 생성 키
         * @example
         */
        this.isActiveFrame = function (sWinId)
        {
        	const framesInfo = app.frame.work.frames;

        	if(this.gfnIsNull(sWinId)) return true;

        	if(framesInfo[sWinId])
        	{
        	    this.setHomeCss(false);
        	    this.gfnSetFrame('work');
        		this.fnMoveTab(sWinId);   //tab이동
        		framesInfo[sWinId].setFocus();

        		return true;
        	}
        };

        /**
         * @description 메뉴 tab 이동
         * @param {string} sWindId - 메뉴키값
         */
        this.fnMoveTab = function (sWindId)
        {
        	let nRow = this.dsTab.findRow(this.colInfo.menu.tabid, sWindId);
        	if (nRow < 0) return nRow;

        	let sTabId = this.fvTabBtnPrefix + sWindId;
        	this.fnSetActive(sTabId);
        	this.fnRedrawTab();
        }


        /**
         * @description 이전 버튼을 기준으로 버튼위치 리턴
         */
        this.fnGetLeft = function (sTabId)
        {
        	let nCurRow = this.dsTab.findRow(this.colInfo.menu.tabid, sTabId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	const objPrevTab = this.fnFindObj(this.dsTab.getColumn(nCurRow - 1, this.colInfo.menu.tabid));
        	return objPrevTab.getOffsetRight() + this.fvBtnGap;
        }

        /**
         * @description 메뉴닫기(외부호출)
         * @param {String} sMenuId - 메뉴ID
         * @param {String} 저장 여부 체크 여부 false : 체크 안함
         */
        this.fnCloseMenu = function(sMenuId,bClose)
        {
        	if (this.gfnIsNull(sMenuId)) return;

        	const sWinId = this.gfnGetLookupData(app.gdsOpenMenu,this.colInfo.menu.cd, sMenuId, this.colInfo.menu.winid);

        	const objFrame = app.frame.work.frames;
        	const objForm =  objFrame[sWinId].form;

        	if(bClose != false){
        	  let rtn = objForm.fnWorkFrameClose();  // 화면단 저장여부 체크
        	  if (rtn != false) this.fnTabOnClose(sWinId);
        	}else{
        	 this.fnTabOnClose(sWinId);
        	}


        };

        /**
         * @description 화면 전체 닫기
         * @param {Boolean} bCheck - 전체닫기 체크
         * @return	:   N/A
         */
        this.fnCloseAll = function(bCheck)
        {
        	if (app.gdsOpenMenu.getRowCount() < 1) return;

        	const iFramesCnt = app.frame.work.frames.length;
        	let isCloseCheck = this.fnCheckCloseAll(bCheck);

        	if (isCloseCheck)
        	{
        		for (var i=iFramesCnt; i>0; i--)
        		{
        			this.fnTabOnClose(app.frame.work.frames[i-1].name);
        		}
        	}
        };

        /**
         * @description 화면 전체닫기 여부 체크
         * @param {Boolean} bCheck - 전체닫기 체크
         * @return	:   N/A
         */
        this.fnCheckCloseAll = function(bCheck)
        {
        	// workFrame영역에 open된 childFrame 갯수
        	const iFramesCnt = app.frame.work.frames.length;
        	let isCloseCheck = true;

        //	if (this.gfnIsNull(bCheck)) bCheck	= app.gvCloseCheck;

        	// 닫기할때 체크할지 여부(변경되도 강제로 닫을때 사용)
        	if (bCheck == true)
        	{
        		for (let i=0; i<iFramesCnt; i++)
        		{

        			if(!app.frame.work.frames[i].form.isClosWork()){
        			  isCloseCheck =  false;
        			  break;
        			}


        // 			if (this.gfnIsNull(app.frame.work.frames[i].form.fvDivWork.form.lookup("cfn_onclose")))
        // 			{
        // 			} else
        // 			{
        // 				if (app.frame.work.frames[i].form.fnWorkFrameClose() == false)
        // 				{
        // 					isCloseCheck =  false;
        // 					break;
        // 				}
        // 			}
        		}
        	}

        	return isCloseCheck;
        };

        /**
         * @description 메뉴 tab 닫기 실행 함수
         * @param {String} sWinId - 윈도우ID
         */
        this.fnTabOnClose = function (sWinId)
        {
            const objFrame =app.frame.work.frames;

        	//let sCurWinId = app.vFrsWork.getActiveFrame().name;
        	let sCurWinId = app.frame.work.getActiveFrame().name;

        	const nRow = app.gdsOpenMenu.findRow(this.colInfo.menu.winid, sWinId);

        	// MDI 탭버튼 삭제
        	if(!this.gfnIsNull(objFrame[sWinId]) && nRow > -1)
        	{
        		this.bClose = false;
        		let objRemoveChildFrame = app.frame.work.removeChild(sWinId);

        		objRemoveChildFrame.destroy();
        		objRemoveChildFrame = null;
        		this.fnDelTab(sWinId);
        	}

        	// 열린화면 제거
        	this.gfnRemoveOpenMenuDs(sWinId);

            if(objFrame.length > 0)
            {
        		if (sWinId != sCurWinId )
        		{

        			//app.vFrsWork[sCurWinId].setFocus();
                 app.frame.work[sCurWinId].setFocus();
        		} else
        		{
        			sCurWinId = app.frame.work.getActiveFrame();

        			if (sCurWinId != null)
        			{
        				this.fnSetActive(this.fvTabBtnPrefix + sCurWinId.name);
        			}
        		}
        	} else
        	{
        	   this.gfnSetFrame('main');
        	    app.frame.main.form.setFocus();   // mainframe setfocus

        	}
        };

        /**
         * @description메뉴 tab 삭제
         * @param {String} sWinId - 윈도우ID
         */
        this.fnDelTab = function (sWinId)
        {
        	let nRow = this.dsTab.findRow(this.colInfo.menu.tabid, sWinId);
        	if (nRow < 0) return false;
        	const sTabId = this.fvTabBtnPrefix + sWinId;

        	// Removing Tab button.
        	this.fnDelTabBtn(sTabId);
        	this.dsTab.deleteRow(nRow);
        	this.fnRedrawTab();
        	return true;
        }

        /**
         * @description menu tab 삭제
         * @param {String} sTabId - 탭ID
         */
        this.fnDelTabBtn = function (sTabId)
        {
        	const sExtraBtnId = this.fvExtraBtnPrefix + sTabId;
        	let objTab = this.fnFindObj(sTabId);
        	let objExtraBtn = this.fnFindObj(sExtraBtnId);

        	const nShitLeft = objTab.getOffsetWidth() + this.fvBtnGap;
        	const nCurRow = this.dsTab.findRow(this.colInfo.menu.tabid, sTabId);

        	const nTabLeft = objTab.getOffsetLeft();

        	if(nTabLeft == 0)
        	{
        		if(this.dsTab.rowcount > 1)
        		{
        			this.btnPreMdi_onclick();
        		}
        	}

        	this.fnRemoveObj(sExtraBtnId);
        	this.fnRemoveObj(sTabId);

        	const sWinId = sTabId.replace(this.fvTabBtnPrefix, "");
        	const nRow = this.dsTab.findRow(this.colInfo.menu.tabid, sWinId);
           let i=0;
        	if(nTabLeft < 0)
        	{
        		for (i = 0 ; i < nRow ; i++)
        		{
        			objTab = this.fnFindObj(this.dsTab.getColumn(i, this.colInfo.menu.tabid));
        			objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, this.colInfo.menu.tabid));
        			objTab.move(objTab.getOffsetLeft() + nShitLeft, objTab.getOffsetTop());
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() + nShitLeft, objExtraBtn.getOffsetTop());
        		}
        	} else
        	{
        		for (i = nCurRow + 1; i < this.dsTab.rowcount; i++)
        		{
        			objTab = this.fnFindObj(this.dsTab.getColumn(i, this.colInfo.menu.tabid));
        			objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, this.colInfo.menu.tabid));
        			objTab.move(objTab.getOffsetLeft() - nShitLeft, objTab.getOffsetTop());
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() - nShitLeft, objExtraBtn.getOffsetTop());
        		}
        	 }

        	this.bClose = true;
        };

        /**
         * @description menu tab 삭제  함수
         * @param {String} sObjId - 삭제할 오브젝트 ID
         */
        this.fnRemoveObj = function (sObjId)
        {
        	if (this.fnFindObj(sObjId) == null)
        	{
        		return;
        	}
        	const objDelBtn = this.divTab.removeChild(sObjId);
        	if (objDelBtn != null)
        	{
        		objDelBtn.destroy();
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 홈버튼 onclick event
         */
        this.btnHome_onclick = function(obj,e)
        {

        	    if(obj.cssclass == "btn_MDI_Home"){
        		    this.setHomeCss(true);
        		}else{
        		   this.setHomeCss(false);
        		}

        //    if(obj.cssclass == "btn_MDI_Home"){
        //         this.fnSetStyle('');
        //    }else{
        //         this.fnSetStyle('sub');
        //    }

           // fnSetStyle
        	// 메인으로 이동
        	// this.gfnSetMain();
        };

        /**
         * @description 메뉴 tab onclick event
         */
        this.btnTab_onclick = function (obj, e)
        {
        	let sWinId = obj.name.split(this.fvTabBtnPrefix).join("");
        	this.isActiveFrame(sWinId);
        };

        /**
         * @description 메뉴 tab extra버튼 클릭시 발생되는 event
         */
        this.btnExtra_onclick = function (obj, e)
        {
        	const sWinId = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");
        	const sMenuId = this.gfnGetLookupData(app.gdsOpenMenu,this.colInfo.menu.winid, sWinId, this.colInfo.menu.cd);

        	this.fnCloseMenu(sMenuId);

        };

        /**
         * @description 메뉴 Mdi 이전   split버튼
         */
        this.btnPreMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        	this.fnRedrawTab();
        };

        /**
         * @description 메뉴 Mdi 다음  split버튼
         */
        this.btnNexMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        	this.fnRedrawTab();
        };

        /**
         * @description 열린 메뉴리스트 버튼 click
         */
        this.btnList_onclick = function(obj,e)
        {
        	const nWidth = this.pdvOpenMenu.width;
        	const nHeight = this.pdvOpenMenu.height;

            if (app.gdsOpenMenu.rowcount > 0)
        	{
        		this.pdvOpenMenu.trackPopupByComponent(obj, 0, obj.height);

        		this.pdvOpenMenu.form.grdOpenMenu.setFocus();
        		this.pdvOpenMenu.form.grdOpenMenu.selectCell(0, 0, true);
        	}
        };

        /**
         * @description 메뉴 전체닫기 버튼 클릭
         */
        this.btnCloseAll_onclick = function(obj,e)
        {
        	this.fnCloseAll();
        };

        /**
         * @description 접기/펼치기 버튼 click
         */
        this.btnLeftMenuShowHide_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_MDI_Open")
        	{
        		this.gfnShowLeftFrame();
        	} else
        	{
        		this.gfnHideLeftFrame();
        	}
        };

        /**
         * @description 열린 메뉴리스트 그리드 cellclick
         */
        this.pdvOpenMenu_grdOpenMenu_oncellclick = function(obj,e)
        {
        	const objDs = obj.getBindDataset();

        	// 메뉴명 클릭 시
        	if(obj.getBindCellIndex("body", this.FRAME_MENUCOLUMNS.title) == e.cell)
        	{
        		const sMenuId = objDs.getColumn(e.row, this.FRAME_MENUCOLUMNS.menuId);
        		app.left.form.fnFormOpen(sMenuId, null);
        	}

        	this.pdvOpenMenu.closePopup();
        };



        /*
         *	left menu 펼침/접힘 event
         */
        this.btnMenuShowHide_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_MDI_MenuHide")  // 접힘
        	{
        	    this.gfnLeftFramShowHide(false);
        	    this.btnMenuShowHide.cssclass = "btn_MDI_MenuShow";

        	} else if(obj.cssclass == "btn_MDI_MenuShow") // 펼침
        	{
        	    this.gfnLeftFramShowHide(true);
        		this.btnMenuShowHide.cssclass = "btn_MDI_MenuHide";
        	}
        };

        //set HOME BUTTON CSS
        this.setHomeCss = function (b)
        {
        	if(b){
        	    this.btnHome.cssclass = "btn_MDI_Home_S";
        	}else{
        	   this.btnHome.cssclass = "btn_MDI_Home";
        	}
        };

        this.divMenuButton_btnMenuList_onclick = function(obj,e)
        {


           let pdiv        = this.pdivOpenMenu;
           let oGrdOpenMenu = pdiv.form.grdOpenMenu;
           let btnMenuList = this.divMenuButton.form.btnMenuList;
           let ds      = this.pdivOpenMenu.form.grdOpenMenu.getBindDataset();
           let nTop        = this.height;
           let nLeft       = btnMenuList.width - pdiv.width;
              this.fnPidvOpenMenuGrd_onsize(pdiv,oGrdOpenMenu,ds);
           if(ds.getRowCount()  == 0 ) return;

           this.pdivOpenMenu.trackPopupByComponent(btnMenuList,nLeft,nTop);
        };


        this.fnPidvOpenMenuGrd_onsize = function(pdiv,grd,ds,h)
        {
        	let oGrdOpenMenu = grd;
        	let grdHeaderHeight = oGrdOpenMenu.getFormatRowProperty(0,"size");
        	let nHeight = ds.getRowCount() * grdHeaderHeight +2;
        	let nHBkSize = h || 2;

        	ds.rowposition = -1;
            oGrdOpenMenu.height = nHeight;
            pdiv.height  = nHeight + nHBkSize;
        };

        this.pdivOpenMenu_grdOpenMenu_oncellclick = function(obj,e)
        {
        	if(e.cell == 1){
        	    let bindds        = obj.getBindDataset();
        		let sMenuId       = bindds.getColumn(e.row,  this.colInfo.menu.cd);
        		let pdiv          = this.pdivOpenMenu;
        		let oGrdOpenMenu  = pdiv.form.grdOpenMenu;
        		let ds            = this.pdivOpenMenu.form.grdOpenMenu.getBindDataset();
        		this.fnCloseMenu(sMenuId);
        		this.fnPidvOpenMenuGrd_onsize(pdiv,oGrdOpenMenu,ds);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.formOnload,this);
            this.divMenuButton.form.btnMenuList.addEventHandler("onclick",this.divMenuButton_btnMenuList_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.pdivOpenMenu.form.grdOpenMenu.addEventHandler("oncellclick",this.pdivOpenMenu_grdOpenMenu_oncellclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
