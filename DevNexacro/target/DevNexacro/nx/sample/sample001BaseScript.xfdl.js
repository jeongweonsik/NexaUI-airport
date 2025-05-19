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
                this._setFormPosition(1294,735);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","98","90","432","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("codesnippet : /bases script");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("sample001BaseScript.xfdl", function() {
        /**
        * sample001BaseScript
        *@FileName sample001BaseScript
        *@Creator
        *@CreateDate 2025/05/16
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
        this.cfnMove_onactive = function(param)
        {
        	//trace("fnMoveOnActie formName ===>" + this.name + "<> parg ====> " + param);
        };

        /**
        * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
        * @return {boolean} true(화면 닫지 않음) / false(화면 닫음)
        */
        this.cfn_onclose = function()
        {
        	return false;
        };

        /**
         * //paging 버튼 // next prev 클릭 이벤트 후처리
         * @param {number} 누른 페이지
          * @param {number} 시작데이터rownum계산
         * @return
         * @example
         * @memberOf
         */
        this.cfnPaging_onclick = function(nPage,nRecordOffset)
        {
        	trace(" ## nPage : " +nPage + "<> nRecordOffset : " + nRecordOffset);

        }

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
        this.loadIncludeScript("sample001BaseScript.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
