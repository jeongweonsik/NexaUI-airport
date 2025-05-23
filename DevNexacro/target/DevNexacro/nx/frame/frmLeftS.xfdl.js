(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLeftS");
            this.set_stepalign("center middle");
            this.set_visible("true");
            this.set_stepitemsize("0");
            this.set_stepshowtype("action");
            this.set_scrolltype("vertical");
            this.set_titletext("프레임(Left폼서브)");
            if (Form == this.constructor)
            {
                this._setFormPosition(234,643);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"parentCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuGroup\" type=\"STRING\" size=\"32\"/><Column id=\"url\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"menuCd\">M300153</Col><Col id=\"menuNm\">테스트메뉴</Col><Col id=\"parentCd\">M120003</Col><Col id=\"menuLvl\">1</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\"/><Col id=\"sort\">12031</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300154</Col><Col id=\"menuNm\">메뉴1(transaciton)</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300155</Col><Col id=\"menuNm\">메뉴2(팝업샘플</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample003Popup.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300156</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col></Row><Row><Col id=\"menuCd\">M300157</Col><Col id=\"menuNm\">테스트메뉴2</Col><Col id=\"parentCd\">M120003</Col><Col id=\"menuLvl\">1</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"sort\">12031</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300158</Col><Col id=\"menuNm\">메뉴1</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">design::testForm01.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300159</Col><Col id=\"menuNm\">메뉴2</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample001BaseScript.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300160</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new CheckBox("chkSelAll","11","7","82","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전체선택");
            obj.set_positionstep("1");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","0","1",null,null,"-2","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_autoenter("none");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj.set_scrolltype("vertical");
            obj.getSetter("unodata").set("false");
            obj.set_cursor("pointer");
            obj.getSetter("usort").set("false");
            obj.getSetter("ucopy").set("false");
            obj.set_autofittype("col");
            obj.set_scrollbartrackbarsize("100");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"243\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell autosizerow=\"limitmin\" displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:menuNm\" treestartlevel=\"1\" treelevel=\"bind:menuLvl\" tooltiptext=\"bind:menuNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteAll",null,"10","20","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tooltiptext("메뉴삭제(전체)");
            obj.set_cssclass("btn_LF_Delete");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","1","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("gdsMyMenu");
            obj.set_scrollbartrackbarsize("100");
            obj.set_positionstep("1");
            obj.getSetter("unodata").set("false");
            obj.set_autofittype("col");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"217\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:COL_CHECK\" displaytype=\"checkboxcontrol\" edittype=\"none\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NAVI\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeftS.xfdl", function() {
        /**
        * frame left sub 페이지
        *@FileName  frmLeftS
        *@Creator 	{J}
        *@CreateDate 2024/10/18
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

        this.fvOrgScroll = 0;
        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {

           app.frame.lefts  = obj;   //set glbal variable  left sub form
           this.resetScroll();

        };

        this.fnSetInit  = function(){

        	 let firstCol  = app.gdsMenu.findRowExpr(  this.colInfo.menu.lvl +  " == '0'" );
        	let sTopMenu = app.gdsMenu.getColumn(firstCol, this.colInfo.menu.cd);

        	 this.fnSetMenuL(sTopMenu);
        	// trace(" this.getOffsetHeight : " +this.getOffsetHeight());
        		// 저장 메뉴 open
        	 if(!app.v.login){
        	     const rowCnt = this.gfnLoadDsStore("openMenu",app.gdsOpenMenu);  // local storage 저장 메뉴 가져오기
        	     //열린메뉴 체크
        		 if(rowCnt >0)
        		 {
        			for (let n=0; n<rowCnt;n++)
        			{
        				const menuCd = app.gdsOpenMenu.getColumn(n, this.colInfo.menu.cd);
        				this.gfnOpenMenu(menuCd,"",true);

        			}
        		  //  const menuCd = app.gdsOpenMenu.geto
        		  //
        		 }
        	 }else{
        	   this.gfnRemoveStoreMenu("openMenu");
        	 }
        }

        /**
         * menu load local storage
         * @param {string}
         * @return
         * @example
         * @memberOf
         */
        this.fnGetLoadProfile = function()
        {
            nexacro.getPrivateProfile("openMenu");


        }

        /**
         * 레프트 메뉴 셋팅
         */
        this.fnSetMenuL = function (sTopMenu)
        {

            let findRow = app.gdsMenu.findRowExpr(this.colInfo.menu.gcd+ "=='"+sTopMenu+"' && " + this.colInfo.menu.lvl + "== '1'");
        	// this.staTitle.set_text(app.gdsMenu.getColumn(findRow,	 this.colInfo.menu.nm));

        	app.gdsMenu.filter(this.colInfo.menu.gcd + "=='"+sTopMenu+"' && " + this.colInfo.menu.lvl + "> 0");

        	this.dsMenu.clearData();
        	this.dsMenu.copyData(app.gdsMenu,true);  //메뉴 복사
        	app.gdsMenu.filter('');

        	// menu tab 여부 체크
        //	if(this.getStepIndex() != 0)  app.frame.left.form.fnSetMenuChange("btnMenu");

        };


        // 검색용 필드 컬럼 추가
        this.fnSearchAddCol = function(ds,colNm)
        {
          var ds = ds;

        	for(var ix = 0 ; ix < ds.getRowCount() ; ix++){
        			var covNm = ds.getColumn(ix, colNm);

        			for(var iy = 0 ; iy < Math.min(covNm.length, 5) ; iy++)
        			{
        			    var addColNm  =  "UNIC" + iy;
        					var colInfo = ds.getColumnInfo(addColNm);

        				   if(this.gfnIsNull(colInfo))  ds.addColumn(addColNm);

        				    ds.setColumn(ix, "UNIC" + iy, covNm.charCodeAt(iy));
        			}
        	}
        }

        /*
         *	검색 like 필터(%like%)
         * @param {dataset} dataset
         * @param {string} colnm
         * @param {string} input data
         */

        this.fnSearchLikeFilter =  function (ds,colnm,inp)
        {
        	 if(this.isNull(inp))
        	 {
        	    ds.filter("");
        		this.grdMenu.treeinitstatus = "collapse,null";
        		return;
        	 }
        	this.grdMenu.treeinitstatus = "expand,all";
        	ds.filter("String("+colnm+").toUpperCase().indexOf('" + nexacro.trim(inp).toUpperCase().replace("'","\\'") + "') >= 0");
        };
        /**
         * 메뉴 step
         */
        this.fnSetStepMenu = function (nidx)
        {
        	 if(this.getStepIndex() == nidx)  return;
             this.setStepIndex(nidx);
        };

        // left menu click 시 실행
        this.fnGrdMenu_oncellclick = function(obj,cRow,sMenuFlag)
        {
            let nRow = obj.getTreeRow(cRow);
            let bindds = obj.getBindDataset();

        	// true 는 false 로 false 는 true 로 변경
        	let nStat = obj.getTreeStatus(nRow)^1;
            let grdObj = obj;

        	// 자식이 없으면(하위계층)
        	if(nStat != 2)
        	{
        	  grdObj.setTreeStatus(nRow ,nStat);
        	  return;
        	}

        	// 해당 Tree만 펼치고 나머지는 닫는다.
        	//this.exceptSelfCollapse(obj, e.row);
        	// Click시 해당 메뉴 호출
        	let menuCd = bindds.getColumn(bindds.rowposition, this.colInfo.menu.cd);  //menuId
        	let menuNm = bindds.getColumn(bindds.rowposition, this.colInfo.menu.nm );  //menu명
        	let url = bindds.getColumn(bindds.rowposition, this.colInfo.menu.url);    //URL

         	// trace(" ## menuCd  : " + menuCd + "<> menuNm : " + menuNm + "<> url : " + url);

        	if(this.isNull(url) || this.isNull(menuCd)) return;

        	    //메뉴 화면 호출
        		this.fnFormOpen(menuCd);
        		this.grdMenu.redraw();
        	//	this.grdMyMenu.redraw();
        };


        /**
         * @description menu FORM오픈 [공통함수호출]
        */
        this.fnFormOpen = function (sMenuId, objParam)
        {
        	if(this.gfnIsNull(sMenuId)) return;
        	this.gfnOpenMenu(sMenuId, objParam);
        //	this.gfnOpenMenu(sMenuId, objParam , true);   // 초기화 url 오픈 시 사용
        };


        /**
        * @description  tree 메뉴에서 선택한 Row의 Root를 제외한 collapse 처리
        */
        this.exceptSelfCollapse = function(obj, erow)
        {
        	obj.enableredraw = false;
        	obj.enableevent = false;

        	var strTreePath = obj.getTreePath(erow);

        	var bRet;

        	//선택한 행 하단 startlevel collapse 처리
        	for (var i = erow+1; i < obj.getBindDataset().rowcount; i++) {
        		bRet = obj.isTreeLeafRow(i);
        		//자식이 있다면
        		if (!bRet) {

        			if (obj.getTreePath(i).indexOf(strTreePath) > -1) {
        				obj.setTreeStatus(obj.getTreeRow(i), true);
        				strTreePath = obj.getTreePath(i);
        			}
        			else {
        				obj.setTreeStatus(obj.getTreeRow(i), false);
        			}
        		}
        	}

        	//선택한 행 상단 startlevel collapse 처리
        	for (var i = erow; i >= 0; --i) {
        		bRet = obj.isTreeLeafRow(i);

        		//자식이 있다면
        		if (!bRet) {
        			if (strTreePath.indexOf(obj.getTreePath(i)) > -1 ){
        				// Do nothing..
        			}
        			else {
        				obj.setTreeStatus(obj.getTreeRow(i) ,false);
        			}
        		}
        	}

        	obj.enableevent = true;
        	obj.enableredraw = true;
        }


        /**
         *  레프트 메뉴 전체 확장/닫힘
         */
        this.btnSetExPand_onclick = function(obj)
        {
        	var oGrdTree = this.grdMenu;
        //
        // 	if(obj.name == "btnExapndAll"
        // 	   && oGrdTree.treeinitstatus != "expand,all")  //전체 펼침
        // 	{
        // 	  oGrdTree.treeinitstatus = "expand,all";
        // 	}
        // 	else if(obj.name == "btnCollapseAll"
        // 	      && oGrdTree.treeinitstatus != "collapse,all")  //전체 닫힘
        // 	{
        // 	  oGrdTree.treeinitstatus = "collapse,all";
        // 	}
        };


        /*
         *	선택된 menu id 메뉴 폴더 펼침
         * @param {string} menuid
         */

        this.fnSetRowPosition = function (menuId,stepIdx)
        {
        	var bRet;
        	var ncnt =  0;
        	var arrRes = [];
        	var obj = this.grdMenu;
        	var dsMenu;

            	if(this.gfnIsNull(stepIdx)
        		   ||  stepIdx == 0){
        		    dsMenu = this.grdMenu.getBindDataset();
        		}else{
        		    dsMenu = app.gdsMyMenu;
        		}


        	var erow = dsMenu.findRow(this.colInfo.menu.cd,menuId);

        	if(erow == -1) return;
        	var strTreePath = obj.getTreePath(erow);

        	for (var i = erow; i >= 0; --i)
        	{
        		bRet = obj.isTreeLeafRow(i);
        		//자식이 있다면
        		if (!bRet)
        		{
        			if (strTreePath.indexOf(obj.getTreePath(i)) > -1)
        			{
        			    arrRes[ncnt] = i;
        				ncnt++;
        			}
        		}
        	}

        	//tree 체크 된 폴더
        	for (var k=arrRes.length; k>=0;k--)
        	{
        		obj.setTreeStatus(obj.getTreeRow(arrRes[k]) ,true);
        	}

        	dsMenu.set_rowposition(erow);

        };

        /*
         *	mymenu 삭제
         */

        this.fnDelMyMenu = function(erow)
        {
            var grdMyMenu = this.grdMyMenu;
        	var bindds    = grdMyMenu.getBindDataset();
        	var menuid = bindds.getColumn(erow,this.gvMenuColumns.ID_MENU);
        	var menunm = bindds.getColumn(erow,this.gvMenuColumns.NM_MENU);
        	//열린메뉴 체크
        	var pWinidopen =  this.objApp.gdsOpenMenu.lookupAs(this.gvMenuColumns.ID_MENU,menuid,this.gvMenuColumns.WINID);
        	//var menuid =  bindds.
        	var nRow = bindds.findRow(this.gvMenuColumns.ID_MENU,menuid);

        	if (nRow > -1)
        	{
        		  /*
        		 *	즐겨 찾기 저장
        		 */
        	   this.gfnSaveMyMenuTrans(gdsUserMenu,function(svc,errorcode,errormsg){

        		if(errorcode  < 0 ) return;



        		 if(this.objApp.gvMdiFrame.form.fnGetTab(pWinidopen) > -1)  //열린메뉴 체크
        	    {
        			 if( nexacro._isFunction(this.gfnGetCurrentForm(pWinidopen).form.divTitle.form.fnSetMyMenuCss))
        			 {

        			   this.gfnGetFrameWinId(pWinidopen).form.divTitle.form.fnSetMyMenuCss('0');	 // 열린 메뉴 즐겨찾기 css 표시
        			 }
        	  }
        	     bindds.deleteRow(nRow);   //data 삭제
        		// this.fnSetMyMenuCss(bIsMyMenu);
        	     // this.objApp.gvLeftS.fnSetStepMenu(1);


        	});
        	}

        }

        //그리드 버튼 css expr
        this.fnSetCssMyMenu = function(comp,dataset,currow)
        {

             var resCss = "";

        	if(dataset.rowposition != currow)
        	{
        	    resCss = "cell_DragnDrop";   // 기본
        	}
        	else
        	{
        	   resCss = "cell_DragnDrop_O";   // 기본
        	}

           //trace(" ## comp : " + comp + "<> ## dataset : " + dataset + "<> ## currow : " +currow);

           return resCss;
        }

        /************************************************************************
         * 즐겨찾기 (favoirte)
         ************************************************************************/


        //즐겨찾기 체크박스 전체 선택
        this.chkFavorite_onclick = function(obj,e)
        {
        	var bindds = this.grdFavor.getBindDataset();   //binddataset;
        	var schk  = obj.value;

        	bindds.enableevent = false;
        	for(var i = 0; i < bindds.getRowCount(); i++)
        	{
        		bindds.setColumn(i,"CHK",schk);
        	}
        	bindds.enableevent = true;

        };


        /*
         *	즐겨찾기 메뉴 호출
         */
        this.grdFavor_oncellclick = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        	 var bindds = obj.getBindDataset();
        	 var urlNm = bindds.getColumn(bindds.rowposition ,"URL");

        	 if(this.gfnIsNull(urlNm)) return;

        	 this.gfnFormOpen(bindds,e.row);   ///menu open
        	}
        };


        this.grdMenu_oncellclick = function(obj,e)
        {

        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	 this.fnGrdMenu_oncellclick(obj,e.row);

        	 //this.grdMenu.vscrollbar.set_pos(e.row);
        	 this.resetScroll();

        };


        this.grdMyMenu_oncellclick = function(obj,e)
        {

        	 let headCheck  = obj.getCellProperty("head",0,"text");
        	 let ds     = obj.getBindDataset();

              if(e.cell == 0){   // 체크박스 선택

        	      let selCheck   = ds.getColumn(e.row,this.colInfo.menu.check) == "N"
        	                      || this.isNull(ds.getColumn(e.row,this.colInfo.menu.check))  ? "Y" : "N";

        			 ds.setColumn(e.row,this.colInfo.menu.check , selCheck);

        			 if( ds.findRowExprNF(this.colInfo.menu.check+"=='N'") > -1){
        				 this.chkSelAll.set_value("N");
        			 }else{
        				  this.chkSelAll.set_value("Y");

        			 }

        	  }else{ // 메뉴열기

        		 let sMenuId = ds.getColumn(e.row, this.colInfo.menu.cd);
        	     if(this.isNull(sMenuId)) return;

        	    //메뉴 화면 호출
        		this.fnFormOpen(sMenuId);
        	  }


        };

        /*
         *	mymenu drag
         */
        this.grdMyMenu_ondrag = function(obj,e)
        {
        	if(e.cell == 2)
        	{
        	    e.set_userdata(e.row);
        		var dsMyMenu = obj.getBindDataset();
        		var strVal = dsMyMenu.getColumn(e.row, "NM_MENU");

        		this.staDrag.set_text(strVal);
        		this.staDrag.set_visible(true);

        		var nT = obj.getOffsetTop() + e.clienty;
        		var nL = obj.getOffsetLeft();


        		this.staDrag.move(nL, nT);
        		return true;
        	}

        };

        this.LeftFrameS_onsize = function(obj,e)
        {

        	var nWidth  =  this.grdMenu.getOffsetWidth();
        	var bindds  =this.grdMenu.getBindDataset();

        	  var nMCell1 =   nexacro.toNumber(this.grdMyMenu.getFormatColProperty(1,"size"));
        	  var nMCell2 =   nexacro.toNumber(this.grdMyMenu.getFormatColProperty(2,"size"));
        	  var nMGap =  nMCell1 +  nMCell2 + nexacro.toNumber(this.grdMyMenu.right)+10;

        	this.grdMenu.setFormatColProperty(0,"size",e.cx);
        	this.grdMyMenu.setFormatColProperty(0,"size",e.cx-nMGap);

        	///	this.grdMyMenu.set_width(e.cx+10);
        	this.grdMenu.set_width(e.cx);
        	//scroll bar 버그 처리
        	this.fvOrgScroll =this.grdMenu.vscrollbar.pos;
        	 this.grdMenu.vscrollbar.set_pos(this.grdMenu.vscrollbar.pos-1);
        	this.grdMenu.vscrollbar.set_pos(this.fvOrgScroll);

        };


        // 전체 삭제
        this.btnDeleteAll_onclick = function(obj,e)
        {

            let gdsMyMenu = app.gdsMyMenu;
        	if(gdsMyMenu.findRowExpr(`${this.colInfo.menu.check} == 'Y'`) == -1){
        	     this.gfnToast("10125"); // 체크 된 row가 없습니다.
        	  return;
        	}

        	//alert(" currentForm : " + this.gfnGetCurrentForm());
        //	trace(" saveXML >> " + app.gdsOpenMenu.saveXML());


        	 // 변경된 내역을 저장 하시겠습니까?
        	 this.gfnConfirm("10064",["선택한 메뉴"],"q",(yes)=>{

        		   if(yes){

        			   gdsMyMenu.set_enableevent(false);
        				for(let i=gdsMyMenu.getRowCount()-1; i>=0; i--){
        					let checkRow = gdsMyMenu.getColumn(i, this.colInfo.menu.check);
        					if(checkRow == "Y")  gdsMyMenu.deleteRow(checkRow);
        				}
        				gdsMyMenu.set_enableevent(true);

        					this.gdsTranMyMenu((id,code,msg)=>{
        					  if(code < 0) return;


        					  let iFramesCnt = app.frame.work.frames.length;

        					  for (let cnt=iFramesCnt-1; cnt>=0; cnt--){
        					      let workForm = app.frame.work.frames[cnt].form;
        						  if(nexacro._isFunction(workForm.fnSetCssMyMenu)){
        						       workForm.fnSetCssMyMenu();
        						  }

        					  }

        					})
        		   }
        	 });
        };

        this.chkSelAll_onchanged = function(obj,e)
        {
             this._gfnHeadCheckSelectAll(this.grdMyMenu, 0, e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.LeftFrameS_ondragmove,this);
            this.addEventHandler("ondrop",this.LeftFrameS_ondrop,this);
            this.addEventHandler("onsize",this.LeftFrameS_onsize,this);
            this.chkSelAll.addEventHandler("onchanged",this.chkSelAll_onchanged,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.btnDeleteAll.addEventHandler("onclick",this.btnDeleteAll_onclick,this);
            this.grdMyMenu.addEventHandler("oncellclick",this.grdMyMenu_oncellclick,this);
        };
        this.loadIncludeScript("frmLeftS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
