/** 
* @fileoverview 넥사크로  공통 Library 
*/

/************************************************************************
*  FIle UP/Down
************************************************************************
*● this.gfnFileDialog : 공통 파일 다이얼로그
*● this.gfnCutFileSize : 파일 사이즈 가져오는 함수
*● this.gfnCreateFileUpTransfer : FileUpTransfer 생성
*● this.gfnGetFileName : File Path 문자열(예 : C:\a\b\filename.ext)에서 File명(예 : filename)을 추출
*● this.gfnFileUpload : 파일업로드 호출
*● this.gfnAddFileList : 파일 리스트 추가(개발리스트) 공퉁 함수 
*● this.gfnFileDownLoad   : 파일다운로드 호출
/************************************************************************
 *  Transfer 이벤트
 ************************************************************************
*● gfnCreateFileUpTransfer : FileUpTransfer 생성
*●	gfnCreateFileDownTransfer : FileDownTransfer Object 생성 
/************************************************************************
 * 파일삭제
 ************************************************************************
*● gfnFileDelete  : FileUpload 선택된 파일 삭제
*● gfnFileDeleteAll : FileUpload 전체 삭제
*/


_pForm.CHUNK_SIZE = 1024 * 1024 * 5;
_pForm.gFileSeq = "";  // gFile Seq

/**
* @class 공통 파일 다이얼로그 <br>
* @param {string} fileid
* @param {number} 1 : "LOAD"  or
*                 2 : ""MULTILOAD"  
* @param {string} FileDialog 에 적용될 파일형식을 확장자 또는 MIME 형태로 설정합니다
*                 (".png", ".exe", ".png, .exe" 형식의 확장자 형태로 파일형식을 설정)
* @return N/A
* @example 
* this.gfnDialog(1);   //single
* this.gfnDialog(2);   //multi
this.gfnDialog(2, ".png, .exe" );
this.gfnDialog(2, "image/png, application/*" );
this.gfnDialog(2, "audio/*, .png, .exe" );
*/
_pForm.gfnFileDialog = function(fileid,constOpenMode,strAccept, dsFileUp,gFileSeq )
{    
  // var pThis = this.gfnGetTopLevelForm(this);
   const pThis = this;
   let pAcceept = "";
   if(this.gfnIsNull(constOpenMode)){
        this.gfnLog(["error param :  ", constOpenMode]);
        return;
   } 
   
  if(!!gFileSeq) _pForm.gFileSeq = gFileSeq;
 

   if(!this.gfnIsNull(strAccept))
   {
     pAcceept = strAccept;
   }
   else
   {
     if(system.navigatorname != "nexacro")
	 {
	  
	    pAcceept = "application/*";
     }
	 else
	 {
	    pAcceept="ALL Files(*.*)|*.*|";
	 }
   }    
    
     let svcFileid = this.isNull(fileid) ?  this.parent.name :  fileid;
	 
	pThis.sObjDialogNm         = pThis.oObjDialogNm + this.parent.name;
    pThis.sObjDialogTransferNm = pThis.oObjDialogTransferNm + this.parent.name;
    pThis.sObjFileDownTransfer = pThis.oObjFileDownTransfer + this.parent.name;
	pThis.sSvcId = pThis.oSvcId   +  svcFileid;
	pThis.dsFileUp = dsFileUp;
	
    if(this.gfnIsNull(pThis[pThis.sObjDialogNm]))
   {
      
       //FileTransfer 생성
       this.gfnCreateFileUpTransfer();  
	   
	   if(pThis.isValidObject(pThis.sObjDialogNm)) return;
      //FileDialog 생성
	   pThis[pThis.sObjDialogNm] = new FileDialog(pThis.sObjDialogNm);  
	   pThis[pThis.sObjDialogNm].addEventHandler( "onclose", function(obj,e){	   // event FileDialog close		  
		 
		   if(e.reason == 0 ) {  //파일선택 취소
			   return;
			}else{
				if(e.reason == 3 || e.reason == 1) {    //FileDialog result 옵션의 파일선택
				
				   pThis._gfnAddFileList(obj,e);	
				   this.gfnFileUpload(e.virtualfiles);		   
				}
			}
 
		  }, this );		  
	  
   };
   
 	if(constOpenMode == "single") constOpenMode = 1;   
	  else constOpenMode =3;  
	
	if(system.navigatorname != "nexacro")  pThis[pThis.sObjDialogNm].accept = pAcceept; 
	else  pThis[pThis.sObjDialogNm].filter = pAcceept; 	
	
	// this.console.log("### constOpenMode : " + constOpenMode + "<> pAcceept : " +pAcceept);
    pThis[pThis.sObjDialogNm].open(pThis.sObjDialogNm, constOpenMode, "%DOCUMENT%");
   
};


