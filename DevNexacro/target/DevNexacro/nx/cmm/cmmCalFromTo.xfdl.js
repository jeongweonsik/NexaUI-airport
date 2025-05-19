(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalFromTo");
            this.set_titletext("기간달력");
            this.set_locale("ko_KR");
            if (Form == this.constructor)
            {
                this._setFormPosition(216,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","46.61%","0","16","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrom","0","0",null,"24","Static00:0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static00:0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","30","462","361",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Popup");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","10","90","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("시작일");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("_word").set("20106");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalFrom","20","60","200","229",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_usetrailingday("true");
            obj.set_popuptype("none");
            obj.set_border("0px none");
            obj.set_showyearspin("false");
            obj.set_headformat("yyyy-MM");
            obj.set_datepickerchangetype("spin");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalTo","240","60","200","229",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_border("0px none");
            obj.set_showyearspin("false");
            obj.set_usetrailingday("true");
            obj.set_datepickerchangetype("spin");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("sta00_00","240","10","90","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("종료일");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("uword").set("20107");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"10","40","40","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Close2");
            obj.getSetter("utooltip").set("100000176");
            obj.set_tooltiptext("닫기");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvCancle",null,null,"60","30","20","20",null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_defaultbutton("true");
            obj.getSetter("uword").set("20043");
            obj.set_cssclass("btn_POP_SecondaryMd");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvConfirm",null,null,"60","30","btnPdvCancle:6","20",null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_text("적용");
            obj.set_fittocontents("width");
            obj.getSetter("uword").set("20042");
            obj.set_cssclass("btn_POP_PrimaryMd");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staMsg","0","36.04%",null,"59","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("7");
            obj.set_text("sta00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid red");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCal.form
            obj = new Layout("default","",0,0,this.pdvCal.form,function(p){});
            this.pdvCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",216,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalFromTo.xfdl", function() {
        /**
        * 달력(기간달력) 공통 폼
        *@FileName  cmmCalFromTo
        *@Creator
        *@CreateDate 2025/04/18
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        // this.essential,this.readonly,this.enable,this.bindds;
        // this.frCurFrDate = "";
        // this.frCurToDate = "";
        // this.bindds = "";
        // this.oFrCol = "";  //from calender
        // this.oToCol = ""; //to calender
        // this.oCalFr = this.pdvCal.form.pdvCalFrom;     //from 달력
        // this.oCarTo = this.pdvCal.form.pdvCalTo;      //to 달력
        // this.fvForm = "";
        //this.pvCalFrTitle  = this.pdvCal.form.divCalFrom.form.staFrTitle;   //from 달력 title
        //this.pvCalToTitle  = this.pdvCal.form.divCalTo.form.staToTitle;   // to 달력 title

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.formOnload = function(obj,e)
        {
          this.init(); //달력초기화
        };

        /**
        * @description 달력 From To Validation
        */
        this.validFromTo = function(vfrom,vto) {

        	if ( this.gfnGetDiffDate(vfrom, vto) >= 0 ) return true;
        	else return false;
        }

        /**
        * @description 달력초기화
        */
        this.init = function(vfr,vto)
        {
            const objTarget = this.parent;	 // div
        	const oForm = this.gfnGetTopLevelForm(this);

        	this.essential 	= objTarget.uessential || false;  //필수
        	this.readonly 	= objTarget.ureadonly || false;  //읽기기능 여부
        	this.enable     = objTarget.uenable || true;
        	this.bindds 	= objTarget.ubindds || "";  // dataset binding

        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calFrom.value = "";	//FROM 달력 셋팅
        	this.calTo.value = "";		//TO 달력 셋팅

            this.setEssential(this.essential);  //초기 필수
        	this.setReadonly(this.readonly);  //초기 readonly
        	this.setEnable(this.enable);  //초기 readonly

        	if(this.gfnIsNotNull(this.bindds ))   //초기 bindds
        	{
        	   let bindds = this.bindds.split(",");
        	   let ds = oForm[bindds[0]];
        	   let colFrm = bindds[1];
        	   let colTo = bindds[2];
        	   this.setBinds(ds,colFrm,colTo);
        	}
        	else
        	{
        	   let nToDt   = this.gfnToday();
        	   let nFromDt = this.gfnAddDate(nToDt, -7);

        	   this.calFrom.value  = nFromDt;
        	   this.calTo.value = nToDt;
        	   this.frCurFrDate  = nFromDt;
        	   this.frCurToDate  = nToDt;
        	}

        	if(!!vfr){
        	 this.calFrom.value = vfr;
        	 this.frCurFrDate  = vfr;
        	}

        	if(!!vto){
        	  this.calTo.value = vto;
        	   this.frCurToDate  = vto;
            }


        };

        /*
         *	set from to today
         */

        this.setToday = function ()
        {
        	let nToDt   = this.gfnToday();
        	let nFromDt = this.gfnAddDate(nToDt, -7);

        	this.calFrom.value = nFromDt;
        	this.calTo.value = nToDt;
        };

        /**
        * @description from 일자 갖고오기
        */
        this.getFromDate = function ()
        {
        	let sDate = this.calFrom.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.getToDate = function ()
        {
        	let sDate = this.calTo.value;
        	return sDate;
        }

        /**
        * @description from일자 세팅하기
        */
        this.setFromDate = function (sDate)
        {
            //bindds set
        	if(this.gfnIsNotNull(this.bindds)
        	   && this.gfnIsNotNull(this.oFrCol))  this.bindds.setColumn(0,this.oFrCol,sDate);
        	 else this.calFrom.value = sDate;

        };

        /**
        * @description to일자 세팅하기
        */
        this.setToDate = function (sDate)
        {
           if(this.gfnIsNotNull(this.bindds)
              && this.gfnIsNotNull(this.oToCol)) this.bindds.setColumn(0,this.oToCol,sDate);
        	else  this.calTo.value = sDate;
        };

        /**
        * @description from  to일자 세팅하기
        */
        this.setFromToDate = function (vfr,vto)
        {

           if(this.validFromTo(vfr,vto)){
               this.setFromDate(vfr);
        	   this.setToDate (vto);
           }

        };

        /**
        * @description enable true/false세팅
        */
        this.setEnable = function (avalue)
        {
            this.enable = avalue;
        };

        /**
        * @description readonly true/false세팅
        */
        this.setReadonly = function (avalue)
        {
        	this.calFrom.readonly = avalue;
        	this.calTo.readonly = avalue;
        };

        /**
        * @description Essential true/false세팅
        */
        this.setEssential  = function (bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue == true || bValue =='true')
        	{
        		this.calFrom.cssclass = "essential";
        		this.calTo.cssclass = "essential";
        	}else{
        		this.calFrom.cssclass = "";
        		this.calTo.cssclass = "";
        	}
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
        this.setBinds = function(bindds,colFrom,calTo)
        {
          const pthis = this.gfnGetTopLevelForm(this);

          if(this.gfnIsNull(bindds) || this.gfnIsNull(colFrom) || this.gfnIsNull(calTo)) return;

          this.bindds = bindds || "";
          this.oFrCol = colFrom || "";
          this.oToCol = calTo || "";
          let sFrId = this.name  + "_frFrmCal";
          let sToId = this.name  + "_frToCal";

           if(this.isValidObject(sFrId)) this.removeChild(sFrId);
           if(this.isValidObject(sToId)) this.removeChild(sToId);

            /**
             *  from date 바인딩
             */
        	const v_objNewbindItem = new BindItem;
        	v_objNewbindItem.init(sFrId,"calFrom", "value", this.bindds.name , this.oFrCol);
        	this.addChild(sFrId, v_objNewbindItem);
        	v_objNewbindItem.bind();

            /**
             *  to date 바인딩
             */
        	var v_objNewbindItemTo = new BindItem;
        	v_objNewbindItemTo.init(sToId,"calTo", "value", this.bindds.name , this.oToCol);
        	this.addChild(sToId, v_objNewbindItemTo);
        	v_objNewbindItemTo.bind();

        	this.frCurFrDate = this.calFrom.value;
        	this.frCurToDate =  this.calTo.value;

        };

        /*
         * 오류 메시지 처리
         */

        this.fnShowMessage = function (sMsgId, arrArg)
        {
        	const sMsgTxt = this.gfnGetMessage(sMsgId, arrArg);

        	this.pdivCal.form.staMsg.text = sMsgTxt;
        	this.pdivCal.form.staMsg.visible = true;

        	//timer 내부함수
        	nexacro._OnceCallbackTimer.callonce(this, function () {
        	    	this.pdivCal.form.staMsg.text = "";
        		   this.pdivCal.form.staMsg.visible = false;

        		}, 3000);
        	//this.setTimer(6000, 3000);
        };
        /************************************************************************
         * @description  달력(라벨, 버튼) 처리  2020/03/13
         ************************************************************************/


        this.fnSetLangTitle = function(strDate)
        {
           let sDate=  "";

           if(!this.gfnIsNull(strDate))
           {
        	   let year  = parseInt(strDate.substr(0,4));
        	   let month = parseInt(strDate.substr(4,2));
        	   let day   = parseInt(strDate.substr(6,8));
        	   sDate = year + " / " + month;

           }

           return sDate;
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calFrom_ondropdown = function(obj,e)
        {
        	const sDate = this.gfnGetDate(); //default today = 해당월1일부터 오늘까지
        	const oForm = this.gfnGetTopLevelForm(this);
        	//var oForm = this.parent.parent;
        	let nTop = 0;
        	//from달력세팅
        	if (this.gfnIsNull(this.calFrom.value)) {
        		this.pdvCal.form.pdvCalFrom.value = sDate.substr(0,6) + "01";

        	} else {
        		this.pdvCal.form.pdvCalFrom.value = this.calFrom.value;
        	}

        	//TO 달력 셋팅
        	if (this.gfnIsNull(this.calTo.value))  this.pdvCal.form.pdvCalTo.value = sDate;
        	 else 	this.pdvCal.form.pdvCalTo.value = this.calTo.value;

        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else
        	{
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else
        	{
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        };

        /**
        * @description 기간 popDiv컴포넌트 확인(적용) 버튼 클릭
        */
        this.pdvCal_btnPdvConfirm_onclick = function(obj,e)
        {
        	const sFromValue = this.pdvCal.form.pdvCalFrom.value;
        	const sToValue = this.pdvCal.form.pdvCalTo.value;

        	if ( !this.validFromTo( sFromValue, sToValue ) ) {

        		this.pdvCal.form.pdvCalFrom.value =  this.calFrom.value ;
        		this.pdvCal.form.pdvCalTo.value =  this.calTo.value ;

        		// [시작일자]가 [종료일자]보다 큽니다.
        		let sMsgId =" [시작일자]가 [종료일자]보다 큽니다.";
        		let arrArg = [];
        		this.gfnAlert( sMsgId, arrArg,"e");
        		return;
        	}
        	else {

        		this.calFrom.value = sFromValue;
        		this.calTo.value = sToValue;

        		if(!this.gfnIsNull(this.bindds))
        		{
        		   this.bindds.setColumn(0,this.oFrCol,sFromValue);
        		   this.bindds.setColumn(0,this.oToCol,sToValue);
        		}
        	}

        	this.pdvCal.closePopup();
        };

        /**
        * @description 기간 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();

        };

        /************************************************************************
         * @description
         ************************************************************************/


        this.cmmCalFromTo_ontimer = function(obj,e)
        {
        	if( e.timerid == 6000){
        		this.pdivCal.form.staMsg.text = "";
        		this.pdivCal.form.staMsg.visible = false;
        	}

        };

        this.calFrom_canchange = function(obj,e)
        {
        	const frMM = e.postvalue;
        	const toMM = this.calTo.value;

        	if( this.gfnGetDiffDate(frMM, toMM) < 0){

        		let sMsgId = "시작일이 종료일자보다 큽니다."; // 시작일이 종료일자보다 큽니다.
        		let arrArg = [];
        		this.gfnAlert(sMsgId,arrArg,'w',(yes)=>{
        		  	obj.set_value(e.prevalue);
        			obj.setFocus();
        			obj.setSelect();
        		});
        		return;
        	}

        };

        this.calTo_canchange = function(obj,e)
        {
        	const frMM = this.calFrom.value;
        	const toMM = e.postvalue;

        	if( this.gfnGetDiffDate(frMM, toMM) < 0){

        		var sMsgId = "시작일이 종료일자보다 큽니다."; // 시작일이 종료일자보다 큽니다.
        		var arrArg = [];
        		this.gfnAlert(sMsgId,arrArg,'w',function(yes){
        		  	obj.value = e.prevalue;
        			obj.setFocus();
        			obj.setSelect();
        		});
        		return;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.cmmCalFromTo_ontimer,this);
            this.addEventHandler("onload",this.formOnload,this);
            this.calFrom.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.calFrom.addEventHandler("canchange",this.calFrom_canchange,this);
            this.calTo.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.calTo.addEventHandler("canchange",this.calTo_canchange,this);
            this.pdvCal.form.pdvCalFrom.addEventHandler("onchanged",this.pdvCal_pdvCalFrom_onchanged,this);
            this.pdvCal.form.pdvCalFrom.addEventHandler("canchange",this.pdvCal_pdvCalFrom_canchange,this);
            this.pdvCal.form.pdvCalTo.addEventHandler("canchange",this.pdvCal_pdvCalTo_canchange,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnPdvCancle.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnPdvConfirm.addEventHandler("onclick",this.pdvCal_btnPdvConfirm_onclick,this);
        };
        this.loadIncludeScript("cmmCalFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
