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
            this.set_titletext("엑셀(export/import)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"선택\" type=\"STRING\" size=\"256\"/><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"코드\" type=\"STRING\" size=\"256\"/><Column id=\"일자\" type=\"STRING\" size=\"256\"/><Column id=\"기업명\" type=\"STRING\" size=\"256\"/><Column id=\"당당자명\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"금액\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"휴대폰번호\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"선택\"/><Col id=\"번호\">1</Col><Col id=\"구분\">접수</Col><Col id=\"코드\">AA001</Col><Col id=\"일자\">20101003</Col><Col id=\"기업명\">가나다</Col><Col id=\"휴대폰번호\">010-2369-8600 </Col><Col id=\"수량\">10</Col><Col id=\"금액\">83000</Col><Col id=\"단가\">8300</Col><Col id=\"주소\">서울시 영등포구 은행로 37 기계회관(본관 8층)</Col><Col id=\"전화번호\">02-369-8600 </Col><Col id=\"당당자명\">홍길동</Col></Row><Row><Col id=\"선택\"/><Col id=\"번호\">2</Col><Col id=\"구분\">진행</Col><Col id=\"코드\">AA002</Col><Col id=\"일자\">20051011</Col><Col id=\"기업명\">가나다라</Col><Col id=\"휴대폰번호\">010-2369-8600 </Col><Col id=\"수량\">10</Col><Col id=\"금액\">76000</Col><Col id=\"단가\">7600</Col><Col id=\"주소\">서울시 영등포구 여의도동 13-31 기계회관</Col><Col id=\"전화번호\">02-369-8600 </Col><Col id=\"당당자명\">홍길동</Col></Row><Row><Col id=\"선택\"/><Col id=\"번호\">3</Col><Col id=\"구분\">진행</Col><Col id=\"코드\">BB001</Col><Col id=\"일자\">20070206</Col><Col id=\"기업명\">가나다라마</Col><Col id=\"휴대폰번호\">010-2369-8600 </Col><Col id=\"수량\">10</Col><Col id=\"금액\">95000</Col><Col id=\"단가\">9500</Col><Col id=\"주소\">서울시 영등포구 은행로 37 기계회관</Col><Col id=\"전화번호\">02-369-8600 </Col><Col id=\"당당자명\">홍길동</Col></Row><Row><Col id=\"선택\"/><Col id=\"번호\">4</Col><Col id=\"구분\">완료</Col><Col id=\"코드\">BB002</Col><Col id=\"일자\">20090512</Col><Col id=\"기업명\">가나다라마바</Col><Col id=\"휴대폰번호\">010-2369-8600 </Col><Col id=\"수량\">10</Col><Col id=\"금액\">60000</Col><Col id=\"단가\">6000</Col><Col id=\"주소\">서울시 영등포구 은행로 37 기계회관(본관 8층)</Col><Col id=\"전화번호\">02-369-8600 </Col><Col id=\"당당자명\">홍길동</Col></Row><Row><Col id=\"선택\"/><Col id=\"번호\">5</Col><Col id=\"구분\">진행</Col><Col id=\"코드\">CC001</Col><Col id=\"일자\">20010109</Col><Col id=\"기업명\">가나다라마바사</Col><Col id=\"휴대폰번호\">010-2369-8600 </Col><Col id=\"수량\">100</Col><Col id=\"금액\">88000</Col><Col id=\"단가\">880</Col><Col id=\"주소\">서울시 영등포구 은행로 37 기계회관(본관 8층)</Col><Col id=\"전화번호\">02-369-8600 </Col><Col id=\"당당자명\">홍길동</Col></Row><Row><Col id=\"선택\"/><Col id=\"번호\">6</Col><Col id=\"구분\">완료</Col><Col id=\"코드\">DD001</Col><Col id=\"일자\">20160202</Col><Col id=\"기업명\">가나다라마바사아</Col><Col id=\"휴대폰번호\">010-2369-8600 </Col><Col id=\"수량\">100</Col><Col id=\"금액\">60000</Col><Col id=\"단가\">600</Col><Col id=\"주소\">서울시 영등포구 은행로 37 기계회관(본관 8층)</Col><Col id=\"전화번호\">02-369-8600 </Col><Col id=\"당당자명\">홍길동</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_excelExportUser","72","35","98","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Excel Export");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelImportUser","btn_excelExportUser:4","35","98","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Excel Import");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_user","72","70","958","320",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd");
            obj.set_formatid("default");
            obj.set_scrolltype("both");
            obj.set_selectchangetype("down");
            obj.set_showselection("true");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"코드\"/><Cell col=\"4\" text=\"일자\"/><Cell col=\"5\" text=\"기업명\"/><Cell col=\"6\" text=\"당당자명\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"수량\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"휴대폰번호\"/><Cell col=\"12\" text=\"주소\"/><Cell col=\"13\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:선택\"/><Cell col=\"1\" text=\"bind:번호\"/><Cell col=\"2\" text=\"bind:구분\"/><Cell col=\"3\" text=\"bind:코드\"/><Cell col=\"4\" text=\"bind:일자\"/><Cell col=\"5\" text=\"bind:기업명\"/><Cell col=\"6\" text=\"bind:당당자명\"/><Cell col=\"7\" text=\"bind:단가\"/><Cell col=\"8\" text=\"bind:수량\"/><Cell col=\"9\" text=\"bind:금액\"/><Cell col=\"10\" text=\"bind:전화번호\"/><Cell col=\"11\" text=\"bind:휴대폰번호\"/><Cell col=\"12\" text=\"bind:주소\"/><Cell col=\"13\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear","275","35","107","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("clear");
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
        this.registerScript("sample005ExcelEx.xfdl", function() {
        /**
        *
        *@FileName sample005ExcelEx
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
        this.addEventHandler("onload",function(obj,e)
        {

        },this);


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
        //import callback
        this.fnImportCallback = function (id,outDs)
        {
        	this.console.log(" # ds : " +outDs.saveXML());  //excel 생성된 dataset
        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*
         *	excel export
         */
        this.btn_excelExportUser_onclick = function(obj,e)
        {
        	var objGrid  =  this.grid_user;
        	var sFileNm = "엑셀그리드0_1";   // 파일명
        	this.gfnExcelExport(objGrid,sFileNm);
        };



        //excel import
        this.btn_excelImportUser_onclick = function(obj,e)
        {

            var dsName = "ds_grd";
        	this.gfnExcelImport(dsName,
        	(outDs)=>{  //callback

        	     /*
        		 *{dataset} 원본 dataset
        		 *{dataset} target dataset
        		 */
        	    //  var resDs = this.gfnSetupdateColumn(this.ds_grd,outDs);  // 현재 dataset 컬럼 정보 업데이트 시 사용
        	   //	trace(resDs.saveXML());


        	});

        //      var dsName = "ds_grd";
        // 	var	sImportId = "idExcelImport1";
        // 	var sSheet = "Sheet0";
        // 	var sHead = "A2";
        // 	var sBody = "A3";
        // 	this.gfnExcelImport(dsName,sImportId,sSheet,sHead,sBody,
        // 	(outDs,orgDs)=>{  //callback
        //
        // 	});
        };


        this.btnClear_onclick = function(obj,e)
        {
        	this.ds_grd.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_excelExportUser.addEventHandler("onclick",this.btn_excelExportUser_onclick,this);
            this.btn_excelImportUser.addEventHandler("onclick",this.btn_excelImportUser_onclick,this);
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
        };
        this.loadIncludeScript("sample005ExcelEx.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