/**
* @class virfture file 생성 및 생성된 데이터 Row 생성 <br>
* @param {object} virtualfiles
* @return N/A
* @example 
* this._gfnAddFileList(e.virtualfiles);
*/
_pForm._gfnAddFileList = function(obj,e)
{

    const CHUNK_SIZE = _pForm.CHUNK_SIZE ;
	const uploadPath = this.gfnGetUploadPath();
	const removeList = [];
	const filelist = e.virtualfiles;
    const nFileLen = filelist.length;	
	const pThis = this;
	
	for (let i = 0, len = filelist.length, vFile; i < len; i++)
	{
		vFile = filelist[i];
	    let file = vFile._handle;
		vFile.addEventHandler("onsuccess", function(obj,e){
      
		    switch (e.reason)
			{
				case 1:
					// obj.getFileSize();
					//break;
				case 9:							
			
				let fileSize = system.navigatorname == "nexacro" ? 1 : file.size;			
				
				pThis.dsFileDialogTemp = pThis.gfnGetDataSet("dsFileDialogTemp");			
				pThis.dsFileDialogTemp.clear();
				pThis.dsFileDialogTemp.assign(pThis.dsFileUp);
					
					if(pThis.dsFileDialogTemp.findRow(pThis.colInfo.file.nmorg,obj.filename) != -1) 
 				   {
				     //같은 파일이 존재 합니다. 파일명 : {0}				      
					   this.gfnAlert("10051",[obj.filename] ,"e");
				       break;
				   }
 				 
				   	   let sizeaccept = this.mbsizeaccept;					 
					  if(this.gfnIsNotNull(sizeaccept)){
					  
					     const pfilesize = nexacro.round(e.filesize/1024);						   
						   // 파일업로드 사이즈 제한 주석처리						 
						   if(pfilesize > Number(sizeaccept)) 
						   {
							 //파일 최대 사이즈는 10240 KB(10M) 입니다. 파일사이즈							
							  this.gfnAlert("10150",[this.gfnCutFileSize(e.filesize)],"e");							  
							   break;
					       }
					  
					  }
					
                       let lastIdx = obj.filename.lastIndexOf(".");
					   let fileExt = lastIdx > -1 ? obj.filename.substr(lastIdx+1) : "";   					 
						const addRow = pThis.dsFileDialogTemp.addRow();					   
				       pThis.dsFileDialogTemp.setColumn(addRow,pThis.colInfo.file.nmorg,obj.filename);
				       pThis.dsFileDialogTemp.setColumn(addRow,pThis.colInfo.file.size,e.filesize);
					   pThis.dsFileDialogTemp.setColumn(addRow,pThis.colInfo.file.ext,fileExt);
    
					  pThis[pThis.sObjDialogTransferNm].addFile(obj.id, obj);   //파일 추가	
				
					   if(nexacro._isFunction(pThis.cfnFileDialog_onclose)){
					       pThis.cfnFileDialog_onclose(pThis.sSvcId,obj.filename,fileExt,e.filesize,vFile);
					   } 
					    
					break;
			}
		
		}, this);
		
		vFile.addEventHandler("onerror", function(obj,e){
		 
		    if(nexacro._isFunction(pThis._fnFileDialog_onerror)) pThis._fnFileDialog_onerror(obj,e);
		
		} , this);
		
		vFile.open(null, 1);		
	}
	
	
	for (var i = 0; i < removeList.length; i++) {
		fileUpTransferObj.removeFile(removeList[i]);
	}	
	 	
};



