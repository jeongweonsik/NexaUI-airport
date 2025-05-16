/**  
*  프레임 셋 및 공통 관련
*  @FileName 	Override
*  @Creator 	#{J}
*  @CreateDate 2025.04.15
*  @Desction   		
*/
const pEdit =  nexacro.Edit.prototype;


_pForm.on_fire_onload = function(_a, _b) {
	if (this._is_fired_onload) {
		return true;
	}
	if (this.onload && this.onload._has_handlers) {
		this._bFireLoadEvent = true;
	
		this._gfn_on_loadForm(_a, _b);  // 폼 공통
		var _c = new nexacro.LoadEventInfo(_a,"onload",_b);
		var _d = this.onload._fireEvent(this, _c);
		this._bFireLoadEvent = false;
			
		_c.destroy();
		if (!this._is_loading) {

		
			this._is_fired_onload = true;
		}else{
		
		}
		return _d;
	}
	return true;
}

/**
* @class close(내부 처리 함수)
* @param {*} arguements 
* @return 
* @example N/A
* @memberOf private
*/
_pForm.close = function (arg) {
	
	if (this._closing) {
		return;
	}
	
	if (!this.parent || !this.parent._is_frame) {
		return;
	}
	
	this.setWaitCursor(false, null);
	
	var childframe = this.parent;
	
	var confirm_message = childframe._on_beforeclose();
	if (childframe._checkAndConfirmClose(confirm_message) == false) {
		return false;
	}
	
	if (childframe._window) {
		childframe._window._ignore_close_confirm = true;
	}
	
	this._closing = true;
	childframe._on_close();
	this._closing = null;
	
	// 	if (typeof (arg) == "object") {
	// 		arg = null;
	// 	}
	
	if (this.parent) {
		
		if(this.parent.getOwnerFrame()["_popuptype"] == 'modeless')
		{
			let popupid  = this.parent.getOwnerFrame()["_popupid"];
			let callback  = this.parent.getOwnerFrame()["_callback"];
			
			if(!!callback)
			{
				if(nexacro._isFunction(callback)) 	callback.call(this,arg);		
				else if(nexacro._isFunction(this.parent[callback])) this.parent[callback].call(this,popupid,arg);
			}
		} 
		this.parent._closeForm(arg);
	}
};

_pFrame._on_closebutton_click = function (obj, e) {
	
	var confirm_message = this._on_beforeclose();
	if (this._checkAndConfirmClose(confirm_message) == false) {
		return;
	}       
	/// 현재화면 저장 여부 체크 return 처리
	if("rtn" in obj){
		let rtn = obj.rtn;
		if(!rtn) return;
	}
	
	//팝업 클로즈 버튼 처리를 위한 화면단 함수 사용 처리...(cfnTitlebarClose_onclick)
	var fform = this.form;		 
	if (fform && nexacro._isFunction(fform.cfnTitlebarClose_onclick)
		&& (this.name.indexOf("confirm") == -1  || this.name.indexOf("alert") == -1)) 
	{
		
		var btnid = "btnPopHidden";
		if(!fform.isValidObject( btnid ))
		{
			//dataset 갱신을 위한 처리
			var objButton = new Button(btnid, 0, 0, 0, 0, null, null);
			// Add Object to Parent Form  
			fform.addChild(btnid, objButton); 
			// Show Object  
			objButton.show(); 
			objButton.setFocus();
		}
		
		var resclose = fform.cfnTitlebarClose_onclick();
		
		if(resclose==true) return;
	}
	
	this._on_close();
	
	var owner_frame = this.getOwnerFrame();
	var callremovechild = true;
	
	
	if (owner_frame) {	
		
		owner_frame.removeChild(this.id);
		callremovechild = false;
		if (owner_frame._control_element) {
			owner_frame.on_change_containerRect(owner_frame._getClientWidth(), owner_frame._getClientHeight());
		}
	}
	else if (this._window && this._window._parentwindowforopen && this._window_type == 2) {
		if (nexacro._Browser == "Runtime" && (nexacro._SystemType.toLowerCase() == "win32" || nexacro._SystemType.toLowerCase() == "win64")) {
			nexacro._unregisterPopupFrame(this.id, this._window._parentwindowforopen, undefined, true);
		}
	}
	
	
	if (this._is_window && this._window && this._window._is_alive) {
		this._window.destroy();
	}
	else {
		this._destroy(callremovechild);
	}
	
	if (this._control_element) {
		this._control_element.destroy();
	}
	this._control_element = null;
};

