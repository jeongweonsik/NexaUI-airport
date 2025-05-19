(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"5\"/><Column id=\"menuNm\" type=\"STRING\" size=\"100\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"100\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPersonal", this);
            obj._setContents("<ColumnInfo><Column id=\"uiId\" type=\"STRING\" size=\"256\"/><Column id=\"formatId\" type=\"STRING\" size=\"256\"/><Column id=\"colDesc\" type=\"STRING\" size=\"2147483647\"/><Column id=\"colOrgDesc\" type=\"STRING\" size=\"2147483647\"/><Column id=\"colCnt\" type=\"INT\" size=\"3\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsComCode", this);
            obj._setContents("<ColumnInfo><Column id=\"highCd\" type=\"STRING\" size=\"5\"/><Column id=\"highNm\" type=\"STRING\" size=\"100\"/><Column id=\"codeCd\" type=\"STRING\" size=\"20\"/><Column id=\"codeNm\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"highCd\">00001</Col><Col id=\"highNm\">보험사종류</Col><Col id=\"codeCd\">4</Col><Col id=\"codeNm\">우체국</Col></Row><Row><Col id=\"highCd\">00001</Col><Col id=\"highNm\">보험사종류</Col><Col id=\"codeCd\">3</Col><Col id=\"codeNm\">생명보험사</Col></Row><Row><Col id=\"highCd\">00001</Col><Col id=\"highNm\">보험사종류</Col><Col id=\"codeCd\">2</Col><Col id=\"codeNm\">공제회사</Col></Row><Row><Col id=\"highCd\">00001</Col><Col id=\"highNm\">보험사종류</Col><Col id=\"codeCd\">1</Col><Col id=\"codeNm\">손해보험사</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">04</Col><Col id=\"codeNm\">팀장</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">05</Col><Col id=\"codeNm\">조사자</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">06</Col><Col id=\"codeNm\">보험사(본사)</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">07</Col><Col id=\"codeNm\">보험사(지점)</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">08</Col><Col id=\"codeNm\">설계사</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">09</Col><Col id=\"codeNm\">탐문</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">10</Col><Col id=\"codeNm\">간호사</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">13</Col><Col id=\"codeNm\">경영지원팀장</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">15</Col><Col id=\"codeNm\">조사자(적부포함)</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">16</Col><Col id=\"codeNm\">지급심사</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">17</Col><Col id=\"codeNm\">콜적부조사자</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">18</Col><Col id=\"codeNm\">지급심사 파트장</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">19</Col><Col id=\"codeNm\">지급심사 총괄</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">20</Col><Col id=\"codeNm\">지급심사 팀장</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">21</Col><Col id=\"codeNm\">기타</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">22</Col><Col id=\"codeNm\">적부파트장</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">23</Col><Col id=\"codeNm\">건물관리</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">01</Col><Col id=\"codeNm\">관리자</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">02</Col><Col id=\"codeNm\">경영지원</Col></Row><Row><Col id=\"highCd\">00004</Col><Col id=\"highNm\">사용자구분</Col><Col id=\"codeCd\">03</Col><Col id=\"codeNm\">센터장</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsFavor", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuNavi\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"emil\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">test</Col><Col id=\"nm\">테스트사용자</Col><Col id=\"emil\">test@naver.com</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">select</Col><Col id=\"level\">0</Col><Col id=\"caption\">선택옵션</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">selectrow</Col><Col id=\"level\">1</Col><Col id=\"caption\">   행</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">selectcell</Col><Col id=\"level\">1</Col><Col id=\"caption\">   셀 </Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">selectmultirow</Col><Col id=\"level\">1</Col><Col id=\"caption\">   다중 행</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">selectarea</Col><Col id=\"level\">1</Col><Col id=\"caption\">   멀티영역</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">copy</Col><Col id=\"level\">0</Col><Col id=\"caption\">복사</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">filterCancel</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">colfixHide</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정해제</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"level\">0</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">find</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">colHide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row><Row><Col id=\"id\">colHideCancel</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/해제</Col><Col id=\"enable\">true</Col><Col id=\"userData\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"msgCd\" type=\"STRING\" size=\"32\"/><Column id=\"msgNm\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"msgCd\">1000</Col><Col id=\"msgNm\">조회실패 하였습니다</Col></Row><Row><Col id=\"msgCd\">1100</Col><Col id=\"msgNm\">저장실패 하였습니다</Col></Row><Row><Col id=\"msgCd\">1110</Col><Col id=\"msgNm\">수정실패 하였습니다</Col></Row><Row><Col id=\"msgCd\">1190</Col><Col id=\"msgNm\">삭제실패 하였습니다</Col></Row><Row><Col id=\"msgCd\">1300</Col><Col id=\"msgNm\">입력 값이 없습니다.</Col></Row><Row><Col id=\"msgCd\">1301</Col><Col id=\"msgNm\">잘못된 입력값 입니다.</Col></Row><Row><Col id=\"msgCd\">1401</Col><Col id=\"msgNm\">조회된 데이터가 없습니다.</Col></Row><Row><Col id=\"msgCd\">1402</Col><Col id=\"msgNm\">등록된 사용자가 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5001</Col><Col id=\"msgNm\">[{0}] 은(는) [{1}] 와(과) [{2}] 사이의 값입니다.</Col></Row><Row><Col id=\"msgCd\">5002</Col><Col id=\"msgNm\">[{0}] 은(는) [{1}] 중 하나의 값이어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5003</Col><Col id=\"msgNm\">[{0}] 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5004</Col><Col id=\"msgNm\">[{0}] 이(가) [{1}] 보다 작습니다.</Col></Row><Row><Col id=\"msgCd\">5005</Col><Col id=\"msgNm\">[{0}] 이(가) [{1}] 와(과) 일치하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">5006</Col><Col id=\"msgNm\">[{0}] 이(가) [{1}]보다 큽니다.</Col></Row><Row><Col id=\"msgCd\">5007</Col><Col id=\"msgNm\">[{0}] 컬럼이 없습니다</Col></Row><Row><Col id=\"msgCd\">5008</Col><Col id=\"msgNm\">[{0}] 함수의 인자값이 부족합니다.</Col></Row><Row><Col id=\"msgCd\">5009</Col><Col id=\"msgNm\">[{0}]개 초과하여 화면을 열수 없습니다</Col></Row><Row><Col id=\"msgCd\">5010</Col><Col id=\"msgNm\">[{0}]건 변경 중 [{1}]건 오류 발생</Col></Row><Row><Col id=\"msgCd\">5011</Col><Col id=\"msgNm\">[{0}]은(는) 올바른 법인등록번호가 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5012</Col><Col id=\"msgNm\">[{0}]은(는) 올바른 사업자등록번호가 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5013</Col><Col id=\"msgNm\">[{0}]은(는) 올바른 신용카드번호가 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5014</Col><Col id=\"msgNm\">[{0}]은(는) 올바른 외국인등록번호가 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5015</Col><Col id=\"msgNm\">[{0}]은(는) 올바른 이메일이 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5016</Col><Col id=\"msgNm\">[{0}]을 확인 해 주세요.</Col></Row><Row><Col id=\"msgCd\">5017</Col><Col id=\"msgNm\">[{0}]이 잘못된 형태로 입력 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5018</Col><Col id=\"msgNm\">[{0}{1}] 둘 중 하나 필수 입력 입니다.</Col></Row><Row><Col id=\"msgCd\">5071</Col><Col id=\"msgNm\">[선택]된 데이타가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5081</Col><Col id=\"msgNm\">[순번]의 범위를 초과 하였습니다. 확인 바랍니다.</Col></Row><Row><Col id=\"msgCd\">5082</Col><Col id=\"msgNm\">[숫자]를 입력하세요.</Col></Row><Row><Col id=\"msgCd\">5083</Col><Col id=\"msgNm\">[시작일자]가 [종료일자]보다 큽니다.</Col></Row><Row><Col id=\"msgCd\">5154</Col><Col id=\"msgNm\">{0} 은(는)는 필수 입력사항 입니다. 확인 바랍니다.</Col></Row><Row><Col id=\"msgCd\">5157</Col><Col id=\"msgNm\">{0} 은(는) {1} 와(과) {2} 사이의 값입니다.</Col></Row><Row><Col id=\"msgCd\">5158</Col><Col id=\"msgNm\">{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5159</Col><Col id=\"msgNm\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.</Col></Row><Row><Col id=\"msgCd\">5160</Col><Col id=\"msgNm\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.</Col></Row><Row><Col id=\"msgCd\">5161</Col><Col id=\"msgNm\">{0} 은(는) {1} 중 하나의 값이어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5162</Col><Col id=\"msgNm\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5163</Col><Col id=\"msgNm\">{0} 은(는) 숫자만 입력 가능합니다.</Col></Row><Row><Col id=\"msgCd\">5164</Col><Col id=\"msgNm\">{0} 은(는) 올바른 주민번호가 아닙니다.</Col></Row><Row><Col id=\"msgCd\">5165</Col><Col id=\"msgNm\">{0} 은(는) 유효하지 않은 날짜 형식입니다.</Col></Row><Row><Col id=\"msgCd\">5166</Col><Col id=\"msgNm\">{0} 은(는) 유효하지 않은 년월 형식입니다.</Col></Row><Row><Col id=\"msgCd\">5167</Col><Col id=\"msgNm\">{0} 은(는) 필수 입력 항목입니다.</Col></Row><Row><Col id=\"msgCd\">5168</Col><Col id=\"msgNm\">{0} 을(를) 선택해 주십시요.</Col></Row><Row><Col id=\"msgCd\">5169</Col><Col id=\"msgNm\">{0} 의 날짜가 {1} 의 날짜보다 작습니다.</Col></Row><Row><Col id=\"msgCd\">5170</Col><Col id=\"msgNm\">{0} 의 입력값은 {1} 자리이어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5171</Col><Col id=\"msgNm\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5172</Col><Col id=\"msgNm\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col></Row><Row><Col id=\"msgCd\">5173</Col><Col id=\"msgNm\">{0} 이(가) {1} 보다 작습니다.</Col></Row><Row><Col id=\"msgCd\">5174</Col><Col id=\"msgNm\">{0} 이(가) {1} 보다 큽니다.</Col></Row><Row><Col id=\"msgCd\">5175</Col><Col id=\"msgNm\">{0} 이(가) {1} 와(과) 일치하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">5176</Col><Col id=\"msgNm\">{0}] 의 날짜가 [{1} 의 날짜보다 작습니다.</Col></Row><Row><Col id=\"msgCd\">5177</Col><Col id=\"msgNm\">{0}개 이상 선택 할 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">5179</Col><Col id=\"msgNm\">80자까지만 전송 가능합니다.</Col></Row><Row><Col id=\"msgCd\">5228</Col><Col id=\"msgNm\">등록된 자료가 없습니다</Col></Row><Row><Col id=\"msgCd\">5229</Col><Col id=\"msgNm\">로그아웃 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5230</Col><Col id=\"msgNm\">[{0}]를 삭제하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5262</Col><Col id=\"msgNm\">서버 오류입니다.{&amp;10}관리자에게 문의하세요.</Col></Row><Row><Col id=\"msgCd\">5263</Col><Col id=\"msgNm\">서버에서 다음과 같은 에러메시지를 받았습니다.{&amp;10}{0}</Col></Row><Row><Col id=\"msgCd\">5264</Col><Col id=\"msgNm\">선택 라인을 삭제 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5265</Col><Col id=\"msgNm\">선택된 [TYPE]이 없습니다.</Col></Row><Row><Col id=\"msgCd\">5266</Col><Col id=\"msgNm\">선택된 데이타가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5268</Col><Col id=\"msgNm\">선택된 자료를 삭제 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5269</Col><Col id=\"msgNm\">선택된 자료를 삭제 후 저장하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5270</Col><Col id=\"msgNm\">선택된 항목이 없습니다.</Col></Row><Row><Col id=\"msgCd\">5277</Col><Col id=\"msgNm\">선택해 주세요.</Col></Row><Row><Col id=\"msgCd\">5282</Col><Col id=\"msgNm\">수정 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5283</Col><Col id=\"msgNm\">수정한 자료가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5326</Col><Col id=\"msgNm\">완료일자가 시작일자보다 빠릅니다.</Col></Row><Row><Col id=\"msgCd\">5369</Col><Col id=\"msgNm\">입력 불가</Col></Row><Row><Col id=\"msgCd\">5371</Col><Col id=\"msgNm\">입력된 데이타가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5375</Col><Col id=\"msgNm\">입력하는 Code ({0})값이 이미 등록되어 있습니다.</Col></Row><Row><Col id=\"msgCd\">5376</Col><Col id=\"msgNm\">입력하신 비밀번호가 정확하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">5381</Col><Col id=\"msgNm\">잘못된 `인수`입니다. 확인 바랍니다.</Col></Row><Row><Col id=\"msgCd\">5382</Col><Col id=\"msgNm\">저장 데이타가 없습니다. 확인 바랍니다.</Col></Row><Row><Col id=\"msgCd\">5383</Col><Col id=\"msgNm\">저장 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5385</Col><Col id=\"msgNm\">저장할 데이터가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5388</Col><Col id=\"msgNm\">전화번호가 잘못된 형태로 입력 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5389</Col><Col id=\"msgNm\">정말로 삭제 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5396</Col><Col id=\"msgNm\">존재하는 데이타가 없습니다.확인바랍니다.</Col></Row><Row><Col id=\"msgCd\">5401</Col><Col id=\"msgNm\">종료일이 시작일보다 빠릅니다.</Col></Row><Row><Col id=\"msgCd\">5406</Col><Col id=\"msgNm\">중복 자료를 선택 하셨습니다. 확인 바랍니다.</Col></Row><Row><Col id=\"msgCd\">5411</Col><Col id=\"msgNm\">처리 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5415</Col><Col id=\"msgNm\">첨부 파일은 {0}개 이상 등록 할 수 없습니다.</Col></Row><Row><Col id=\"msgCd\">5416</Col><Col id=\"msgNm\">첨부 파일의 용량은 최고 [{0}]까지 입니다.</Col></Row><Row><Col id=\"msgCd\">5419</Col><Col id=\"msgNm\">체크된 ROW가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5486</Col><Col id=\"msgNm\">해당 데이타를 입력하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5489</Col><Col id=\"msgNm\">해당 위치에 데이터가 있습니다. 선택된 데이터를 삽입하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5490</Col><Col id=\"msgNm\">해당 자료를 삭제 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5492</Col><Col id=\"msgNm\">해당 프로그램에 대한 메뉴얼은 없습니다. 확인하세요.</Col></Row><Row><Col id=\"msgCd\">5494</Col><Col id=\"msgNm\">해당 Menu가 존재하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">5496</Col><Col id=\"msgNm\">해당값을 찾을수가 없습니다</Col></Row><Row><Col id=\"msgCd\">5498</Col><Col id=\"msgNm\">해당레포트가 없습니다.</Col></Row><Row><Col id=\"msgCd\">5503</Col><Col id=\"msgNm\">현재 데이터를 저장한 후 해당 폼으로 이동하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5505</Col><Col id=\"msgNm\">현재 프로그램이 실행중입니다. 종료하신 후, 재실행 바랍니다.</Col></Row><Row><Col id=\"msgCd\">5507</Col><Col id=\"msgNm\">화일명이 정확하지 않습니다.</Col></Row><Row><Col id=\"msgCd\">5509</Col><Col id=\"msgNm\">e-mail이 잘못된 형태로 입력 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5524</Col><Col id=\"msgNm\">정상적으로 조회 처리 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5525</Col><Col id=\"msgNm\">변경사항이 저장되지 않을 수 있습니다.{&amp;10}현재 화면을 종료 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5526</Col><Col id=\"msgNm\">메뉴를 검색하세요.</Col></Row><Row><Col id=\"msgCd\">5527</Col><Col id=\"msgNm\">해당 페이지에 업무를 조회하였습니다.</Col></Row><Row><Col id=\"msgCd\">5528</Col><Col id=\"msgNm\">현재 데이터를 저장한 후 해당 폼으로 이동하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5529</Col><Col id=\"msgNm\">해당 프로그램에 대한 메뉴얼은 없습니다. 확인하세요.</Col></Row><Row><Col id=\"msgCd\">5530</Col><Col id=\"msgNm\">복사 되었습니다.</Col></Row><Row><Col id=\"msgCd\">5531</Col><Col id=\"msgNm\">파일을 선택하세요.</Col></Row><Row><Col id=\"msgCd\">5532</Col><Col id=\"msgNm\">허용되지 않는 파일의 확장자 입니다. {&amp;10}{&amp;10}허용되는 확장자는 [{0}] 입니다</Col></Row><Row><Col id=\"msgCd\">5533</Col><Col id=\"msgNm\">파일 업로드 갯수는 {0}개 입니다.</Col></Row><Row><Col id=\"msgCd\">5534</Col><Col id=\"msgNm\">[{0}] 유형의 파일은 업로드가 불가능합니다. [{1}]</Col></Row><Row><Col id=\"msgCd\">5535</Col><Col id=\"msgNm\">현재 메뉴는 개발 진행 중입니다.</Col></Row><Row><Col id=\"msgCd\">5536</Col><Col id=\"msgNm\">열린 메뉴를 모두 닫고 진행해야 합니다. 진행 하시겠습니까?</Col></Row><Row><Col id=\"msgCd\">5537</Col><Col id=\"msgNm\">소트항목을 선택 하세요.</Col></Row><Row><Col id=\"msgCd\">5538</Col><Col id=\"msgNm\">사용 권한이 없는 메뉴입니다.</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"parentCd\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuGroup\" type=\"STRING\" size=\"32\"/><Column id=\"url\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/><Column id=\"menuPath\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"menuCd\">M120003</Col><Col id=\"menuNm\">탑메뉴1</Col><Col id=\"parentCd\">M000120</Col><Col id=\"menuLvl\">0</Col><Col id=\"menuGroup\">0</Col><Col id=\"url\"/><Col id=\"sort\">1203</Col><Col id=\"menuPath\">개발자샘플 &gt; </Col></Row><Row><Col id=\"menuCd\">M300153</Col><Col id=\"menuNm\">테스트메뉴</Col><Col id=\"parentCd\">M120003</Col><Col id=\"menuLvl\">1</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\"/><Col id=\"sort\">12031</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300154</Col><Col id=\"menuNm\">메뉴1(transaciton)</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300155</Col><Col id=\"menuNm\">메뉴2(팝업샘플</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample003Popup.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300156</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col><Col id=\"menuGroup\">M120003</Col></Row><Row><Col id=\"menuCd\">M300157</Col><Col id=\"menuNm\">테스트메뉴2</Col><Col id=\"parentCd\">M120003</Col><Col id=\"menuLvl\">1</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"sort\">12031</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300158</Col><Col id=\"menuNm\">메뉴1</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">design::testForm01.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300159</Col><Col id=\"menuNm\">메뉴2</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample001BaseScript.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M300160</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"parentCd\">M300153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M120003</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col></Row><Row><Col id=\"menuCd\">M220003</Col><Col id=\"menuNm\">탑메뉴2</Col><Col id=\"parentCd\">M100121</Col><Col id=\"menuLvl\">0</Col><Col id=\"menuGroup\">0</Col><Col id=\"sort\">1203</Col><Col id=\"menuPath\">개발자샘플 &gt; </Col></Row><Row><Col id=\"menuCd\">M400153</Col><Col id=\"menuNm\">테스트메뉴</Col><Col id=\"parentCd\">M220003</Col><Col id=\"menuLvl\">1</Col><Col id=\"menuGroup\">M220003</Col><Col id=\"sort\">12031</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M400154</Col><Col id=\"menuNm\">메뉴1</Col><Col id=\"parentCd\">M400153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M220003</Col><Col id=\"url\">design::testForm01.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M400155</Col><Col id=\"menuNm\">메뉴2</Col><Col id=\"parentCd\">M400153</Col><Col id=\"menuLvl\">2</Col><Col id=\"menuGroup\">M220003</Col><Col id=\"url\">sample::sample001BaseScript.xfdl</Col><Col id=\"sort\">12032</Col><Col id=\"menuPath\">개발자샘플 &gt; SAMPLE &gt; </Col></Row><Row><Col id=\"menuCd\">M400156</Col><Col id=\"menuNm\">메뉴3</Col><Col id=\"parentCd\">M400153</Col><Col id=\"menuLvl\">2</Col><Col id=\"url\">sample::sample002Transaction.xfdl</Col><Col id=\"menuGroup\">M220003</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("hrpamngrfe");
            this.set_screenid("Desktop");
            this.set_licenseurl("./license/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1600","960",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("인천국제공항");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_openalign("center middle");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.addIncludeScript("AppDesktop.xadl","xjs::libApp.xjs");
        this.registerScript("AppDesktop.xadl", function() {
        /**
        *   인천공항
        *@MenuPath
        *@FileName
        *@Creator 	{J}
        *@CreateDate 2025/04/15
        *@Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************
         *  include
         ************************************************************************/
        this.executeIncludeScript("xjs::libApp.xjs"); /*include "xjs::libApp.xjs"*/;

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * @description Applicaton onload시 처리내역
        */
        this.Application_onload = function(obj,e)
        {
            this.appOnload(obj,e);
        };
        });
		this.checkLicense(".\license\NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("AppDesktop.xadl");
    };
}
)();