/**
* @class 파일 사이즈 가져오는 함수<br>
* @param {string} filesize
* @return {string} 파일 사이즈
* @example 

*/
_pForm.gfnCutFileSize = function(filesize)
{
	//var sOutput = filesize + " bytes";
	let sOutput = filesize + "bytes";
	for (let aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) 
	{
		sOutput = nApprox.toFixed(3) + aMultiples[nMultiple];
	}
	
	return sOutput;
};


/**
 * @class File Path 문자열(예 : C:\a\b\filename.ext)에서 File명(예 : filename)을 추출 <br>
 * @param {String} sPath - File Path 문자열 (예 : "C:\a\b\filename.ext")
 * @param {String} bExt - extend를 return되는 File명에 포함시킬지 여부 ( 옵션 : Default=false )
 * @return {String} 
 * 성공 : <br>
 * bExt가 true인 경우 ==> sPath에서 File명(예 : "filename.ext") <br>
 * bExt가 false인 경우 ==> sPath에서 File명(예 : "filename") <br>
 * 실패 : "" <br>
 */
_pForm.gfnGetFileName = function (sPath, bExt)
{
	let start_pos,end_pos,tmp_pos,filename;

	if (this.gfnIsNull(sPath)) 
	{
		return "";
	}
	if (this.gfnIsNull(bExt)) 
	{
		bExt = false;
	}

	start_pos = Math.max(this.gfnPosReverse(sPath, "\\"), this.gfnPosReverse(sPath, "/"));
	tmp_pos = this.gfnPosReverse(sPath, "::");
	if (tmp_pos > 0) 
	{
		tmp_pos++;
	}
	start_pos = Math.max(start_pos, tmp_pos);
	if (bExt == false) 
	{
		end_pos = this.gfnPosReverse(sPath, ".");
		if (end_pos < 0) 
		{
			end_pos = sPath.length;
		}
		filename = sPath.substr(start_pos + 1, end_pos - start_pos - 1);
	}
	else 
	{
		filename = sPath.substr(start_pos + 1);
	}

	return filename;
};

/**
* @class  FileUpload ID 체크  <br>
* @return 파일 업 아이디 체크 
* @example 
* _pForm.gfnFileUpGetId  
*/
_pForm.gfnFileUpGetId = function()
{
   let res  = true;
   const pThis = this;
   let ofileTrans  = pThis[pThis.sObjDialogTransferNm];  //fileObj

	 if(this.gfnIsNull(ofileTrans) || ofileTrans.filelist.length == 0){
	 
	   res = false;
	 }
  return res;
};


/**
 * @class  FileUpload call <br>
 * @param {String} module - (선택) 모듈명, 없으면 서버에서 "UNKNOWN" 사용 (예 : "CMS")
  * @param {String} gFileSeq
 * @return N/A
 * @example 
 * this.gfnFileUpload(obj,e);  
 */
_pForm.gfnFileUpload = function(fileList)
{
	 const pThis = this;
     
	 let sUpUrl =  "svcUrl::file/upload";
 
	// if(this.gfnTypeOf(fileList) == "VirtualFile"){

	  
		var objTransForm =   pThis[pThis.sObjDialogTransferNm];	
		if(!!!objTransForm) objTransForm =  this.gfnCreateFileUpTransfer();	
		
		   
		if (fileList.length > 0) {
			    
		   this.gfnJavascriptUploadFileList(fileList, objTransForm);
		  
		
		} else {
		   
		   this.gfnAlert("업로드할 파일이 존재하지 않습니다.","","e");
		   return;	
		}

	// }
	 
	 return;
 
	 
};


