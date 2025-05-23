//XJS=libApp.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        app = nexacro.getApplication();  //grobal variable context
        env = nexacro.getEnvironment();  //grobal environment

        /************************************************************************
         * service url
         ************************************************************************/
        envSvcUrl  = env.services["svcUrl"];
        svcUrl     = envSvcUrl.url;
        svcReport  = env.services["svcReport"].url;

        webFolder = "nx";
        app.gvHttpError = false;
        prjKey = app.id;
        prjPath = nexacro.getProjectPath();

        app.v = {
                login : false,
        		exit :  false,
        		mode : 'S',
        		httpError :  false
        };

        urlPath = svcUrl; // transaction url
        if(!~prjPath.indexOf("localhost")
            && !~prjPath.indexOf("file:")){

        	if(~prjPath.indexOf("127.0.0.1")) urlPath =  "http://localhost:"+envSvcUrl.url.split(":")[2];
        	else urlPath = window.location.protocol + "//" + window.location.host + "/" ;;
        }

        webPath = svcUrl + webFolder + "/";   // nexacro webApplication folder
         if(~prjPath.indexOf("127.0.0.1")){
          webPath = prjPath ;
        }

        //applicaiton onload
        this.appOnload = function (obj,e)
        {
            // QuikView 여부 설정
        	nexacro.setEnvironmentVariable("evQuikView", "N");

        	app.frame = {
        	   vFrs     : app.mainframe.vfrs,
        	   login    : app.mainframe.vfrs.frmLogin,
        	   top      :  app.mainframe.vfrs.frmTop,
        	   hFrs     : app.mainframe.vfrs.hfrs,
        	   left     :  app.mainframe.vfrs.hfrs.frmLeft,
        	   vFrsWork : app.mainframe.vfrs.hfrs.vfrsWork,
        	   main     : app.mainframe.vfrs.hfrs.vfrsWork.frmMain,  //main form
        	   work     :  app.mainframe.vfrs.hfrs.vfrsWork.frmWork, //work frame
        	   mdi      : app.mainframe.vfrs.frmMdi,   //mdi tab
        	   status   : "login",   // 프레임 상태
        	   isClose  : "",
        	   path : {
        	    login   : "frame::frmLogin.xfdl",
        		top     : "frame::frmTop.xfdl",
        		left    : "frame::frmLeft.xfdl",
        		work    : "frame::frmWork.xfdl",
        		works   : "",
        		mdi     : "frame::frmMdi.xfdl",
        		main    : "frame::frmMain.xfdl",
        		bottom  : "frame::frmBottom.xfdl"
        	   }
        	}

             //로컬(파일)
        	if (~system.navigatorname.indexOf("nexacro"))
        	{
        	    app.v.mode = "S";
        		app.mainframe.titletext ="[LOCAL] - " + app.mainframe.titletext;
        	}
        	// 웹 접속
        	else
        	{
        	    app.mainframe.showtitlebar = false;

        	    if (~urlPath.indexOf("local") || ~urlPath.indexOf("127.0.0.1") > -1  ) //로컬(웹)
        		{
        			app.v.mode = "L";
        			app.mainframe.titletext = "[LOCAL]  - " + app.mainframe.titletext;
        		}
        		else if(~urlPath.indexOf("dev"))  //개발서버
        		{
        			app.v.mode = "D";
        			app.mainframe.titletext = "[DEV]  - " + app.mainframe.titletext;
        		}
        		//운영
        		else
        		{
        		    app.v.mode = "R";
        			this.setTraceMode(); // 개발 로그 삭제
        		}
        	}

        	/*
        	 *	set service url
        	 */
        	svcUrl = urlPath; // service URL 설정

        	// 접속경로 확인 및 설정
        	trace("===== ## 프로젝트경로 : "  + webPath);
        	trace("===== ## 서비스경로 : "   + urlPath);
        	trace("===== ## 런처모드  : "   + app.v.mode);

        	app.frame.login.formurl = app.frame.path.login;
        	nexacro.setEnvironmentVariable("evRunMode",app.v.mode);
        };

        /**
        * @description trace 재정의하여 trace로그 생성 방지
        */
        this.setTraceMode = function(bTrace)
        {
            trace =  trace;
           if(!~system.navigatorname.indexOf('nexacro')){
        	    console  = window.console || {};
        	    console.log   = () => {};
        	    console.error = () => {};
        	    console.warn  =  () => {};
                trace = () => {};
            }
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
