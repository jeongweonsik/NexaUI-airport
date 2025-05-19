(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmReport");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webReport","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("ureadonly").set("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,800,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmReport.xfdl", function() {
        /**
        * 리포트 공통 팝업
        *@FileName  cmmReport
        *@Creator
        *@CreateDate 2025/04/25
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */
        /************************************************************************
        * variable
        ************************************************************************/
        this.web = this.webReport;   // set component
        this.urlReport = "";

        /**
        * form onload
        * @param {obj}{e}
        * @return
        * @example
        * @memberOf
        */
        this.cmmReport_onload = function(obj,e)
        {
        // 	if(system.navigatorname == "nexacro"){
        // 		alert("webBrowser 에서만 실행 가능 합니다.");
        // 		return;
        //     }
        //

        	//  this.urlReport =  ;
            if(!!!this.fileNm || !!!this.arrDs){
        	    this.console.error(`param[fileNm] :${this.fileNm} param[arrDs]:${this.arrDs}` );
        		alert(" 하나의 아규먼트 필수값이 존재하지 않습니다.");
        		return;
        	}
        	const userId = nexacro.getEnvironmentVariable("evUserId");
            const surl = `${this.urlReport}?/resno?emplList[0]=${userId}`;
        	this.web.set_url("");
            this.web.set_url(surl);
        };

        this.webReport_onloadcompleted = function(obj,e)
        {
        	 obj.docAll = obj.getProperty("document").getProperty("all");
        //	this.callReport( this.fileNm,this.arrDs,this.argus);
        };


        /**
        *
        * @param {string}  fileNm
        * @param {array}  arrDs

           // //     let oparam =  {"xpath1" : "rexdataset/rexrow",
        // // 	               "xpath2": "rexdataset/rexrow1"
        // // 	              };
        * @param {string}  crfParams
        * @return
        * @example
        var fileNm = "xml샘플";
        var arrDs  =  [this.dsList,this.dsList2];
        var argus  = "";
        this.callReport(fileNm,arrDs,argus);
        * @memberOf
        */
        this.callReport = function (fileNm,arrDs,param)
        {

        // 	let doc = this.web.docAll;
        //
        // 	if(!!!doc) return;
        // 	if(!!!fileNm) {
        // 		trace("fileNm 은 필수 입니다 ","e");
        // 		return;
        // 	}
        //
        // 	if(!nexacro._isArray(arrDs) || arrDs.length == 0)
        // 	{
        // 		trace("argumnetns 오류!! 생성할 한개 이상의 데이타셋이 필요합니다. ","e");
        // 	  	return;
        // 	}
        //
        // 	this.setValue(fileNm,arrDs,param);
        // 	this.web.callMethod("callReport");  //call function webPage
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmReport_onload,this);
            this.webReport.addEventHandler("onloadcompleted",this.webReport_onloadcompleted,this);
        };
        this.loadIncludeScript("cmmReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
