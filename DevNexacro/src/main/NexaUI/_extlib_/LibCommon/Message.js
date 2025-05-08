/**
*  메세지 처리 관련  공
*  @FileName 	Message.js
*  @Creator 	#{J}
*  @CreateDate 2025.04.15
*/

/********************************************************************************************
*● gfnAlert          : 메세지팝업오픈(Alert)
*● gfnConfirm        : 메세지팝업오픈(confirm)
*● gfnConvertMessage : 메세지 치환
*● gfnGetMessage     : 메세지 치환 후 완성된 메시지 리턴
*● gfnToast 		 : tost message 생성
*********************************************************************************************/

/**
 * @class 메세지팝업오픈(Alert)
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [stype] 
    "w";  warning   
    "e" : error 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다.
	"q" : question 설정 시 물음표("?") 모양 아이콘이 표시됩니다.
	"i" : 정보 "!" 모양 아이콘이 표시됩니다.(alert)기본
	"" :(기본)   
 * @param {function} [sCallback] 
 * @return N/A
 * @example
 * // {0} 의 입력값의 길이는 {1} 이하이어야 합니다.  
    "w";  warning
    "e" : error 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다.
	"q" : question 설정 시 물음표("?") 모양 아이콘이 표시됩니다.
	"i" : 정보 "!" 모양 아이콘이 표시됩니다.(alert)기본
	"" :(기본) 생략가능
	
	[값1]이(가) [값2]와(과) 일치하지 않습니다.
   let msgId    = "10046";  // 필수
   let arrParam = ["값1", "값2"];  //* 생략가능
   let stype  = "e";   // 유형 *  
//    this.gfnAlert(msgId,arrParam,stype,(yes)=>{
// 
//    });
   
  this.gfnAlert(msgId);
 */
_pForm.gfnAlert = function ()
{
	const args = Array.from(arguments);	 
	
	if(!nexacro._isObject(args[0]) && Object.keys(args[0]).length < 1) return; 
	
	let sMsgId,arrParam=[],sType='',callback='';
	let oparams = {msgurl:"cmm::cmmAlert.xfdl",popid:this.gfnGetUniqueId("alert" + "_"),titlebar:false};		
	Object.assign(oparams,this._gfnMsgParam(args));
	 this._gfnShowMsg(oparams);
};

/**
 * @class 메세지팝업오픈(confirm)
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [styp] - 
    "w";  warning
    "e" : error 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다.
	"q" : question 설정 시 물음표("?") 모양 아이콘이 표시됩니다.
	"i" : 정보 "!" 모양 아이콘이 표시됩니다.(alert)기본
	"" :(기본) 생략가능
 * @param {function} [sCallback] 
 * @return N/A
 * @example
 *
	let sMsgId = "10066";				//메세지ID
	let arrArg = [];				   //메세지취환될값 배열[생략가능]
	let stype = "i";  //"i" "w" "e"
	// 변경된 내역을 저장 하시겠습니까?
	this.gfnConfirm(sMsgId,arrArg,stype,(yes)=>{
	
	    if(yes) trace(" true");			  
		 else   trace(" false");
		
	});	
 */
_pForm.gfnConfirm = function()
{    
    const args = Array.from(arguments);	 
	
	if(!nexacro._isObject(args[0]) && Object.keys(args[0]).length < 1) return; 
	let smsg,sType='',callback;
	let oparams = {msgurl:"cmm::cmmConfirm.xfdl",popid:this.gfnGetUniqueId("confirm" + "_"),titlebar:false};	
	   Object.assign(oparams,this._gfnMsgParam(args));	  
	 this._gfnShowMsg(oparams); 
 
};


/**
 * mesage parameter 
 * @param {string} 
 * @return 
 * @example
 * @memberOf 
 */
_pForm._gfnMsgParam = function ()
{
    const args = Array.from(arguments);	 
	let sMsgId='',arrParam=[],sType='',callback='';
    let resArr = [];
 
	args[0].every((value,key) => {	  

		  if(value instanceof Function
		    || !nexacro._isObject(value) 
			&& value.toLowerCase().indexOf("callback") > -1){  
	    
			  callback = value;
		           
			  return false;
		  }else{			  	

			if(this.gfnIsNotNull(value)){
			
			 if(key == 0) sMsgId = nexacro.trim(value); //msgid
			  else if(key == 1 && nexacro._isArray(value))  arrParam = value.map((ele,idx)=>`${ele}`); //oparams
			     else if(key == 2) sType =  nexacro.trim(value); //message type
							 
			  }
			   return true;
		  }		  
      });

	 return {msg:this.gfnMsgLabelCodeChange(sMsgId, arrParam),type:sType,callback:callback};
};

/*
 * priavate
 *	메시지창 공통
 */ 
