/**
*  Util 관련 공통
*  @FileName 	Util.js 
*  @Creator 	#{J}
*  @CreateDate 	2025.04.15
*/

/********************************************************************************************
************************************************************************************************
* String 및 Util 관련
************************************************************************************************
*● gfnIsNull : 값이 존재하는지 여부 체크
*● gfnIsEmpty : 값이 존재하는지 여부 체크
*● gfnIsNotNull : 값이 존재하는지 여부 체크 
*● gfnIsUndefined :  undefined 체크
*● gfnGetToString : 값 형식 체크
*● gfnNvl : 입력값을 체크하여 Null인경우 지정한 값을 리턴
*● gfnIsBoolean : 입력값이 Boolean 값인지 여부를 판별한다.
*● gfnDecode : Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
*● gfnIIF : 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
*● gfnTrim : 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거
*● gfnAllTrim : 정규식을 이용한 trim 구현 - 문자열 전체의 공백 제거
*● gfnLeft : 문자열의 좌측부터 지정한 길이만큼 가져오는 함수
*● gfnRight : 문자열의 우측부터 지정한 길이만큼 가져오는 함수
*● gfnLengthByte : 문자 전체 길이를 계산
*● gfnPosReverse : 문자열의 위치를 대소문자 구별하여 거꾸로 부터 찾아 첫번째 나온 index 반환
*● gfnAppendComma : 입력받은 Number에 컴마를 추가한다.
*● gfnRemoveComma : 컴마를 제거한다.
*● gfnGetDigit : 입력 문자열중 숫자값만 남긴다.
*● gfnRemoveSpecialChar : 특수문자를 제거한다.
*● gfnRemoveHtmlTag : HTML TAG 제거 함수
*● gfnIsExistInArray : 배열에 해당 값이 존재하는지 확인한다.
*● gfn10To16 : 입력된 10진수를 16진수로 변환하는 함수
*● gfn16To10 : 입력된 16진수를 10진수로 변환하는 함수
*● gfnTypeOf : 주어진 nexacro 개체의 type 을 반환
*● gfnGetStirngTypeOf : 값에 대한 타입을 판별하는 함수 
*● gfnIsNexaComponent : nexacro Component 여부 Check
*● gfnObjView : object의 내용을 trace로 출력
*● gfnLookup : 대상에서 오브젝트 반환
*● gfnLastIndexOfProp : 지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.
*● gfnRemoveAt : 원하는 위치의 항목을 배열에서 삭제 처리한다.
*● gfnGetUniqueId : 유일한 ID 를 반환
*● gfnGetSequenceId : Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
*● gfnEach : 속성값들을 주어진 함수로 처리한다.
*● gfnContains : 지정된 항목이 배열에 포함되어 있는지 확인한다.
*● gfnIndexOf : 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
*● gfnRpad : 입력된 sValue에 nLength 만큼 오른쪽에 Char를 채운다.
*● gfnLpad : 입력된 sValue에 nLength 만큼 왼쪽에 Char를 채운다.
*● gfnJSONToString : object를 json string으로 변환하는 함수
*● gfnIsNumber : value의 number 여부 반환.
*● gfnIsNexacro  :  넥사크로 브라우저 여부 체크 함수
*● gfnXmlEncoder :  xml 인코더
*● gfnGetTextSize : text size
*● gfnTransformKeys :  json key 값 변환 자동화
************************************************************************************************
* Dataset 관련 Util
************************************************************************************************
*● gfnUpdateToDataset : 컨트롤이 Dataset에 bind되어 있을 경우 즉시 value를 Dataset에 적용시킨다.
*● gfnDsIsUpdated : dataSet의 Row 중에서 변경된 내용이 있는지 여부
*● gfnIsUpdatedRow : dataSet의 Row가 변경되었는지 판단하는 함수
*● gfnIsUpdateColumn : dataSet의 Row 에서 해당 칼럼이 변경되었는지 판단하는 함수
*● gfnGetDataSet : DataSet이 존재하면 그대로 리턴하고 없으면 생성해서 리턴함
*● gfnGetCellIdx : 바인드되어 있는 Dataset에 해당되는 ColumnId 를 가지고 있는 Cell의 Index 반환
*● gfnGetLookupData :  dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
*● gfnFindData : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
*● gfnGridToDataset : grid 바인딩 컬럼 정보 dataset 변환
************************************************************************************************
* Date 관련 Util
************************************************************************************************
*● gfnToday : 해당 PC의 오늘 날찌를 가져온다
*● gfnIsDate : 날짜 여부를 확인한다.(년월 or 년월일)
*● gfnIsYMD : 날짜 여부를 확인한다.(년월일)
*● gfnIsYM : 날짜 여부를 확인한다.(년월)
*● gfnIsTime : 시간 형식에 맞는지 Check 한다. 
*● gfnGetDate : 현재일자를 구한다.
*● gfnGetLastDate : 년월을 입력받아 마지막 일를 반환한다(년월)
*● gfnGetFirstDate : 현재월 1일 만들기.
*● gfnGetDay : 입력된 날자로부터 요일을 구함
*● gfnGetDiffDate : 두 일자간의 차이 일수 계산
*● gfnGetDiffMonth : 두 일자간의 차이 일수 계산. 단, sStartDate, sEndDate의 일은 포함하지 않고 계산된다.
*● gfnAddDate : 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함
*● gfnAddMonth : 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
*● gfnGetHolidays : 법정공휴일 구하기
*● gfnSolarToLunar : 양력을 음력으로 변환해주는 함수
*● gfnLunarToSolar : 음력을 양력으로 변환. 
*● gfnSolarBase : 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년)
*● gfnStrToDate : 문자를 날짜로 변환.
*● gfnDateToStr : Date Type을 String으로 변환
*● gfnGetWeek : 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다. 
*● gfnGetBirthDateBySSN : 주민등록번호로 생년월일을 구한다.
*● gfnGetBirthYear : 주민번호 뒷 첫번째 자리로 년대를 return 한다.
*● gfnGetAge : 기준년월일 기준으로 만나이를 구한다.
*● gfnDateFormatString : 로그 출력에 표시할 날짜 형태를 얻어온다.
*● gfnGetMaskFormatString : 주어진 날짜 객체의 Mask Format 처리된 문자열을 반환
*● gfnMsToTime : 밀리 세컨즈를 시:분:초로 변환
************************************************************************************************
* Form 관련 Util
************************************************************************************************
*● gfnGetComponentFullName : 현재 컴포넌트 전체이름(경로)을 반환
*● gfnIsXComponent : nexacro component 여부 반환.
*● gfnIsVisual : 오브젝트가 Visual한 컴포넌트인지를 반환한다.
*● gfnIsEnable : 컴포넌트의 실제 활성화 여부를 반환한다.
*● gfnIsVisible : 컴포넌트가 화면에 보여지는지 여부를 반환한다.
*● gfnCompsQuery : Component에 포함되고 조건에 맞는 component 또는 object 반환
*● gfnGetTopLevelForm : 주어진 Form 을 포함하는 최상위 Form을 찾는다.
************************************************************************************************
* Drag & Drop 관련 Util
************************************************************************************************
*● gfnCreateMoveStatic : Drap 시 마우스 이동시 표시할 Static 생성
*● gfnCapitalize : 주어진 문자열을 첫 문자만 대문자 변경
*● gfnUnCapitalize : 주어진 문자열을 첫 문자만 소문자 변경
************************************************************************************************
************************************************************************************************
* Validation function List
************************************************************************************************
*● gfnIsDigit : 숫자체크
*● gfnIsKoreanChar : 한글만으로 되어 있는지 Check한다. 
*● gfnIsSpecialChar : 특수문자가 있는지 Check한다.
*● gfnIsSSN : 주민등록번호 여부를 확인한다.
*● gfnIsFrnrIdNo : 외국인 등록번호 여부를 확인한다.
*● gfnIsBzIdNo : 사업자 등록번호 여부를 확인한다.
*● gfnIsFirmIdNo : 법인 등록번호 여부를 확인한다.
*● gfnIsCardNo : 신용카드번호 여부를 확인한다.
*● gfnIsEmail : 이메일 형식에 맞는지 Check한다.
*● gfnIsPassword : 패스워드 체크 함수
************************************************************************************************/


_pForm.isNull = function (v)
{
	return this.gfnIsNull(v);
};

_pForm.isNotNull= function (v)
{
	return this.gfnIsNotNull(v);;
};

/*
 * json 체크
 * {arguments}
 */ 
_pForm.isJSON = function (v)
{
	if(nexacro._isObject(v) && !nexacro._isArray(v)) return true;
	else return false;
  
};



/**
 * @class 값이 존재하는지 여부 체크 <br>
 * @param {String} sValue	
 * @return {Boolean} true/false
 * @example
 * var bNull = this.gfnIsNull("aaa");	
 * output: false
 */
_pForm.gfnIsNull = function(sValue)
{
    if (new String(sValue).valueOf() == "undefined") return true;
    if (sValue == null) return true;
    
    let ChkStr = new String(sValue);

    if (ChkStr == null) return true;
    if (ChkStr.toString().length == 0 ) return true;
    return false;
};


_pForm.gfnIsEmpty = function(sValue)
{
   return this.gfnIsNull(sValue);
};

_pForm.gfnIsNotNull = function(sValue)
{
   return !this.gfnIsNull(sValue);
};


/**
 * @class 값 형식 체크 <br>
 * @param {*} inVal
 * @example
    var arr = ['1','2','3']; 
 * trace(this.gfnGetToString(arr)); //output : [object Array]
 */
_pForm.gfnGetToString = function(value)
{
    return Object.prototype.toString.call(value);
};

/**
 * @class 입력값을 체크하여 Null인경우 지정한 값을 리턴 <br>
 * @param {String} inVal
 * @param {String} nullVal	- Null인경우 대치값
 * @return {String} 입력값이 Null인경우 지정한값, Null이 아닌경우 입력값
 * @example
   var str = null;
   var sinVal = "aaaa";
   this.gfnNvl(str,sinVal);
   output: "aaaaa";
 */
_pForm.gfnNvl = function(inVal, nullVal)
{
	if(!!!inVal) {
		inVal = nullVal;
	}
	return inVal;
};

/**
 * @class	입력값이 Boolean 값인지 여부를 판별한다.
 * @param 	{object}  판별대상 Object
 * @return 	{boolean} boolean 이면 true 아니면 false 를 리턴한다.
*/
_pForm.gfnIsBoolean = function(obj)
{
    let strvalue = obj+"";

    if( strvalue == "true" || strvalue == "false" )
        return true;
    else
        return false;

};

/**
 * @class  * 입력된 값 또는 수식을 검사해 적당한 값을 반환.<br>
 * decoce(비교값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값);<br>
 * 표현식의 값이 기준값1이면 값1을 출력하고, 기준값2이면 값2를 출력한다.<br>
 * 그리고 기준값이 없으면 디폴트 값을 출력한다.<br>
 * @param {*} * 1. 비교값
 * @param {*} * 2. CASE
 * @param {*} * 3. 결과값 (2,3 반복)
 * @param {*=} * (2,3 반복)
 * @param {*=} * 4.디폴트값
 * @return {*} decode에 의해서 선택된 값.
 * @return {*} expr에 따라 Return 된 값.
 * @example
 * trace(this.gfnDecode(100, 1, "일", 10, "십", 100, "백"));	// output : 백
 */
_pForm.gfnDecode = function ()
{
	let i;
    let count = arguments.length;
	for( i = 1 ; i < count ; i+=2 )
	{
		if( arguments[0] === arguments[i] )
		{
			return arguments[i+1];
		}
	}
	
	return arguments[i-2];
};


/**
 * 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
 * @param {*} expr 비교할 값. expr의 값으로 True/False 여부를 확인합니다.
 *                 expr이 Integer인경우 0이면 False아니면 True인식합니다.
 * @param {*} trueValue expr이 True에 해당하는 값일 경우 Return 되는 값.
 * @param {*} falseValue expr이 False에 해당하는 값일 경우 Return 되는 값.
 * @return {*} expr에 따라 Return 된 값.
 * @example
 *
 * trace(this.gfnIIF(2-1=1, "True", "False")); // output : True
 *
 * var a = 98;
 * var b = this.gfnIIF(a > 100, 100, a);
 * trace(b);	// output : 98
 *
 * @memberOf 
 */	
_pForm.gfnIIF = function(expr, trueValue, falseValue) 
{
	return expr ? trueValue : falseValue;
};

/**
 * @class 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거 <br>
 * @param {String} sValue - 변경하려는 값
 * @return {String} 문자열
 */
_pForm.gfnTrim = function(sValue)
{
    if (this.gfnIsNull(sValue)) return "";
	return nexacro.trim(sValue);
};

/**
 * @class 정규식을 이용한 trim 구현 - 문자열 전체의 공백 제거 <br>
 * @param {String} sValue - 변경하려는 값
 * @return {String} 문자열
*/
_pForm.gfnAllTrim = function(sValue)
{
    let objValue = new String(sValue);
    let sRtnValue="";
    let i;

    if ( sValue != null ) {
        for (i = 0; i < objValue.length; i++ ) {
            if ( objValue.charAt(i) != " " ) {
                sRtnValue = sRtnValue + objValue.charAt(i);
            }
        }
    } else {
        return -1;
    }
    
    return sRtnValue;
};

