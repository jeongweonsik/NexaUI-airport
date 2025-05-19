(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_datefield_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new DateField("DateField00","50.00","50","210","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_inputtype("time");
            obj.set_format("h:mm:ss aa");
            obj.set_labelfloatingfixed("false");
            obj.set_popuptype("default");
            obj.set_usehelpertext("true");
            obj.set_labelposition("inside");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","296","50","274","260",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","43","85","213","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","48","147","207","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","47","211","210","54",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","49","280","205","53",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","52","352","209","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button04");
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
        this.registerScript("test002.xfdl", function() {
        /**
        * 샘플화면
        *@FileName  test002
        *@Creator
        *@CreateDate 2025/04/29
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

        this.Button00_onclick = function(obj,e)
        {
            trace(" location.origin : " + location.origin);
        	// let svcUrl =;

        	   if(system.navigatorname != "nexacro"){

        	   }


             trace(" urlPath : " + urlPath + "<> webPath : " +webPath);
        	//alert(" ## getPrjUrl == > " + this.getPrjUrl() + "<> webPath : " +webPath);
            // this.console.dev("ddddddddddd");
        //	this.console.warn(" getSvcUrl : " + this.getSvcUrl());
        };

        this.Button01_onclick = function(obj,e)
        {
        	let oparam = {id:"svcSearch",callback :"fnCallback"};
        // 	oparam = oparam.map((key,value)=>{
        // 	   return
        //
        // 	});


        // var res2 = Object.formEntries(Object.entries(oparam).map(([])=>[
        //   ])
        // );
        //
        //  var resObj = Object.fromEntries(
        //                 Object.entries(oparam).map(([key, value]) => [
        // 	    key.toUpperCase(),
        // 		value+ "aa"
        // //	trace(" key : " +key + "<> value : "+ value);
        //    //   key.toUpperCase(),
        //    //   this.gfnRecursiveKeyUpperCase(value)
        //     ])
        //   );

         //  trace(" resObj : " + JSON.stringify(resObj));
        //
        // 	 let oparam2 = Object.assign({TEST:"Test1"},this.gfnRecursiveKeyUpperCase(oparam));
        // 	delete oparam2.ID;

        	//trace( "oparam2 : "+ JSON.stringify(oparam2));

        };

        /**
         * json key 대문자 변경 return
         * @param {object}  json s
         * @return
         * @example
         * @memberOf
         */
        this.gfnRecursiveKeyUpperCase = function(obj) {
          if (typeof obj !== 'object' || obj === null) return obj;

          if (Array.isArray(obj)) {
            return obj.map(item => this.gfnRecursiveKeyUpperCase(item));
          }

          return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
              key.toUpperCase(),
              this.gfnRecursiveKeyUpperCase(value)
            ])
          );
        }

        this.Button02_onclick = function(obj,e)
        {
        	var smsg = this.gfnGetMessage("5509",[""]);
        	trace(" smsmg : " + smsg);
        };


        this.Button03_onclick = function(obj,e)
        {
        	var oparams = {
        		breadcrumb : "인사>인사정보>인사정보",
        		favPgmAt : "N",
        		menuId : "84",
        		menuTyCod : "aa",
        		pathname : "/emp/psmstinforeq/emppsmstinforeq100/view",
        		pgmId : "1346",
        		relBizCod :"PS",
        		uprMenuId : "50",
        	};

           var res =  Object.entries(oparams).map(([key,value])=>`${key}=${value}`);

           trace(" res : " +res);

        };


        this.Button04_onclick = function(obj,e)
        {
        	const data = { name: "John", items: [{ id: 1 }] };
        	const objdata = this.jsonKeyUpperCase(data);
        //const result = this.gfnTransformKeys(data, key => key.toUpperCase());

        trace(JSON.stringify(objdata));
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("test002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
