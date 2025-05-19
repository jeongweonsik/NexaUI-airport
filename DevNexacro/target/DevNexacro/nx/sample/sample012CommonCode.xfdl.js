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
            obj._setContents("<ColumnInfo><Column id=\"codeCd\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row></Rows>");
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

            obj = new Button("btnComCodeFilter","266","57","139","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공통코드 filter");
            this.addChild(obj.name, obj);

            obj = new Combo("cboComCode","266","93","174","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codeCd");
            obj.set_datacolumn("codeNm");
            obj.set_innerdataset("dsOutComCode");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","266","130","419","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsOutComCode");
            obj.set_codecolumn("codeCd");
            obj.set_datacolumn("codeNm");
            obj.set_direction("vertical");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","107","96","73","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Combo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","107","148","146","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Radio");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","104","200","146","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Grid");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","105","259","660","175",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsOut");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"분류\"/></Band><Band id=\"body\"><Cell displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsOutComCode\" combocodecol=\"codeCd\" combodatacol=\"codeNm\" combotype=\"dropdown\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"210","64","39","256",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
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
        this.registerScript("sample012CommonCode.xfdl", function() {
        /**
        *  샘플 공토코드
        *@FileName  sample012CommonCode
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
           */
           this.gfnGetComCodeFilter({highCd : "00001"}, this.dsOutComCode);  // 전체

              /**@param {string}  선택 값 입력 옵션   (생락갸능) 값없음
        	      @param {string}  codecolumn 명
        		    @param {string}  datacolumn 명
        	       '': 공백    's' : 선택=  'a' : 전체=*/
          this.gfnInSelectText(this.dsOutComCode, this.cboComCode.codecolumn,this.cboComCode.datacolumn,"a"); // 전체 값 insert
          this.cboComCode.index = 0;


        };

        this.cboComCode_onitemchanged = function(obj,e)
        {

        };

        // 추가
        this.btnAdd_onclick = function(obj,e)
        {

        	this.dsOut.setColumn(this.dsOut.addRow(),"Column0","")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_onload,this);
            this.btnComCodeFilter.addEventHandler("onclick",this.Div00_btnComCodeFilter_onclick,this);
            this.cboComCode.addEventHandler("onitemchanged",this.cboComCode_onitemchanged,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("sample012CommonCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
