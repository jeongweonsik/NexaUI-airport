/**
*  Transaction 관련 공통 라이브러리
*  @FileName 	Transaction.js
*  @Creator 	#{J}
*  @CreateDate 	2025.04.15
*/

/********************************************************************************************
*● gfnTran       : 공통 transaction
*● _gfnCallback  : 공통 callback
*● gfnFormLoginTran  : Login Transaction
*● gfnLogoutTran : Logout transaction
*● gfnTranFileSearch : 파일 정보 select trasnaction
*● gfnSetWaitCursor  : waitcursor 설정 
*********************************************************************************************/

/**
* @class 서비스 호출 공통함수 <br>
* Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
* @param {string} id  : 서비스 ID
* @param {string} url - 서비스 URL
* @param {string} inputdataset 
* @param {string} output dataset(생략가능)
* @param {string} arguments (생략가능)
* @param {function}{String} [callBackFnc] - 콜백 함수명
* @param {Boolean} [isAsync] - 비동기통신 여부 (생락가능 기본:async)
* @return
* @example

this.fnCallback = function(id,code,msg)
{
// 에러 시 화면 처리 내역
if(code < 0) return;

switch(id) {
case "svcSearch":
break;

default:
}
};

예제1)
var id      = "svcSearch";
var url     = "/login.do";
var inds    = "inSys1=dsUser";
var outds   = "dsOut=sysOut";  
var callback = "fnCallback";  // 생략가능

this.gfnTran(id, url, inds, outds, callback);   

예제2)
var id        = "svc";
var url       = "";
var inds      = "inSys1=dsUser";
var outds     = "dsOut=sysOut";  

this.gfnTran(id, url, inds, outds, (code,msg)=>{
	if(code < 0) return;
});

*/ 
_pForm.gfnTran = function()
{      	
	const args = Array.from(arguments);
	
	let sid="", reqUrl="", sqlid="", inds="", outds="",  params="",reqArgs="";
	let strparam="", callback="fnCallback", isAsync = true;	
	let nDataType = 0; 	// xml 통신
	let ncnt = 0;
	
	if(args.length < 2 ) return;
		args.every((value,key) => {	  			
				value = nexacro._isUndefined(value) ? "" : value;
				if(value instanceof Function		    
					|| (typeof value == "string" 
						&& value.toLowerCase().indexOf("callback") > -1)){  
					
					callback = value;
					
					let args1 = arguments[Number(key+1)];			
					
					if(this.gfnIsNotNull(args1)){		// async				 
						isAsync =  args1;				
					}
					
					return false;
				}else{		  	
					
					if(this.gfnIsNotNull(value)){
						
						if(key == 0)  sid = nexacro.trim(value); //svcid
						else if(key == 1) reqUrl = nexacro.trim(value);  //surl
						else if(key == 2) inds  =  value;     // input dataset 
						else if(key == 3) outds = value;     //output dataset
						else if(key == 4) reqArgs = value;   //parameter
						
					}// arguments end				  
					return true;
				}		  
			});		 
	
    const objDate = new Date();
	const nStartTime = objDate.getTime();
    const sStartDate = objDate.getYear()
	+"-"+String(objDate.getMonth()+1).padLeft(2, '0')
	+"-"+String(objDate.getDate()).padLeft(2, '0')
	+" "+String(objDate.getHours()).padLeft(2, '0')
	+":"+String(objDate.getMinutes()).padLeft(2, '0')
	+":"+String(objDate.getSeconds()).padLeft(2, '0')
	+" "+objDate.getMilliseconds();
	
	// 1. callback에서 처리할 서비스 정보 저장
	let oparam = { 
		id           : sid,
		url          : env.services["svcUrl"].url + reqUrl,		
		inds         : inds,
		outds        : outds,		
		argus        : reqArgs,
		callback     : callback,	
		isAsync      : isAsync,		
		datetype     : nDataType,
		browser      : nexacro._Browser,
		startdate    : sStartDate,
		starttime    : nStartTime,
	};	 
	
	if(this.gfnIsNull(sid) || this.gfnIsNull(reqUrl)){	
	    oSvc.message =  "## 개발 필수 값 오류 :  [sid]: " +  sid + "[reqUrl:]" +reqUrl;	   
	   	this.gfnLog(oparam);
	    return;
	}
	
	// Async
	if ((isAsync != true) && (isAsync != false)) isAsync = true;	
	let svcurl = "svcUrl::" + reqUrl;
	
	this.transaction(oparam  //1.servcie object 
		, svcurl                //2.strServiceUrl
		, inds                  //3.inDataSet
		, outds                //4.outDataSet
		, reqArgs               //5.arguments
		, "_tranCallback"	  //6.strCallbackFunc
		, isAsync             //7.bAsync(기본 비동기)
		, nDataType          //8.nDataType : "0" : XML 형식,  "2" : SSV 형식, "3" : JSON 형식 --> HTML5에서는 Binary 타입은 지원안함
	);                
};