/**
 * @class 문자열의 좌측부터 지정한 길이만큼 가져오는 함수
 * @param {String} sOrg - 원본 문자열
 * @param {Number} nSize - 얻어올 크기. [Default Value = 0]
 * @return {String} 문자열
 */
_pForm.gfnLeft = function (sOrg, nSize)
{
	return new String(sOrg).substr(0, nSize);
}

/**
 * @class 문자열의 우측부터 지정한 길이만큼 가져오는 함수 <br>
 * @param {String} sOrg - 원본 문자열
 * @param {Number} nSize - 출력될 문자열의 길이
 * @return {String} 결과값
 */
_pForm.gfnRight = function(sOrg, nSize)
{
	if ( this.gfnIsNull(sOrg) || this.gfnIsNull(nSize) )	return "";

	if ( sOrg.length < nSize )
		return sOrg;
	else
		return sOrg.substr(sOrg.length-nSize, nSize);
};

/**
 * @class 문자 전체 길이를 계산
 * @param {String} sVal - 문자열
                   - 문자, 숫자, 특수문자 : 1 로 Count
                   - 그외 한글/한자 : 3 로 count 되어 합산 
 * @return {Integer} Type에 따라 구해진 길이
 */
_pForm.gfnLengthByte = function (sVal)
{
	let lengthByte = 0;

	if (this.gfnIsNull(sVal)) {
		return -1;
	}

	for (let i = 0; i < sVal.length; i++)
	{
		if (sVal.charCodeAt(i) > 127) {
			lengthByte += 3;
		}
		else {
			lengthByte += 1;
		}
	}

	return lengthByte;
}

_pForm.gfnGetByteCount= function (str)
{
	let count = 0;
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode <= 0x7f) {
      count += 1;
    } else if (charCode <= 0x7ff) {
      count += 2;
    } else if (charCode <= 0xffff) {
      count += 3;
    } else {
      count += 4;
    }
  }
  return count;
};

/**
 * @class 문자열의 위치를 대소문자 구별하여 거꾸로 부터 찾아 첫번째 나온 index 반환<br>
 * @param {String} sOrg - 원래 문자열( 예 : "aaBBbbccBB" )
 * @param {String} sFind - 찾고자 하는 문자열( 예 : "BB" )
 * @param {Number} nStart - 검색 시작위치 (옵션 : Default=문자열의 끝 )
 * @return {Number}
 * @example
 * var nPos = this.gfnPosReverse("aaBBbbccBB", "BB"); <br>
 * 성공 = 찾고자 하는 문자열의 시작위치 ( 예 : 8 ) <br>
 * 실패 = -1 <br>
 */
_pForm.gfnPosReverse = function (sOrg, sFind, nStart)
{
	let pos;

	if (this.gfnIsNull(sOrg) || this.gfnIsNull(sFind)) 
	{
		return -1;
	}
	if (this.gfnIsNull(nStart)) 
	{
		nStart = sOrg.length - 1;
	}

	for (pos = nStart; pos >= 0; pos--) 
	{
		if (sOrg.substr(pos, sFind.length) == sFind) 
		{
			break;
		}
	}

	return pos;
};

/**
 * @class 입력받은 Number에 컴마를 추가한다. <br>
 * @param {Number} nNumber - 숫자
 * @param {Number} [nDetail] - 반올림할 소숫점 이하의 자릿수.
 * @return {String} Comma 가 포함하고 있는 숫자
 */
_pForm.gfnAppendComma = function(nNumber,nDetail)
{
	if (nNumber == null)	return "";
	if (nDetail	== null)	nDetail	= 0;
	
	nNumber				= parseFloat(nNumber);
	nNumber				= nexacro.round(nNumber, nDetail);
	
	let strNumber		= new String(nNumber);
	let arrNumber		= strNumber.split(".");
	let strFormatNum	= "";
	let j = 0, i;
	
	for (i = arrNumber[0].length - 1; i >= 0; i--)
	{
		if (i != strNumber.length && j == 3)
		{
			strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
			j = 0;
		}
		else
		{
			strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
		}
		j++;
	}
	
	if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];
	
	return strFormatNum;
};

/**
 * @class 컴마를 제거한다. <br>
 * @param {String} strValue - 컴마가 포함된 스트링
 * @return {String} 컴마가 제거된 스트링이 반환된다.
 */
_pForm.gfnRemoveComma = function(strValue)
{
	return strValue.replace(/\,/g, "");
};

/**
 * @class 입력 문자열중 숫자값만 남긴다. <br>
 * @param {String} strValue - 입력문자열
 * @return {String} 숫자문자열
 */
_pForm.gfnGetDigit = function(strValue)
{
	//2020.03.11 화면의 기간달력의 값일 경우 Object로 오게되어 형변환 추가
	if( typeof strValue == "object")
	{
		strValue =  this.gfnDateToStr(strValue);  
	}
	
	let strRet;
	const regExp = new RegExp("\\D","g");
	if(this.gfnIsNotNull(strValue)) strRet =  strValue.replace(regExp,"");
	else strRet = strValue;
	
	return strRet;
};

/**
 * @class 특수문자를 제거한다 <br>
 * @param {String} strValue
 * @return {String} 특수문자를 제거한 문자열
 */
_pForm.gfnRemoveSpecialChar = function(strValue)
{
   var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>";
   let i,j;
   
   for (i = 0; i < strValue.length; i++) {
      for (j = 0; j < strSpecial.length; j++) {
        if (strValue.charAt(i) == strSpecial.charAt(j))
	      strValue = strValue.replace(strValue.charAt(i), "");
      }
   }

   return strValue;
};

/** 
 * @class HTML TAG 제거 함수 <br>
 * @param {String} sHtml - 제거대상 문자열
 * @param {String} sTag - 제거할 tag(없으면 전체 tag제거)
 * @return {String}
 * @example
 * var str = this.gfnRemoveHtmlTag("정상적으로<BR>처리되었습니다.");
 */
_pForm.gfnRemoveHtmlTag = function(sHtml, sTag)
{
	if(this.gfnIsNull(sTag))
	{
	    sHtml = nexacro.replaceAll(sHtml, "<br>","\n");	
		sHtml = nexacro.replaceAll(sHtml, "<BR>","\n");	
	    const regExp = new RegExp("<(/)?([0-9a-zA-Z]*)(\\s[0-9a-zA-Z]*=[^>]*)?(\\s)*(/)?>","g"); 
	    sHtml = sHtml.replace(regExp, "");
	} 
	else if(sTag.toUpperCase() == "<BR>")
	{
	    sHtml = nexacro.replaceAll(sHtml, "<br>","\n");	
		sHtml = nexacro.replaceAll(sHtml, "<BR>","\n");	
	}
	else
	{
	    sHtml = nexacro.replaceAll(sHtml, sTag.toUpperCase(),"");	
		sHtml = nexacro.replaceAll(sHtml, sTag.toLowerCase(),"");	
	}
	return sHtml;
};

/**
 * @class 배열에 해당 값이 존재하는지 확인한다. <br>
 * @param {Array} arrVal
 * @param {String} varVal - 값
 * @return {Boolean} 배열에 존재여부
 */
_pForm.gfnIsExistInArray = function(arrVal, varVal) 
{
	let retVal = false;
	let retString = "";	
	let nCnt = arrVal.length;
	
	for(let i=0; i<nCnt; i++) {
		if (arrVal[i] == varVal) {
			retVal = true;
			break;
		}
	}

	return retVal;
};

/**
 * @class 입력된 10진수를 16진수로 변환하는 함수 <br>
 * @param {Number} nVal - 10진수
 * @return {String} 16진수 문자열
 */
_pForm.gfn10To16 = function(nVal)
{
	let n;
	n = (nVal).toString(16);

	return n;
};

/**
 * @class 입력된 16진수를 10진수로 변환하는 함수
 * @param {String} strVal - 16진수 문자열
 * @return {Number} 10진수 숫자
 */
_pForm.gfn16To10 = function(strVal)
{
	let n;
	n = (strVal).toString(10);
	
	return n;
};

/**
* @class 주어진 nexacro 개체의 type 을 반환 <br>
* @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
* @return {String} 개체의 type
* @example
* trace(this.gfnTypeOf(Button00));	// output : Button
* trace(this.gfnTypeOf(Tab00));	// output : Tab
* trace(this.gfnTypeOf(Tab00.tabpage1));	// output : Tabpage
* trace(this.gfnTypeOf(Dataset00));	// output : Dataset
*/
_pForm.gfnTypeOf = function(obj)
{
	let type;
	if ( obj && (typeof obj == "object"))
	{
		let s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	else {
		type = typeof(obj)
	}
	return type;
};


/**
 * @class   값에 대한 타입을 판별하는 함수 
 * @{string,array,numer,boolen,object} arg 
 * @return 변경된  type
 * @example 
   var arr = ["a","b"];
 * trace(this.gfnGetStirngTypeOf(arr));
 * res : [object Array]
*/ 
_pForm.gfnGetStirngTypeOf = function(arg)
{
   return Object.prototype.toString.call(arg);
};


/**
 * @class nexacro Component 여부 Check <br>
 * @param {Object} value - 체크할 Object	
 * @return {boolean}
 */
_pForm.gfnIsNexaComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;
	
	return value instanceof nexacro.Component;
};

 /**
 * @class object의 내용을 trace로 출력
 * @param {Object} objArg - 대상 Object
 * @param {String} [sName]  - key 값
 * @return N/A
 */
_pForm.gfnObjView = function (objArg, sName)
{
	for (let name in objArg)
	{
		if (this.gfnIsNull(sName) == false)
		{
			if (name == sName) {
				trace("name : " + name + " / value : " + objArg[name]);
			}
		}
		else {
			trace("name : " + name + " / value : " + objArg[name]);		
		}
	}
};

/**
 * @class   대상에서 오브젝트 반환
 * @param 	{Object} p - 오브젝트를 찾을 대상
 * @param 	{String} name - 오브젝트네임
 * @return  {Object} 오브젝트
 * @example
 * this.gfnLookup(this, "dsList");	
 */
_pForm.gfnLookup = function(p, name)
{
	let o;
	while (p)
	{		
		o = p.components;
		if ( o && o[name] ) return o[name];
		
		o = p.objects;
		if ( o && o[name] ) return o[name];
		
		p = p.parent;
	}
	return null;
};

/**
 * @class  지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.<br>
 * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br> 
 * @param {Array} array 대상 Array.
 * @param {String} prop 기준 속성.
 * @param {String} item 기준 값.
 * @param {Number} from 검색 시작 위치(default: 0).
 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var users = [];
 * users[0] = {id:"milk", name:"park", age:33};
 * users[1] = {id:"apple", name:"kim"};
 * users[2] = {id:"oops", name:"joo", age:44};
 * users[3] = {id:"beans", name:"lee", age:50};
 * users[4] = {id:"zoo", age:65};
 * users[5] = {id:"milk", name:"", age:33};
 * users[6] = {id:"milk", name:"lee", age:33};
 * var index = this.gfnLastIndexOfProp(users, "name", "lee");
 * trace("index==>" + index);	// output : index==>6
 * var index = this.gfnLastIndexOfProp(users, "name", "lee", 5);
 * trace("index==>" + index);	// output : index==>3
*/
_pForm.gfnLastIndexOfProp = function(array, prop, item, from, ps)
{
	let i, obj, 
		propValue;
	
	if (from == null)
	{
		from = array.length - 1;
	}
	else if (from < 0)
	{
		from = Math.max(0, array.length + from);
	}
	
	let strict = ps || false;
	
	if (strict)
	{
		for (i=from; i>=0; i--)
		{
			if (i in array && array[i])
			{
				obj = array[i],
				propValue = obj[prop];
				
				if (propValue === item)
				{
					return i;
				}
			}
		}
	}
	else
	{
		for (i=from; i>=0; i--)
		{
			if (i in array && array[i])
			{
				obj = array[i],
				propValue = obj[prop];
				
				if (propValue == item)
				{
					return i;
				}
			}
		}
	}
	
	return -1;
};


/**
 * @class  원하는 위치의 항목을 배열에서 삭제 처리한다.
 * @param {Array} array remove 대상 Array.
 * @param {Number} index remove하고자 하는 item index.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
*/
_pForm.gfnRemoveAt = function(array, index) 
{
	array.splice(index, 1);
};

/**
 * @class  alphabet character code.
 * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
*/
_pForm._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]

