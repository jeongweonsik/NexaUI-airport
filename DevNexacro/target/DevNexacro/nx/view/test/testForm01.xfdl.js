(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testForm");
            this.set_titletext("테스트폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1294,735);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"59","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","314","14","85","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("상위코드명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txt00","399","14","200","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("txt00_00","685","14","200","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","600","14","85","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("하위코드명");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"73","26","50","16",null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SearchSearch");
            obj.set_fittocontents("none");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","909","10","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button01","1027","22","74","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("Button01");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"79","72","26","152",null,"72",null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_AddRowTxt");
            obj.set_text("행추가");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"79","72","26","76",null,"72",null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_DeleteRowTxt");
            obj.set_text("행삭제");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"79","72","26","0",null,"72",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save2Txt");
            obj.set_fittocontents("width");
            obj.getSetter("uauth").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","109",null,null,"0","50.73%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"140\"/><Column size=\"460\"/><Column size=\"80\"/><Column size=\"620\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"상위코드\"/><Cell col=\"2\" text=\"상위코드명\" cssclass=\"Essential\"/><Cell col=\"3\" text=\"사용여부\" cssclass=\"cellEditable\"/><Cell col=\"4\" text=\"비고\" cssclass=\"cellEditable\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","79","138","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("상위코드");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","0","454",null,null,"0","35",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"620\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"하위코드\" cssclass=\"Essential\"/><Cell col=\"2\" text=\"하위코드명\" cssclass=\"Essential\"/><Cell col=\"3\" cssclass=\"cellEditable\" text=\"코드구분\"/><Cell col=\"4\" cssclass=\"cellEditable\" text=\"정렬순서\"/><Cell col=\"5\" text=\"사용여부\" cssclass=\"cellEditable\"/><Cell col=\"6\" text=\"비고\" cssclass=\"cellEditable\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd00",null,null,"72","26","152","grd00_00:4","72",null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_AddRowTxt");
            obj.set_text("행추가");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete00",null,null,"72","25","76","grd00_00:4","72",null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_DeleteRowTxt");
            obj.set_text("행삭제");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave00",null,null,"72","25","0","grd00_00:4","72",null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save2Txt");
            obj.set_fittocontents("width");
            obj.getSetter("uauth").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","0",null,"138","25",null,"grd00_00:4",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("하위코드");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","518","69","141","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("gfnSetProfileOpenMenu");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","692","68","75","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","775","69","75","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","374","71","106","33",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","609","41","95","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button05");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","347","46","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","890","64","76","41",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","315","76",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("테스트01");
            obj.set_font("normal 50pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1294,735,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testForm01.xfdl", function() {
        /**
        *
        *@FileName testForm01
        *@Creator
        *@CreateDate 2025/04/18
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
        * include 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.addEventHandler("onload",function(obj,e)
        {
        	trace(" form onload==>");
        	nexacro.setEnvironmentVariable("evUserId","admin");
        },this);


        /*
        *@description 화면 이동 후 넘어온 값 처리
        *@param {string}{object}{array} 넘어온 아규먼트 처리
        */
        this.cfnMoveOnActie = function(param)
        {
        	//trace("fnMoveOnActie formName ===>" + this.name + "<> parg ====> " + param);
        };

        /**
        * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
        * @return {boolean} true(화면 닫지 않음) / false(화면 닫음)
        */
        this.cfnClose = function()
        {
        	return false;
        };

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnCallback = function(id,code,msg)
        {
        	// 에러 시 화면 처리 내역
        	if(code < 0) return;


        	switch(id) {
        	case "":
        		break;

        	default:
        	}

        };

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.Button00_onclick = function(obj,e)
        {

        	this.setProfile("10001");

        };


        /**
        * 열린메뉴 localStorate load
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.gfnGetPrivateOpenMenu = function()
        {

           	const userId = nexacro.getEnvironmentVariable("evUserId");
            if(this.isNull(userId)){
        		trace("[DEV-ERR] : not null userid"); return;
        	}

        	let openMenu = nexacro.getPrivateProfile("userData");

           if(this.isNull(openMenu)) return  "" ;
        	openMenu = JSON.parse(openMenu);
        	if(!nexacro._isArray(openMenu)){
        		trace("[DEV-ERR] : type error users");
        		return;
        	}

        	//trace(" typeof users : " + nexacro._isArray(users)  );

             trace("gfnGetPrivateOpenMenu  users : " + JSON.stringify(users));
        	const obj = openMenu.find(item => item.id === userId);
        	if(!!obj){

        	   users = openMenu;
               data = obj;

            // trace(" JSON users2 :  " + nexacro._isArray(openMenu));
        	//  trace(" JSON users :  " + JSON.stringify(openMenu));
        	//  trace(" ## data : " +JSON.stringify(data));
        		return obj.menuId;
        	}

        	//his.setProfile()
        //	trace(" openMenu : " + JSON.stringify(openMenu));

         	return "";
        };

        /**
        * 열린메뉴 localStorate 추가
        * @param {string}
        * @return
        * @example
        * @memberOf
        */
        this.setProfile =  function (menuId)
        {
            const userId = nexacro.getEnvironmentVariable("evUserId");
        	let openMenu = nexacro.getPrivateProfile("userdata");

        	if(this.isNull(userId)){
        		trace("[DEV-ERR] : not null userid");
        		return;
        	}

           // openMenu = JSON.parse(openMenu);
        	//trace(" openMenu : " +openMenu);


        	const key = Object.keys(data).find(k => data[k] === userId);
        	if(key != "id"){
                data = {id:userId,menuId:[menuId]};
        	}


            const obj = users.find(item => item.id === userId);

        	if(!!obj){

        		const findIdx = obj.menuId.findIndex((element, index, arr) => element === menuId);

        		if(~findIdx)  return;

        		obj.menuId.push(menuId);

        	}else{

        		users.push(data);
        	}

           trace(" users: " + JSON.stringify(users));

        	nexacro.setPrivateProfile("userdata",JSON.stringify(users));

        //	 trace(" ## openMenu : " + nexacro.getPrivateProfile("openMenu"));


        };





        /**
         * 열린메뉴(local store)ID 삭제
         * @param {string}
         * @return
         * @example
         this.delProfile(menuId);
         * @memberOf
         */
        this.delProfile =  function (menuId)
        {
            const userId = nexacro.getEnvironmentVariable("evUserId");
        	if(this.isNull(userId)){
        		trace("[DEV-ERR] : not null userid"); return;
        	}

            let openMenu = nexacro.getPrivateProfile("userdata");

         	if(this.isNull(openMenu)) return;

         	openMenu = JSON.parse(openMenu);
        		  trace("## users 1 :::>> " + JSON.stringify(users));
        // 	//trace(" opeMenu : " + JSON.stringify(openMenu));
         	const userOpenMenu = openMenu.find(item => item.id === userId);
            const userData = users.find(item => item.id === userId);

        	if(!!userOpenMenu){

        		userOpenMenu.menuId = userOpenMenu.menuId.filter(e => e !== menuId);
        		userData.menuId =  userData.menuId.filter(e => e !== menuId);

        	}

        trace("## users2  :::>> " + JSON.stringify(users));

              nexacro.setPrivateProfile("userdata",JSON.stringify(users));
        }

        /**
         * 열린메뉴(local store) ID 초기화
         * @param {string}
         * @return
         * @example
         * @memberOf
         */
        this.gfnInitProfileOpenMenu =  function ()
        {
          nexacro.removePrivateProfile("openMenu");
          users = [];
          data = {id:"", menuId:[]};

          nexacro.setPrivateProfile("openMenu","");

         trace(" openMenu == > "+  nexacro.getPrivateProfile("openMenu"));
        }

        //
        // /**
        //  * 열린메뉴 local storage 초기화
        //  * @param {string}
        //  * @return
        //  * @example
        //  * @memberOf
        //  */
        // this.gfnInitProfileOpenMenu = function ()
        // {
        // 	nexacro.removePrivateProfile( "openMenu" )
        // };

        this.Button01_onclick = function(obj,e)
        {
        	this.setProfile("20001");
        };



        // const arr = [
        //   { id: "admin", menuId: "m10001" },
        //   { id: "guest", menuId: "m10002" }
        // ];
        //
        // const obj = arr.find(item => item.id === "guest");
        // console.log(obj.menuId); // 'm10002'
        this.Button02_onclick = function(obj,e)
        {
        	let userMenu = this.getPrivate("guest");
        	trace(" userMenu : " + userMenu);
        };


        this.Button03_onclick = function(obj,e)
        {
        	this.delProfile("10001")
        };

        this.Button04_onclick = function(obj,e)
        {
        	let arrMenu = this.gfnGetPrivateOpenMenu();
        	trace(" arrMenu : " + arrMenu);
        	/*nexacro.removePrivateProfile( "openMenu" );*/
        };

        this.Button05_onclick = function(obj,e)
        {
        	let arr = ['aaa', 'bbb', 'ccc', 'ddd'];

        	// 원소 'ccc' 삭제
        	let filtered = arr.filter((element) => element !== 'ccc');
        	trace(" filtered : " + filtered);

        };

        this.div00_Button00_onclick = function(obj,e)
        {
        	this.setProfile("10002");
        };

        this.Button06_onclick = function(obj,e)
        {
        	this.gfnInitProfileOpenMenu();
        };

        this.div00_Button01_onclick = function(obj,e)
        {
        		var oForm = this.gfnGetTopLevelForm(this);
        		trace(" oFrom : " + oForm.name);
        };

        this.Button02_00_onclick = function(obj,e)
        {
         //   this.ownerFrame["code1"] = "aaaaaaaaa";
        	//trace(" ## this.ownerFrame: " +this.getOwnerFrame().arguments);
        //	this.ownerFrame.arguments["cd"] = "10001";
        	//this.ownerFrame.arguments["name"] = "메뉴1";

        //	trace(" this.ownerFrame : " + this.ownerFrame);
        //
        ///	this.ownerFrame.forEach((key,value)=>{
        	  //   trace(" key : " +key + "<> value : " +value);
        	//});

        //     this.ownerFrame.arguments = arguments;
        // 	objNewWin.arguments[this.colInfo.menu.params]   = objParam;
        // 	objNewWin.arguments[this.colInfo.menu.winid] 	= sWinId;
        // 	objNewWin.arguments[this.colInfo.menu.cd] 		= sMenuId;
        // 	objNewWin.arguments[this.colInfo.menu.nm] 		= sMenuNm;
        // 	objNewWin.arguments[this.colInfo.menu.url] 	= sMenuUrl;
        // 	objNewWin.arguments[this.colInfo.menu.navi]     = sMenuNavi;
        // 	objNewWin.arguments[this.colInfo.menu.params]   = objParam;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.Button00.addEventHandler("onclick",this.div00_Button00_onclick,this);
            this.div00.form.Button01.addEventHandler("onclick",this.div00_Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
        };
        this.loadIncludeScript("testForm01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
