(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmColumnHide");
            this.set_titletext("그리드컬럼숨김");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"columnIndex\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"orgSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","20","20",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFilter");
            obj.set_autofittype("col");
            obj.getSetter("ugrid").set("checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"225\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"Select\" expandchar=\"100000166\"/></Band><Band id=\"body\"><Cell text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","323","10","339","344",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"76","30","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Secondary");
            obj.getSetter("uword").set("100000165");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK",null,null,"76","30","btnCancel:6","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.set_cssclass("btn_POP_Primary");
            obj.set_fittocontents("width");
            obj.getSetter("uword").set("100000221");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmColumnHide.xfdl", function() {
        /**
        * 그리드 편의 기능 (컬럼 숨김) 공통 폼
        *@FileName  cmmColumnHide
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
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvTargetGrid; 	  //대상그리드 OBJECT
        this.fvTargetDataset; //대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {


        // 	var sTitle = this.getOwnerFrame().paramTitle;
        // 	this.set_titletext(sTitle);

        	//초기값 설정
        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;
        	this.fvTargetDataset = this.fvTargetGrid.getBindDataset();
        	this.fnGetHeadText();

        	//compare grid setting
        	this.fnSetGrd();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * CALLBACK 콜백 처리부분
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * @description 비교그리드 세팅
        */
        this.fnSetGrd = function()
        {
        	this.grd00.set_enableredraw(false);
        	this.grd00.set_formats(this.fvTargetGrid.orgformat2);
        	this.grd00.set_enableredraw(true);
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {

        	var nTarget =0;
        	var arr = this.fvTargetGrid.arrprop;
        	for(var n=0; n< arr.length; n++){
        		var tmp = this.fvTargetGrid.arrprop[n];
        		//2020.03.05 checkbox_status 추가
        		if( (tmp == "checkbox" || tmp == "checkbox_status")|| tmp == "status" || tmp == "no" ){
        			nTarget += 1;
        		}
        	}

        	this.grdList.set_enableredraw(false);

        	for( var i=0; i<this.fvTargetGrid.getFormatColCount(); i++)
        	{
        		var columnText = "";//i + "번째 컬럼 ";

        		for (var j=0, len=this.fvTargetGrid.getCellCount("head"); j<len; j++) {
        			var maxHeadRow = 0;
        			var row = this.fvTargetGrid.getCellProperty("head", j, "row");
        			if (maxHeadRow < row) {
        				maxHeadRow = row;
        			}
        			var nRow = parseInt(this.fvTargetGrid.getCellProperty("head", j, "row"));
        			var nCol = parseInt(this.fvTargetGrid.getCellProperty("head",j, "col"));
        			var headText = this.fvTargetGrid.getCellProperty("head", j, "text");

        			if( nRow == maxHeadRow && nCol == i ) columnText += "[" + headText + "]";
        		}

        		var nchk = 1;
        		var columnIndex = i;

        		if( this.fvTargetGrid.getRealColSize(columnIndex) == 0 ) nchk = 0;


        		if(i <nTarget) continue;

        		//if( columnText == "[순번]" || columnText == "[상태]"  || columnText == "[NO]"|| columnText == "[ICON]" || columnText == "[]") continue;
        		//if( columnText == "[0]" && this.fvTargetGrid.getCellProperty("Body", i, "text") == "bind:check" ) continue;

        		var nRow = this.dsFilter.addRow();
        		this.dsFilter.setColumn(nRow, "columnText",  columnText);
        		this.dsFilter.setColumn(nRow, "CHk",  		 nchk);
        		this.dsFilter.setColumn(nRow, "columnIndex", columnIndex);
        	}
        	this.grdList.set_enableredraw(true);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnOK_onclick = function(obj,e)
        {
        	//check validation
        	var nRowCnt = this.dsFilter.getRowCount();
        	var checkcount = 0 ;
        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk    = this.dsFilter.getColumn(i, "CHK");
        		if(nChk == 1){
        			checkcount++;
        		}
        	}
        	if(checkcount == 0){
        		var sNodataTxt = nexacro.getEnvironmentVariable("evLanguage") == "ko" ? "최소 한컬럼은 선택해야합니다." : "At least one column must be selected." ;	// 현재 언어
        		this.gfnAlert(sNodataTxt);
        		return;
        	}


        	var nTarget =0;
        	var arr = this.fvTargetGrid.arrprop;
        	for(var n=0; n< arr.length; n++){
        		var tmp = this.fvTargetGrid.arrprop[n];
        		//2020.03.05 checkbox_status 추가
        		if( (tmp == "checkbox" || tmp == "checkbox_status")|| tmp == "status" || tmp == "no" ){
        			nTarget += 1;
        		}
        	}

        	this.fvTargetGrid.set_enableevent(false);
        	this.fvTargetGrid.set_enableredraw(false);
        	var nRowCnt = this.dsFilter.getRowCount();

        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk    = this.dsFilter.getColumn(i, "CHK");

        		var colidx  = nexacro.toNumber(this.dsFilter.getColumn(i, "columnIndex"));
        		var nSize= 0;
        		if(nChk == 1){
        			var orgCol = colidx - nTarget;

        			nSize = this.grd00.getFormatColSize(orgCol);
        		}

        		var bSucc;
        		bSucc = this.fvTargetGrid.setFormatColProperty(colidx, "size", nSize );
        	}

        	var vchangeformat = this.fvTargetGrid.getCurFormatString(false);
        	this.fvTargetGrid.set_formats(vchangeformat);

        	this.fvTargetGrid.set_enableredraw(true);
        	this.fvTargetGrid.set_enableevent(true);

        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("cmmColumnHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