/**
* @class 선택된 체크박스 return 
* @param 
* @return [array]
* @example
var aChk= Grid00.getCheckRow();
trace(aChk);  // 2,1,0
* @memberOf 
*/
_pGrid.getCheckRow = function(chkCol)
{
	let chkRow,aData,aRtn,nIdx,nCnt;
	
	if (this.binddataset) {
		let ds = this._findDataset(this.binddataset);
		
		if(ds)
		{
			if(chkCol == "" || chkCol == null) chkCol = "COL_CHECK";
			nIdx = ds.getColIndex(chkCol);   
			
			//해당 컬럼이 없으면 return
			if(nIdx < 0)
			{
				//trace(chkCol + " 컬럼이 없습니다");
				return "";
			}
			
			//체크 컬럼 data
			aData = this._arrayPluck(ds._rawRecords,nIdx);		   
			
			chkRow = ""; 
			nCnt = aData.length - 1;
			
			for(var i=nCnt;i>=0;i--)
			{
				//체크된 값 여부
				if(aData[i] == "1" || aData[i] == true)
				{
					chkRow +=(chkRow == "" ? "":",") + i;
				}
			}
		}
		
		// 체크 값 row 여부
		if(chkRow == "" || chkRow == null)
		{
			this.gfnToast(" 체크된 ROW가 없습니다.");
			return "";
		}
		else
		{		
			if (chkRow.indexOf(",") < 0 )  // 체크 Row가 1개 배열로 리턴
			{
				aRtn = [chkRow];
			}
			else
			{
				aRtn = chkRow.split(",");
			}
		}
		
		return aRtn;
	}
	
};

/**
* @class 배열의 특정 위치 값을 축출
* @param {Array} arrData 배열
* @param {Number} key 축출할 배열 인덱스
* @return {Array} 배열 
* @example
* @memberOf 
*/
_pGrid._arrayPluck = function (arrData,key)
{
	return arrData.map(function(object){return object[key]});
};

/************************************************************************
* user calendar division  
************************************************************************/

/**
* setting bindds 
* @param {boolen} true/false
* @return 
* @example
* @memberOf 
*/
_pDiv.setBinds = function (bindds,colFrom,calTo)
{
	if(nexacro._isNull(this.url)) return;	
	if(nexacro._isFunction(this.form.setBinds)) this.form.setBinds(bindds,colFrom);
	
};


/**
*  공통 컴퍼넌트 초기화
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pDiv.init = function (params)
{
  	if(nexacro._isNull(this.url)) return;	
    if(nexacro._isFunction(this.form.init)) this.form.init(params);
};


/**
* 월력 getValue
* @return {string} value
* @example
* @memberOf 
*/
_pDiv.getValue = function ()
{
	if(nexacro._isNull(this.url)) return;
	if(nexacro._isFunction(this.form.getValue)) return this.form.getValue();
	else return "";
	
};

/**
* setting division  setValue
* @param {string} value
* @return 
* @example
* @memberOf 
*/
_pDiv.setValue = function (_v)
{
	if(nexacro._isNull(this.url)) return;
	if(nexacro._isFunction(this.form.setValue)) this.form.setValue(_v);
};

/*
*	readonly
*/

_pDiv.setReadOnly = function (b)
{
	if(nexacro._isNull(this.url)) return;
	if(nexacro._isFunction(this.form.setReadOnly)) this.form.setReadOnly(b);
};

/**
* setting division enable
* @param {boolen} true/false
* @return 
* @example
* @memberOf 
*/
_pDiv.setEnable = function (_b)
{
	if(nexacro._isNull(this.url)) return;
    if(nexacro._isFunction(this.form.setEnable)) this.form.setEnable(_b);	   	
};

/**
* setting division form readonly
* @param {boolen} true/false
* @return 
* @example
* @memberOf 
*/
_pDiv.setReadonly = function (_b)
{
 	if(nexacro._isFunction(this.form.setReadonly)) this.form.setReadonly(_b);	   	
};

/**
* setting usercomp 필수
* @param {boolen} true/false
* @return 
* @example
* @memberOf 
*/
_pDiv.setEssential = function (_b)
{
	if(nexacro._isFunction(this.form.setEssential)) this.form.setEssential(_b);
};