/**
 * @class  유일한 ID 를 반환
 * @param {String} prefix id 앞에 붙일 문자열
 * @param {String} separator id 생성시 구분용 문자(default: '-' ).
 * @return {String} id
 * @example
 * trace(this.gfnGetUniqueI()); 
 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
 * 
 * trace(this.gfnGetUniqueI("Button_")); 
 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
 * 
 * trace(this.gfnGetUniqueI("", "_")); 
 * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
 * 
 * trace(this.gfnGetUniqueId("Button_", "_")); 
 * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
*/
_pForm.gfnGetUniqueId = function(prefix, separator)
{
	if ( this.gfnIsNull(prefix) ) prefix = "";
	if ( this.gfnIsNull(separator) ) {
		separator = 45;
	} else {
		separator = separator.charCodeAt(0);
	}
	
	let pThis = this,
		charcode = this._ALPHA_CHAR_CODES,
		math = Math;
	let seq = 0;
	let seq0;
	const tmpArray = new Array(36);
	let idx = -1;
	
	while (seq < 8) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3) 
	{
		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4) 
		{
			tmpArray[++idx] = charcode[math.random() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = separator; //45 => "-", 95=> "_"
	
	let tmpStr = (new Date()).getTime();
	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8) 
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4) 
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
};


/**
 * @class  Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
 * @param {Object} prefix 순번 앞에 붙일 문자열
 * @param {String} prefix 순번 앞에 붙일 문자열
 * @return {String} id
 * @example
 * // this = Form
 * trace(this.gfnGetSequenceId(this, "Button")); // output : Button0
 * trace(this.gfnGetSequenceId(this, "Button")); // output : Button1
 * // this = Form
 * trace(this.gfnGetSequenceId(this, "chk_")); // output : chk_0
 * trace(this.gfnGetSequenceId(this, "chk_")); // output : chk_1
*/		
_pForm.gfnGetSequenceId = function(form, prefix)
{
	if ( this.gfnIsNull(form) ) 
	{
		trace("getSequenceId :: 1st argument doesn't exist !!");
		return null;
	}
	
	if ( this.gfnIsNull(prefix) ) 
	{
		trace("getSequenceId :: 2nd argument doesn't exist !!");
		return null;
	}
	
	if ( !(form instanceof Form) ) 
	{				
		trace("getSequenceId :: 1st argument must be a Form !!");
		return null;
	}
	
	let cache = form._sequenceIdCache;
	if ( this.gfnIsNull(cache) )
	{
		cache = form._sequenceIdCache = {};
	}
	
	let sequence = cache[prefix];
	if ( this.gfnIsNull(sequence) )
	{
		sequence = -1;
	}
	sequence++;
	
	cache[prefix] = sequence;
	
	return prefix + sequence;
};

/**
 * @class object 속성값들을 주어진 함수로 처리한다.<br>
 * 주어진 함수에서 return false를 하면 반복이 멈춘다.
 * @param {Object} object 대상 object.
 * @param {Function} func callback 함수. 
 * @param {String} func.prop object property name.
 * @param {Object} func.val object property value.
 * @param {Object} func.object object 그 자체.
 * @param {Object} scope callback 함수에 대한 수행 scope.
 * @example
 * var datas = {code: "001", userId: "", name: "pete"};
 * this.gfnEach(datas, (prop, val, object) => {
 * 	var result = "";
 * 	if ( !val )
 * 	{
 * 		result = prop + " must have not a non-empty value!"
 * 		st_result03.text += result;
 * 		trace(result);	// output : userId must have not a non-empty value!
 * 		return false;
 * 	}
 * 	result = prop + ":" + val;
 * 	st_result03.text += result + "  ";
 * 	trace(result);	// output : code:001
 * }, this);
*/
_pForm.gfnEach = function(object, func, s)
{
	let p,
		scope = s || object;
	for (p in object)
	{
		if (object.hasOwnProperty(p))
		{
			if (func.call(scope, p, object[p], object) === false)
			{
				return;
			}
		}
	}
};


/**
 * @class 지정된 항목이 배열에 포함되어 있는지 확인한다.
 * @param {Array} array 검색 대상 Array.
 * @param {Object} item 찾고자 하는 Item.
 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Boolean} 포함되어 있다면 true, 없다면 false를 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var contain = this.gfnContains(mon, "Mar");
 * trace("contain==>" + contain);	// output : contain==>true
 * var contain = this.gfnContains(mon, "May");
 * trace("contain==>" + contain);	// output : contain==>false
*/
_pForm.gfnContains = function(array, item, strict) 
{
	if (this.gfnIndexOf(array, item, null, strict) === -1) 
	{
		return false;
	}
	else
	{
		return true;
	}
};

/**
 * @class 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
 * @param {Array} array 검색 대상 Array.
 * @param {Object} item 찾고자 하는 Item.
 * @param {Number} from 검색의 시작 위치 (default: 0).
 * @param {Booleans} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var index = this.gfnIndexOf(mon, "Mar");
 * trace("index==>" + index);	// output : index==>2
 * var index = this.gfnIndexOf(mon, "May");
 * trace("index==>" + index);	// output : index==>-1
*/
_pForm.gfnIndexOf = function(array, item, from, strict) 
{
	const len = array.length;
	if ( from == null ) from = 0;;
	strict == !!strict;
	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	if (from < 0)
	{
		from += len;
	}
	
	if (strict)
	{
		for (; from < len; from++) 
		{
			if ( array[from] === item)
			{
				return from;
			}
		}
	}
	else
	{
		for (; from < len; from++) 
		{
			if ( array[from] == item)
			{
				return from;
			}
		}
	}
	
	return -1;
};


/**
 * @class 입력된 sValue에 nLength 만큼 오른쪽에 Char를 채운다.
 * @{string} sValue (문자열)
 * @{string} nLength (자리수)
 * @{string} Char (문자)
 * @return {string}
*/
_pForm.gfnRpad = function(sValue, nLength, Char)
{
	if (new String(sValue).valueOf() == "undefined") 
	{
		sValue = "";
	}
	if (this.gfnIsNull(sValue)) 
	{
		sValue = "";
	}

	let strRetVal = new String(sValue);
	let nIteration = nLength - this.gfnLengthByte(strRetVal);

	for (var i = 0; i < nIteration; i++) 
	{
		strRetVal = strRetVal + Char;
	}
	return strRetVal;
};

/**
 * @class 입력된 sValue에 nLength 만큼 왼쪽에 Char를 채운다.
 * @{string} sValue (문자열)
 * @{string} nLength (자리수)
 * @{string} Char (문자)
 * @return {string}
*/ 
_pForm.gfnLpad = function(sValue, nLength, Char)
{
	if (new String(sValue).valueOf() == "undefined") 
	{
		sValue = "";
	}
	if (this.gfnIsNull(sValue)) 
	{
		sValue = "";
	}

	let strRetVal = new String(sValue);
	let strChar = "";
	let nIteration = nLength - this.gfnLengthByte(strRetVal);
	for (var i = 0; i < nIteration; i++) 
	{
		strChar = Char + strChar;
	}
	return (strChar + strRetVal);
};



/**
 * @class  object를 json string으로 변환하는 함수
 * @param {object}  json object
 * @return  변환된 stirng 
 * @example 
 * 	var objJson = new Object();
	objJson.key1 = "testvalue";
	objJson.key2 = encodeURI(this.ds_1.saveXML("ds_1", "a"));
	objJson.key3 = encodeURI(this.ds_2.saveXML());
    
	var rtnObj = this.gfnJSONToString(objJson);
 * 
*/ 
_pForm.gfnJSONToString = function(object)
{
    let isArray = (object.join && object.pop && object.push
                    && object.reverse && object.shift && object.slice && object.splice);
    let results = [];
 
    for (let i in object) {
        var value = object[i];
         
		results.push((isArray ? "" : "\"" + i.toString() + "\" : ") 
						+ (typeof value == "string" ? "\"" + value + "\"" : value));
    }
     
    return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
};




/**
 * value의 number 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} number 여부.
 * @example
 * trace(this.gfnIsNumber(1234));	// output : true
 * trace(this.gfnIsNumber("1234"));	// output : false		 
 * @memberOf 
 */		
_pForm.gfnIsNumber = function(value) {
	return typeof value === 'number' && isFinite(value);
};

/**
 * Browser 여부 반환
 * @return  true : runtime  false : webbrowser
 * @example
 var isBrowser = this.gfnIsNexacro();
 trace(isBRowser);  // runtime
 * @memberOf 
 */
_pForm.gfnIsNexacro = function()
{
   if(system.navigatorname == "nexacro")
   return true;
   else
   return false;
};

/**
 * xml 인코더
 * @return  true : runtime  false : webbrowser
 * @example
 var str = "\n";
 var isBrowser = this.gfnXmlEncoder(str);
 trace(isBRowser);  // runtime
 * @memberOf 
 */
_pForm.gfnXmlEncoder = function(str) {
	let ret = "";
	if (str != null && str.length > 0)
		ret = str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
	return ret;
};

/**
 * @class text 넓이 및 높이를 구하는 함수
 * @param {String} sText - text
 * @return {Array} text 넓이 및 높이 배열
 */
_pForm.gfnGetTextSize = function(sText) 
{
   let strfont = 'font : 600 13px "Malgun Gothic"';
	var objStatic  = new nexacro.Static();
	objStatic.init("objStatic", 0, 0, 0, 0);
	this.addChild("objStatic", objStatic); 
	objStatic.font = strfont; 
	objStatic.text = sText;
//	
	//objStatic.fittocontents = "both";
	objStatic.visible = false;
	objStatic.show(); 
	
	var width = 0, height = 0;
	
	width  = objStatic.getOffsetWidth();
	height = objStatic.getPixelHeight();
	
	this.removeChild("objStatic"); 
	objStatic.destroy();
	objStatic = null;
	
	return [width, height];
};


/**
 * json key 값 변환 자동화
 * @param {object}  json s
 * @return 
   json object 대문자 key 변경 값
 * @example
// 사용 예시 (대문자 변환)
const data = { name: "John", items: [{ id: 1 }] };
const result = this.gfnTransformKeys(data, key => key.toUpperCase());
 * @memberOf 
 */
_pForm.gfnTransformKeys = function(obj, transformFn) {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => this.gfnTransformKeys(item, transformFn));
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      this.gfnTransformKeys(key),
      this.gfnTransformKeys(value, transformFn)
    ])
  );
}

_pForm.gfnGetTextLength = function(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len++;
        }
        len++;
    }
    return len;
}

/************************************************************************************************
* Dataset 관련 Util
************************************************************************************************/

 /**
 * @class 컨트롤이 Dataset에 bind되어 있을 경우 즉시 value를 Dataset에 적용시킨다.
 * @return N/A
 */   
_pForm.gfnUpdateToDataset = function()
{
	let objComp = this.getFocus();
	
	if (objComp != null) 
	{
		try 
		{
			objComp.updateToDataset();
		}
		catch (e) 
		{
		}
	}
};

 /**
 * @class dataSet의 Row 중에서 변경된 내용이 있는지 여부
 * @param {Object} objDs - 확인 대상 Dataset
 * @return {boolean}
 */   
_pForm.gfnDsIsUpdated = function (objDs)
{
	if (objDs.getDeletedRowCount() > 0) 
	{
		return true;
	}
	
	for(var i = 0 ; i < objDs.getRowCount() ; i++)
	{
		if(objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4 || objDs.getRowType(i) == 8)
		{
		
			return true;
		}
	}
	return false;
};

 /**
 * @class dataSet의 Row가 변경되었는지 판단하는 함수
 * @param {Object} ObjDs - 대상 dataset
 * @param {Number} nRow - row값
 * @return {boolean}
 */   
_pForm.gfnIsUpdatedRow = function (objDs, nRow)
{
	if (objDs.updatecontrol == true) 
	{
		if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4) 
		{
			return true;
		}
		return false;
	}
	else 
	{
		for (var i = 0; objDs.getColCount(); i++) 
		{
			if (this.gfnIsUpdateColumn(objDs, nRow, i) == true) 
			{
				return true;
			}
		}
	}
	return false;
};

 /**
 * @class dataSet의 Row 에서 해당 칼럼이 변경되었는지 판단하는 함수
 * @param {Object} ObjDs - 대상 dataset
 * @param {Number} nRow - row값
 * @param {String || Number} Column - 칼럼명 or 칼럼index
 * @return {boolean}
 */   
_pForm.gfnIsUpdateColumn = function (objDs, nRow, Column)
{
	if (objDs.getRowType(nRow) == 2) 
	{
		if (this.gfnIsNull(objDs.getColumn(nRow, Column))) 
		{
			return false;
		}
	}
	else 
	{
		if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column)) 
		{
			return false;
		}
	}
	return true;
};


/**
 * @class DataSet이 존재하면 그대로 리턴하고 없으면 생성해서 리턴함
 * @param strDatasetNm - DataSet Name
 * @return 생성된 DataSet
 */  
_pForm.gfnGetDataSet = function(strDatasetNm)
{
	let objDataset;
	if (!this.isValidObject(strDatasetNm)){
		objDataset = new Dataset(strDatasetNm);
		objDataset.name = strDatasetNm;
		this.addChild(strDatasetNm, objDataset);
	} else {
		//objDataset = eval(strDatasetNm);
		objDataset = this.objects[strDatasetNm];
	}
	
	return objDataset;
};


/**
 * @class 바인드되어 있는 Dataset에 해당되는 ColumnId 를 가지고 있는 Cell의 Index 반환
 * @param 비교할 ColumnId
 * @return 못찾으면 '-1' 을 반환
 */  
