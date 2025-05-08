/**
*  팝업 처리 관련 공통 라이브러리
*  @FileName 	Popup.js 
*  @Creator 	#{J}
*  @CreateDate 	2025.04.15
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*******************************************************************************
*/

/********************************************************************************************
*● gfnShowModal : 팝업 모달 
*● gfnOpen : 팝업(modaless)
*● gfnWindownOpenMenu : modeless mene 실행 
*● gfnModalPdfViwer : pdfViwer popup 공통
*********************************************************************************************/

/**
 * modal 공통 실행
 * @param {object string}{필수} id,url
 * @param {object string} titletext  : 타이틀 테스트 설정(생락 시 팝업 폼 titletext 설정 됨)
 * @param {object boolean} resize  : 폼 사이즈 자동 여부 기본 true
 * @param {object string}{object function}  callaback
 * @return {object function}  callaback
 * @example
     const surl = "sample::sample0031PopupP.xfdl";	
	 let oparam = {id :"popId",url: surl, paramCode:"abcd",paramNum:1234,titletext:'샘플팝업'};	

	예1)
	this.gfnShowModal( oparam,
					   (reValue)=>{					   
						   trace(" ### reValue: " +reValue);   // closeValue
					   }
					  );	
					  
   예2)			  
	this.gfnShowModal( oparam,
					  "popupCallBack"
					  );				  
					 
 * @memberOf 
 */
_pForm.gfnShowModal = function ()
{		

	let sPopupCallback = '', sOpenalign='center middle',sPopupId='',callback;
	let sTitleText,sUrl = '', bAutoSize = true,bShowTitlebar = true, bResizable=false;
	let bShowStatusbar = false;
	let nLeft=-1, nTop=-1, nWidth=-1, nHeight=-1;
	let sRadius;
	let oargus = {};
	const args = Array.from(arguments);

	if(!nexacro._isObject(args[0]) && Object.keys(args[0]).length < 1) return; 
    if(!'id' in args[0] && !'url' in args[0]) return;
	
	args.every((value,key) => {	  
	
		  if(value instanceof Function
		    || (typeof value == 'string' 
	            && value.toLocaleLowerCase().indexOf('callback') > -1)){  	         
			    callback = value;				 		  
			  return false;
		  }else{			  	

			if(this.gfnIsNotNull(value)){		
			
			  if(key == 0 && typeof value == 'object' 
				&& Object.keys(value).length > 0){
				
				  if('id' in value)        sPopupId = value['id'];   //titletext
				  if('url' in value)       sUrl = value['url'];   //titletext					
				  if('titletext' in value) sTitleText = value['titletext'];   //titletext	 	   	
				  if('resize' in value)    bResizable = value['resize'];    //   사이즈 resiz여부
				  if('autosize' in value) bAutoSize  = value['autosize']    //  자동 size	
				  if('statusbar' in value) bShowStatusbar = value['statusbar'];    //자동 size						 
				  if('left' in value)      nLeft = value['left'];					   
				  if('top' in value)       nTop = value['top'];
				  if('width' in value)     nWidth = value['width'];
				  if('height' in value)    nHeight = value['height'];				
				  if('titlebar' in value)    bShowTitlebar = value['titlebar'];		
				  if('radius' in value)    sRadius = value['radius'];					  				  
				
				  //delete property
				  delete value['id']; delete value['url']; delete value['title']; delete value['titlebar']; 
				  delete value['titletext']; delete value['resize']; delete value['statusbar']; delete value['autosize'];
				  delete value['left']; delete value['top']; delete value['width']; delete value['height'];					   
			   }									 
		   }
			return true;			   
		  }		  
	});  // setting arguement end

	//this.console.log("JSON oargus : " + JSON.stringify(oargus));
	if(nLeft  != -1 && nTop   != -1)    sOpenalign = "";
	if(nWidth != -1 && nHeight != -1)  bAutoSize = false;
    // trace(" JSON.stringify : " + JSON.stringify(oargus));
	let newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);	
		newChild.titlebarheight = 40; // set height	    
		newChild.dragmovetype = "all";
		newChild.showcascadetitletext = false;
		newChild.showtitlebar = bShowTitlebar;    //titlebar
		newChild.autosize = bAutoSize;			
		newChild.resizable = bResizable;    	
		if(sTitleText) newChild.titletext = sTitleText;
		if(!!sRadius) newChild.borderRadius = sRadius;
		newChild.showstatusbar = bShowStatusbar;    //statusbar는 안보임
		newChild.openalign = sOpenalign;

	newChild.showModal(this.getOwnerFrame(), args[0], this
	  , function(sid,variant){		
	
		if(variant == "x" || !!!callback) return;
	    	
		if(nexacro._isFunction(callback)) 	callback.call(this,variant);		
		else if(nexacro._isFunction(this[callback])) this[callback].call(this,sid,variant);
			
	});
};