/**
* @class  FileUpload call <br>
* @param {string} filename
* @return N/A
* @example 
*
* var fileSeq = "0";
"
* this.gfnFileDownLoad(fileSeq,zipFileNm);
*/
_pForm.gfnFileDownLoad = function(fileSeq,zipFileNm)
{
     if(this.gfnIsNull(fileSeq)){
		 
		 const sMsgId = "파일을 찾을 수 없습니다.";   //파일을 찾을 수 없습니다.	
		 this.gfnAlert(sMsgId,arrArg,"","e");
		 this.gfnLog("param error");
		 return;
	 } 

	const pThis  = this;	
	let purl = "svcUrl::file/download";
	
	//env.usewaitcursor = true;
	//pThis.setWaitCursor( true, true );

	 pThis.gfnCreateFileDownTransfer();   //fileDownTransfer 동적 생성
	 
	 pThis[pThis.sObjFileDownTransfer].url = purl;		
	 
	 if(!!zipFileNm){
	    zipFileNm = nexacro.trim(zipFileNm) + ".zip";
		pThis[pThis.sObjFileDownTransfer].setPostData("FILE_SEQ_LIST", fileSeq);
	    pThis[pThis.sObjFileDownTransfer].setPostData("ZIP_FILE_NM", zipFileNm);	 // optional : 미기재시, {첫 파일명}외{첫 파일 제외한 전체 파일 개수}.zip 형태의 이름으로 다운로드
			
	 }else{
	   
	    pThis[pThis.sObjFileDownTransfer].setPostData("FILE_SEQ", fileSeq);
	 }
	
	let res = pThis[pThis.sObjFileDownTransfer].download();


	//  pThis.setWaitCursor( false, true );
	  
};


/**
 * 파일 리스트 추가(개발리스트) 공퉁 함수 
 * @param {object}  fileList
 * @return 
 * @example
 * @memberOf 
 */
_pForm.gfnAddSelectFileList = function(vFileId, vFileList,dsUpload){
		
	const pThis = this
	let objDialogTransferNm = this.gfnCreateFileUpTransfer();	

	let svcFileid = this.isNull(vFileId) ?   "cmmFileUp_" +this.parent.name :  vFileId;	 

  	pThis.sSvcId = pThis.oSvcId  + svcFileid;
	pThis.dsFileUp = dsUpload;

	for (let  i=0; i<vFileList.length;i++){
	  
	    let vFileSize =  vFileList[i].getFileSize();		
		let vFileName =  vFileList[i].filename;
		let vFileId    = vFileList[i].id;
	
		pThis.dsFileDialogTemp = pThis.gfnGetDataSet("dsFileDialogTemp");			
		pThis.dsFileDialogTemp.clear();
		pThis.dsFileDialogTemp.assign(pThis.dsFileUp);

			if(pThis.dsFileDialogTemp.findRow(pThis.colInfo.file.nmorg,vFileName) != -1) 
		   {
			 //같은 파일이 존재 합니다. 파일명 : {0}				      
			   this.gfnAlert("10051",[vFileName] ,"e");
			   break;
		   }
		 
			   let sizeaccept = this.mbsizeaccept;					 
			  if(this.gfnIsNotNull(sizeaccept)){
			  
				 const pfilesize = nexacro.round(vFileSize/1024);						   
				   // 파일업로드 사이즈 제한 주석처리						 
				   if(pfilesize > Number(sizeaccept)) 
				   {
					 //파일 최대 사이즈는 10240 KB(10M) 입니다. 파일사이즈							
					  this.gfnAlert("10150",[this.gfnCutFileSize(vFileSize)],"e");							  
					   break;
				   }
			  
			  }
			  
			   let lastIdx = vFileName.lastIndexOf(".");
			   let fileExt = lastIdx > -1 ? vFileName.substr(lastIdx+1) : "";   					 
				const addRow = pThis.dsFileDialogTemp.addRow();					   
			   pThis.dsFileDialogTemp.setColumn(addRow,pThis.colInfo.file.nmorg,vFileName);
			   pThis.dsFileDialogTemp.setColumn(addRow,pThis.colInfo.file.size,vFileSize);
			   pThis.dsFileDialogTemp.setColumn(addRow,pThis.colInfo.file.ext,fileExt);

		     if(objDialogTransferNm){
			 
			    objDialogTransferNm.addFile(vFileId, vFileList[i]);   //transform object 파일 추가	
				
			   if(nexacro._isFunction(pThis.cfnFileDialog_onclose)){
				   pThis.cfnFileDialog_onclose(pThis.sSvcId,vFileName,fileExt,vFileSize,vFileList[i]);
			   } 
			 }
					    
	// 		this.futFile.addFile("VFile"+i, aVFiles[i]);
	// 
	// 		let nRow = this.dsUpload.addRow();
	// 		this.dsUpload.setColumn(nRow, "FileName", aVFiles[i].filename);
	// 		this.dsUpload.setColumn(nRow, "Path", aVFiles[i].fullpath);
	// 		this.dsUpload.setColumn(nRow, "FileSize",  aVFiles[i].getFileSize());
		}
			
		  this.gfnFileUpload(vFileList);	
}

