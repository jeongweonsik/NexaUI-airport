/**
*  엑셀(import/export) 관련
*  @FileName 	Excel.js
*  @Creator 	#{J}
*  @CreateDate 	2025.04.15
*  @Desction   
*/

/********************************************************************************************
*● gfnExcelExport : excel export 
*● gfnExcelImportAll : excel import(데이터 헤더포함)
*● gfnExcelImport  : excel import( 데이터 헤더제외 )
*********************************************************************************************/

/**
* @class excel export <br>
* @param {Object} objGrid - Grid Object	
* @param {String} [sSheetName]	- sheet name
* @param {String} [sFileName]	- file name
* @param {strign} default supress
"suppress" 설정 시 suppress 된 결과대로 1 개 Cell 만 값을 Export 합니다.
나머지 Row 의 해당 Cell 은 병합되지 않으며 모두 공백으로 처리됩니다.

"nosuppress" 설정 시 suppress 된 결과를 무시하고 각 Cell 에 모두 값을 Export 합니다.

"merge" 설정 시 suppress 된 결과대로 1 개 Cell 만 값을 Export 합니다.
나머지 Row 의 해당 Cell 은 병합되어 처리됩니다.

* @return N/A
* @example
* this.gfnExcelExport(this.grid_export, "SheetName","","",true);
*/
_pForm.gfnExcelExport = function(objGrid,  sSheetName, sFileName,sSuppress,head)
{
    const ishead = this.gfnNvl(head,true);
	
	//var objGrid_excel = objGrid;
    const pSupppress =   	this.gfnNvl(sSuppress,"suppress"); 
	let objGrid_excel;
	
	
	/************************************************************************
	* @description 엑셀 저장용 그리드 생성
	************************************************************************/
	//ishead : true 면 기본 헤더칼라  false면 헤더 없음
	if(ishead)  
	{  
		objGrid_excel = objGrid;
	}  
	else
	{
	    const strContents = objGrid.getCurFormatString(false);
		//var strContents = objGrid.getFormatString();   
		const oGrdExcelExNm = objGrid.name + "_exTemp";
		// 그리드 생성 여부 체크   
		if(!this.isValidObject(oGrdExcelExNm))
		{
			const objGrdExcelEx = new Grid();			  
			//  objGrdExcelEx.init(oGrdExcelExNm,  0,0, 800, 200, null, null);
			objGrdExcelEx.init(oGrdExcelExNm,  0,0, 0, 0, null, null);
			// Add Object to Parent Form  
			this.addChild(oGrdExcelExNm, objGrdExcelEx); 
			objGrdExcelEx.autofittype = "none";
			objGrdExcelEx.autoenter = "select";
			objGrdExcelEx.selecttype = "multirow";
			objGrdExcelEx.binddataset = objGrid.binddataset;	
			// objGrdExcelEx.formats = "<Formats>" + strContents + "</Formats>";
			
			if(objGrdExcelEx.hasOwnProperty("griduserproperty"))  objGrdExcelEx.griduserproperty = objGrid.griduserproperty;
			
			// Add Object to Parent Form  
			objGrdExcelEx.visible = false;
			// Show Object  
			objGrdExcelEx.show(); 
		}
		
		
		const objGrid_excel = this[oGrdExcelExNm];
		objGrid_excel.formats = "<Formats>" + strContents + "</Formats>";
	}
	
	/************************************************************************
	* @description 엑셀 저장용 그리드 생성 End
	************************************************************************/	 
	
	const regExp = /[?*:\/\[\]\.]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	//	sFileName = this.gfnIsNull(sFileName) ? this.gfnGetArgument("menuNm") || this.name+"_"+this.gfnGetDate() : sFileName;
	sFileName = this.gfnIsNull(sFileName) ?  this.gfnGetMenuNm()+"_" + objGrid.name + "_" + this.gfnGetDate('time')  : sFileName;
	//sheetName nullcheck
	sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;
	
	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
	

	//sheetName 30이상일경우 기본시트명
	if( String(sSheetName).length > 30 ){
		sSheetName =  "sheet1";
	}
	
	const svcUrl = "svcUrl::XExportImport.do";
	this.objExport = null
	this.objExport = new ExcelExportObject();
	this.objExport.exporttype = exacro.ExportTypes.EXCEL2007 ;
	this.objExport.objgrid = objGrid_excel;
	this.objExport.exporturl = svcUrl;
	//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord","suppress","allstyle","none","", "both"); 
	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord",pSupppress,"allstyle","none","", "both"); ; 
	this.objExport.exportfilename = sFileName;	
	this.objExport.exportmessageprocess = "%d [ %d / %d ]";
 	this.objExport.exporteventtype = "itemrecord";
 	this.objExport.exportuitype = "exportprogress";	
 	this.objExport.exportmessageprocess = "";
	this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);	
	
	//var result = this.objExport.exportData("","",false,true);
	let result = this.objExport.exportData("","",false,true);
};

/**
* @class excel export on sucess <br>
* @param {Object} obj	
* @param {Event} e		
* @return N/A
* @example
*/
_pForm.gfnExportOnsuccess = function(obj, e)
{	
	
};

/**
* @class  excel export on error <br>
* @param {Object} obj	
* @param {Event} e		
* @return N/A
* @example
*/
_pForm.gfnExportOnerror = function(obj,  e)
{
	let sErrorMsg = obj.name + ":" + e.eventid 
	+"\ne.eventid: " + e.eventid
	+"\ne.fromobject: " + e.fromobject
	+"\ne.fromreferenceobject: " + e.fromreferenceobject
	+"\ne.errorcode: " +  e.errorcode
	+"\ne.errormsg: " + e.errormsg;
	
	this.console.error(sErrorMsg);
	
	this.gfnAlert(e.errormsg,"","e");	
};