_pForm.gfnGetCellIdx = function(objGrid, strCompColumnId) 
{
    //var arrColumnId = new Array();
    
    let nCellCnt = objGrid.getCellCount("body");
    
    for ( let i = 0; i < nCellCnt; i++ ){
        
        let strColumnId = String( objGrid.getCellProperty( "body", i, "text" ) ).replace( "bind:", "" );
        
        if ( strColumnId == strCompColumnId ){
        
            return i;
        }
    }
    return -1;
};

 /**
 * @class dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
 * @param {Object} objDs - 대상 dataset
 * @param {String} sIdCol - 키칼럼
 * @param {String} strId - 키값
 * @param {String} sInfo - dataSet 칼럼
 * @param {String} sSubCol - 서브키칼럼
 * @param {String} sSubId - 서브 키값
 * @return {Object} 칼럼값
 */ 
_pForm.gfnGetLookupData = function (objDs, sIdCol, strId, sInfo, sSubCol, sSubId)
{
	var sVal;
	var nCurRow = this.gfnFindData(objDs, sIdCol, strId, sSubCol, sSubId);
	if (nCurRow < 0) 
	{
		return "";
	}
	
	sVal = objDs.getColumn(nCurRow, sInfo);
	if (this.gfnIsNull(sVal)) 
	{
		return "";
	}

	return sVal;
};

/**
 * @class dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
 * @param {Object} objDs - 대상 dataset
 * @param {String} sIdCol - 키칼럼
 * @param {String} sId - 키값
 * @param {String} sSubCol - 서브키칼럼
 * @param {String} sSubId - 서브 키값
 * @return {Number} rowpostion
 */ 
_pForm.gfnFindData = function (objDs, sIdCol, sId, sSubCol, sSubId)
{
	var arrArgument = this.gfnFindData.arguments;
	
	if(this.gfnIsNull(sSubCol)) 
	{
		return objDs.findRow(sIdCol, sId);
	}
	
	return objDs.findRowExpr(sIdCol + " == '" + sId + "' && " + sSubCol + " == '" + sSubId + "'");
};


/**
 * grid 바인딩 컬럼 정보 dataset 변환
 * @param {comp}   원본 grid
 * @param {dataset}  만들 dataset
 * @return {dataset} dataset 
 * @example
    var dsImport = this.gfnGridToDataset(this.grdMessage,this.dsImport);
 * @memberOf 
 */
_pForm.gfnGridToDataset = function (grd,dsObj)
{

    if(!this.isValidObject(dsObj) || !this.isValidObject(grd)  ) return;
	
	dsObj.clear();
		
	for (let ncell=0; ncell<grd.getCellCount("body");ncell++)
	{
   
	    let bindTxt = grd.getCellProperty("body",ncell,"text");
		if ( !this.gfnIsNull(bindTxt) ){
		   if ( bindTxt.search(/^bind:/) > -1 ) {
				let	columnid = bindTxt.replace(/^bind:/, "");
				
				   dsObj.addColumn(columnid);
			}  
		
		}
		
	}
	
	
	 return dsObj;
	
};

/************************************************************************************************
* Date 관련 Util
************************************************************************************************/


 /**
 * @class 해당 PC의 오늘 날짜를 가져온다.
 * @param 
 * @return string
 */
_pForm.gfnToday = function ()
{
	let strToday = "";
	let objDate = new Date();

	let yyyy = objDate.getFullYear();
	let month = objDate.getMonth() + 1;
	let day = objDate.getDate();

	strToday = String(yyyy) + String(month).padLeft(2, "0") + String(day).padLeft(2, "0");
	objDate = null;

	return strToday;
}

/**
 * @class 날짜 여부를 확인한다.(년월 or 년월일) <br>
 * @param {String} strDate - 입력스트링(YYYYMM or YYYYMMDD)
 * @return {Boolean}
 */
_pForm.gfnIsDate = function(strDate)
{
	if (this.gfnIsNull(strDate)) return false;
	
	let retVal;
	switch(strDate.length)
	{
		case 6://년월
			retVal =  this.gfnIsYM(strDate);
			break;
		case 8://년월일
			retVal =  this.gfnIsYMD(strDate);
			break;
		default:
			retVal = false; 
			break;
	}

	return retVal;
};

/**
 * @class 날짜 여부를 확인한다.(년월일) <br>
 * @param {String} strDate - 8자리의 숫자로 된 날짜(YYYYMMDD)
 * @return {Boolean}
 */
_pForm.gfnIsYMD = function(strDate)
{
	let retVal = this.gfnGetDigit(strDate);
	
	if( this.gfnIsNull(retVal)) return false;
	
	if (retVal.length != 8 ) {
		return false;
	}

	let strYM = retVal.substr(0,6);	//년월
	if (!this.gfnIsYM(strYM)) {
		return false;
	}
	let nDay   = Number(retVal.substr(6,2));	// 일자
	let nLastDay = Number(this.gfnGetLastDate(strYM).substr(6,2));//gfnGetLastDay에서 전체 20170331값이 넘어와서 .substr(6,2)추가 20170313
	if (nDay < 1 || nDay > nLastDay) {
		return false;
	}
	return true;
};

/**
 * @class 날짜 여부를 확인한다.(년월) <br>
 * @param {String} strDate - 6자리의 숫자로 된 날짜(YYYYMM)
 * @return {Boolean}
 */
_pForm.gfnIsYM = function(strDate)
{
  	let retVal = this.gfnGetDigit(strDate);

	if (retVal.length != 6) {
		return false;
	}

	let nYear  = Number(strDate.substr(0,4));	//년도값을 숫자로
	let nMonth = Number(strDate.substr(4,2));	//월을 숫자로

	if((nMonth < 1) || (nMonth > 12)) {
		return false;
	}

	return true;
};

/**
 * @class 시간 형식에 맞는지 Check 한다. <br>
 * @param {String} strTime - 6자리의 숫자로 된 내부시간형식(HHMMSS)
 * @return {Boolean}
 */
_pForm.gfnIsTime = function(strTime)
{
	if (strTime.length != 6 || !this.gfnIsNumber(strTime)) {
		return false;
	}
	
	let t01 = Number(strTime.slice(0, 2));
	let t02 = Number(strTime.slice(2, 2));
	let t03 = Number(strTime.slice(4, 2));

	if((t01 < 0 || t01 > 23) || (t02 < 0 || t02 > 59) || (t03 < 0 || t03 > 59)) {
		return false;
	} else {
		return true;
	}
};

/**
 * @class 현재일자를 구한다. <br>
 * @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
 * @return {String} 8자리 날짜(YYYYMMMDD)문자열
 */
_pForm.gfnGetDate = function(sGubn) 
{
	if(this.gfnIsNull(sGubn)) sGubn = "date";
	let d = new Date();
	
	let s;
	
	if (sGubn == "date") {
		s = d.getFullYear()
			  + ((d.getMonth() + 1) + "").padLeft(2, '0')
			  + (d.getDate() + "").padLeft(2, '0');
	}
	else if (sGubn == "time") {
		s = d.getFullYear()
	      + ((d.getMonth() + 1) + "").padLeft(2, '0')
	      + (d.getDate() + "").padLeft(2, '0')
	      + (d.getHours() + "").padLeft(2, '0')
	      + (d.getMinutes() + "").padLeft(2, '0')
	      + (d.getSeconds() + "").padLeft(2, '0');
	}
	else if (sGubn == "milli") {
		s = d.getFullYear()
	      + ((d.getMonth() + 1) + "").padLeft(2, '0')
	      + (d.getDate() + "").padLeft(2, '0')
	      + (d.getHours() + "").padLeft(2, '0')
	      + (d.getMinutes() + "").padLeft(2, '0')
	      + (d.getSeconds() + "").padLeft(2, '0')
		  + (d.getMilliseconds() + "").padLeft(3, '0');
	}
	return (s);
};

/**
 * @class 년월을 입력받아 마지막 일를 반환한다(년월) <br>
 * @param {String} strDate - 6 / 8 자리의 숫자로 된 날짜(YYYYMM)
 * @return {String} 해당월의 마지막날 8자리
 */
_pForm.gfnGetLastDate = function(strDate)
{
	let s = "";
    if (strDate == null) {
	    var date = (new Date()).addMonth(1);
    }
    else {
	    var date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2)),1);
    }

	date = (new Date(date)).addDate((new Date(date)).getDate()*-1);

	s = (new Date(date)).getFullYear()
	  + (((new Date(date)).getMonth() + 1) + "").padLeft(2, '0')
	  + ((new Date(date)).getDate() + "").padLeft(2, '0');

	return (s);
};

/**
 * @class 현재월 1일 만들기. <br>
 * @param {String} strDate - Date Format YYYYMM / YYYYMMDD
 * @return {String} date
 */
_pForm.gfnGetFirstDate = function(strDate)
{
    let s = "";

    if (strDate == null) {
	    s = getToday().substr(0,6) + "01";
    }
    else {
	    let date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2))-1,1);
	    s = (new Date(date)).getFullYear()
	      + (((new Date(date)).getMonth()+1)+ "").padLeft(2, '0')
	      + ((new Date(date)).getDate() + "").padLeft(2, '0');

    }
    
	return (s);
};

/**
 * @class 입력된 날자로부터 요일을 구함 <br>
 * @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
 * @return {Number} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return.
 */
_pForm.gfnGetDay = function(strDate)
{
    let date = new Date();

    let iYear = parseInt(strDate.substr(0, 4));
    let iMonth = parseInt(strDate.substr(4, 2) - 1);
    let iDate = parseInt(strDate.substr(6, 2));
    
	date.setFullYear(iYear,iMonth,iDate);
    return date.getDay();
};

/**
 * @class 두 일자간의 차이 일수 계산 <br>
 * @param {String} sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
 * @param {String} sEndDate - yyyyMMdd형태의 To 일자   ( 예 : "20121202" )
 * @return {Number} 숫자 형태의 차이일수( 예 : 10 ) 단, sEndDate < sStartDate이면 음수가 return된다.
 */