/**
 * loading img 활성/비활성 처리
 * @param {boolean} true : 활성 false : 비활성
 * @return 
 * @example
 * @memberOf 
 */
_pForm.gfnSetImgLoding = function (b)
{
  if(this.imgLoading){
     if(b){
	    if (!this.imgLoading.visible)
		{

			var topform = this;
			var l = Math.round((topform.getOffsetWidth() - this.imgLoading.getOffsetWidth())/2);
			var t = Math.round((topform.getOffsetHeight() - this.imgLoading.getOffsetHeight())/2);
			
			this.imgLoading.move(l, t, this.imgLoading.getOffsetWidth(), this.imgLoading.getOffsetHeight());
			this.imgLoading.visible = true;
			
		}
	}else{
	   this.imgLoading.visible =false;
	}
  
  }
	
	
};

/************************************************************************
 *  Transfer
 ************************************************************************/

/**
* @class  FileUpTransfer 생성 <br>
* @return {xcomponent} fileDialog
* @example 
* this.gfnCreateFileUpTransfer();   //single
*/
_pForm.gfnCreateFileUpTransfer = function()
{
   	var pThis  = this;

    if(pThis.gfnIsNull(pThis[pThis.sObjDialogTransferNm]))
    {
	
		if(pThis.isValidObject(pThis.sObjDialogTransferNm)) return true;

      //FileDialog 생성
	   pThis[pThis.sObjDialogTransferNm] = new nexacro.FileUpTransfer(pThis.sObjDialogTransferNm,pThis);
	   pThis[pThis.sObjDialogTransferNm].addEventHandler( "onsuccess",   pThis.fileUpTransForm_success,this);
	  
	
		//onprogress
		pThis[pThis.sObjDialogTransferNm].addEventHandler( "onprogress", function(obj,e){		  
		    pThis.gfnLog([e.eventid,e.loaded+"/"+e.total]);
		}, pThis );
		
		//onnerror event
	    pThis[pThis.sObjDialogTransferNm].addEventHandler( "onerror", function(obj,e){	
		    pThis.setWaitCursor(false,true);	
			env.usewaitcursor = false;
			this.gfnSetImgLoding(false);
			
			pThis["pfileId"] = "";
			var oparams = {msgid :  e.errormsg, type : "e" };	   
		
			pThis.gfnLog(["DialogTransfer onerror ",e.eventid,e.errormsg,e.statuscode]);
	       if(nexacro._isFunction(pThis.cfnFileUp_onerror)) pThis.cfnFileUp_onerror(pThis.sSvcId,obj,e);
			
		  }, pThis );
		  
	   return pThis[pThis.sObjDialogTransferNm];
  };
  
  return false;
};