_pForm._gfnShowMsg = function ()
{
   const args = Array.from(arguments);	
   
     if(!nexacro._isObject(args[0]) && Object.keys(args[0]).length < 1) return; 

    let msgid,msgurl,popid,sMsg, stype="v",titlebar = false;
	let callback = '';
	
	   Object.entries(args).forEach(([key,value],idx) => {                  
		  	if("msgurl" in value) msgurl = value['msgurl']; 
			  if("popid" in value) popid = value['popid'];
			   if("msg" in value) sMsg = value['msg'];			
				  if("type" in value) stype  = value['type'];	
				     if("callback" in value)  callback  = value['callback'];				  
		
      });

    if(!!!msgurl) return;	
    let oargs = {paramContents:sMsg,paramType:stype,titlebar:titlebar};	
	let  oparam = {id :popid,url: msgurl};	
	    Object.assign(oargs,oparam);
	
    this.gfnShowModal( oargs,
    				   (reValue)=>{		
					  
                           if(callback instanceof Function)	 callback.call(this,reValue);	
						   if(nexacro._isFunction(this[callback])) this[callback].call(this, msgid, reValue);			
    				   }
    				  );
	
};

/**
 *  언어 코드 값 변경
 * @param {string} sMsgId
  * @param {array} arguments ["값1","값2"]
 * @return 
 * @example
 * @memberOf 
 */
_pForm.gfnMsgLabelCodeChange = function (sMsgId,args)
{
    let isLocal = nexacro.getEnvironmentVariable("evQuikView");
	let arrArg = this.gfnNvl(args,[]);
	// 다국어 처리
	let dsmsg =  app.gdsMessage;

    let sMsg = dsmsg.lookup(this.colInfo.msg.cd, sMsgId, this.colInfo.msg.nm);

		
	if(this.isNull(sMsg)) sMsg = sMsgId;
	else sMsg = sMsg.replace("{&10}","\n");  //엔터 replace

	if(nexacro._isArray(arrArg))
	{


	   sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	   sMsg =  _pForm.gfnConvertMessage(sMsg, arrArg);  //converter mesage parameter 
	   
	}
	
	return sMsg;
};


_pForm.gfnMsgFormOnsize = function ()
{  
  let nwidth = -1
  let nheight = -1;
  let autosize = "true";
  
  return [nwidth,nheight,autosize];
};

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
_pForm.gfnConvertMessage = function(msg, values) 
{
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};

_pForm.gfnGetMessageDsColTxt = function (pvalue)
{
   return this.msg.code;
};

/**
 * @class 메세지 치환 후 완성된 메시지 리턴
 * @param {String} sMsgId - 메세지ID	
 * @param {Array}  arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {dataset}  공통 사용시 생략 
 * @return {String} smsg
 * @example
    let msgId = '{0} 이(가) {1} 와(과) 일치하지 않습니다.';
	let sVar1=  "첫번째";
	let sVar2=  "두번째";	
	let sMsg = this.gfnGetMessage(msgId,[sVar1, sVar2]);
	
	trace(sMsg); // 
	
	 {0} 이(가) {1} 와(과) 일치하지 않습니다. == >   첫번째 이(가) 두번째 와(과) 일치하지 않습니다.
 */
_pForm.gfnGetMessage = function(sMsgId, args) 
{
	return  this.gfnMsgLabelCodeChange(sMsgId,args);
};

 
/*
* tost message 생성
*@param {string} message code 
*@example
 this.gfnToast('10108');
*/ 
_pForm.gfnToast= function (msg)
{
   const pform = this.opener ? this : this.gfnGetTopLevelForm(this);
   const sid = "staCopy_" + pform.name;
   const sidBind = sid + "_bind";

	const workForm = pform;
	
     let objStatic ;
    if( !pform.isValidObject(sid)){
			// Create Object  
		 objStatic  = new Static(sid, null, null,null,null , null, null);
		// Add Object to Parent Form  
		pform.addChild(sid, objStatic);  

		objStatic.cssclass = "sta_WF_GridTooltip";   //set tooltip css
		objStatic.fittocontents = "both";	
	
	}else{
	    objStatic =   pform[sid];
	}

	
	let stooltipTxt = this.gfnGetMessage(msg);
 	 
	objStatic.text = stooltipTxt;
	objStatic.show(); 	
	
	this.resetScroll();
   	const nLeft = nexacro.round(workForm.getOffsetWidth()/2) - nexacro.round(objStatic.getOffsetWidth()/2);	

	const nWidth  = objStatic.getOffsetWidth();
    const nHeight = objStatic.getOffsetHeight();

	const nTop = nexacro.round(workForm.getOffsetBottom()) - nexacro.round(nHeight);
    
	objStatic.move(nLeft,nTop,nWidth,nHeight,null,null);
	objStatic.visible = true;

	nexacro._OnceCallbackTimer.callonce(this, function() {
        objStatic.visible = false;

		if(pform.isValidObject(sid))
		{
			let objDeleteStatic = pform.removeChild(sid); 
			objDeleteStatic.destroy(); 
			objDeleteStatic = null;
		}			  
					  
    },1200);
};

delete _pForm;