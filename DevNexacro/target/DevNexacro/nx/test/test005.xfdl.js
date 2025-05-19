(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test005");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSeacch", this);
            obj._setContents("<ColumnInfo><Column id=\"S\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","240","40","232","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","608","11","239","82",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","151","198","448","151",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSeacch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"S\"/></Band><Band id=\"body\"><Cell text=\"bind:S\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","dsSeacch","S");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test005.xfdl", function() {
        /**
        *
        *@FileName  test005
        *@Creator
        *@CreateDate 2025/05/15
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.addEventHandler("onload",  function(obj,e)
        {

          //폼로드시 공통함수

        	/**
        	 * 부모 창에서 넘어온 아규먼트 받는 처리
        	 */
        	//var p_paramcode = this.paramCode;
           //var p_paramNum = this.paramNum;
        	//var p_paramDataset = this.paramDataset;

        },this);

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

        //popup titlebar close(x) 버튼 클릭 event
        this.cfnTitlebarClose_onclick = function()
        {
           return false;
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
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("test005.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