_pForm.gfnGetDiffDate = function(sStartDate, sEndDate)
{
     	if(this.gfnIsNull(sStartDate) || this.gfnIsNull(sEndDate)) return;
		
		if(this.gfnIsYM(sStartDate)) sStartDate +=  "01";
		if(this.gfnIsYM(sEndDate)) sEndDate += "01";
		
    let vFromDate = new Date(parseInt(sEndDate.substring(0,4),  10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
    let vToDate = new Date(parseInt(sStartDate.substring(0,4),  10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));
    
    return parseInt((vFromDate - vToDate)/(1000*60*60*24));
};

/**
 * @class 두 일자간의 차이 일수 계산. 단, sStartDate, sEndDate의 일은 포함하지 않고 계산된다. <br>
 * @param {String} sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
 * @param {String} sEndDate - yyyyMMdd형태의 To 일자   ( 예 : "20121202" )
 * @return {Number} 숫자 형태의 차이월수 ( 예 : 10 ) 단, sEndDate < sStartDate이면 음수가 return된다.
 */
_pForm.gfnGetDiffMonth = function(sStartDate, sEndDate)
{
	let nStartMon, nEndMon;
	
	nStartMon = parseInt(sStartDate.substr(0,4), 10)*12 + parseInt(sStartDate.substr(4,2), 10);
	nEndMon = parseInt(sEndDate.substr(0,4), 10)*12 + parseInt(sEndDate.substr(4,2), 10);
	
	return (nEndMon - nStartMon);
};

/**
 * @class 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함 <br>
 * @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
 * @param {Number} nOffSet - 날짜로부터 증가 감소값.
 * @return {String} date의 문자열 (ex. 20080821)
 */
_pForm.gfnAddDate = function(strDate, nOffSet)
{
	let date = new Date();
	
    let iYear = parseInt(strDate.substr(0, 4));
    let iMonth = parseInt(strDate.substr(4, 2) - 1);
    let iDate = parseInt(strDate.substr(6, 2)-(nOffSet*-1));
    
	date.setFullYear(iYear,iMonth,iDate);	
	
	return this.gfnDateToStr(date);
};

/**
 * @class 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함 <br>
 * @param {String} strDate - String Date Format
 * @param {Number} OffSet - Integer Format
 * @return {String} date
 */
_pForm.gfnAddMonth = function(strDate, OffSet) 
{	
	let date, d, s, mon, val;

	/**
	 * @class 입력일자 해당월의 마지막 일 <br>
	 * @param {String} strMonth - 'yyyyMMdd' 형태로 표현된 날짜.
	 * @return {Number} 해당월의 마지막일자 2자리
	 */
	var gfnGetMonthLastDate = function(strMonth) {
		let iLastDay;
		let iYear  = parseInt(strMonth.substr(0, 4),10) ;
		let iMonth = parseInt(strMonth.substr(4, 2),10);
		switch(iMonth)
		{
			case 2 :
				if( ((iYear%4)==0) && ((iYear%100)!=0) || ((iYear%400)==0) )
					iLastDay = 29;
				else
					iLastDay = 28;			
				break;
			case 4 :
			case 6 :
			case 9 :
			case 11 :
				iLastDay = 30;
				break;
			default:
				iLastDay = 31;
				break;
		}
		
		return iLastDay;
	};

    if (strDate) {
        date = this.gfnStrToDate(strDate);
        d = (new Date(date)).addMonth(OffSet);
    } else {
    	date = this.gfnStrToDate(this.gfnGetDate());
		d = (new Date(date)).addMonth(OffSet);
    }
    
    if (gfnGetMonthLastDate(strDate) == date.getDate()) {
    	var sY = new Date(d).getFullYear();
    	var sM = new Date(d).getMonth();
    	var eY = date.getFullYear();
    	var eM = date.getMonth();
    	
    	mon = -((eY - sY)* 12 + (eM - sM));
    	
    	if (mon != OffSet) {
   			val = OffSet - mon;
    		d = (new Date(d)).addMonth(-1);
    	}
    	
    	var ld = new Date((new Date(d)).getFullYear() 
    			, (new Date(d)).getMonth()
    			, gfnGetMonthLastDate(this.gfnDateToStr(new Date(d))));
    	
    	s = (new Date(ld)).getFullYear()
		   + (((new Date(ld)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(ld)).getDate()) + "").padLeft(2, '0');
    } else {
    	s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
    }
	
	return (s);
};

/**
 * @class 법정공휴일 구하기 <br>
 * @param {Number} nYear - yyyy
 * @return {Array} 휴일정보
 * @example : 
 */
_pForm.gfnGetHolidays = function(nYear)
{
	
	let aHoliday = new Array();

 
	/////// 음력 체크
	// 구정
	aHoliday[0] = this.gfnLunarToSolar((nYear-1) + "1230", false) + "설날";    //설날
	aHoliday[1] = this.gfnAddDate(aHoliday[0].substring(0, 8), 1) + "설날";//"설날"
	aHoliday[2] = this.gfnAddDate(aHoliday[1].substring(0, 8), 1) + "설날"; //"설날"
	// 석가탄신일
	aHoliday[3] = this.gfnLunarToSolar(nYear + "0408", false) + "석가탄신일";  //석가탄신일
	// 추석
	aHoliday[4] = this.gfnLunarToSolar(nYear + "0814", false) + "추석"; // 추석     
	aHoliday[5] = this.gfnAddDate(aHoliday[4].substring(0, 8), 1) + "추석"; //"추석"
	aHoliday[6] = this.gfnAddDate(aHoliday[5].substring(0, 8), 1) + "추석"; //"추석"	

	/////// 양력 체크
	aHoliday[7] = nYear+"0101" + "신정"; //"신정"
	aHoliday[8] = nYear+"0301" + "삼일절"; //"삼일절"  
	aHoliday[9] = nYear+"0505" +"어린이날"; // "어린이날"	 
	aHoliday[10] = nYear+"0606" + "현충일";	  	  //현충일
	aHoliday[11] = nYear+"0815" + "광복절";  //"광복절"	   
	aHoliday[12] = nYear +"1003" + "개천절";  //개천절 
	aHoliday[13] = nYear +"1009" + "한글날"; //"한글날"
	aHoliday[14] = nYear+"1225" + "성탄절";  //성탄절		 	
	 
	return aHoliday.sort();
};

/**
 * @class 양력을 음력으로 변환해주는 함수.<br>
 * [주의사항]<br>
 *  1. return값이 8자리가 아니고 9자리임에 주의<br>
 *  2. 처리가능 기간  1841 - 2043년
 * @param {String | Date} value - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return {String} Flag(평달 = "0", 윤달 = "1") + 'yyyyMMdd'형태의 음력일자
 * @example
 * var dt = this.gfnStr2Date("20130331");
 * var str = this.solarToLunar(dt);
 * trace(str); // output : 020130220
 * var str1 = "20130331";
 * var str = this.solarToLunar(str1);
 * trace(str); // output : 020130220
 */		
_pForm.gfnSolarToLunar =  function(value) 
{
	let sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	let arrMd       = [];
	let arrBaseInfo = [];
	let arrDt       = [];	// 매년의 음력일수를 저장할 배열 변수
	let nTd;		    			// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
	let nTd1;			    		// 1840년까지의 날수
	let nTd2;				    	// 현재까지의 날수
	let nTemp;					    // 임시변수
	let nLy, nLm, nLd;			    // 계산된 음력 년, 월, 일을 저장할 변수
	let sLyoon;					    // 현재월이 윤달임을 표시

	let nY, nM, nD;

	nY = parseInt(value.substr(0,4), 10);
	nM = parseInt(value.substr(4,2), 10);
	nD = parseInt(value.substr(6,2), 10);
	
	
	if (nY < 1841 || nY > 2043)	
	{
		return null;
	}

	arrBaseInfo = this.gfnSolarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
		
	//윤년여부 확인
	if ((nY % 4) == 0) 
	{
		if ((nY % 100) != 0 || (nY % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 

	// 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
	nTd1 = 672069; 	 
		
	// 1841년부터 작년까지의 날수
	nTd2 = (nY - 1) * 365 + parseInt((nY - 1)/4) - parseInt((nY - 1)/100) + parseInt((nY - 1)/400);
		
	// 전월까지의 날수를 더함
	for (var i = 0; i <= nM - 2; i++)
	{
		nTd2 = nTd2 + parseInt(arrMd[i]);
	}

	// 현재일까지의 날수를 더함
	nTd2 = nTd2 + nD;

	// 양력현재일과 음력 1840년까지의 날수의 차이
	nTd = nTd2 - nTd1 + 1;
	
	// 1841년부터 음력날수를 계산
	for (var i = 0; i <= nY - 1841; i++)
	{
		arrDt[i] = 0;
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTemp = 29;
						 break;
				case 2 : nTemp = 30;
						 break;				
				case 3 : nTemp = 58;	// 29 + 29
						 break;				
				case 4 : nTemp = 59;	// 29 + 30
						 break;				
				case 5 : nTemp = 59;	// 30 + 29
						 break;				
				case 6 : nTemp = 60;	// 30 + 30
						 break;				
			}
			
			arrDt[i] = arrDt[i] + nTemp;
		}
	}
		
	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
	nLy = 0;
	do
	{
		nTd = nTd - arrDt[nLy];
		nLy = nLy + 1;
	}
	while(nTd > arrDt[nLy]);
	
	nLm    = 0;
	sLyoon = "0";	// 현재월이 윤달임을 표시할 변수 - 기본값 평달
	do
	{

		if (parseInt(arrBaseInfo[nLy * 12 + nLm]) <= 2)
		{
			nTemp = parseInt(arrBaseInfo[nLy * 12 + nLm]) + 28;
			if (nTd > nTemp)
			{
				nTd = nTd - nTemp;
				nLm = nLm + 1;
			}
			else
			{
				break;
			}
		}
		else
		{
			switch (parseInt(arrBaseInfo[nLy * 12 + nLm]))
			{
				case 3 :
					m1 = 29;
					m2 = 29;
					break;
				case 4 : 
					m1 = 29;
					m2 = 30;
					break;					
				case 5 : 
					m1 = 30;
					m2 = 29;
					break;					
				case 6 : 
					m1 = 30;
					m2 = 30;
					break;					
			}

			if (nTd > m1)
			{
				nTd = nTd - m1;
				if (nTd > m2)
				{
					nTd = nTd - m2;
					nLm = nLm + 1;
				}
				else
				{
					sLyoon = "1";
				}
			}
			else
			{
				break;
			}
		}
	}
	while(1);
	
	nLy = nLy + 1841;
	nLm = nLm + 1;
	nLd = nTd;

	let sRtn = sLyoon + nLy; 
	sRtn = sRtn + nLm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nLd.toString().padLeft(2, "0");    
	return sRtn;
};		

/**
 * @class 음력을 양력으로 변환. <br>
 * @param {String | Date} value - yyyyMMdd형태의 음력일자 ( 예 : "20121122" ).
 * @param {Boolean} leapMonth - 윤달 여부.
 * @return {String} 'yyyyMMdd'형태의 양력일자
 */
_pForm.gfnLunarToSolar = function(value, leapMonth)
{

	const sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	let arrMd       = [];	
	let arrBaseInfo = [];
	let nTd         = 0;
	let nSy, nSm, nSd;			    // 계산된 양력 년, 월, 일을 저장할 변수
	let nY1, nM1, nY2, nY3, nTemp;	// 임시변수	
	let nLeap;    
		
	let nLy, nLm, nLd;

	nLy = parseInt(value.substr(0,4), 10);
	nLm = parseInt(value.substr(4,2), 10);
	nLd = parseInt(value.substr(6,2), 10);
	

	if (nLy < 1841 || nLy > 2043)	
	{
		return null;
	}	

	arrBaseInfo = this.gfnSolarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
	
	//윤년여부 확인
	if ((nLy % 4) == 0) 
	{
		if ((nLy % 100) != 0 || (nLy % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 
		
	nY1   = nLy - 1841; //176
	nM1   = nLm - 1; //02
	nLeap = 0;
	
	if (parseInt(arrBaseInfo[nY1 * 12 + nM1]) > 2)
	{
		//윤년여부 확인
		if ((nLy % 4) == 0) 
		{
			if ((nLy % 100) != 0 || (nLy % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 
	}
	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;
			case 4 : nTemp = 30;
					 break;			
			case 5 : nTemp = 29;
					 break;			
			case 6 : nTemp = 30;
					 break;
		}
	}
	else
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 1 : nTemp = 29;
					 break;			
			case 2 : nTemp = 30;
					 break;			
			case 3 : nTemp = 29;
					 break;			
			case 4 : nTemp = 29;
					 break;			
			case 5 : nTemp = 30;
					 break;			
			case 6 : nTemp = 30;
					 break;			
		}
	}
	
	let tempY1 = nY1 - 1;
	for (var i = 0; i <= tempY1; i++)
	{
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTd = nTd + 29;
						 break;
				case 2 : nTd = nTd + 30;
						 break;				
				case 3 : nTd = nTd + 58;
						 break;				
				case 4 : nTd = nTd + 59;
						 break;				
				case 5 : nTd = nTd + 59;
						 break;				
				case 6 : nTd = nTd + 60;
						 break;				
			}
		}
	}

	let tempM1 = nM1 - 1;
	for (var j = 0; j <= tempM1; j++)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + j]))
		{
			case 1 : nTd = nTd + 29;
					 break;			
			case 2 : nTd = nTd + 30;
					 break;						
			case 3 : nTd = nTd + 58;
					 break;						
			case 4 : nTd = nTd + 59;
					 break;						
			case 5 : nTd = nTd + 59;
					 break;						
			case 6 : nTd = nTd + 60;
					 break;						
		}
	}

	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;						
			case 4 : nTemp = 29;
					 break;						
			case 5 : nTemp = 30;
					 break;						
			case 6 : nTemp = 30;
					 break;						
		}
	}
	
	nTd = nTd + nLd + 22;
	
	if (leapMonth)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTd = nTd + 29;
					 break;						
			case 4 : nTd = nTd + 30;
					 break;						
			case 5 : nTd = nTd + 29;
					 break;						
			case 6 : nTd = nTd + 30;
					 break;						
		}
	}
	
	nY1 = 1840;
	do
	{
		nY1 = nY1 + 1;
		
		nLeap = 0;
		
		//윤년여부 확인
		if ((nY1 % 4) == 0) 
		{
			if ((nY1 % 100) != 0 || (nY1 % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 

		if (nLeap == 1)
		{
			nY2 = 366;
		}
		else
		{
			nY2 = 365;
		}

		if( nTd <= nY2 )
		{
			break;
		}
			
		nTd = nTd - nY2;
	}
	while(1);

	nSy      = nY1;
	arrMd[1] = nY2 - 337;
	nM1      = 0;
	
	do
	{
		nM1 = nM1 + 1;
		if (nTd <= parseInt(arrMd[nM1-1]))
		{
			break;
		}
		nTd = nTd - parseInt(arrMd[nM1-1]);
	}
	while(1);
	
	nSm = nM1;
	nSd = nTd;
	nY3 = nSy;
	nTd = nY3 * 365 + parseInt(nY3/4) - parseInt(nY3/100) + parseInt(nY3/400);
	
	var tempSm = nSm - 1;
	for (var i = 0; i <= tempSm; i++)
	{
		nTd = nTd + parseInt(arrMd[i]);
	}

	nTd = nTd + nSd;

	var sRtn = nY3;
	sRtn = sRtn + nSm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nSd.toString().padLeft(2, "0");    

	return sRtn;	
};

/**
 * @class 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년) <br>
 * @return {String}
 */	 
_pForm.gfnSolarBase = function ()
{
	let sBase;
			
	//1841
	sBase = "1,2,4,1,1,2,1,2,1,2,2,1,";
	sBase += "2,2,1,2,1,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,4,1,2,1,2,1,";
	sBase += "2,2,1,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,5,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	//1851
	sBase += "2,2,1,2,1,1,2,1,2,1,5,2,";
	sBase += "2,1,2,2,1,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,5,2,1,2,1,2,";
	sBase += "1,1,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,5,2,1,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,6,1,1,2,1,1,2,1,2,2,";
	//1861
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,2,3,1,2,";
	sBase += "1,2,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,4,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,3,2,1,1,2,1,2,2,1,";
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,5,2,1,";
	//1871
	sBase += "2,2,1,2,2,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,4,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,5,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,4,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	//1881
	sBase += "1,2,1,2,1,2,5,2,2,1,2,1,";
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,3,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,5,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,2,1,2,1,2,1,2,";
	//1891
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,5,2,2,1,2,2,2,";
	sBase += "1,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,5,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,5,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,5,2,2,1,2,";
	//1901
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,3,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,4,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	//1911
	sBase += "2,1,2,1,1,5,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,5,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,3,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,1,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	//1921
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,3,2,1,1,2,1,2,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,5,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,5,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,5,1,2,1,2,2,1,";
	//1931
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,6,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,4,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,4,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	//1941
	sBase += "2,2,1,2,2,4,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,4,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,5,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,3,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	//1951
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,4,2,1,2,1,2,1,2,";
	sBase += "1,2,1,1,2,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,4,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,5,2,1,2,2,";
	sBase += "1,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,5,2,1,2,1,2,1,";
	//1961
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,5,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,5,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	//1971
	sBase += "1,2,1,1,5,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,2,1,";
	sBase += "2,2,1,5,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,5,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,1,";
	sBase += "2,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,6,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	//1981
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,3,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,1,1,2,1,1,5,2,2,";
	sBase += "1,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,5,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,2,1,1,5,1,2,1,2,2,2,2,";
	//1991
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,2,1,1,2,1,2,2,";
	sBase += "1,2,5,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,5,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,3,2,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,1,2,1,2,2,1,";
	//2001
	sBase += "2,2,2,3,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,1,2,2,1,2,1,1,2,1,2,";
	sBase += "1,5,2,2,1,2,1,2,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,5,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,5,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	//2011
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,6,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,1,2,5,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,3,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,5,2,1,1,2,1,2,1,2,";
	//2021
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,1,1,5,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,2,";
	sBase += "1,2,2,1,5,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,1,2,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	//2031
	sBase += "2,1,5,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,4,1,1,2,1,2,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,2,1,1,2,1,";
	sBase += "2,2,1,2,5,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,2,1,";
	//2041
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2";
	
	let arrBase = [];
	arrBase = sBase.split(",");
	
	return arrBase;
};

/**
 * @class 문자를 날짜로 변환. <br>
 * @param {String} strDate - String Date Format
 * @return {Date} date
 */
_pForm.gfnStrToDate = function(inDate)
{
  let date =  new Date(parseInt(inDate.substr(0,4)),parseInt(inDate.substr(4,2))-1,parseInt(inDate.substr(6,2)));
  return date;
};

/**
 * @class Date Type을 String으로 변환 <br>
 * @param {Date} date
 * @return {String} 'yyyyMMdd' 형태로 표현된 날짜
 */
_pForm.gfnDateToStr = function(date)
{
	let strYear = date.getYear().toString();
	let strMonth = (date.getMonth()+1).toString();
	let strDate = date.getDate().toString();
	
	if(strYear.length==2)
		strYear = '19'+strYear;
	else if(strYear.length==1)
		strYear = '190'+strYear;
		
	if(strMonth.length==1)
		strMonth = '0'+strMonth;
	if(strDate.length==1)
		strDate = '0'+strDate;
	
	return strYear+strMonth+strDate;
};

/**
 * @class 년월일(yyyyMMdd)을 입력하면 해당 주차를 리턴한다. <br>
 * @param {String} strDate - 8자리 년월일(yyyyMMdd)
 * @return {String} 6자리 년도주차(yyyyWW)
 */
_pForm.gfnGetWeek = function(strDate) 
{
	if (strDate.length != 8 || !this.gfnIsDigit(strDate)) {
		return "";
	}
	
	let year  = parseInt(strDate.substr(0,4));
	let month = parseInt(strDate.substr(4,2));
	let day   = parseInt(strDate.substr(6,8));

	let startAt = 1; ///////////// 일요일 표시 부분 / 0 : 일요일(일월화...) / 1 : 월요일(...금토일)

	if(startAt == 0) {
		day = day + 1;
	}

	let a    = Math.floor((14-month) / 12);
	let y    = year + 4800 - a;
	let m    = month + (12 * a) - 3;
	let b    = Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400);
	let J    = day + Math.floor(((153 * m) + 2) / 5) + (365 * y) + b - 32045;
	let d4   = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
	let L    = Math.floor(d4 / 1460);
	let d1   = ((d4 - L) % 365) + L;
	let week = Math.floor(d1/7) + 1;
		week = week.toString();
	return year+week.padLeft(2,"0");			
};

/**
 * @class 주민등록번호로 생년월일을 구한다. <br>
 * @param {String} ssn - 주민등록번호/외국인등록번호 13자리중 최소 7자 입력
 * @return {String} 8자리 날짜(YYYYMMMDD)문자열
 */
_pForm.gfnGetBirthDateBySSN = function(ssn)
{
	let retVal;

	ssn = ssn.replace("-", ""); //하이픈제거
	
	if (!this.gfnIsNumber(ssn) || ssn.length < 6) {
		return retVal;
	}

	let yymmdd = ssn.substr(0, 6);
	let century;
	if (ssn.length > 6) {
		let genderFlag = Number(ssn.substr(6, 1));
		
		switch(genderFlag) {
			case 1:
			case 2:
			case 5:
			case 6:
				century = "19";
				break;
			case 3:
			case 4:
			case 7:
			case 8:
				century = "20";
				break;
			case 9:
			case 0:
				century = "18";
				break;
		}
	} else {
		let sTemp = this.gfnGetDate();
		if (sTemp.substr(2, 6) <= yymmdd) {
			century = "19";
		} else {
			century = "20";
		}
	}

	retVal = century + yymmdd;
	
	if (!this.gfnIsDate(retVal)) {
		retVal = null;
	}
	
	return retVal;	
};

/**
 * @class 주민번호 뒷 첫번째 자리로 년대를 return 한다. <br>
 * @param {String} sJuminNo	생년 월일 또는 주민 번호
 * @return {String} 주민번호 뒷 첫번째 자리로 년대를 return 한다.
 */
_pForm.gfnGetBirthYear = function(sJuminNo)
{
	if (sJuminNo.toString().length != 13){
		return "N";
	}
	
	if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
		return "N";
	}

	let vGb = sJuminNo.substr(6,1);

	if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
		return '19';
	} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
		return '20';
	}
};