// file upload 공통 success
_pForm.fileUpTransForm_success  = function (obj,e )
{
   const pThis =  this;
   let objTransForm = obj;

// 	   var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  SUCCESS >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
// 		  msg += "code :"+e.code+"\n";
// 		  msg += "message :"+e.message+"\n";
// 		  msg += "url :"+e.url+"\n";
// 		  msg += "datasets[0].saveXML() :"+e.datasets[0].saveXML()+"\n";
// 		  
//    this.console.log(msg);

   let resDs = e.datasets[0];  
   if(!!pThis.dsFileUp) pThis.dsFileUp.clearData();
   
      
   let dsFileUpTemp = this.gfnGetDataSet("dsFileUpTemp"); 
   dsFileUpTemp.appendData(resDs);

  this.gfnClearUploadFileList();

     pThis.setWaitCursor(false,true);
   env.usewaitcursor = false;     	   
   this.gfnSetImgLoding(false);   

    
  if(nexacro._isFunction(pThis.cfnFileUp_success)) pThis.cfnFileUp_success(pThis.sSvcId,obj,resDs);

};
/**
* @class  FileDownTransfer UploadFile List Clear
* @return N/A
* @example 
* this.gfnClearUploadFileList();  
*/
_pForm.gfnClearUploadFileList = function() {
	
	const pThis = this;
	const objTran = pThis[pThis.sObjDialogTransferNm];

	if ( this.gfnIsNull(objTran) ) return;
	 _pForm.gFileSeq = "";   // gfile seq 삭제
 //  if(this.staHelpMessage) this.staHelpMessage.visible =false;
	objTran.clearFileList();
}

/**
* @class  FileDownTransfer Object 생성 <br>
* @return N/A
* @example 
* this.gfnCreateFileDownTransfer();  
*/
_pForm.gfnCreateFileDownTransfer = function()
{
   
	var pThis  = this;
	
    if(pThis.gfnIsNull(pThis[pThis.sObjFileDownTransfer]))
   {
      
      if(pThis.isValidObject(pThis.sObjFileDownTransfer)) return;
      //FileDown transfer 생성
	   pThis[pThis.sObjFileDownTransfer] = new FileDownTransfer(pThis.sObjFileDownTransfer);
	   
	   //onsucess
		pThis[pThis.sObjFileDownTransfer].addEventHandler( "onsuccess", function(obj,e){		  
		   
		   pThis.setWaitCursor(false,true);	 
		   env.usewaitcursor = false;
		   	pThis.gfnLog(["FileDownTransfer onsuccess ",e.errormsg,e.statuscode]);
		   if(nexacro._isFunction(pThis._fnFileDownTransfer_onsuccess)) pThis._fnFileDown_onsuccess(obj,e);
		   
		}, pThis ); 
		
	    pThis[pThis.sObjFileDownTransfer].addEventHandler( "onerror", function(obj,e){		  
	      
	         pThis.setWaitCursor(false,true);	
			 env.usewaitcursor = false;
			 var oparams = {msgid :  e.errormsg, type : "e" };	   
			 pThis.gfnAlert(e.errormsg , "" ,"","e" );
			
			 this.gfnLog(["FileDownTransfer onerror ",e.errormsg,e.statuscode]);
			 
		  }, pThis );

  }
};

/************************************************************************
 * 파일삭제
 ************************************************************************/
/**
* @class  FileUpload 선택된 파일 삭제 <br>
* @param {dataset} 삭제 할 Dataset
* @param {object} dataset 삭제 할 Row
* @param {string} 삭제 할 파일 명
* @return N/A
* @example 
	 var ds = obj.getBindDataset();   //grid binddataset
	 var nRow = e.row;                   //nRow
	 var callback = "";
*    this.gfnFileDelete(ds,nRow,callback);  
*/
_pForm.gfnFileDelete = function(dsUpload,nRow,callback)
{
   //var pThis = this.gfnGetTopLevelForm(this);  
   const pThis = this;  
   let nIndex  = "";  
   let findSeq = dsUpload.findRowExprNF("FILE_SEQ == undefined || FILE_SEQ == ''");
 
   if(dsUpload.getRowCount() == 0 
   || findSeq > -1 ){
	   this.gfnAlert("10060","","i");   // 데이타가 존재하지 않습니다.
	   return;
    }
	
	 // 정말로 삭제 하시겠습니까?
	 this.gfnConfirm("10114",(yes)=>{

		   if(yes) {
		   
			   let fileNm = dsUpload.getColumn(nRow, this.colInfo.file.nmorg);   
			   let ofileTrans  = pThis[pThis.sObjDialogTransferNm];  //fileObj   			 
			  
			   //upload 수행 후 
			   if(!this.gfnIsNull(dsUpload.getColumn(nRow,"FILE_SEQ"))) {   
			   
			  
			      if (!this.gfnIsNull(ofileTrans)) {
				       nIndex = this.gfnIsNull(ofileTrans) ? ofileTrans.removeFile(fileNm) : -1; 
				   }
					
				   dsUpload.deleteRow(nRow); //dataset 삭제 
		           
				   let fncCallback = callback || "";
				
				   this.gfnFileDeleteTransaction(dsUpload,callback);
				}
		   }
	 });
  
   return nIndex;
};

