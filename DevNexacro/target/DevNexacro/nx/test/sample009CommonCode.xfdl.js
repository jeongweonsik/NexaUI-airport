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
            this.set_titletext("공통코드 바인딩 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutComCode", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00_00","0","472",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","0",null,null,"20","0","-30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Guide");
            obj.set_text("h20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnComCodeFilter","110","93","139","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공통코드 filter");
            this.addChild(obj.name, obj);

            obj = new Combo("cboComCode","266","93","174","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsOutComCode");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoComCode","280","142","390","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsOutComCode");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("공통코드바인딩 (sample011)");
            obj.set_cssclass("sta_GA_Header");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample009CommonCode.xfdl", function() {
        /**
        * 공통코드 샘플
        *@FileName  sample011CommonCode
        *@Creator
        *@CreateDate 2024/10/14
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */


        /************************************************************************************************
        * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
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
        this.frm_onload = function(obj,e)
        {


        };



        //공통코드 필터
        this.Div00_btnComCodeFilter_onclick = function(obj,e)
        {

          /*
           *@param {object} 필터할 코드 값 : 명
           *@param {component} 필터할 데이타셋
           *@param {string}  선택 값 입력 옵션   (생락갸능) 값없음
        	       '': 공백    's' : =선택=  'a' : =전체=
           */
          this.gfnGetComCodeFilter({HIGH_CD : "00001"}, this.dsOutComCode,'a');  // 전체
          this.cboComCode.set_index(0);

          // radio 설정
          this.rdoComCode.set_index(0);
          this.resetScroll();   // radio fitcontents  사용시 처리
           // radio end
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_onload,this);
            this.btnComCodeFilter.addEventHandler("onclick",this.Div00_btnComCodeFilter_onclick,this);
        };
        this.loadIncludeScript("sample009CommonCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