/**
 * @class 기준년월일 기준으로 만나이를 구한다. <br>
 * @param {String} brtYmd - 생년월일
 * @param {String} stdYmd - 기준일자[생략시 현재일자]
 * @return {Number} 숫자형 나이
 */
_pForm.gfnGetAge = function(brtYmd, stdYmd)
{
	let retVal = -1;
	
	if ( this.gfnIsNull(stdYmd)) {
		stdYmd =  this.gfnGetDate();  
	}

	if (this.gfnGetDate(brtYmd) && this.gfnGetDate(stdYmd)) {
		var yDiff 	= Number(stdYmd.substr(0, 4)) - Number(brtYmd.substr(0, 4));
		var mdDiff	= Number(stdYmd.substr(4, 4)) - Number(brtYmd.substr(4, 4));
		   
		retVal = yDiff;
		if( mdDiff < 0 ) {	//before
			retVal = retVal - 1;
		}
	}

	return retVal;	
};


/**
 * 로그 출력에 표시할 날짜 형태를 얻어온다.
 * @private
 * @return {string} 날짜포맷 문자열.
 * @memberOf 
 */
_pForm.gfnDateFormatString = function()
{			
	let objDate = new Date();
	return this.gfnGetMaskFormatString(objDate, "yyyy-MM-dd HH:mm:ss.sss");
};

/**
 * 주어진 날짜 객체의 Mask Format 처리된 문자열을 반환.<br>
 * 요일명칭, 월 명칭, 오전/오후 명칭 표시 처리는 this에 정의된 값으로 처리된다.<br><br>
 * this.weekName : 요일명칭(Array value), <br>
 * this.weekShortName : 요일축약명칭(Array value),<br>
 * this.monthName : 월명칭(Array value),<br>
 * this.monthShortName : 월축약 명칭(Array value),<br>
 * this.ttName : 오전/오후 명칭(Array value)
 * @param {date} dt Date 개체.
 * @param {string} strMask mask할 format 문자열.
 * @return {string} 변환된 문자열.
 * @example
 * var dt = this.strToDate("20130430123412"); // convert Date type from "20130430123412".
 * trace(this.getMaskFormatString(dt, "yyyy년 MM월 dd일 tt hh시 mm분 ss초")); // output : 2013년 04월 30일 오후 12시 34분 12초
 * trace(this.getMaskFormatString(dt, "yyyy-MM-dd")); // output : 2013-04-30
 * trace(this.getMaskFormatString(dt, "yy MM.dd")); // output : 13 04.30
 * trace(this.getMaskFormatString(dt, "yyyy-MM-dd W \\Week")); // output : 2013-04-30 18 Week
 * trace(this.getMaskFormatString(dt, "MMMM dddd")); // output : 4월 화요일
 * @memberOf this
 */
_pForm.gfnGetMaskFormatString =  function(dt, strMask)
{
	let pThis = this;
	
	let arrMask = pThis._parseDateMask(strMask),
		arrDt = [], mask, h;
	for ( let i = 0, len = arrMask.length; i < len ; i++ )
	{
		mask = arrMask[i];
		if ( mask > -1 )
		{
			arrDt[arrDt.length] = strMask.charAt(mask);
		}
		else
		{
			switch (mask)
			{
				case "yyyy": arrDt[arrDt.length] = new String(dt.getFullYear()); break;
				case "MMMM": arrDt[arrDt.length] = pThis.monthName[dt.getMonth()]; break;
				case "dddd": arrDt[arrDt.length] = pThis.weekName[dt.getDay()]; break;
				case "MMM": arrDt[arrDt.length] = pThis.monthShortName[dt.getMonth()]; break;
				case "ddd": arrDt[arrDt.length] = pThis.weekShortName[dt.getDay()]; break;
				case "sss": arrDt[arrDt.length] = new String(dt.getMilliseconds()).padLeft(3,'0'); break;
				case "yy": arrDt[arrDt.length] = new String(dt.getFullYear() % 1000).padLeft(2,'0'); break;
				case "MM": arrDt[arrDt.length] = new String(dt.getMonth() + 1).padLeft(2,'0'); break;
				case "WW": arrDt[arrDt.length] = new String(getWeekNumber(dt)).padLeft(2,'0'); break;
				case "dd": arrDt[arrDt.length] = new String(dt.getDate()).padLeft(2,'0'); break;
				case "HH": arrDt[arrDt.length] = new String(dt.getHours()).padLeft(2,'0'); break;
				case "hh": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)).padLeft(2,'0'); break;
				case "mm": arrDt[arrDt.length] = new String(dt.getMinutes()).padLeft(2,'0'); break;
				case "ss": arrDt[arrDt.length] = new String(dt.getSeconds()).padLeft(2,'0'); break;
				case "tt": arrDt[arrDt.length] = dt.getHours() < 12 ? pThis.ttName[0] : pThis.ttName[1]; break;
				case "M": arrDt[arrDt.length] = new String(dt.getMonth() + 1); break;
				case "d": arrDt[arrDt.length] = new String(dt.getDate()); break;
				case "H": arrDt[arrDt.length] = new String(dt.getHours()); break;
				case "h": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)); break;
				case "m": arrDt[arrDt.length] = new String(dt.getMinutes()); break;
				case "s": arrDt[arrDt.length] = new String(dt.getSeconds()); break;
				case "W": arrDt[arrDt.length] = new String(pThis.getWeekOfYear(dt)); break;
			}
		}
	}
	return arrDt.join("");
};

/**  밀리 세컨즈를 시:분:초로 변환
 * @class 
 * @param {string} 
 * @return 
 * @example
 * @memberOf 
 */
_pForm.gfnMsToTime = function (duration) 
{
        let milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};


/************************************************************************
 * @description Form
 ************************************************************************/
 
 /**
 * @class 현재 컴포넌트 전체이름(경로)을 반환
 * @param 
 * @return fullName : 현재 컴포넌트 전체이름(경로)
 */  

 
_pForm.gfnGetComponentFullName = function (objComp)
{
	let fullName = "";
   while(!this.gfnIsNull( objComp.parent.name ) && ( objComp.parent.toString().toUpperCase() != "[OBJECT CHILDFRAME]" ) ) 
   {   
       fullName = objComp.name + ( this.gfnIsNull( fullName ) ? "" : "_" ) + fullName;
       objComp = objComp.parent;
   }
    return fullName;
};
 
