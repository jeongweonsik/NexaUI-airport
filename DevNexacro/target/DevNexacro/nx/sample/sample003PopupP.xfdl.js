(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample0031PopupP");
            this.set_titletext("팝업대상");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">aaa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">bbb</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">222</Col><Col id=\"Column2\">333</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00",null,"41","100","28","280",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문자열 반환");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"259","135","28","250",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Array 반환(문자열)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"259","218","28","607",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Array 반환(문자열 && 데이타셋)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","74","502","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","521","74",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/></Band><Band id=\"body\"><Cell disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"41","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"259","212","28","390",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Json 반환(문자열 && 데이타셋)");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","20","259","74","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("데이타셋");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup111",null,"41","100","28","385",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("팝업");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"259","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기(기본팝업)");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"41","150","28","125",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("부모창 호출(함수)");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","101","11","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btn01");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","20","10",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("팝업대상");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseModeless",null,"294","145","32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기(medeless 포함) 공통");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","322","34","107","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","155","31","78","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","176","321","154","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample003PopupP.xfdl", function() {
        /**
        *팝업 자식 호출용 샘플
        *@MenuPath  C:\work\nxui\sample
        *@FileName  sample0031PopupP
        *@Creator
        *@CreateDate 2023/05/08
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/05/08
        *******************************************************************************
        */

        this.ParserStr = "^&^";
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.addEventHandler("onload",function(obj,e)
        {
           //폼로드시 공통함수
            var menuCd =   this.gfnGetMenuCd();// 부모 메뉴 코드

        	/**
        	 * 부모 창에서 넘어온 아규먼트 받는 처리
        	 */
        	var p_paramcode = this.paramCode;
        	var p_paramNum = this.paramNum;
        	var p_paramDataset = this.paramDataset;
        	var p_paramDs      = this.paramDs;


        	this.dsCopy.copyData(p_paramDs);



        //	this.ds00.loadXML(p_paramDataset);

            this.console.log(" 1. p_paramcode : " +p_paramcode);
        	this.console.log(" 2. p_paramNum : " +p_paramNum);
        	this.console.log(" 3. p_paramDataset : " +p_paramDataset);
        	this.console.log( "4 :  p_paramDs : " +p_paramDs);


        },this);




        /**
         * titiebar  close 버튼 실행 시
         */
        this.frmTitlebarClose_onclick = function()
        {
            this.close('x');
        };




        // 값 반환
        this.Button00_onclick = function(obj,  e)
        {
        	//this.close("testvalue");
        	//trace("Button00_onclick ");
             this.close("testvalue");
        }



        // Array 반환(값 반환)
        this.Button01_onclick = function(obj,  e)
        {
        	//var rtnArr = [1,2,3];	// 안됨

        	var arr = ["testvalue1", "testvalue2", "testvalue3"];
        	//var rtnArr = arr.join(this.ParserStr);

        	this.close(arr);
        	//this.close(rtnArr);
        }

        // Array 반환(n개의 데이타셋 반환)
        this.Button02_onclick = function(obj,  e)
        {

        	//var arr = ["testvalue", this.ds_1, this.ds_2];
        	//var rtnArr = arr.join(this.ParserStr);
        	this.opener.dsCopy.copyData(this.ds_2);
        	this.close();
        	//this.close(rtnArr);
        }

        // Object Json 반환(n개의 데이타셋 반환)
        this.Button04_onclick = function(obj,  e)
        {
        	//var objJson = {"key1":"testvalue", "key2":encodeURI(this.ds_1.saveXML("ds_1", "a")), "key3":encodeURI(this.ds_2.saveXML())};

        	var objJson = new Object();
        	objJson.key1 = "testvalue";
        	objJson.key2 = encodeURI(this.ds_1.saveXML("ds_1", "a"));
        	objJson.key3 = encodeURI(this.ds_2.saveXML());

        	//var rtnObj = this.gfnJSONToString(objJson);
        	this.close(objJson);
        	//this.close(rtnObj);
        }

        this.Button03_onclick = function(obj,  e)
        {
        	this.ds_1.deleteRow(this.ds_1.rowposition);
        }



        /******************************************************************************
         * Function name: gf_StringToJSON
         * Description	: JSON String을 JSON Object으로 변환하여 리턴한다.
         * Parameter 	: JSON String
         * Return		: JSON Object
         ******************************************************************************/
        this.gf_StringToJSON = function(strJson)
        {
            return eval("(" + strJson + ")");
        }

        this.Button05_onclick = function(obj,  e)
        {
        	this.close(this.ds_1.saveXML());

        }

        this.Test035_pop_onload = function(obj, e)
        {
        	trace("AAAAAAAAAAAAAAAAAAAAAAAA");
        }

        this.btn_close_onclick = function(obj,  e)
        {


        	var arr = ["testvalue", this.ds_1.saveXML("ds_1", "a"), this.ds_2.saveXML()];
        	//var arr = ["testvalue", this.ds_1, this.ds_2];
        	//var rtnArr = arr.join(this.ParserStr);

        	this.close(arr);
        }

        this.btn_popup111_onclick = function(obj,  e)
        {
        	 //this.gfnOpenPopup("StringReturnSample2222","sample::hrSample08_pop2.xfdl","","");
        	var surl = "sample::sample0031PopupP.xfdl";
        	var oparam = {id :"popId2",url: surl, paramCode:"abcd",paramNum:1234,titletext:'샘플팝업2'};
        	this.gfnShowModal( oparam,
        					   (reValue)=>{
        							trace(` reValue : + ${reValue}`);
        					   }
        					  );
        	}

        /**
         * 기본(Base) 일 경우 팝업 닫기
         */
        this.btnClose_onclick = function(obj,e)
        {
           var res = "### close ###";
           this.close(res);

        };


        /**
         *
         * @public 공통 팝업 일경우 닫기 버튼
         * @memberOf
         */
        this.btnCommClose_onclick = function(obj,e)
        {
            var res = "sssssssssss";
        	this.close(res);
        };

        this.btn00_onclick = function(obj,e)
        {



         // alert(" this.parent.parent : " + this.opener.name);
         this.opener.fnCallSearch();
        	//this.parent.parent.fnCall();
        };

        this.sample03_1PopupP_onbeforeclose = function(obj,e)
        {
        		//alert("===");
        	//return false;
        	//alert(" sample03_1PopupP_onbeforeclose : ");
        	//e.stopPropagation();//

        };

        this.fnPopClose = function(obj,e)
        {
           alert(" fnPop close");

        }

        this.sample03_1PopupP_onclose = function(obj,e)
        {
        	alert(" aaa");
        	//return false;
        	//return false;
        };

        this.btn01_onclick = function(obj,e)
        {


        };

        /*
         *	모달리스 닫기
         */

        this.btnCloseModeless_onclick = function(obj,e)
        {
            var arg = ["aaaaaaaaaa","bbbbbbbbbbbbb"];
        	this.close(arg);
        };

        /*
         *	팝업 부모에서 호출 예제
         */

        this.fnCall = function()
        {
          trace( "call~~~~~~~~~~~~~~");
        };
        this.btn02_onclick = function(obj,e)
        {
        	this.fnCall();
        };

        this.btn03_onclick = function(obj,e)
        {
        //	this.close();
        };

        this.btnCloseForm_onclick = function(obj,e)
        {
        	this.close('x');
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
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.btn_popup111.addEventHandler("onclick",this.btn_popup111_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btnCloseModeless.addEventHandler("onclick",this.btnCloseModeless_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
        };
        this.loadIncludeScript("sample003PopupP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