/**
* @class  FileUpload 전체 삭제 <br>
* @param {dataset} 삭제 할 Dataset
* @return N/A
* @example 
	 var ds = obj.getBindDataset();   //grid binddataset
*    this.gfnFileDeleteAll(ds);  
*/
_pForm.gfnFileDeleteAll = function(dsUpload,callback)
{
  //var pThis = this.gfnGetTopLevelForm(this); 
   const pThis = this;
   const ofileTrans  = pThis[pThis.sObjDialogTransferNm];  //fileObj     
   let findSeq = dsUpload.findRowExprNF("FILE_SEQ == undefined || FILE_SEQ == ''");  
 

    if(dsUpload.getRowCount() == 0
	   || findSeq > -1){
	   this.gfnAlert("10060","","i");  // 데이타가 존재하지 않습니다.
	   return;
    }
	
	 // 정말로 삭제 하시겠습니까?
	 this.gfnConfirm("10114",(yes)=>{

		   if(yes) {		     
		     if (ofileTrans) ofileTrans.clearFileList();	 
			    
				  dsUpload.deleteAll(); //dataset 삭제
				 				
				this.gfnFileDeleteTransaction(dsUpload,callback);
		   }
	 });
	
	
};

/**
* @class  FileUpload 삭제 트랜잭션 <br>
* @param {dataset} 삭제 할 Dataset name
* @return 저장된 파일 리스트
* @example 
	 var ds = obj.getBindDataset();   //grid binddataset
	 var inds = ds.name;
	 this.gfnFileDeleteTransaction(inds);
*/
_pForm.gfnFileDeleteTransaction = function(dsUpload,callback) {
     	
		

		var oparam = { 
		id : "svcDeleteFileList", // transaction을 구분하기 위한 svc id값
  	    url : "file/delete",		 // trabsaction을 요청할 주소
  		inds : "dsDelete="+dsUpload.name+":U",  // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
  		outds :  ""+dsUpload.name +"=output1",
  		argus : {}
  	};
	
    let fncCallback  =callback || "fileTranCallback";
	
	this.gfnTran(oparam, (svcid,code,msg)=>{	
	
	  if(code < 0) return;
	  	 
	  if(this.isValidObject("dsFileUpTemp")){

	     this.dsFileUpTemp.clearData();
		 this.dsFileUpTemp.copyData(dsUpload);
		 
	  }	  

	   if(nexacro._isFunction(fncCallback)) fncCallback.call(this,svcid,code,msg,dsUpload);
	    else if(nexacro._isFunction(this[fncCallback])) this[fncCallback].call(this,svcid,code,msg,dsUpload);		
		

	 //    this.gfnAlert("10077");  // 삭제 되었습니다.

	  //   this.gfnSetHelpVisible(dsUpload);
		// dsUpload.applyChange(); 
	 
	});
}