/**
 * value의 nexacro component 여부 반환.
 * @param {*} value 확인할 value.
 * @return {boolean} nexacro component 여부.
 * @example
 * var a = new Button();
 * trace(this.gfnIsXComponent(a));	// output : true
 *
 * var a = new Dataset();
 * trace(this.gfnIsXComponent(a));	// output : false
 *
 * var a = new String();
 * trace(this.gfnIsXComponent(a));	// output : false
 *
 * @memberOf 
 */
_pForm.gfnIsXComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;
	
	return value instanceof nexacro.Component;
};


/**
* 오브젝트가 Visual한 컴포넌트인지를 반환한다.
* @public
* @param {XComp} obj nexacro Component.
* @return {boolean} visual Component 여부.
* @example
* trace(this.isVisual(Button00));	// output : true
* trace(this.isVisual(Dataset00));	// output : false
* @memberOf 
*/
_pForm.gfnIsVisual =  function(obj)
{
	//Form > Objects > StepControl의 경우, visible 속성이 존재해서
	//visible 속성 체크방식이 아닌 show method 존재유무로 처리함.
	if ( obj["show"] === undefined || (typeof obj["show"] != "function" ) ) return false;

	return true;
};	

/**
 * 컴포넌트의 실제 활성화 여부를 반환한다.<br><br>
 * 해당 컴포넌트의 enable 속성값이 true일 경우라도 
 * 상위컴포넌트(parent)의 enable 속성이 false 일 경우 비활성화 상태로 표시된다.
 * 따라서 실제 활성화 여부를 판단하기 위해서는 본 메소드를 사용한다.
 * @public
 * @param {XComp} obj nexacro Component
 * @return {boolean} 컴포넌트의 실제 활성화 여부.
 * @example
 * Div00.Button00.enable = true;
 * Div00.enable = false;	// Button00 이 비활성화 된다.
 * trace(this.Div00.form.Button00.enable);	// output : true
 * trace(this.gfnIsEnable(this.Div00.form.Button00));	// output : false
 * @memberOf 
 */		
_pForm.gfnIsEnable =  function(obj)
{
	if ( !("enable" in obj) ) return false;
	if ( obj.enable == false ) return false;
	
	let ret = true;
	let p = obj.parent;
	while ( p )
	{
		if ( p instanceof ChildFrame ) break;
		if ( p.enable === false ) 
		{
			ret = false;
			break;
		}
		
		p = p.parent;
	}
	return ret;	
};

/**
 * 컴포넌트가 화면에 보여지는지 여부를 반환한다.<br><br>
 * 해당 컴포넌트의 visible 속성값이 true일 경우라도 
 * 상위컴포넌트(parent)의 visible 속성이 false 일 경우 화면에 표시되지 않는다.
 * 따라서 화면에 실제로 보여지는지 여부를 판단하기 위해서는 본 메소드를 사용한다.		 
 * @public
 * @param {XComp} obj nexacro Component.
 * @return {string} 객체 type.
 * @example
 * Div00.form.Button00.visible = true;
 * Div00.visible = false;	// 화면에 Button00 이 보이지 않는다.
 * trace(this.Div00.form.Button00.visible);	// output : true
 * trace(this.gfnIsVisible(Div00.form.Button00));	// output : false
 * @memberOf 
 */
_pForm.gfnIsVisible =  function(obj)
{

  
	if ( !("visible" in obj) ) return false;
	if ( obj.visible == false ) return false;
	
	let ret = true;
	let p = obj.parent;
	while ( p )
	{
		if ( p instanceof ChildFrame ) break;
	 
	   if ( p.visible === false ) 
		{
			ret = false;
			break;
		}
		
		p = p.parent;
	}

	return ret;
};	


/**
 * Component에 포함되고 조건에 맞는 component 또는 object 반환<br><br>
 * 1. where 조건문에 지원하는 예약어 피연산자(operand) 는 다음과 같다.<br>
 *  - prop[property_name] : property 중 name 에 해당하는 값을 의미.<br>
 *  - typeOf : XComponent type을 의미.<br>
 *  - isVisible : XComponent의 실제 visible 여부.<br>
 *  - isVisual : 주어진 오브젝트가 Visual한 컴포넌트인지 여부.<br>
 *  - isEnable : XComponent의 실제 enable 여부.<br><br>
 * ※ isVisible는 실제 컴포넌트가 화면에 보여지는 여부를 체크하게 된다.<br>
 *    prop[visible] == true 형식으로 사용하면 대상 컴포넌트의 value property 값이 true 인지를 체크한다.<br>
 *    대상 컴포넌트의 상위컴포넌트(parent)의 visible 속성이 false 가 지정되어 화면에 대상 컴포넌트가<br>
 *    보이지 않더라도 대상 컴포넌트의 visible 속성값은 자신이 지정된 값을 유지하고 있으므로 반드시<br>
 *    false 가 나오지 않는다. (같은 이유로 isEnable 로 실제 활성화 되어있는지를 체크해야 한다.)<br><br>
 * 2. where 조건문에 지원하는 연산자(operator) 는 다음과 같다.<br>
 *  - A && B : A 와 B 가 모두 참이면 참.<br>
 *  - A || B : A 와 B 가 모두 거짓이면 거짓.<br>
 *  - A == B : A 와 B 는 같다.<br>
 *  - A != B : A 와 B 는 같지 않다.<br>
 *  - A > B : A 는 B 보다 크다.<br>
 *  - A >= B : A 는 B 보다 크거나 같다.<br>
 *  - A < B : A 는 B 보다 작다.<br>
 *  - A <= B : A 는 B 보다 작거나 같다.<br>
 *  - 'b' *= 'abc' : 'abc' 에 'b' 가 포함되어 있다. (like)<br>
 *  - 'a' ^= 'abc' : 'abc' 는 'a' 로 시작한다.(startWith)<br>
 *  - 'c' $= 'abc' : 'abc' 는 'c' 로 끝난다.(endWith)
 * @public
 * @param {*} obj Object, Component, Frame, .. 등 nexacro 객체.
 * @param {string=} where 찾을 조건문.
 * @param {number=} depth 하위 레벨 깊이(default: 제한없음).
 * @return {array} 검색된 component 또는 object.
 * @example
 * 
 * Form(Form00) 에 아래와 같은 구조가 존재 할 경우.
 *
 * |-------------------------------------------------------------------------------------------|
 * | Div00 (depth:0)                                                                           |
 * |                                                                                           |
 * |  --------------------------------------------------------------------------------------|  |
 * |  |  form                                                                               |  |
 * |  |                                                                                     |  |
 * |  |  ------------                                                                       |  |
 * |  |  | Button00 |                                                                       |  |
 * |  |  ------------                                                                       |  |
 * |  |                                                                                     |  |
 * |  |  |------------------------------------------------------------------------------|   |  |
 * |  |  | Div01 (depth:3)                                                              |   |  |
 * |  |  |                                                                              |   |  |
 * |  |  |                                                                              |   |  |
 * |  |  |   |---------------------------------------------------------------------|    |   |  |
 * |  |  |   |  form                                                               |    |   |  |
 * |  |  |   |    ------------                                                     |    |   |  |
 * |  |  |   |    | Button01 |                                                     |    |   |  |
 * |  |  |   |    ------------                                                     |    |   |  |
 * |  |  |   |                                                                     |    |   |  |
 * |  |  |   |    |-----------------------------------------------------------|    |    |   |  |
 * |  |  |   |    | Tab00 (depth:5)                                           |    |    |   |  |
 * |  |  |   |    |                                                           |    |    |   |  |
 * |  |  |   |    |   |-----------------------|   |-----------------------|   |    |    |   |  |
 * |  |  |   |    |   | tabpage1 (depth:6)    |   | tabpage2 (depth:6)    |   |    |    |   |  |
 * |  |  |   |    |   |                       |   |                       |   |    |    |   |  |
 * |  |  |   |    |   |                       |   |                       |   |    |    |   |  |
 * |  |  |   |    |   | |----------------|    |   |  |---------------|    |   |    |    |   |  |
 * |  |  |   |    |   | | form           |    |   |  | form          |    |   |    |    |   |  |
 * |  |  |   |    |   | |  ------------  |    |   |  | ------------  |    |   |    |    |   |  |
 * |  |  |   |    |   | |  | Button02 |  |    |   |  | | Button03 |  |    |   |    |    |   |  |
 * |  |  |   |    |   | |  ------------  |    |   |  | ------------  |    |   |    |    |   |  |
 * |  |  |   |    |   | |----------------|    |   |  |---------------|    |   |    |    |   |  |
 * |  |  |   |    |   |                       |   |                       |   |    |    |   |  |
 * |  |  |   |    |   |                       |   |                       |   |    |    |   |  |
 * |  |  |   |    |   |-----------------------|   |-----------------------|   |    |    |   |  |
 * |  |  |   |    |                                                           |    |    |   |  |
 * |  |  |   |    |-----------------------------------------------------------|    |    |   |  |
 * |  |  |   |                                                                     |    |   |  |
 * |  |  |   |---------------------------------------------------------------------|    |   |  |
 * |  |  |                                                                              |   |  |
 * |  |  |                                                                              |   |  |
 * |  |  |------------------------------------------------------------------------------|   |  |
 * |  |                                                                                     |  |
 * |  --------------------------------------------------------------------------------------|  |
 * |                                                                                           |
 * |-------------------------------------------------------------------------------------------|
 *
 * // from이 Form00 이고 depth 를 지정하지 않은 경우 Form00 에 포함된 모든 하위요소 검색.
 * trace(this.gfnCompsQuery(Form00, "typeOf != 'Form'"));
 * // output : [object Div],[object Button],[object Div],[object Button],[object Tab],
 *             [object TabpageControl],[object Button],[object TabpageControl],[object Button]
 *
 * // from이 Div00 이고 depth가 2 인 경우 Div00.form 에 포함된 요소까지 검색.
 * trace(this.gfnCompsQuery(Div00, "typeOf != 'Form'", 2));
 * // output : [object Button],[object Div]
 *
 * // from이 Div00 이고 depth가 4 인 경우 Div00.form 에 포함된 요소까지 검색.
 * trace(this.gfnCompsQuery(Div00, "typeOf != 'Form'", 4));
 * // output : [object Button],[object Div],[object Button],[object Tab]
 *
 * // from이 Div00 이고 depth가 5 인 경우 Tab00 에 포함된 요소까지 검색.
 * trace(this.gfnCompsQuery(Div00, "typeOf != 'Form'", 5));
 * // output : [object Button],[object Div],[object Button],[object Tab],
 *             [object TabpageControl],[object TabpageControl]
 *
 * // Div00 에 하위로 포함된 모든 Button 검색.
 * trace(this.gfnCompsQuery(Div00, "typeOf == 'Button'"));
 * // output : [object Button],[object Button],[object Button],[object Button]
 * 
 * // Div00 에 하위로 포함된 모든 Button, Div 검색.
 * trace(this.gfnCompsQuery( Div00, "typeOf == 'Button' || typeOf == 'Div'") );
 * // output : [object Button],[object Div],[object Button],[object Button],[object Button]
 * 
 * // Div00 에 포함된 모든 하위요소중 property visible 값이 true 인 요소 검색.
 * // 실제 visible 한 요소만 찾을 경우 isVisible 을 사용.
 * Div00.form.Div01.visible = false;
 * trace(this.gfnCompsQuery(Div00, "prop[visible] == true"));
 * // output : [object Form],[object Button]
 * 
 * // Div00 에 포함된 모든 하위요소중 property text 값이 "Button02" 인 요소 검색.
 * trace(this.gfnCompsQuery(Div00, "prop[text] == 'Button02'"));
 * // output : [object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 화면에 보이는 요소 검색.
 * // prop[visible] == true 는 실제 보이는 요소가 아니어도 속성값이 true이면 검색됨.
 * Div00.Div01.visible = false;	
 * trace(this.gfnCompsQuery(Div00, "isVisible == true && typeOf != 'Form'"));
 * // output : [object Button]
 *
 * // Div00 에 Dataset과 Button이 포함됐을 경우 하위요소중 visual한 컴포넌트만 검색.
 * trace(this.gfnCompsQuery(Div00, "isVisual == true && typeOf != 'Form'"));
 * // output : [object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 활성화된 요소 검색.
 * // prop[enable] == true 는 실제 활성화된 요소가 아니어도 속성값이 true이면 검색됨.
 * Div00.Div01.enable = false;	
 * trace(this.gfnCompsQuery(Div00, "isEnable == true && typeOf != 'Form'"));
 * // output : [object Button]
 * 
 * // Div00 에 포함된 모든 하위요소중 property name에 'ab' 이 포함된 요소을 검색.
 * trace(this.gfnCompsQuery(Div00, "prop[name] *= 'ab'"));
 * // output : [object Tab],[object TabpageControl],[object TabpageControl]
 *
 * // Div00 에 포함된 모든 하위요소중 property name이 'Bu' 로 시작되는 요소을 검색.
 * trace(this.gfnCompsQuery(Div00, "prop[name] ^= 'Bu'"));
 * // output : [object Button],[object Button],[object Button],[object Button]
 *
 * // Div00 에 포함된 모든 하위요소중 property name이 '01' 로 끝나는 요소을 검색.
 * trace(this.gfnCompsQuery(Div00, "prop[name] $= '01'"));
 * // output : [object Div],[object Button]
 *
 * // Div00에 포함된 모든 하위요소중 화면에 보이면서 type이 Button 인 요소를 검색.
 * Div00.form.Div01.visible = false;
 * trace(this.gfnCompsQuery(Div00, "isVisible == true && typeOf == 'Button' && typeOf != 'Form'"));
 * // output : [object Button],[object Button],[object Button]
 *
 * @memberOf 
 */	
