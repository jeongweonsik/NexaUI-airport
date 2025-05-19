(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFilterSetup");
            this.set_titletext("데이터필터설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","20","20",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFilter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial,checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"데이터 선택\" expandchar=\"100000177\"/></Band><Band id=\"body\"><Cell text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"76","30","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Secondary");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelect",null,null,"76","30","btnCancel:6","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_POP_Primary");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFilterSetup.xfdl", function() {
        /**
        * 데이터 필터 팝업
        *@FileName  cmmFilterSetup
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
        this.sColumnName;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {


        	//초기값 설정
        	var objBindDs = this.parent.pvBindDs;
        	var objFilterDs = this.parent.pvFilterDs;
        	this.sColumnName = this.parent.pvColumnName;

        	this.dsFilter.copyData(objFilterDs);

        	this.grdList.setCellProperty("Head", 0, "text", "1");	//처음 전체선택
        	this.grdList.setCellProperty("Body", 1, "text", "bind:"+this.sColumnName);
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
        * @description 필터설정
        */
        this.fnSetColumn = function()
        {
        	//체크값 확인
        	this.dsFilter.filter("selectCheck==1");
        	this.dsCopy.copyData(this.dsFilter, true);

        	var objFilter = this.dsCopy;
        	var sFilterStr="";
        	for (var i=0; i<objFilter.rowcount; i++)
        	{
        		if (objFilter.getColumn(i, "selectCheck") == "1")
        		{
        			sFilterStr += this.sColumnName+" == '"+ objFilter.getColumn(i, this.sColumnName) + "' ||";
        		}
        	}
        	sFilterStr = sFilterStr.substr(0, sFilterStr.length-3);
        	//리턴값설정
        	var rtnArr = {pvBindDs:this.parent.pvBindDs, pvFilterDs:this.parent.pvFilterDs, pvFilterStr:sFilterStr};
        	//array, object인자값 전달을 위해 부모창에 함수 호출
        	this.opener.gfnPopupClose(rtnArr, this);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description  확인버튼클릭
        */
        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSetColumn();
        };

        /**
        * @description  취소버튼클릭
        */
        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSelect.addEventHandler("onclick",this.btnSelect_onclick,this);
        };
        this.loadIncludeScript("cmmFilterSetup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