/**
* @class 공통 Callback 함수 <br>
* 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
* @param {object} svcID - 서비스 ID
* @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
* @param {String} [errorMsg] - 에러메시지
* @return N/A
*/
_pForm._tranCallback = function(oparam,errorCode,errorMsg)
{
    //wait cursor
	env.usewaitcursor = true; // set  

	let svcid     = oparam.id;      
	let url      = oparam.url;	
	let inds      = oparam.inds;   
	let outds     = oparam.outds;
	let params    = oparam.argus;
	let callback  = oparam.callback, sync = oparam.sync;	
	let startdate = oparam.startdate, starttime  = oparam.starttime;	
	let dateType  = oparam.datetype;    
	
	let objDate = new Date();
	let enddate = objDate.getYear()
	+"-"+String(objDate.getMonth()+1).padLeft(2, '0')
	+"-"+String(objDate.getDate()).padLeft(2, '0')
	+" "+String(objDate.getHours()).padLeft(2, '0')
	+":"+String(objDate.getMinutes()).padLeft(2, '0')
	+":"+String(objDate.getSeconds()).padLeft(2, '0')
	+" "+objDate.getMilliseconds();
	let elapseTime = (objDate.getTime() - starttime)/1000;	
	
	let sErrorMsg = "errorCode : " + errorCode;
	if(!!errorMsg) sErrorMsg += " errormsg : " +errorMsg;
	
	//httpError 처리 
// 	if(app.v.httpError){
// 		app.v.httpError = false;
// 		return;
// 	}
	
	// 에러 공통 처리
	if(errorCode < 0){	// -1 : 실패  0 : 정상
	
	    let omsg = {ERRROCODE : errorCode,ERRORMSG  : errorMsg};
		    omsg = Object.assign(omsg,this.gfnTransformKeys(oparam,key => key.toUpperCase()));
		    omsg.DATETYPE    = dateType == 0 ? "XML" : dateType == 2 ? "SSV" : dateType == 3 ? "JSON" : "unknown type";
		    omsg.ELAPSETIME  = enddate;
		    omsg.ENDDATE     = elapseTime;           
			this.gfnLog(omsg);   // error console log
	}	
	
	// 화면의 callBack 함수 실행	
	if(nexacro._isFunction(callback)) callback.call(this,errorCode,errorMsg);
	else if(nexacro._isFunction(this[callback])) this[callback].call(this,svcid,errorCode,errorMsg);		
};

/**
* waitcursor 공통
* @param {boolen} true/false
* @return 
* @example
this.gfnSetWaitCursor(true); //활성
this.gfnSetWaitCursor(false); //활성

* @memberOf 
*/
_pForm.gfnSetWaitCursor = function(bWaitcursor)
{
	env.usewaitcursor = bWaitcursor; // set 
};

delete _pForm;