/**
* @class  excel import( 데이터 헤더제외 ) <br>
* @param {String} sDataset - dataset	
* @param {String} [sImportId] - import id(callback호출시 필수)	
* @param {String} [sSheet]	- sheet name
* @param {String} [sBody] - body 영역지정	
* @param {String} [sHead] - head 영역지정	
* @param {String} [sCallback] - callback 함수	 
* @param {Object} [objForm] - form object(callback호출시 필수)	
* @return N/A
* @example
예1)
//import callback
this.fnImportCallback(errorCode,importId,outDs)
{
}
this.gfnExcelImport("dsList","idImportExcel","SheetName","A2","!A1:Q1","fnImportCallback",,this);

예2)
this.gfnExcelImport("dsList",(errorCode,outDs)=>{

});

*/
_pForm.gfnExcelImport = function()
{
	const args = Array.from(arguments);
 	
	let sDataset, sSheet, sHead, sBody, callback, sImportId, objForm;
	let outds,outdTemp;
	
	if(args.length < 1) return;
	args.every((value,key) => {	  			
			
			if(value instanceof Function		    
				|| (typeof value == "string" 
				    && value.toLowerCase().indexOf("callback") > -1)){  
				callback = value;
				
				
				if(this.gfnIsNotNull(arguments[Number(key+2)])){		// 현재폼				 
					objForm =  arguments[Number(key+2)];				
				}			 
				
				return false;
			}else{		  	
				
				if(this.gfnIsNotNull(value)){
					
					if(key == 0)  sDataset =`${value}`; // import dataset
					else if(key == 1) sImportId =`${value}`; // import id
					else if(key == 2) sSheet = `${value}`; //sheet name						    				        `					   
					else if(key == 3) sHead = `head=${value};`; //head 명
					else if(key == 4) sBody  =  `${value}`; //body 명	
					
				}// arguments end				  
				return true;
			}		  
		});
	
	var topds = this.gfnGetTopLevelForm(this)[sDataset]; 
	
	if(this.gfnIsNull(sDataset) && 
		!!!this.gfnGetTopLevelForm(this)[sDataset]){
		this.console.error("ERROR!! datas not null");
		return;
	}
	
	if(this.gfnIsNull(sSheet)) sSheet = "";	
    if(this.gfnIsNull(sHead)) sHead = "";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	
	outTemp =  this.gfnGetDataSet(sDataset+"_temp");
	outTemp.copyData(this[sDataset]);
	outTemp.clearData();	 
	
	outds = sHead == "" ? outTemp.name : sDataset;
	
	let objImport;	
	const svcUrl = "svcUrl::XExportImport.do";
	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport",this);				
	objImport.importurl = svcUrl;						
	objImport.importtype = nexacro.ImportTypes.EXCEL97;
	objImport.orgds = this[sDataset];
    objImport.head   = sHead || '';   // 엑셀 헤드 시트 설정 값
	objImport.outds  = outds;
	
	if(!!sImportId) objImport.importid = sImportId;
	
	if (!this.gfnIsNull(callback))
	{
		objImport.callback = callback;		
		objImport.form = objForm;
	}
	
	objImport.addEventHandler("onsuccess", this.gfnImportOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);
	
	let sRange = "[command=getsheetdata;Output=output1;"+sHead+"body=" + sSheet + "!" + sBody +";]";
 	let sOutDatasets  = "[" + outds + "=output1]";
	
	objImport.importData("", sRange, sOutDatasets);						
	objImport = null;	
	
	
};

/**
* @class excel import on success <br>
* @param {Object} obj	
* @param {Event} e		
* @return N/A
* @example
*/
_pForm.gfnImportOnsuccess = function(obj,  e)
{		
	
	let outds = this.objects[obj.outds];	
	let sColumnId;
	let objOrgDs =  obj.orgds;
	let objOutDs =  this[obj.outds];	//excel ouput dataset 
	
	if(this.isNull(obj['head'])){	
		
		//기존 데이터셋의 내용으로 헤더복사
		for (let i=0; i<objOrgDs.getColCount(); i++)
		{
			sColumnId = "Column"+i;  // column => 원본 데이타 컬럼명  update
			
			if (sColumnId != objOrgDs.getColID(i))
			{
				objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
			}
		}
		
		objOrgDs.clearData();
		objOrgDs.copyData(objOutDs);	  
		
	}
	
	if("callback" in obj){   // 
		
		let callback = obj.callback;  	
		//화면의 callback 함수 호출
		if (!this.gfnIsNull(callback)) {
			let sImportId = obj.importid;
			let objForm = obj.form;	   		
			
			if(nexacro._isFunction(callback)) callback.call(this,objOutDs);
			else this[callback].call(this,sImportId,objOutDs,objOrgDs);
		}	
	}  
	
	
};


/**
* @class  excel import on error <br>
* @param {Object} obj	
* @param {Event} e		
* @return N/A
* @example
*/
_pForm.gfnImportAllOnerror = function(obj,  e)
{
	let sErrorMsg = obj.name + ":" + e.eventid 
	+"\ne.eventid: " + e.eventid
	+"\ne.fromobject: " + e.fromobject
	+"\ne.fromreferenceobject: " + e.fromreferenceobject
	+"\ne.errorcode: " +  e.errorcode
	+"\ne.errormsg: " + e.errormsg;
	
	this.console.error(sErrorMsg);
	
	this.gfnAlert(e.errormsg,"","e");  
	
};

delete _pForm;