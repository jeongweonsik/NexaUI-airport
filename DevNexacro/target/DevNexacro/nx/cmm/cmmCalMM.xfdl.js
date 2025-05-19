(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalM");
            this.set_titletext("월력");
            if (Form == this.constructor)
            {
                this._setFormPosition(110,26);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("mskYm","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("####-##");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_CalMM");
            this.addChild(obj.name, obj);

            obj = new Button("calYM","mskYm:-25","1","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalMonthDrop");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","30","164","193",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Option");
            this.addChild(obj.name, obj);

            obj = new Static("staYYYY","0","0",null,"30","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("2020");
            obj.set_cssclass("sta_WF_CalMonthHead");
            obj.set_textAlign("center");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnBefore","10","2","26","26",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalPrev");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"2","26","26","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_CalNext");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_1","10","40","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("01");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_2","57","40","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_text("02");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_3","104","40","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("03");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_4","10","75","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_text("04");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_5","57","75","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("7");
            obj.set_text("05");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_6","104","75","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("8");
            obj.set_text("06");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_7","10","110","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("9");
            obj.set_text("07");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_8","57","110","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("10");
            obj.set_text("08");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_9","104","110","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("11");
            obj.set_text("09");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_10","10","145","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_11","57","145","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_12","104","145","48","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("14");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_CalMonthitem");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_1","210","70","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("01");
            obj.set_cssclass("btn_WF_CalMonthitem_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCal.form
            obj = new Layout("default","",0,0,this.pdvCal.form,function(p){});
            this.pdvCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",110,26,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalMM.xfdl", function() {
        /**
        * 월 달력 공통 폼
        *@FileName  cmmCalMM
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
        this.fvSelCss = "btn_WF_CalMonthitem_S";
        this.essential,this.readonly,this.enable,this.bindds;
        this.frCurDate,this.sCol;  // bind Column
        this.frOldDate = "";  // 이전날짜
        const parentForm = this.parent;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.formOnlaod = function(obj,e)
        {
        	//초기화[필수]
        	this.init();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.init = function(sdate)
        {

            const objTarget = this.parent;	 // div
        	const oForm = this.gfnGetTopLevelForm(this);

        	if(!(objTarget instanceof nexacro.Div)){
        	  this.console.dev("상위 폼이 Division 이어야만 합니다");
        	 return;
        	}

        	let nToDt           =  this.gfnToday();
        	this.essential 		= objTarget.uessential || false;  //필수
        	this.readonly 		= objTarget.ureadonly || false;  //읽기기능 여부
        	this.enable         = objTarget.uenable || true;
        	this.bindds 		= objTarget.ubindds || "";  // dataset binding
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";

        	//this.mskYm.value = "";

        	this.setEssential(this.essential);  //초기 필수
        	this.setReadonly(this.readonly);  //초기 readonly
        	this.setEnable(this.enable);  //초기 readonly

        	 this.mskYm.value = "";    // 초기화

        	if(this.gfnIsNotNull(this.bindds))   //초기 bindds
        	{
        	   let bindds = this.bindds.split(",");
        	   let ds = oForm[bindds[0]];
        	   let col = bindds[1];
        	   this.setBinds(ds,col);
        	}
        	else
        	{
        		 this.mskYm.value = nToDt;
        	}

        	if(!!sdate) this.mskYm.value = sdate;

        	this.frCurDate = nToDt;
        };


        this.setToday = function ()
        {
        	  let nToDt    =  this.gfnToday();
        	  this.setValue(nToDt);

        };

        /**
        * @description  컴포넌트 날짜 값 호출
        */
        this.getValue = function()
        {
        	//var rtn = this.calYM.value.substr(0,6);
        	 let rtn = this.mskYm.value;
        	 if(this.gfnIsYMD(rtn)) rtn =  this.mskYm.value.substr(0,6);

        	return rtn;
        };

        /**
        * @description   컴포넌트 날짜 값 셋팅
        */
        this.setValue = function(sDate)
        {
             if(this.gfnIsYMD(sDate)) rtn = sDate.substr(0,6);

            if(!this.gfnIsNull(this.bindds)) this.bindds.setColumn(0,this.sCol,sDate);
        	 else  this.mskYm.value = sDate;

        };

        /**
        * @description    컴포넌트 enable 셋팅
        */
        this.setEnable = function(bValue)
        {
        	this.enable = bValue;
        	//this.calYM.enable = bValue;
        };

        /**
        * @description    컴포넌트 Readonly 셋팅
        */
        this.setReadonly = function(bValue)
        {
           this.mskYm.readonly = bValue;

        };

        /**
        * @description    컴포넌트 필수 css 셋팅
        */
        this.setEssential = function(bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue == true || bValue=='true') this.mskYm.cssclass = "Essential";
        	 else  this.mskYm.cssclass = "msk_WF_CalMM";

        };

        this.fnSetMonthSetMonthCss = function ()
        {
        	if(this.gfnIsNotNull(this.frOldDate))
        	{
        	   const oldMM = nexacro.toNumber(this.frOldDate.substr(4,2));
        	    let btnOldComp = this.pdvCal.form["btn_"+oldMM];
        	   if(btnOldComp.cssclass == "btn_WF_CalMonthitem_S") if(btnOldComp) btnOldComp.cssclass = "btn_WF_CalMonthitem";
        	}

        	    let ndate = this.frCurDate;
        		let smonth = nexacro.toNumber(ndate.substr(4,2));
        	    let btnComp = this.pdvCal.form["btn_"+smonth];
        	    let btnOldComp;
        	   if(btnComp)  btnComp.cssclass = "btn_WF_CalMonthitem_S";
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calYM_ondropdown = function(obj,e)
        {
        	let sDate = this.calYM.value;
        	if( this.gfnIsNull(sDate) ) sDate = this.fvToday;

        	this.pdvCal.form.staYYYY.text = sDate.substr(0,4);

            const oForm = this.gfnGetTopLevelForm(this);

        	let nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	let nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        };


        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calYM_onclick = function(obj,e)
        {
        	let sDate = this.mskYm.value;
        	if( this.gfnIsNull(sDate) ) sDate = this.frCurDate;

        	this.frCurDate = sDate;

        	this.fnSetMonthSetMonthCss();

        	this.frOldDate = this.frCurDate;
        	this.pdvCal.form.staYYYY.text = sDate.substr(0,4);

            const oForm = this.gfnGetTopLevelForm(this);

        	let nTop = 0, nLeft = 0;;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        };


        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btnBefore_onclick = function(obj,e)
        {
        	const sDate = nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.text = (sDate - 1 );

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	const sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.text = sDate + 1 ;
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {

           const sid = obj.name.split("_")[1];
           let btnObj = this.pdvCal.form["btn_"+sid];

        	//trace("@@ btnObj.name : " + btnObj.name);

        	let rtn = this.pdvCal.form.staYYYY.text + btnObj.text;
             //trace(" ## rtn : " +rtn);
        	if(!this.gfnIsNull(this.bindds))  this.bindds.setColumn(0,this.sCol,rtn);
        	 else  this.mskYm.value = rtn;

        	this.frCurDate = rtn;

        	this.fnSetMonthSetMonthCss();
        	this.pdvCal.closePopup();
        };


        /**
         * @ 데이터 셋 바인딩
         * @param {dataset} bind dataset
         * @param {column} bind col from
         * @param {column} bind col to
         * @return
         * @example
         * @memberOf
         */
        this.setBinds = function(bindds,sCol)
        {
          const pthis = this.gfnGetTopLevelForm(this);

          if(this.gfnIsNull(bindds) || this.gfnIsNull(sCol))return;


        	if(nexacro._isUndefined(bindds.getColumnInfo(sCol)))
           {
        	this.gfnLog("!! 개발오류 : Dataset 바인딩할 컬럼명이 존재하지 않습니다. [COLNM : ] " + sCol);
        	return;
           }

           this.bindds = bindds || "";  // bind dataset
           this.sCol = sCol || "";  // bind Column
           const sId = this.name  + "_callMonth";

           if(this.isValidObject(sId)) this.removeChild(sId);
         //this.calYM

            /**
             *   date 바인딩
             */
        	const v_objNewbindItem = new BindItem;
        	//v_objNewbindItem.init(sId,"calYM", "value", this.bindds.name , this.sCol);
        	v_objNewbindItem.init(sId,"mskYm", "value", this.bindds.name , this.sCol);

        	this.addChild(sId, v_objNewbindItem);
        	v_objNewbindItem.bind();

        	 if(this.gfnIsYMD(this.calYM.value))  this.calYM.value = this.calYM.value.substr(0,6);

        	this.frCurDate = this.calYM.value;

        };


        this.mskYm_onchanged = function(obj,e)
        {
        	const pform = this.gfnGetTopLevelForm(this);
        	if(nexacro._isFunction(pform.calComm_onchanged))
        	        pform.calComm_onchanged(this.name,obj,e);
        };

        this.mskYm_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13")
        	{
        		let DateTime = "";
        		let DateTime2 = new nexacro.Date();
        		let InputDate = this.mskYm.value.trim();

        		let Year = DateTime2.valueOf().substr(0,4);
        		let Month = DateTime2.valueOf().substr(4,2);

        		switch(InputDate.length) {
        		case 1:
        				DateTime = Year + "0" + InputDate;
        				this.mskYm.value = DateTime;
        			break;
        		case 2:
        				DateTime = Year + InputDate;
        				this.mskYm.value = DateTime;
        			break;
        		case 3:
        				DateTime = String(new nexacro.Date("200"+InputDate.substr(0,1))).substr(0,4) + InputDate.substr(1,2);
        				this.mskYm.value = DateTime;
        			break;
        		case 4:
        				DateTime = String(new nexacro.Date("20"+InputDate.substr(0,2))).substr(0,4) + InputDate.substr(2,2);
        				this.mskYm.value = DateTime;
        			break;
        		case 5:
        				DateTime = String(new nexacro.Date("2"+InputDate.substr(0,3))).substr(0,4) + InputDate.substr(3,2);
        				this.mskYm.value = DateTime;
        			break;
        		default:
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnlaod,this);
            this.calYM.addEventHandler("onclick",this.calYM_onclick,this);
            this.pdvCal.form.btnBefore.addEventHandler("onclick",this.pdvCal_btnBefore_onclick,this);
            this.pdvCal.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.pdvCal.form.btn_1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_2.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_3.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_4.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_5.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_6.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_7.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_8.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_9.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn_12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn_1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
        };
        this.loadIncludeScript("cmmCalMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
