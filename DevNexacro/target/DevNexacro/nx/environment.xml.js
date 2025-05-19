if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::icnairport");
        this.set_datatyperule("2.0");
        this.set_filesecurelevel("all");
        this.set_networksecurelevel("all");
        this.set_loadingimage("url(\'theme::images/loading.gif\')");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("svcUrl", "JSP", "http://localhost:8180/", "none", null, "", "0", "0");
        nexacro._addService("svcReport", "JSP", "http://", "none", null, "", "0", "0");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
        nexacro._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");
        nexacro._addService("LibCommon", "js", "./_extlib_/LibCommon/", "session", null, "", "0", "0");
        nexacro._addService("xjs", "js", "./xjs/", "dynamic", null, "", "0", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
        nexacro._addService("cmm", "form", "./cmm/", "session", null, "", "0", "0");
        nexacro._addService("editor", "file", "./editor/", "dynamic", null, "", "0", "0");
        nexacro._addService("design", "form", "./design/", "dynamic", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "dynamic", null, "", "0", "0");
        nexacro._addService("test", "form", "./test/", "dynamic", null, "", "0", "0");
        nexacro._addService("view", "form", "./view/", "dynamic", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evRunMode", "S");
        nexacro.setEnvironmentVariable("evQuikView", "Y");
        nexacro.setEnvironmentVariable("evUserId", "");
        nexacro.setEnvironmentVariable("evParams", "");
        nexacro.setEnvironmentVariable("evFormUrl", "");
        nexacro.setEnvironmentVariable("evPopupUrl", "");
        nexacro.setEnvironmentVariable("evMenuCd", "");
        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information

	
    // User Script
    env.registerScript("environment.xml", function() {
    /**
     * @description 통신오류 알림
    */
    this.Environment_onerror = function(obj,e)
    {
    	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!on_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    	//trace("e.statuscode : " + e.statuscode);
    //	trace("e.errormsg : " + e.errormsg);

    	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
    // 	if (e.statuscode == 10401) {
    // 		trace("사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리!!!!!");
    // 		return true;
    // 	}
         let app = nexacro.getApplication();
    	// 스크립트 에러
    	if (e.statuscode == 0) {
    		//alert(e.statuscode + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 404) {
    		trace(`${e.statuscode} Page Not Found ${e.errormsg}`);
    		  app.v.httpError  = true;
    		   alert(`${e.errormsg}`);
    	}
    	else if (e.statuscode == 408) {

    	    trace(`${e.statuscode} Request Timeout ${e.errormsg}`);
    		 app.v.httpError = true;
    		  alert(`${e.errormsg}`);
    	}
    	else if (e.statuscode == 500) {

    	     trace(`${e.statuscode} Internal Server Error ${e.errormsg}`);
    		  app.v.httpError  = true;
    		   alert(`${e.errormsg}`);
    	}
    	else if (e.statuscode == 503) {
    	     trace(`${e.statuscode} The service is unavailable ${e.errormsg}`);
    		 app.v.httpError  = true;
    		  alert(`${e.errormsg}`);
    	}
    	else if (e.statuscode == 12029) {
    	      trace(`${e.statuscode} A connection with the server could not be established ${e.errormsg}`);
    		  app.v.httpError  = true;
    		   alert(`${e.errormsg}`);
    	}else if (e.statuscode == 10499) {
    	      trace(`${e.statuscode} A connection with the server could not be established ${e.errormsg}`);
    		  app.v.httpError  = true;
    		  alert(`${e.errormsg}`);
    	}
    };
    });
					
    env = null;
    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