/**
* setting usercomp 필수
* @param {stirng}  //btnDialog : 파일추가  btnFileDeleteAll : 파알전체삭제 btnFileDownLoadAll : "파일전체다운로드"
* @return 
* @example
var sAuth = "add:false,delAll:false,delDewon:false";	
this.divFileUp.setAuth(sAuth);
* @memberOf 
*/
_pDiv.setAuth = function (_s)
{
	if(nexacro._isFunction(this.form.setAuth)) this.form.setAuth(_s);
	
};

/**
* get usercomp 
* @param {stirng}  //btnDialog : 파일추가  btnFileDeleteAll : 파알전체삭제 btnFileDownLoadAll : "파일전체다운로드"
* @return 
* @example
* @memberOf 
*/
_pDiv.getAuth = function (_s)
{
	if(nexacro._isFunction(this.form.getAuth)) return this.form.getAuth();	
};


/************************************************************************
* paging 
************************************************************************/

/**
* set paging
* @param {stirng}{number} paging totalcount
* @return 
* @example
var  totalCnt =  nexacro.toNumber(this.dsPagingInfo.getColumn(0, "totalCount")); //전체로우갯수
this.divPage.callPaging(totalCnt);	
* @memberOf 
*/
_pDiv.callPaging = function (nTotCnt,callback )
{
	//  this.urecords = 0; //목록갯수
	// 	this.upage=0;	 	//페이지번호
	// 	this.ureecordsOffset=0;		//시작rownum
	// 	this.utotalCount=0;		//전체데이터갯수
	// 	this.upageCount=0; 		//실제표출페이지갯수
	
	if(nexacro._isFunction(this.form.callPaging)) return this.form.callPaging(nTotCnt,callback || "");	
};

/**
* page number 
* @param {string} 
* @return 
* @example
* @memberOf 
*/
_pDiv.getPageNumber  = function ()
{
    if(("upage" in this) && ("urecords" in this)){
         return Number(this.upage)  + 1;
		//return Number(this.upage) * Number(this.urecords);
	}
	return 0;
};

/**
*  pageCount
* @param {string} 
* @return 
* @example
this.divPageing.setPageCount(nPageCnt);
* @memberOf 
*/
_pDiv.setPageCount = function (nPageCnt)
{
	if(nexacro._isFunction(this.form.setPageCount)) return this.form.setPageCount(nPageCnt);	
	
};

/**
* paging total cnt 
* @param {string,number} paging total count 
* @return 
* @example
* @memberOf 
*/
_pDiv.setTotal =  function (nTotal)
{
	if(nexacro._isFunction(this.form.setTotal)) return this.form.setTotal(nTotCnt);	
};


/********************** end paging ****************************************/

/************************************************************************
* 기간달력 
************************************************************************/
/**
* 기간달력 getFromDate
* @param {boolen} true/false
* @return 
* @example
* @memberOf 
*/
_pDiv.getFromDate = function ()
{
	if(nexacro._isFunction(this.form.getFromDate)) return this.form.getFromDate();
	else  return "";
};

/**
* setting usercomp formto 달력 fromdate 
* @param {boolen} true/false
* @return 
* @example
* @memberOf 
*/
_pDiv.getToDate = function ()
{
	if(nexacro._isFunction(this.form.setToDate)) return this.form.getToDate();
	else  return "";
	
};

/**
* 기간달력 setToDate
* @param {string} 날짜값 yyyMMdd 
* @return 
* @example
* @memberOf 
*/
_pDiv.setToDate = function (_date)
{
	if(nexacro._isFunction(this.form.setToDate)) return this.form.setToDate(_date);
	else return '';
	
};

/**
* 기간달력 setFromDate
* @param {string} 날짜값 yyyMMdd 
* @return 
* @example
* @memberOf 
*/
_pDiv.setFromDate  = function (_date)
{
	if(nexacro._isFunction(this.form.setToDate)) return this.form.setFromDate(_date);
	else return '';
};

/**
* 기간달력 set from to date 
* @param {string} 날짜값 yyyMMdd 
* @param {string} 날짜값 yyyMMdd 
* @return 
* @example
this.div.setFromToDate('20240901', '20240930');
* @memberOf 
*/
_pDiv.setFromToDate = function(vfr, vto)
{
	
	if(nexacro._isFunction(this.form.setToDate)
		&& (!!vfr && !!vto)) return this.form.setFromToDate(vfr,vto);  
	else return ''; 	 	
};