_pForm.gfnJavascriptUploadFileList = function(fileList, fileUpTransferObj) {
	
	if(this.gfnIsNexacro())
	{
	  this.gfnAlert("webBrowser에서만 실행 가능 합니다.","","w");
	 
	  return;
	}
	
	 
	var CHUNK_SIZE = _pForm.CHUNK_SIZE ;
	var uploadPath = this.gfnGetUploadPath();
	var removeList = [];

	for (var i = 0; i < fileList.length; i++) {
		var vFile = fileList[i];	
		var file = vFile._handle;
        var filesize = file.size  || 0;
	    
		if (file.size > CHUNK_SIZE) {

			removeList.push(vFile.id);
			this.gfnJavascriptUploadFile(vFile, uploadPath, fileUpTransferObj);
		}
	}	
	
	for (var i = 0; i < removeList.length; i++) {
		fileUpTransferObj.removeFile(removeList[i]);
	}
	
   //일반일 경우
	if(fileUpTransferObj.filelist.length > 0){
  //  this.console.log( "#### _pForm.gFileSeq : " +_pForm.gFileSeq);
	  if(!!_pForm.gFileSeq) fileUpTransferObj.setPostData("GFILE_SEQ", _pForm.gFileSeq);
	  
		fileUpTransferObj.upload( "svcUrl::file/upload");
	}
	
}

_pForm.gfnJavascriptUploadFile = function(vFile, uploadPath, fileUpTransferObj) {
	var CHUNK_SIZE = _pForm.CHUNK_SIZE ;
	var file = vFile._handle;
	var totalChunks = Math.ceil(file.size / CHUNK_SIZE);

    for (let i = 0; i < totalChunks; i++) {
        var start = i * CHUNK_SIZE;
        var end = Math.min(file.size, start + CHUNK_SIZE);
        var chunk = file.slice(start, end);  // 조각 생성

        var formData = new FormData();
        formData.append("file", chunk);
        formData.append("chunkIndex", i);
        formData.append("totalChunks", totalChunks);
        formData.append("orgFilename", vFile.filename);
		formData.append("filePath", uploadPath);
		 this.gfnSetImgLoding(true);
		var uploadUrl = nexacro._getServiceLocation("svcUrl::" + "file/upload-chunk", null, null, false, true);
		fetch(uploadUrl, {
                method: "POST",
                body: formData,
				
        }).then((response) => {
			return response.text();
		}).then(str => {
			var strData = nexacro.trimLeft(str);
			var dataType = strData.slice(0, 5).toUpperCase();
			if (dataType.indexOf("<?XML") == 0) {
				dataType = "XML";
			}
			if (dataType.indexOf("SSV") == 0) {
				dataType = "SSV";
			}
			if (dataType.indexOf("{") == 0) {
				dataType = "JSON";
			}
			if (dataType == "XML") {
				strData = nexacro._parseXMLDocument(strData);
			}
			if (nexacro._Deserializer[dataType]) {
				var data = nexacro._Deserializer[dataType](strData);
				var parameter = data[0];
				var dataSetList = data[1];
				if (parameter.ErrorCode == 0) { // chunck 가 다 업로드되었을 때 : 0 반환 , 진행 중일 때 : 1 반환
					fileUpTransferObj.on_load(data, uploadUrl, -1);
				}
			}
			
			
		}).catch((error) => {
			console.log('Error', error);
			
		});
    }
	// this.gfnSetImgLoding(false);
}

_pForm.gfnGetUploadPath = function() {
	return this.gfnUploadDirectory() + "/" + this.gfnGenerateUUID();
}

_pForm.gfnUploadDirectory = function() {
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = String(date.getMonth() + 1).padStart(2, '0'); // 월(0부터 시작하므로 +1)
//     var day = String(date.getDate()).padStart(2, '0');
//     var hours = String(date.getHours()).padStart(2, '0');
//     var minutes = String(date.getMinutes()).padStart(2, '0');
//     var seconds = String(date.getSeconds()).padStart(2, '0');
  
	return this.gfnToday();
}

_pForm.gfnGenerateUUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0; // 0~15 사이의 랜덤 값
        const v = c === 'x' ? r : (r & 0x3 | 0x8); // 'y'는 8~b 중 하나
        return v.toString(16); // 16진수 문자열 반환
    });
}

delete _pForm;

