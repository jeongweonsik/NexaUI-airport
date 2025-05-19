(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_visible("false");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysUserId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysUserId\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","440","120","400","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#fafafc");
            obj.set_cssclass("div_LOGIN_Bg");
            obj.set_formscrollbartype("none none");
            obj.set_boxShadow("3px 3px 10px #cacbd9");
            obj.set_borderRadius("3px");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","1",null,null,"69","1","1",null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("로그인");
            obj.set_font("bold 18px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_cssclass("btn_LOGIN_Login");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserId","60","100","320","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_cssclass("edi_LOGIN_Id");
            obj.set_displaynulltext("아이디를 입력해주세요.");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("txtUserPw","60","146","320","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_cssclass("edi_LOGIN_Password");
            obj.set_displaynulltext("비빌번호를 입력해주세요.");
            obj.set_password("true");
            obj.set_visible("false");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta00","60","30","194","60",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("sta_LOGIN_Title");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLogin.form.edtUserId","value","dsInUser","sysUserId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {
        /**
        *  로그인
        *  @Creator
        *  @CreateDate 	2025/04/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        const reqUserId = nexacro.getEnvironmentVariable("evUserId"); // sso userId


        /*******************************************************************************************************************************
        * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /************************************************************************************
        *******************************************
        * FORM EVENT 영역(onload, onbeforeclose..)
        ********************************************/

        /**
        * @description 화면 오픈
        */
        this.formOnload = function(obj,e)
        {
            this.fnDivLoginResize();
            this.fnOnInit();

        };

        this.fnOnInit = function ()
        {
            //sso
        	if(this.isNull(reqUserId)){
        	  this.visible  = true;
        	  this.divLogin.form.edtUserId.setFocus();
        	}else{
        	  this.visible = false;
        	  this.fnLoginTran(reqUserId);   //transaction
        	}
        };

        /**
        * @description 화면 리사이징
        */
        this.frmLogin_onsize = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();
        };

        /*******************************************************************************************************************************
        * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
        *  transaction login
        * @return
        * @example
        * @memberOf
        */
        this.fnLoginTran = function (id)
        {
        	if(!this.isNull(reqUserId)) id = reqUserId; // sso id

        	//refresh sessin 체크
              if(!!id) app.v.login = true;
        	  else app.v.login = false;  //refresh

        	  this.dsInUser.setColumn(0,'sysUserId',id);

        	   var id      = "svcSearch";
        	   var url     = "cmm/login.do";
        	   var inds    = "inSys1=dsInUser";        // input 사용자 id
        	   var outds   = "gdsUserInfo=outUser"         //  사용자
        	               + " gdsMenu=outMenu"       // 메뉴
        	               + " gdsMessage=outMessage"  // 메시지
        				   + " gdsComCode=outComCode" // 공통코드
        				   + " gdsFavor=outFavor";  // 즐겨찾기

        // 	this.gfnSetFrame("mdi");  // mdi 활성화
        // 	return;
        	   this.gfnTran(id, url, inds,	outds,
        					(code,msg)=>{   // callback

        // 						if(code < 0 ){
        // 						 this.gfnAlert(msg,"","e"); // 로그인 에러 메시지
        // 						 return;
        // 						}

        						// 테스트 용
        					//    app.gdsUserInfo.setColumn(app.gdsUserInfo.addRow(), this.colInfo.user.id, this.divLogin.form.edtUserId.value); // 임시

        						nexacro.setEnvironmentVariable("evUserId",app.gdsUserInfo.getColumn(0,this.colInfo.user.id)); // sso userId

        						if(app.gdsUserInfo.getRowCount() > 0){
        						         this.gfnSetFrame("mdi");
        						}else{
        						     this.gfnAlert("사용자 데이타가 존재하지 않습니다. 관리자에게 문의해 주세요.","","e"); // 로그인 에러 메시지
        						}
        	   });
        //
        };

        /*******************************************************************************************************************************
        * 사용자 Function 영역
        *******************************************************************************************************************************/

        /**
        * @description form size 변경시 divLogin size 변경
        */
        this.fnDivLoginResize = function()
        {
          	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round((this.divLogin.getOffsetWidth()) / 2);
          	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divLogin.getOffsetHeight()) / 2);

        	if(nLeft <= 0){
        		this.divLogin.setOffsetLeft(0);
        	}else{
            	this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        }

        // login 정합성 체크
        this.setLogin = function (id)
        {
        	if(this.visible && !!!id){

        		 this.gfnAlert("아이디는 필수 입니다.",(yes)=>{
        		  if(!this.isNull(reqUserId))  this.divLogin.form.edtUserId.setFocus();
        		});
        		return;
        	}

        	this.fnLoginTran(id); // transaction
        }

        /*******************************************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**
        * @description 로그인 버튼 클릭 이벤트
        */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
            const id = this.divLogin.form.edtUserId.value;
        	this.setLogin(id);
        };

        this.edt_keyup = function(obj,e)
        {
        	if( e.keycode == 13){
        		const id = this.divLogin.form.edtUserId.value;
        		this.setLogin(id);


        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.frmLogin_onsize,this);
            this.addEventHandler("onload",this.formOnload,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.edtUserId.addEventHandler("onkeyup",this.edt_keyup,this);
            this.divLogin.form.txtUserPw.addEventHandler("onkeyup",this.fnKeyup,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