_pDiv.setBindTotal = function (ods)
{
	if(nexacro._isFunction(this.form.setBindTotal)) return this.form.setBindTotal(ods);
};

//get grid binddataset
_pDiv.getBindDs = function ()
{
	if(nexacro._isFunction(this.form.getBindDs)) return this.form.getBindDs();
};

_pDiv.setSvcParam = function (osvc)
{
	if(nexacro._isFunction(this.form.setSvcParam)) return this.form.setSvcParam(osvc);
};

// 다음 페이지 실행 여부 
_pDiv.getPageNext = function ()
{
	
	if(nexacro._isFunction(this.form.getPageNext)) return this.form.getPageNext();
	
};

// 다음 페이지 set 
_pDiv.setPageNext = function (b)
{
	if(nexacro._isFunction(this.form.setPageNext))  this.form.setPageNext(b);
};

// 마지막 페이지 셋팅
_pDiv.setHasNext = function (nHas)
{
	if(nexacro._isFunction(this.form.setHasNext))  this.form.setHasNext(nHas);	
};
// 마지막 페이지 기져오는 함수
_pDiv.getHasNext = function ()
{
	
	if(nexacro._isFunction(this.form.getHasNext)) return this.form.getHasNext();
}

// 마지막 페이지 기져오는 함수
_pDiv.setTotValue = function (ntot)
{
	if(nexacro._isFunction(this.form.setTotValue)) this.form.setTotValue(ntot);
}

/************************************************************************
* paging end
************************************************************************/

// file up down 공통 dsFileUp dataset 가져오는 함수
_pDiv.getDsFileUp = function ()
{
	
	if(nexacro._isFunction(this.form.getDsFileUp)) this.form.getDsFileUp();
};


// file up 컴퍼넌트 dsFileUpload copyData 함수
_pDiv.setCopyDsFileUpload = function (dsUpload)
{
	
	if(nexacro._isFunction(this.form.setCopyDsFileUpload)) this.form.setCopyDsFileUpload(dsUpload);
};

// file up setGfileSeq
_pDiv.setGfileSeq = function (qSeq)
{
	
	if(nexacro._isFunction(this.form.setGfileSeq)) this.form.setGfileSeq(qSeq);
};

// file up getGfileSeq
_pDiv.getGfileSeq = function ()
{
	
	if(nexacro._isFunction(this.form.getGfileSeq)) this.form.getGfileSeq(qSeq);
};

// file up getGfileSeq
_pDiv.setToday = function ()
{
	if(nexacro._isFunction(this.form.setToday)) this.form.setToday();
};


/************************************************************************
* 파일 업다운 관련
************************************************************************/
_pDiv.tranFileSearch = function (svcid,callback)
{
	if(nexacro._isFunction(this.form.tranFileSearch)) this.form.tranFileSearch(svcid,callback);
};

_pDiv.canUpload =  function ()
{
	 if(nexacro._isFunction(this.form.canUpload)) return this.form.canUpload();
};

/************************************************************************
* edit overriding
************************************************************************/

// set innerdataset
pEdit.setInnerDataset = function (sDsNm)
{
	if(this.utype == "combo") this.innerdataset = sDsNm;
};

// set codecolumn
pEdit.setCodeColumn = function (sCodecol)
{
	if(this.utype == "combo") this.codecolumn = sCodecol;
	
};

// set datacolumn
pEdit.setDataColumn = function (sDatacol)
{
	if(this.utype == "combo") this.datacolumn = sDatacol;
	
};

// set findcolumn
pEdit.setFindColumn = function (sDatacol)
{
	if(this.utype == "combo") this.setFindColumn = sDatacol;
	
};

pEdit.getValue = function ()
{
    if(this._value)  return this._value;
	
	
};

pEdit.getText = function ()
{
	return this.value;
	//this.
};

