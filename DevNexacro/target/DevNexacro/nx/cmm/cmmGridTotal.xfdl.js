(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridTotal");
            this.set_titletext("데이터총건수");
            if (Form == this.constructor)
            {
                this._setFormPosition(100,44);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTotal","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>총건수 : </b><fc v=\'#4D769A\'><b v=\'true\'>0</fc></b>");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px 5px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",100,44,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGridTotal.xfdl", function() {
        /**
        * 그리드 총계 공통
        *@FileName  cmmGridTotal
        *@Creator
        *@CreateDate 2025/04/24
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

        this.bindds = "";
        this.oCodeCol = "";
        this.oNameCol = "";
        this.objTarget;
        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.formOnload = function(obj,e)
        {
            const oForm = this.gfnGetTopLevelForm(this);
        	this.objTarget = this.parent;	 // div
        	this.bindds = this.objTarget.ubindds;  // dataset binding

        	if(!this.gfnIsNull(this.bindds ))   //초기 bindds
        	{
        		const bindds = this.bindds.split(",");
        		const ds = oForm[bindds[0]];

        		if (!this.gfnIsNull(ds)){

        			ds.addEventHandler("onrowsetchanged", this.bindds_onrowsetchanged, this);
        			ds.addEventHandler("onload", this.bindds_onload, this);
        		}
        	}
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /*
         *	값 셋팅
         *@param {dataset} 처리할 dataset
         */

        this.setTotValue = function (dsObj)
        {
            if(this.gfnIsNull(dsObj)) return;

        	const stTotTxt = "<b v='true'>총건수 : </b><fc v='#4D769A'><b v='true'>"+this.gfnAppendComma(dsObj.getRowCount())+"</fc></b>";

        	this.staTotal.set_text(stTotTxt);
        	this.resetScroll();
        };

        this.getTotValue = function ()
        {
        	return 	this.staTotal.text;
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.bindds_onrowsetchanged = function (obj,e)
        {
        	this.setTotValue(obj);
        }

        this.bindds_onload = function (obj,e)
        {
        	this.setTotValue(obj);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
        };
        this.loadIncludeScript("cmmGridTotal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
