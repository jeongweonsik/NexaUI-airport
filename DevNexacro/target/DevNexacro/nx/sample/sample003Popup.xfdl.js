(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample003Popup");
            this.set_titletext("팝업 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1293,827);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">명칭1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">명칭2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnPopup00",null,"90","119","28","21",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("modeless");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup",null,"90","119","28","btnPopup00:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Modal");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"124","119","28","21",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("모든 팝업 닫기");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRes","0","160",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"122","209","28","btnCloseAll:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("모달리스 자식창 함수 호출");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","94","76","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","335","60","112","57",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1293,827,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample003Popup.xfdl", function() {
        /**
        * 샘플 팝업
        *@FileName  sample003Popup
        *@Creator
        *@CreateDate 2025/04/17
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.addEventHandler("onload",function(obj,e)
        {

        },this);

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        /**
        * fnPopupCallback : modaless popup callback
        * @param  : strId		   - [string]popup id
        * @param  : strVal		   - [string]return val
        * @return : N/A
        */
        this.popupCallBack = function(id, reValue)
        {

        	switch(id) {
        	case "popMoDal":  // modal

         /// this.fnCallSearch(reValue);

        		break;
        	case "popModeless":  // modal
        			this.console.log( " reValue : " +reValue);
        		break;
        	}


        };


         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnSetRes = function(txt)
        {

        	if(nexacro._isObject(txt)) txt = JSON.stringify(txt);
        	this.txtRes.set_value("");
        	this.txtRes.set_value(txt);

        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * btnPopup_onclick : modal popup open(기본팝업)
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.btnPopup_onclick = function(obj,e)
        {
        	  //set arguments
        	  var args  = {};
        	      args.id         = "popMoDal";   //필수
        		  args.url        = "sample::sample003PopupP.xfdl"; //필수
        		  args.titletext  = '샘플팝업';   //필수
        		  args.paramCode  = "abcd";
        		  args.paramNum   = "1234";
        		  args.paramDs    = this.dsTest;

        		this.gfnShowModal( args,
        		    (resVar)=>{
        	            trace(" resVar : " + resVar);
                    });
        };

        /**
        * btnPopup00_onclick : modaless popup open
        * (필수) 모달리스는 form의 width,height를 지정해야 가운데 정렬
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A

        */
        this.btnPopup00_onclick = function(obj,e)
        {
            var args  = {};
        	    args.id = "popModeless";   // 필수
        		args.url = "sample::sample003PopupP.xfdl"; // 필수
        		args.titletext = "모달리스 팝업";  // 필수
        	    args.paramCode  = "abcd";
        		args.paramCode  = "abcd";
        		args.paramNum   = "1234";


        		this.gfnOpen( args);
        };



        /*
         *	전체 팝업 닫기
         */
        this.btnClose_onclick = function(obj,e)
        {
        	var arrPopFrame = nexacro.getPopupFrames();
        	//alert(arrPopFrame.length);

        	for (var i=arrPopFrame.length-1; i>=0; i--) {

        	trace(" arrPopFrame[i] : " + arrPopFrame[i]);
        		// html5 일때
        		//var cWindow = arrPopFrame[i]._getWindowHandle();
        		//cWindow.opener='nothing';
        		//cWindow.open('','_parent','');
        		//cWindow.close();

        		// Runtime, html5에서도 모두 작동
        		var rObj = arrPopFrame[i];
        		rObj.destroy();
        		rObj = null;
        	}
        };


        this.fnCallSearch = function()
        {
           alert(" 부모");
        };

        this.sample03Popup_onbeforeclose = function(obj,e)
        {

         //return;
        };

        this.tab00_Tabpage1_btn00_onclick = function(obj,e)
        {
        	var arrPopFrame = nexacro.getPopupFrames();


        	if(arrPopFrame.length > 0)
        	{
        	  let popid = "modelesspopup1";
        	  if(nexacro._isFunction(arrPopFrame[popid].form.fnCall))
        	  {
        	    arrPopFrame[popid].form.fnCall();
        	  }
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnPopup00.addEventHandler("onclick",this.btnPopup00_onclick,this);
            this.btnPopup.addEventHandler("onclick",this.btnPopup_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn00.addEventHandler("onclick",this.btnPopup00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("sample003Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