/************************************************************************
* 콤보 필터 추가 (findcolumn)
************************************************************************/
_pCombo._on_edit_oninput = function(_a, _b) {
	if (this.readonly || !this._isEnable()) {
		return false;
	}
	this._isFiredOnInput = true;
	this.on_fire_oninput();
	var _c = this.comboedit;
	var _d = _c ? _c._input_element : null;
	if (_d && (_d._is_accept_touch && !_d._is_accept_touch())) {
		if (this._isPopupVisible()) {
			this._closePopup();
		}
		this._isFiredOnInput = false;
		return false;
	}
	var _e = this._selectDataset();
	
	if (_e && _c._processing_keyfilter) {
		
		
		//var _f = this.datacolumn || this.codecolumn;
		//2024/12/04 find column 추가
		var _f = ("findcolumn" in this) && !!this.findcolumn ? this.findcolumn : this.datacolumn || this.codecolumn;
		var _g = _c.text;
		var _h = this.type;
		
		
		if (_h != "dropdown") {
			if (!this.combolist) {
				this._createPopupListBoxControl(_e);
			}
		}
		switch (_h) {
		case "search":
		case "caseisearch":
			var _i;
			if (this.type == "caseisearch") {
				_g = new nexacro.ExprParser()._transferWhitespace(_g);
				_i = _e.findRowExpr(_f + ".match(/^" + _g + "/i)");
			} else {
				_i = _e.findRowAs(_f, _g);
			}
			if (_i >= 0) {
				this._showPopup(_e, _i);
			} else {
				if (this._isPopupVisible()) {
					this._closePopup();
				}
			}
			break;
		case "filter":
		case "filterlike":
		case "caseifilter":
		case "caseifilterlike":
			var _j;
			var _k = "";
			var _l = "";
			var _m = _g.length;
			for (var _p = 0; _p < _m; _p++) {
				_j = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
				var _n = _g.charAt(_p);
				if (_j.test(_n)) {
					_k += "\\";
				}
				_k += _n;
			}
			_l = new nexacro.ExprParser()._transferWhitespace(_k);
			if (this.type == "filter") {
				
				_e.set_filterstr(_f + ".match(/^(" + _l + ")/)");
			} else if (this.type == "filterlike") {		
				
				_e.set_filterstr(_f + ".indexOf('" + _k + "') > -1");
			} else if (this.type == "caseifilter") {
				_e.set_filterstr(_f + ".match(/^(" + _l + ")/i)");
			} else {
				_e.set_filterstr(_f + ".match(/(" + _l + ")/i)");
			}
			
			if (_g && _e.getRowCount() > 0) {
				this._showPopup(_e, 0);
				var _o = this._getWindow();
				if (_o) {
					if (nexacro._Browser == "Runtime" && (nexacro._SystemType.toLowerCase() == "win32" || nexacro._SystemType.toLowerCase() == "win64")) {
						nexacro._flushCommand(_o);
					}
				}
			} else {
				if (this._isPopupVisible()) {
					this._closePopup();
				}
			}
			break;
		default:
			break;
		}
	}
	this._isFiredOnInput = false;
} ;

//como findcode 추가 
_pCombo._createFilteredDataset = function() {
	var _a = this._innerdataset;
	var _b = this._filtereddataset;
	var _c = this.codecolumn;
	var _d = this.datacolumn;
	var _e = this.combolist;
	var _u =this.findcolumn; //2024/12/04 find column 추가	
	
	if (_a && (!(_c in _a.colinfos) || !(_d in _a.colinfos))) {
		return;
	}
	if (!this._isUsableDataset(_a)) {
		return;
	}
	
	if (!_b) {
		_b = this._filtereddataset = new nexacro.Dataset("filter_" + this.id);
	}
	
	_b.set_enableevent(false);
	_b.clear();
	_b.addColumn(_c, "string");
	_b.addColumn(_d, "string");
	if(!!_u) _b.addColumn(_u, "string"); //2024/12/04 find column 추가
	
	
	for (var _f = 0, _g = _a.getRowCount(); _f < _g; _f++) {
		
		_b.insertRow(_f);
		_b.setColumn(_f, _c, _a.getColumn(_f, _c));
		_b.setColumn(_f, _d, _a.getColumn(_f, _d));
		if(!!_u) _b.setColumn(_f, _u, _a.getColumn(_f, _u)); //2024/12/04 find column 추가
	}
	_b.set_enableevent(true);
	
	if (_e) {
		_e._redrawListBoxContents(false);
		_e._onRecalcScrollSize();
	}
};

_pMultiComboListControl._createSelectAllCheckBoxControl = function(_a) {
        var _b = this.selectallcheckbox;
        if (!_b) {
            _b = this.selectallcheckbox = new nexacro._SelectAllCheckBoxControl("selectallcheckbox",0,0,0,0,null,null,null,null,null,null,this);
            _b.set_text(nexacro._toString("전체선택"));
            _b._setPopupContains(true);
            _b.createComponent(true);
        }
};

delete _pGrid;
delete _pForm;
delete _pMultiComboListControl;