/**
 * modeless 실행
 * @param {object string}{필수} id,url
 * @param {object string} titletext  : 타이틀 테스트 설정(생락 시 팝업 폼 titletext 설정 됨)
 * @param {object boolean} resize  : 폼 사이즈 자동 여부 기본 true
 * @param {object string}{object function}  callaback
 * @return {object string}{object function}  callaback
 * @example
 	let oparam = {id:"popModeless",url: "sample::sample0031PopupP.xfdl",titletext:"모달리스 팝업",width:"1020",height:"400"};	// 모달리스는 form의 width,height를 지정해야 가운데 정렬
    let oArg = {paramCode:"abcd", paramNum:12345};
	Object.assign(oparam,oArg);   //object merge
	// trace(JSON.stringify(oparam));
	
	this.gfnOpen( oparam,
				  (resVar) => {
							 trace(" res modeless ==>  " + resVar);
				   }
				);	
 * @return 
 * @example
 * @memberOf 
 */
_pForm.gfnOpen = function ()
{   
    let sPopupCallback = '',sPopupId='',callback;
	let sTitleText,sUrl = '', bAutoSize = true,bShowTitlebar = true, bResizable=false;
	let bShowStatusbar = false;
	let nLeft=-1, nTop=-1, nWidth=-1, nHeight=-1;
	let oargus = {};

	const args = Array.from(arguments);

	if(!nexacro._isObject(args[0]) && Object.keys(args[0]).length < 1) return; 
    if(!'id' in args[0] && !'url' in args[0]) return;
	
	args.every((value,key) => {	  
	
		  if(value instanceof Function
		    || (typeof value == 'string' 
	            && value.toLocaleLowerCase().indexOf('callback') > -1)){  	         
			    callback = value;				 		  
			  return false;
		  }else{			  	

			if(this.gfnIsNotNull(value)){		
			
			  if(key == 0 && typeof value == 'object' 
				&& Object.keys(value).length > 0){
			
				  if('id' in value)        sPopupId = value['id'];   //titletext
				  if('url' in value)       sUrl = value['url'];   //titletext					
				  if('titletext' in value) sTitleText = value['titletext'];   //titletext	 
				  if('titlebar' in value)  bShowTitlebar = value['titlebar'];  //titilbar 여부					   	
				  if('resize' in value)    bResizable = value['resize'];    // 사이즈 resiz여부
				  if('autosize' in value) bAutoSize  = value['autosize']    //  자동 size	
				  if('statusbar' in value) bShowStatusbar = value['statusbar'];    //자동 size						 
				  if('left' in value)      nLeft = value['left'];					   
				  if('top' in value)       nTop = value['top'];
				  if('width' in value)     nWidth = value['width'];
				  if('height' in value)    nHeight = value['height'];	
				  
				  //delete property
				  delete value['id']; delete value['title']; delete value['titlebar'];
				  delete value['titletext']; delete value['resize']; delete value['statusbar']; delete value['autosize'];
				//  delete value['left']; delete value['top']; delete value['width']; delete value['height'];					   
			   }									 
		   }
			return true;
			   
		  }		  
	});  // setting arguement end
	
	oargus = Object.assign({},args[0]);	
	
	if(nWidth != -1 && nHeight != -1)  bAutoSize = false;
	if(nLeft == -1 && nTop == -1) 
	{		
		let curX,curY;
		if (system.navigatorname == "nexacro") {
			curX = app.mainframe.left;
			curY = app.mainframe.top;
		}else{
			curX = window.screenLeft;
			curY = window.screenTop;
		}
		
        nLeft   =  curX + (app.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = curY + (app.mainframe.height / 2) - Math.round(nHeight / 2) ;		
		
	}else{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}		

        let sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false";	
			 if(!!bResizable) sOpenStyle += ` resizable=${bResizable}`;
			 if(!!bAutoSize)  sOpenStyle += ` autosize=${bAutoSize}`;
			 if(!!sTitleText) sOpenStyle += ` titletext=${sTitleText}`;		 

		let arrPopFrame = nexacro.getPopupFrames(this.getOwnerFrame());	
		
		if (arrPopFrame[sPopupId] 
		) {	
		 if(arrPopFrame[sPopupId] != "[object Object]" &&
		    arrPopFrame[sPopupId] != "[object ChildFrame]")
			{
			   if (system.navigatorname == "nexacro") arrPopFrame[sPopupId].setFocus()
			   else arrPopFrame[sPopupId]._getWindowHandle().focus();
			
			}			
		}
		else {
		    this.getOwnerFrame()["_popupid"]   = sPopupId;
		    this.getOwnerFrame()["_popuptype"] = "modeless";		
			this.getOwnerFrame()["_callback"]   = callback;	
		
			 oargus.menuCd   =  this.gfnGetMenuCd();
			 oargus.menuNm  =  this.gfnGetMenuNm();
			
	//oargus
			nexacro.open(sPopupId,sUrl,this.getOwnerFrame(),oargus,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
		}
};


/**
* @class 메뉴 폼 modeless 호출  
* @param {string} menuid 
* @param {Object} params 
* @return N/A
* @example 
   this.gfnWindownOpenMenu("M10001",{param1 : "aaa"},(resVar)=>{
     
   });
*/
_pForm.gfnWindownOpenMenu = function()
{		
  const args = Array.from(arguments);	
  let pMenuid, pArgues, pCallback,pwidth ,pHeight;
  
  args.every((value,key) => {	  

	  if(value instanceof Function
		|| !nexacro._isObject(value) 
		&& value.toLowerCase().indexOf("callback") > -1){  
	
		  pCallback = value;
		 if(this.gfnIsNotNull(arguments[Number(key+1)])){			
			 pWidth = arguments[Number(key+1)];				
		 }	
		 if(this.gfnIsNotNull(arguments[Number(key+2)])){			
			 pHSeight = arguments[Number(key+2)];				
		 }	
		  return false;
	  }else{			  	

		if(this.gfnIsNotNull(value)){
		
		  if(key == 0) pMenuid = nexacro.trim(value); //menuid
		   else if(key == 1 )  pArgues = value; //parameter
					   				 
		  }
		   return true;
	  }		  
  });
	
	if(!!!pMenuid) return;
	
	const gdsUserMenu = app.gdsUserMenu;		
	const menunm   = gdsUserMenu.lookup(app.menu.id,pmenuid,app.menu.name);;
    const pageurl  = gdsUserMenu.lookup(app.menu.id,pmenuid,app.menu.url);
    const popupId  = "popOpener_" + pMenuid;
	
	let oparam = {id:popupId,url:pageurl ,titletext:menunm};	// 모달리스는 form의 width,height를 지정해야 가운데 정렬	
	if(nexacro._isObject(pargues)) Object.assign(oparam,pArgues);   //object merge	
	if(!!pWidth && !!pHeight){
	   oparam["width"] = pWidth;   oparam["height"] = pHeight;	  
	}	
	// trace(JSON.stringify(oparam));

	this.gfnOpen( oparam,
				  (resVar) => {				  
				     if(nexacro._isFunction(pCallback)) pCallback.call(this,resVar);						
				   }
				);
};



/**
 * pdfViwer popup 공통
 * @param {string}  pdf 호출 url
 * @return 
 * @example
 var surl = "https://s3.ap-northeast-2.amazonaws.com/recruit.nidsoft.com/sample.pdf";
  this.gfnModalPdfViwer(surl);
 * @memberOf 
 */
 
_pForm.gfnModalPdfViwer = function (surl)
{
   if(!!!surl) return;
   
		  let args  = {};
		  args.id         = "popPdfViwer";   //필수
		  args.url        = "cmm::cmmPdfViwer.xfdl"; //필수
		  args.titletext  = '샘플팝업';   //필수
		  args.parentUrl  = surl;    // paremeter

		this.gfnShowModal(args);
};



delete _pForm;	
