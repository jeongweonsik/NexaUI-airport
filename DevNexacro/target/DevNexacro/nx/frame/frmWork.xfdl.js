(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("프레임 업무(work)");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1334,822);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","1","0",null,null,"40","5","1293",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divWork");
            obj.set_boxShadow("3px 3px 10px #cacbd9");
            obj.set_background("#fafafc");
            obj.set_borderRadius("10px");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_url("frame::frmWorkS.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staRight","divWork:0","0","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_border("0px none");
            obj.set_borderRadius("0px 0px 20px");
            obj.set_boxShadow("inset 3px 0px 3px 0px transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkS.xfdl");
        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        /**
        * fraem work
        *@FileName  frmWork
        *@Creator 	{J}
        *@CreateDate 2024/10/11
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

        this.menuCd,this.menuNm,this.menuUrl;
        this.menuParams,this.menuWinid,this.menuNavi;

        this.fvIsTime = false;    //60000 : 1분
        this.fvMilli = {'1':60000,'5':300000,'10':600000};
        this.fvTimerID  = -9999;
        // work size 1293 * 827

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
        * form onload 함수
        * @return
        * @example
        * @memberOf
        */
        this.frm_onload = function(obj,e)
        {

        // 	this.menuCd      =  this.getOwnerFrame().arguments[this.colInfo.menu.cd];      // menu code
        // 	this.menuNm      =  this.getOwnerFrame().arguments[this.colInfo.menu.nm];      // menu name
        // 	this.menuUrl     =  this.getOwnerFrame().arguments[this.colInfo.menu.url];    // menu url
        // 	this.menuParams  =  this.getOwnerFrame().arguments[this.colInfo.menu.params];  // parms
        //     this.menuWinid   =  this.getOwnerFrame().arguments[this.colInfo.menu.winid];   // winid
        // 	this.menuNavi    =   this.getOwnerFrame().arguments[this.colInfo.menu.navi];   // menu navi

        //     this.divTitle.form.staTitle.text = this.menuNm + "(" + this.menuCd  +")";
        // 	this.fnSetFavor();
        // 	this.fnSetUrl();

        	//trace(" app.frame.left.width : " + app.frame.left.form.width);
        	// trace(" this.width : " + this.width + "<> this.height : " + this.height);

        	//trace(" ## this.divWork.width : " + this.divWork.getOffsetWidth() + "<> this.divWork.getOffsetHeight() : " + this.divWork.getOffsetHeight());
           // trace(" divWork.width : " + this.divWork.form.width + "<>  divWork.height : " + this.divWork.form.height);

        };

        //
        this.fnSetFavor = function ()
        {
        // 	const gdsFavor  = app.gdsFavor;
        // 	let findCode = gdsFavor.findRow(this.colInfo.menu.cd,this.menuCd);
        //
        // 	if(findCode > -1)  this.divTitle.form.btnFavorite.cssclass = "btn_WF_FavoriteRemove";
        // 	  else  this.divTitle.form.btnFavorite.cssclass = "btn_WF_FavoriteAdd";

        };

        // set url
        this.fnSetUrl = function ()
        {
            this.divWork.url = ''; //setUrl
        	this.divWork.url = this.menuUrl; //setUrl
        	this.fnSetScroll();
        };

        // set work frame scroll
        this.fnSetScroll = function ()
        {

           let vscrollMax =  this.divWork.form.vscrollbar.max;



           if(vscrollMax > 0){
            this.staRight.left = "divWork:0px";
             this.divWork.right = 40;

                //trace(" ## vscrollMax : " + vscrollMax);
           }else{
             this.staRight.left = "divWork:20px";
        		this.divWork.right = 60;
           }
          // trace(" ## scrollV : " + scrollV);

        // 	let vScrollMax = this.divWork.form.vscrollbar.max;
        // 	let HscrollbarMax = this.divWork.form.hscrollbar.max;
        // 	let ngap = 20;
        // 	let frmHeight =app.mainframe.showtitlebar ?  this.height + 30 : this.height ;
        //
        //     //가로 size
        // 	if(frmHeight < 802){
        //
        //      	this.divWork.bottom = "";
        // 		this.divWork.height = 802;
        //
        // 	}else{
        // 	   this.divWork.height = "";
        //
        // 	   //가로 스크롤
        // 	   if(HscrollbarMax > 0) this.divWork.bottom = 0;
        // 	   else  this.divWork.bottom = 2;
        // 	}
        //
        // 	//세로 스크롤
        // 	if(vScrollMax > 0){
        // 	  this.divTitle.right = 0;
        // 	  this.divWork.right = 0;
        // 	}else{
        // 	   this.divTitle.right = 20;
        // 	   this.divWork.right = 20;
        // 	}


        //   if(this.vscrollbar.max > 0)   this.staGapV.width = 0;
        // 	 else this.staGapV.width = 20;
        //
        // 	if( this.hscrollbar.max > 0)  this.staGapH.height = 0;
        // 	else this.staGapH.height = 20;
        	this.divWork.form.resetScroll();
        	this.divTitle.form.resetScroll();
        	this.resetScroll();

        	trace(" this.width : " + this.width  + "<> this.height : "+ this.height);
        };

        /*
        *@description 화면 이동 후 넘어온 값 처리
        *@param {string}{object}{array} 넘어온 아규먼트 처리
        */
        this.fnMoveOnActie = function(param)
        {
        	if(nexacro._isFunction(this.divWork.form.cfnMoveOnActie))  {
        	   this.divWork.form.lookupFunc("cfnMoveOnActie").call(param);
        	}
        };


        /*
         *	화면 active 시 발생
         */
        this.fnFormOnActive = function ()
        {

        	let winKey = this.menuWinid;
        	let gRow =   app.gdsOpenMenu.findRow(this.colInfo.menu.winid, winKey);
         	let menuCd = app.gdsOpenMenu.getColumn(gRow, this.colInfo.menu.cd);
        	let menuNm = app.gdsOpenMenu.getColumn(gRow, this.colInfo.menu.nm);

         	// gdsOpenMenu row 이동
         	app.gdsOpenMenu.rowposition = gRow;
        	if(nexacro._isFunction(app.frame.lefts.fnSetRowPosition))
        	{
        	   let nStepIdx = app.frame.lefts.getStepIndex();
         	       app.frame.lefts.fnSetRowPosition(menuCd,nStepIdx);
        	}

        };


        /**
        * form onactivate event
        * @return
        * @example
        *
        * @memberOf
        */
        this.form_onactivate = function(obj,e)
        {
           this.fnFormOnActive();
        };



        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        // 초기화버튼 클릭 이벤트
        this.fnOninit_onclick = function (obj,e)
        {
        	//this.divWork.url = '';
        	//this.divWork.url = this.fvUrlNm;
        	this.divWork.form.reload();
        	this.divWork.form.resetScroll();
        };
        /**
        *  넘어온 아규먼트 처리 설정
        * @param  {XaComp} this(현재form)
        * @return
        * @example
        * fnSetOwnFrameArgu(this);
        * @memberOf
        */
        this.fnSetOwnFrameArgu = function(o)
        {
        	//alert(" this.parent.name : " + this.parent.name);


        }

        /**
        * gdsMenu에서 버튼권한 가져오기
        * @param {string} menuId: 메뉴Id
        * @param {string} colId: 컬럼(권한별) Id
        * @return
        * @example
        *
        * @memberOf
        */
        this.fnGetAuth = function(menuId, colId)
        {
        	var sValue = app.gdsMenu.lookupAs(app.gvMenuColumns.menuId, menuId, colId);
        	if(this.isNull(sValue))
        	{
        		sValue = "YNNNNN";
        	}
        	return sValue;
        }

        /**
        * @description workFrame close 시 처리
        */
        this.fnWorkFrameClose = function()
        {

        	if (!nexacro._isFunction(this.divWork.form.cfnClose))
        	{
        		//trace("해당화면에 fnClose 함수가 없습니다. fnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        	}
        	else
        	{
        		if (this.divWork.form.cfnClose() == false)
        		{
        			var sMsgId 		 = "10070";		//변경사항이 저장되지 않을 수 있습니다. [{0}]화면을 종료 하시겠습니까?		//메세지ID
        			var arrArg 		 = ["화면 " +this.menuNm];	//현재				메세지취환될값 배열[생략가능]

        			this.gfnConfirm(sMsgId,arrArg,(yes)=>{

        				 if(yes)
        				 {
        				   app.frame.mdi.form.fnCloseMenu(this.menuCd,false);
        				   return true;
        				 }

        			},"q");

        			return false;
        		}
        	}

        	//this.parent.parent.fnClose(this.fvWinId);
        	return true;
        	//this.close();

        };


        /*
         *	work form clsoe 함수 체크
         */

        this.isClosWork =  function ()
        {
        	 if (nexacro._isFunction(this.divWork.form.cfnClose)){

        	     return this.divWork.form.cfnClose();
        	 }

        	 return true;
        };


        this.divTitle_btn00_onclick = function(obj,e)
        {
        	this.divWork.form.resetScroll();
        };


        //전체보기
        this.divTitle_divCorework_btnMore_onclick = function(obj,e)
        {
        };

        // 브라우저 전체화면
        this.divTitle_divZoom_btn00_00_00_onclick = function(obj,e)
        {

        	 if(this.gfnIsNexacro()) return;

        	 const documentElement = document.documentElement;
        		if (document.fullscreenElement === null) {
        			//전체화면 아닌 상태
        			this.gfnEnterFullscreen();
        		}else{
        		   //전체화면 상태
        		   this.gfnExitFullscreen();
        		}
        };

        this.form_onsize = function(obj,e)
        {


        	// this.fnSetScroll();
        };


        //화면크기축소
        this.divTitle_divZoom_btnZoomOut_onclick = function(obj,e)
        {
           let staRate = this.divTitle.form.divZoom.form.staRate;
           let nowZoom =   staRate.text.replace("%","");

        	staRate.text = this.gfnZoomOut(nowZoom);
        };

        this.divTitle_divZoom_btnZoomIn_onclick = function(obj,e)
        {
           let staRate = this.divTitle.form.divZoom.form.staRate;
           let nowZoom =  staRate.text.replace("%","");

        	staRate.text = this.gfnZoomIn(nowZoom);
        };


        this.divTitle_btnFavorite_onclick = function(obj,e)
        {

        	switch(obj.cssclass) {
        	case "btn_WF_FavoriteRemove":
        	   this.fnDelMyMenu();  //삭제
        		break;
        	default:
        	    this.fnAddMyMenu(); //추가
        	}

            this.gdsTranMyMenu((id,code,msg)=>{
        	  if(code < 0) return;

        	      this.fnSetCssFavor();
        	})
        };


        /*
         *	마이메뉴 추가
         */
        this.fnAddMyMenu = function ()
        {
        	let gdsMyMenu =  app.gdsMyMenu;
        	let addRow = gdsMyMenu.addRow();
        		gdsMyMenu.setColumn(addRow,this.colInfo.menu.cd,this.menuCd);
        		gdsMyMenu.setColumn(addRow,this.colInfo.menu.nm,this.menuNm);
        		gdsMyMenu.setColumn(addRow,this.colInfo.menu.navi,this.menuNavi);
        };

        /*
         *	마이메뉴 삭제
        */
        this.fnDelMyMenu = function ()
        {
            let gdsMyMenu =  app.gdsMyMenu;
        	let findCode  = gdsMyMenu.findRow(this.colInfo.menu.cd,this.menuCd);
        	if(findCode == -1) return;
        	  gdsMyMenu.deleteRow(findCode);
        };

        /*
         *	미이메뉴 css 처리
        */
        this.fnSetCssFavor = function ()
        {

        	let obFavor  =  this.divTitle.form.btnFavorite;
        	let gdsFavor =  app.gdsFavor;
        	let findCode   = gdsFavor.findRow(this.colInfo.menu.cd,this.menuCd);

        	if(findCode > -1)  objMyMenu.cssclass = "btn_WF_FavoriteRemove";
        	else  obFavor.cssclass = "btn_WF_FavoriteAdd";

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onload",this.frm_onload,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
