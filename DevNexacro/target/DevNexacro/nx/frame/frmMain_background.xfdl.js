(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1334,822);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"srchGubun\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond\" type=\"STRING\" size=\"256\"/><Column id=\"srchBoardCd\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srchGubun\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPage", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotiList", this);
            obj._setContents("<ColumnInfo><Column id=\"INPT_EMP_NO\" type=\"string\" size=\"32\"/><Column id=\"RCMD_CNT\" type=\"undefined\" size=\"0\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/><Column id=\"REPLY_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ANSW_LEVL\" type=\"bigdecimal\" size=\"16\"/><Column id=\"ANSW_YN\" type=\"undefined\" size=\"0\"/><Column id=\"RUNMB\" type=\"bigdecimal\" size=\"16\"/><Column id=\"FILE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"FILE_YN\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"RNUM\" type=\"bigdecimal\" size=\"16\"/><Column id=\"INPT_IP\" type=\"string\" size=\"32\"/><Column id=\"INQ_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"BLBD_CD\" type=\"string\" size=\"32\"/><Column id=\"HRANK_NOTI_NO\" type=\"undefined\" size=\"0\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"ANSW_ORDER\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"NOTI_NO\" type=\"bigdecimal\" size=\"16\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"INPT_EMP_NO\">관리자</Col><Col id=\"CHGE_IP\"/><Col id=\"REPLY_CNT\">0</Col><Col id=\"ANSW_LEVL\">0</Col><Col id=\"RUNMB\">2</Col><Col id=\"FILE_YN\">0</Col><Col id=\"DEL_YN\">0</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"RNUM\">2</Col><Col id=\"INPT_IP\"/><Col id=\"INQ_CNT\">37</Col><Col id=\"CHGE_DTTM\">20220310124628000</Col><Col id=\"BLBD_CD\">0001</Col><Col id=\"TITLE\">데브팩 서비스 안내</Col><Col id=\"INPT_DTTM\">20220119170227000</Col><Col id=\"NOTI_NO\">9</Col><Col id=\"INPT_ID\">0000000002</Col></Row><Row><Col id=\"INPT_EMP_NO\">관리자</Col><Col id=\"CHGE_IP\"/><Col id=\"REPLY_CNT\">0</Col><Col id=\"ANSW_LEVL\">0</Col><Col id=\"RUNMB\">3</Col><Col id=\"FILE_ID\"/><Col id=\"FILE_YN\">1</Col><Col id=\"DEL_YN\">0</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"RNUM\">3</Col><Col id=\"INPT_IP\"/><Col id=\"INQ_CNT\">49</Col><Col id=\"CHGE_DTTM\">20220104175520000</Col><Col id=\"BLBD_CD\">0001</Col><Col id=\"TITLE\">2022년 달력</Col><Col id=\"INPT_DTTM\">20211230145932000</Col><Col id=\"NOTI_NO\">8</Col><Col id=\"INPT_ID\">0000000002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdateInq", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"INT\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodo", this);
            obj._setContents("<ColumnInfo><Column id=\"INPT_EMP_NO\" type=\"string\" size=\"32\"/><Column id=\"START_TIME\" type=\"string\" size=\"32\"/><Column id=\"LAST_DATE\" type=\"string\" size=\"32\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/><Column id=\"SCD_SECT_CD\" type=\"string\" size=\"32\"/><Column id=\"START_MINUTES\" type=\"string\" size=\"32\"/><Column id=\"END_DAY\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"CAL_DATE\" type=\"string\" size=\"32\"/><Column id=\"INPT_IP\" type=\"string\" size=\"32\"/><Column id=\"FIRST_DATE\" type=\"string\" size=\"32\"/><Column id=\"END_TIME\" type=\"string\" size=\"32\"/><Column id=\"SCD_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SCD_NM\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"END_MINUTES\" type=\"string\" size=\"32\"/><Column id=\"SCD_CD\" type=\"string\" size=\"32\"/><Column id=\"START_DAY\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"INPT_EMP_NO\">관리자</Col><Col id=\"START_TIME\">10</Col><Col id=\"LAST_DATE\">20220402</Col><Col id=\"CHGE_IP\">172.10.11.205</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20220228</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"CAL_DATE\">20220228</Col><Col id=\"INPT_IP\">172.10.11.205</Col><Col id=\"FIRST_DATE\">20220227</Col><Col id=\"END_TIME\">12</Col><Col id=\"SCD_ID\">2281</Col><Col id=\"CHGE_DTTM\">20220223100934000</Col><Col id=\"SCD_NM\">컨설팅사업1팀</Col><Col id=\"TITLE\">모바일 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20220216171750000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20220228</Col><Col id=\"INPT_ID\">0000000002</Col></Row><Row><Col id=\"INPT_EMP_NO\">홍길동</Col><Col id=\"START_TIME\">14</Col><Col id=\"LAST_DATE\">20220402</Col><Col id=\"CHGE_IP\">172.10.11.205</Col><Col id=\"SCD_SECT_CD\">MT</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20220228</Col><Col id=\"CHGE_ID\">0000000002</Col><Col id=\"CAL_DATE\">20220228</Col><Col id=\"INPT_IP\">172.10.11.205</Col><Col id=\"FIRST_DATE\">20220227</Col><Col id=\"END_TIME\">16</Col><Col id=\"SCD_ID\">2561</Col><Col id=\"CHGE_DTTM\">20220225110927000</Col><Col id=\"SCD_NM\">컨설팅사업1팀</Col><Col id=\"TITLE\">프로젝트 투입관련 미팅</Col><Col id=\"SSC_CD_KORN_NM\">미팅</Col><Col id=\"INPT_DTTM\">20220225110927000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20220228</Col><Col id=\"INPT_ID\">0000000002</Col></Row><Row><Col id=\"INPT_EMP_NO\">이순신</Col><Col id=\"START_TIME\">09</Col><Col id=\"LAST_DATE\">20220402</Col><Col id=\"CHGE_IP\">172.10.11.171</Col><Col id=\"SCD_SECT_CD\">ED</Col><Col id=\"START_MINUTES\">00</Col><Col id=\"END_DAY\">20220302</Col><Col id=\"CHGE_ID\">0000000009</Col><Col id=\"CAL_DATE\">20220302</Col><Col id=\"INPT_IP\">172.10.11.171</Col><Col id=\"FIRST_DATE\">20220227</Col><Col id=\"END_TIME\">18</Col><Col id=\"SCD_ID\">2601</Col><Col id=\"CHGE_DTTM\">20220228094850000</Col><Col id=\"SCD_NM\">컨설팅사업1팀</Col><Col id=\"TITLE\">컨버팅 교육</Col><Col id=\"SSC_CD_KORN_NM\">교육</Col><Col id=\"INPT_DTTM\">20220228094850000</Col><Col id=\"END_MINUTES\">00</Col><Col id=\"SCD_CD\">1010410</Col><Col id=\"START_DAY\">20220302</Col><Col id=\"INPT_ID\">0000000009</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodoGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScdInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBlur","1","1",null,null,"1","5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_boxShadow("inset 3px 3px 10px 0px #cacbd9");
            obj.set_background("#fafafc");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","1","0",null,null,"40","5","1253",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Main");
            obj.set_boxShadow("3px 3px 10px #cacbd9");
            obj.set_background("#fafafc");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("staRight","divMain:0","0","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_border("0px none");
            obj.set_borderRadius("0px 0px 20px");
            obj.set_boxShadow("inset 3px 0px 3px 0px transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1334,822,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMain_background.xfdl", function() {
        /**
        *
        *@FileName frmMain
        *@Creator
        *@CreateDate 2024/10/18
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
        this.fvParam = "";

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.frm_onload = function(obj,e)
        {

        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /*
        *@description 화면 이동 후 넘어온 값 처리
        *@param {string}{object}{array} 넘어온 아규먼트 처리
        */
        this.fnMoveOnActie = function(param)
        {
        	//trace("fnMoveOnActie formName ===>" + this.name + "<> parg ====> " + param);
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
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_onload,this);
            this.addEventHandler("onsize",this.formOnsize,this);
        };
        this.loadIncludeScript("frmMain_background.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
