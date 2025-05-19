(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","230","290","362","274",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/loading.gif\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","485","76",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("테스트03");
            obj.set_font("normal 50pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testForm03.xfdl", function() {
        /**
        *
        *@FileName testForm03
        *@Creator
        *@CreateDate 2025/04/28
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
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.addEventHandler("onload",  function(obj,e)
        {

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("testForm03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