_pForm.gfnCompsQuery =  function(from, where, deep)
{		
	let pThis = this;

	if ( !from || !this.gfnIsXComponent(from) ) 
	{
		return [];
	}
	
	let depth = {};
		depth.current = 0;

	if ( this.gfnIsNumber(deep) ) 
	{
		depth.max = deep;
	}
	else if ( nexacro.isNumeric(deep) ) 
	{
		depth.max = parseInt(deep);
	}		
	else
	{
		depth.max = Number.MAX_VALUE;
	}

	let results = [];
	let targets = pThis._getChildren(from, depth);
	//trace("query > targets="+targets);
	if ( this.gfnIsNull(where) )
	{
		results = targets.slice(0);
	}
	else
	{
		let func = pThis._parseQueryWhere(where);
		let target, check;
		for (let i=0, len=targets.length; i<len; i++)
		{
			target = targets[i];
			check = func.call(pThis, target);
			//trace("query > target="+target + ", check=" + check);
			if ( check )
			{
				results.push(target);
			}
		}
	}
	
	return results;
};

/**
* @class 주어진 Form 을 포함하는 최상위 Form을 찾는다.
* @param  {Object} curForm 검색 시작 Form.
* @param  {string} 최상위 from 에서 찾을 컴퍼넌트 유형
                "PopupDiv"
				"Form"
				"Div"
				"Form"
				"TabpageControl"
				"Tab"
				"Form"
				"ChildFrame"
* @return {Object} 최상위 Form.
* @example
* trace(this.gfnGetTopLevelForm(this));	// output : [object Form]
*/		
_pForm.gfnGetTopLevelForm = function(curForm,ptype)
{	
    let p = curForm;
	let comptype = ptype || "";
	let isWork = "";
	let oForm;
	
	while (p && !(p instanceof ChildFrame))
	{
		p = p.parent;
	   //if(!this.gfnIsNull(p.form)) trace("@@ p.name : " + p.name);
		
		if(this.gfnTypeOf(p) == comptype)
		{
		   break;
		}
		
		
		if(!this.gfnIsNull(p.form) && p.form.name == "frmWork")   //일반 업무 폼
		{
		   isWork = "divWork";
		   break;
		}
		
// 		if(!this.gfnIsNull(p.form) && (p.name == "divFormS" || p.name=="divCenter"))   //포털 메인 폼
// 		{
// 		   break;
// 		}
		
	}

   
   if(this.gfnIsNotNull(ptype))
   {
      oForm = p;
   }
   else
   {  
      if(!this.gfnIsNull(isWork)) oForm = p.form[isWork].form; 
       else   oForm = p.form;
   }
   

  return oForm;
};


/***********************************************************************************************
* Drag & Drop 관련 Util
***********************************************************************************************/

/**
 *  Drap 시 마우스 이동시 표시할 Static 생성
 * @param {Form} obj : Form object
 * @param {integer} width : Static 객체 width : default : 100
 * @param {integer} height : Static 객체 height : defualt : 30
 * @param {String} staticId : default : random id
 * @return {Static} nexacro Static 객체
 * @example
 * var dragStatic = this.gfnCreateMoveSatic(objForm);
 *
 * var dragStatic = this.gfnCreateMoveSatic(objForm, "stDragImg");
 *
 * var dragStatic = this.gfnCreateMoveSatic(objForm, "stDragImg", 100, 30);
 *
 * @memberOf 
 */
_pForm.gfnCreateMoveStatic = function(obj, staticId, width, height)
{
	if ( !this.gfnIsNexaComponent(obj) ) {
		throw new Error("obj is not form");
	}
	
	let _staticId = staticId || this.gfnGetUniqueId();
	let _width = width || 100;
	let _height = height || 30;

	let objStatic = new Static();
	objStatic.init(_staticId, 0, 0, _width, _height, null, null);
	objStatic.visible = false;
	
	obj.addChild(_staticId, objStatic);
	objStatic.show();
	
	return objStatic;
};


/**
 * 주어진 문자열을 첫 문자만 대문자 변경
 * @param {string} str 문자열
 * @return {string} 첫 문자 대문자 처리된 문자
 * @example
 *
 * trace(this.gfnCapitalize("point")); // output : Point
 *
 */
_pForm.gfnCapitalize = function(str)
{
	if(this.gfnIsNull(str)) return;
	return str.replace(/\b[a-z]/g, function(match) {
		return match.toUpperCase();
	});
};


/**
 * 주어진 문자열을 첫 문자만 소문자 변경
 * @param {string} str 문자열
 * @return {string} 첫 문자 대문자 처리된 문자
 * @example
 *
 * trace(this.gfnCapitalize("point")); // output : Point
 *
 */
_pForm.gfnUnCapitalize = function(str)
{
	if(this.gfnIsNull(str)) return;
	return str.replace(/\b[A-Z]/g, function(match) {
		return match.toLowerCase();
		
		
	});
};


/************************************************************************************************
* Validation function List
************************************************************************************************/

/**
 * @class 숫자체크 <br>
 * @param {String} sValue
 * @return {Boolean}
 */
_pForm.gfnIsDigit = function(sNum)
{
	let c;
	let point_cnt=0;
	let ret=true;

	if ( this.gfnIsNull(sNum) )	return false;

	for (let i=0; i<sNum.length; i++)
	{
		c = sNum.charAt(i);
		if (i == 0 && (c == "+" || c == "-"));
		else if (c >= "0" && c <= "9");
		else if (c == ".")
		{
			point_cnt++;
			if ( point_cnt > 1 )
			{
				ret = false;
				break;
			}
		}
		else
		{
			ret = false;
			break;
		}
	}
	return ret;
};

/**
 * @class 한글만으로 되어 있는지 Check한다. <br>
 * @param {String} strValue
 * @return {Boolean}
 */
_pForm.gfnIsKoreanChar = function(strValue)
{
	let retVal = true;
	
	for (i = 0; i < strValue.length; i++){
		if (!((strValue.charCodeAt(i) > 0x3130 && strValue.charCodeAt(i) < 0x318F) || (strValue.charCodeAt(i) >= 0xAC00 && strValue.charCodeAt(i) <= 0xD7A3))){
			retVal = false;
		}
	}
	
	return retVal;
};

/**
 * @class 특수문자가 있는지 Check한다. <br>
 * @param {String} strValue
 * @return {Boolean}
 */
_pForm.gfnIsSpecialChar = function(strValue)
{
	let retVal = false;
	if(strValue.search(/\W|\s/g) > -1) retVal = true;

	return retVal;
};

/**
 * @class 주민등록번호 여부를 확인한다. <br>
 * @param {String} sJuminNo - 입력문자열(주민번호 13자리)
 * @return {Boolean}
 */
_pForm.gfnIsSSN = function(sJuminNo)
{
	let birthYear = this.gfnGetBirthYear(sJuminNo);
	
	birthYear += sJuminNo.substr(0, 2);
	let birthMonth = sJuminNo.substr(2, 2)-1;
	let birthDate = sJuminNo.substr(4, 2);
	let birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) 
	{
		return false;
	}

	// Check Sum 코드의 유효성 검사
	buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	  
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	}else{
		return true;
	}
};

/**
 * @class 외국인 등록번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(등록번호13자리)
 * @return {Boolean}
 */
_pForm.gfnIsFrnrIdNo = function(strNo)
{
	if (strNo.length != 13 || !isNumber(strNo)) return false;
	
	let month = Number(strNo.substr(2, 2));
	let day	  = Number(strNo.substr(4, 2));
		
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;
	
	let sum = 0;
	let odd = 0;
	let buf = array(13);
	let multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for (let i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	if (buf[11] < 6) return false;
	
	odd = buf[7] * 10 + buf[8];
	if((odd%2) != 0) return false;
	
	for (let i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = 11 - (sum % 11);
	
	if (sum >= 10) sum -= 10;
	sum += 2;
	if (sum >= 10) sum -= 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
 * @class 사업자 등록번호 여부를 확인한다.
 * @param {String} strCustNo - 입력문자열(등록번호10자리)
 * @return {Boolean}
 */
_pForm.gfnIsBzIdNo = function(strCustNo)
{
	strCustNo = strCustNo.replace(/-/g, "");
	if (strCustNo.length != 10) return false;
	else {
		
		const checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
		let tmpcustNo, i, chkSum=0, c2, remander;

		for (i=0; i<=7; i++) chkSum += checkID[i] * strCustNo.charAt(i);

		c2 = "0" + (checkID[8] * strCustNo.charAt(8));
		c2 = c2.substring(c2.length - 2, c2.length);

		chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

		remander = (10 - (chkSum % 10)) % 10 ;

		if (Math.floor(strCustNo.charAt(9)) == remander) return true; // OK!
		return false;
	}

	return true;
};

/**
 * @class 법인 등록번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(법인번호13자리)
 * @return {Boolean}
 */
_pForm.gfnIsFirmIdNo = function(strNo)
{
	if (strNo.length != 13 || !isNumber(strNo)) return false;
	
	let sum = 0;
	let buf = new Array(13);
	let multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
	let i=0;
	for (i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	for (i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = (10 - (sum % 10)) % 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
 * @class 신용카드번호 여부를 확인한다. <br>
 * @param {String} strNo - 카드번호16자리
 * @return {Boolean}
 */
_pForm.gfnIsCardNo = function(strNo)
{
	if (strNo.length < 13 || strNo.length > 19 || !nexacro.isNumeric(strNo)) return false;
	
	let sum = 0;
	let buf = new Array();
	let i=0;
	for (i=0; i<strNo.length; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	var temp;
	for (i=buf.length-1, j=0; i>=0; i--, j++) {
		temp = buf[i] * ((j%2) + 1);
		if (temp >= 10) {
			temp = temp - 9;
		}
		sum += temp;
	}
	
	if ((sum % 10) == 0) {
		return true;
	} else {
		return false;
	}
};

/**
 * @class 이메일 형식에 맞는지 Check한다.
 * @param {String} strValue
 * @return {Boolean}
 */
_pForm.gfnIsEmail = function(strValue)
{
	let retVal = false;
	let sTmp = "";
	const sRegExp = "[a-z0-9]+[a-z0-9.,]+@[a-z0-9]+[a-z0-9.,]+\\.[a-z0-9]+";

	let regexp = new RegExp(sRegExp,"ig");
	sTmp = regexp.exec(strValue);

	if (sTmp == null) {
		retVal = false;
	} 
	else {
		if (( sTmp.index == 0 ) && (sTmp[0].length == strValue.length )) {
			retVal = true;
		} else {
			retVal = false;
		}
	}
	return retVal;
};


_pForm.gfnCharBlank = function()
{
  const pattern_blank = /[\s]/g;  //공백 
  return pattern_blank;
};

/**
 * @class 패스워드 체크 함수
 * @param {string} 
 * @return 
 * @example
 * @memberOf 
 */
_pForm.gfnIsPassword = function(str)
{
   
    const pattern_num = /[0-9]/;	// 숫자 
   	const pattern_eng = /[a-zA-Z]/;	// 문자 
   	const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
   	const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
	const pattern_blank =this.gfnCharBlank();  //공백 

    if(str.length < 9 || str.length > 12)  return false;
	  
	if( (pattern_num.test(str)) && pattern_eng.test(str) && pattern_spc.test(str) 
	   && !(pattern_kor.test(str)) && !(pattern_blank.test(str))){
		return true;
	}else{

		return false;
	}
};


/**
 *  Drap 시 마우스 이동시 표시할 Static 생성
 * @param {Form} obj : Form object
 * @param {integer} width : Static 객체 width : default : 100
 * @param {integer} height : Static 객체 height : defualt : 30
 * @param {String} staticId : default : random id
 * @return {Static} nexacro Static 객체
 * @example
 * var dragStatic = this.gfnCreateMoveSatic(objForm);
 *
 * var dragStatic = this.gfnCreateMoveSatic(objForm, "stDragImg");
 *
 * var dragStatic = this.gfnCreateMoveSatic(objForm, "stDragImg", 100, 30);
 *
 * @memberOf 
 */
_pForm.gfnCreateMoveStatic = function(obj, staticId, width, height)
{
	if ( !this.gfnIsNexaComponent(obj) ) {
		throw new Error("obj is not form");
	}
	
	let _staticId = staticId || this.gfnGetUniqueId();
	let _width = width || 100;
	let _height = height || 30;

	const objStatic = new Static();
	objStatic.init(_staticId, 0, 0, _width, _height, null, null);
	objStatic.visible = false;
	
	obj.addChild(_staticId, objStatic);
	objStatic.show();
	
	return objStatic;
};


delete _pForm;