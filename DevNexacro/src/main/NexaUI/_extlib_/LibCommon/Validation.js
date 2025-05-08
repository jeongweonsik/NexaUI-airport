/**
*  컴퍼넌트 정합성 체크 라이브러리
*  @FileName 	Validation.js 
*  @Creator 	#{J}
*  @CreateDate 	2025.04.15
*  @Desction   	validation check
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 
*******************************************************************************
*/


/********************************************************************************************
*● gfnClearValidation : Dataset에 설정된 정합성체크 RuleSet을 Clear한다.
*● gfnRemoveValidation : Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.
*● gfnSetValidation : Dataset의 Column별로 정합성체크 Rule을 등록한다.
*● gfnValidation  : Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.
*● gfnValidationCheckRule : 데이터의 정합성을 체크하여 그 결과를 리턴한다. 메세지가 "" 널이면.. 정상 널이 아니면 실패이다.
*● gfnValidationCallback : Validation 에러시 메세지 후 callBack함수
*● gfnSetValidationFocus : 정합성 체크 오류시 해당 콤포넌트의 ERROR 스타일 처리 및 포커스 처리
*● gfnResetValidationCss : 정합성 체크 오류시 변경된 ERROR 스타일 원복 처리
*● gfnGetKoreanTarget : 한글의 은(는) 이(가) 을(를)에 대한 메세지처리를 초정/중성/종성의 갯수로 파악해서 처리한다.
*● gfnIsValiCompNull   : validation component null 체크 함수
*********************************************************************************************/


/************************************************************************************************
* 정합성 check 공통 기능
************************************************************************************************/



/**
 * @class Dataset에 설정된 정합성체크 RuleSet을 Clear한다.
 * @param {Dataset} obj - 데이터셋 Object
 * @return N/A
 */  
_pForm.gfnClearValidation = function(obj)
{
	obj.validationRuleSet = "";
};

/**
 * @class Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.
 * @param  {Dataset} 데이터셋 Object
 * @param  {String} 체크대상 컬럼명
 * @return N/A
 */  
_pForm.gfnRemoveValidation = function(obj, sColumID)
{
	let newvalidObj = new Array();

	if (!this.gfnIsNull(obj.validationRuleSet))
	{
		validObj = JSON.parse(obj.validationRuleSet);

		for(let index in validObj)
		{
			let validationRule = validObj[index];

			// 제거 대상이 아닐때만 정합성체크 대상에 넣는다.
			if (validationRule.name != sColumID)
			{
				newvalidObj.push(validationRule);
			}
		}
	}
				
	obj.validationRuleSet = JSON.stringify(newvalidObj);            
};

/**
 * @class Dataset의 Column별로 정합성체크 Rule을 등록한다.
 * @param {Dataset} obj - 데이터셋 Object
 * @param {String} sColumID - 체크대상 컬럼명
 * @param {String} sColumName - 컬럼명의 오류메세지 처리 제목
 * @param {String} sValidRule - 정합성체크 Rule(required, length, min, max, code 등의 체크 형식)
 * @return N/A
 */
_pForm.gfnSetValidation = function(obj, sColumID, sColumName, sValidRule)
{
	let validObj = new Array();
	
	// title이 2개가 올 경우 구분자를 변경
	// checkrule == "equalto" || checkrule == "fromto" || checkrule == "comparebig" || checkrule == "comparesmall"
	if (sColumName.indexOf(",") != -1) sColumName = nexacro.replaceAll(sColumName, ",", "^_^");
    
	// Dataset에 RuleSet이 존재하면
	if (!this.gfnIsNull(obj.validationRuleSet))
	{
		validObj = JSON.parse(obj.validationRuleSet);
		for(let index in validObj)
		{
			// 컬럼에 Rule이 존재하면 변경 처리
			if( validObj[index].name == sColumID )
			{            
				validObj[index].title = sColumName;
				validObj[index].value = sValidRule;
				if (""+sValidRule.indexOf("required") > -1) {
					validObj[index].notnull = true;
				}else{
					validObj[index].notnull = false;
				}
				obj.validationRuleSet = JSON.stringify(validObj);
				return true;
			}
		}
	}
	
	// Rule 지정
	let validationRule = 
	{
		 name  : sColumID		// Column
		,title : sColumName		// Title
		,value : sValidRule		// 정합성 Rule
	};
	
	// this.console.log("### sValidRule : " +sValidRule);
	
	// Rule에 필수여부 추가
	if (""+sValidRule.indexOf("required") > -1) {
		validationRule.notnull = true;
	}
	else if (""+sValidRule.indexOf("reqeither") > -1) {
		validationRule.notnullEither = true;
	} else {
		validationRule.notnull = false;
	}				
	
	validObj.push(validationRule);	

	obj.validationRuleSet = JSON.stringify(validObj);
};


/**
 * @class Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.
 * @param  {Dataset||Grid,String} Check 대상 Object(Dataset, Grid)
                                  Check 모드 A: 모든 row에 대해서 체크, U: 변경된 row에 대해서만 체크(default)
 * @return {Boolean} 정상 true / 오류 false
 */
_pForm.gfnValidation = function()
{
   	const args = Array.from(arguments);	
	let updatecount = 0;
	let targetlist  = new Array();
	let checkmode   = "U";
  	
	args.forEach((values)=>{
	   // Check 모드(A-전체 row, U-변경된 row) 설정
	   if(values == 'A' || values == 'U' ){
	       checkmode = values;
	   }else{
	      targetlist.push(values);
	   }	   
	});
			 
	// arguments로 넘어온 체크 대상 만큼 정합성 체크
	for (let m=0;m<targetlist.length;m++)
	{
		let dataset;
		let objtype   = "";
		let checklist = new Array();

		// 데이터셋
		if( targetlist[m] instanceof Dataset ) {
			dataset = targetlist[m];
			objtype = "dataset";
		}
		// 그리드
		else if( targetlist[m] instanceof Grid ) {
			dataset = targetlist[m].getBindDataset();
			objtype = "grid";
		}
		// 처리 제외
		else {
			continue;
		}

		// 데이터셋의 RuleSet
		let validlist = new Array();
		if( !this.gfnIsNull(dataset.validationRuleSet) )
		{
			validlist = JSON.parse(dataset.validationRuleSet);
		}
		else {
			continue;
		}

		// 삭제된 row 정합성 체크 건수 증가
		updatecount += parseInt(dataset.getDeletedRowCount());

		// 데이터셋의 row 만큼 정합성 체크
		for(let i=0;i<dataset.getRowCount();i++)
		{
			let rowtype = dataset.getRowType(i);

			// 삭제된 row
			if (rowtype == 8) {
				++updatecount;
				continue;
			}

			// checkmode에 따른 체크 대상 구분
			if (checkmode == "U") {
				// 변경 안된 Row는 정합성 체크 SKIP
				if (rowtype == 1) {
					continue;
				}

				// 추가, 수정은 정합성 체크
				if (rowtype == 2 || rowtype == 4) {
					++updatecount;
				}
			}
			// 전체 row
			else {
				++updatecount;
			}

			// Rule 만큼 처리
			for(let j=0;j<validlist.length;j++)
			{
				let columid   = validlist[j].name;
				let columname = new String(validlist[j].title);
				let columvalue= dataset.getColumn(i, columid);
				   checklist = (""+validlist[j].value).split(",");
				let nullcheck = validlist[j].notnull;
				let nullEitherCheck = validlist[j].notnullEither;
				
				// 필수입력 체크
				if (nullcheck == true)
				{
					if (this.gfnIsNull(columvalue))
					{
						// Validation ERROR class 사용 시
						if (this.useErrorClass) {
							this.gfnResetValidationCss(arguments);
						}

						// row 이동 및 focus 저장
						dataset.rowposition = i;
						this.validationObject = arguments[m];
						this.validationColumn = columid;

						let titile = "";
						if (columname.indexOf("^_^") != -1) {
							titile = columname.split("^_^")[0];
						}
						else {
							titile = columname;
						}

						// 메시지 처리 : ${} 필수 입력 항목입니다.
						//this.gfnAlert("msg.err.vali", [this.gfnGetKoreanTarget(titile, "은(는)")+" 필수 입력 항목입니다."], null, "gfnValidationCallback");
						// 메시지 처리 : {0} 은(는) 필수 입력 항목입니다.
						this.gfnAlert("5167", [titile],"w", "gfnValidationCallback" );
						
						return false;
					}
				}
				
				// 필수값이 아닌 경우는 체크할 값이 null이 아닌 경우에만 체크
				// 둘 중 하나 필수값 체크
				if (!this.gfnIsNull(columvalue) || nullEitherCheck == true)
				{
					// Rule에 따른 정합성 체크
					for(let k=0;k<checklist.length;k++)
					{
						let msg = "";

						// 컬럼의 두개의 값을 이용해서 처리하는 check 대상
						let checkrule =  checklist[k].split(":")[0];
						if (checkrule == "equalto"
							|| checkrule == "fromto"
							|| checkrule == "comparebig"
							|| checkrule == "comparesmall"
							|| checkrule == "reqeither")
						{
							let compare1;
							let compare2;

							if( checklist[k].split(":").length == 3 ) {
								compare1 = dataset.getColumn(i, checklist[k].split(":")[1]);
								compare2 = dataset.getColumn(i, checklist[k].split(":")[2]);
							}
							else {
								compare1 = dataset.getColumn(i, columid);
								compare2 = dataset.getColumn(i, checklist[k].split(":")[1]);
							}
							msg = this.gfnValidationCheckRule(columname, columvalue, checklist[k], compare1, compare2);
						}
						// 컬럼의 한개 값을 이용해서 처리하는 check 대상
						else {
							msg = this.gfnValidationCheckRule(columname, columvalue, checklist[k]);
						}

						// 에러시
						if (!this.gfnIsNull(msg))
						{
							// Validation ERROR class 사용 시
							if (this.useErrorClass) {
								this.gfnResetValidationCss(arguments);
							}

							// row 이동 및 focus 저장
							dataset.rowposition = i;
							this.validationObject = arguments[m];
							this.validationColumn = columid;

							// 메시지 처리 : ${}
							this.gfnAlert(msg, [],"e", "gfnValidationCallback");
							
							return false;
						}
					}  // Rule에 따른 정합성 체크
				}  // 필수값이 아닌 경우는 체크할 값이 null이 아닌 경우에만 체크
			}  // Rule 만큼 처리
		}  // 데이터셋의 row 만큼 정합성 체크
	}  // arguments로 넘어온 체크 대상 만큼 정합성 체크

	// Validation ERROR class 사용 시 cssclass 원복
	if (this.useErrorClass) {
		this.gfnResetValidationCss(arguments);
	}

	// 정합성 체크 건수 확인
	if (updatecount == 0)
	{
		trace("정합성 체크 대상이 없어 Validation을 체크가 되지 않았습니다.");
		return false;
	}

	return true;
};

/**
 * @class 데이터의 정합성을 체크하여 그 결과를 리턴한다. 메세지가 "" 널이면.. 정상 널이 아니면 실패이다.
 * @param {String} itemName - Column title
 * @param {Stirng} itemValue - Column 값
 * @param {String} validationRuleSet - validation Rule
 * @return {Stirng} 정상이면 "" 실패이면 "XXX는 7자리입니다." 와 같은 완성형 에러메세지
 */
_pForm.gfnValidationCheckRule = function(itemName, itemValue, validationRuleSet, compare1, compare2)
{
	let titile     = "";
	let columname1 = "";
	let columname2 = "";
	
	if (itemName.indexOf("^_^") != -1) {
		titile     = itemName.split("^_^")[0];
		columname1 = itemName.split("^_^")[0];
		columname2 = itemName.split("^_^")[1];
	}
	else {
		titile = itemName;
	}
				
	let arrItem2  =  validationRuleSet.split(":");
	let checkrule =  arrItem2[0];

	checkrule = checkrule.toLowerCase();
	switch(checkrule)
	{
		// size 크기 지정 : length:7
		case "length":
			if( (itemValue+"").length != parseInt(arrItem2[1]))
			{   
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" "+arrItem2[1]+"자리 입니다.";
				// {0} 의 입력값은 {1} 자리이어야 합니다.
				return this.gfnGetMessage("5170",[titile, arrItem2[1]]);
			}
			break;
		// size 크기의 범위 : rangelength:2:3
		case "rangelength":
			if( (itemValue+"").length < parseInt(arrItem2[1]) || (itemValue+"").length > parseInt(arrItem2[2]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" ("+arrItem2[1]+")자리에서 ("+arrItem2[2]+")자리로 등록해야 합니다.";
				// {0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.
				return this.gfnGetMessage("5158",[titile, arrItem2[1], arrItem2[2]]);
			}
			break;
		// 최대 size 크기: maxlength:7
		case "maxlength":
			if (itemValue.length > parseInt(arrItem2[1]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" 최대 "+arrItem2[1]+"자리 입니다.";
				// {0} 의 입력값의 길이는 {1} 이하이어야 합니다.
				return this.gfnGetMessage("5172",[titile, arrItem2[1]]);
			}
			break;
		// 최소 size 크기: minlength:7
		case "minlength":
			if (itemValue.length < parseInt(arrItem2[1]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" 최소 "+arrItem2[1]+"자리 이상이어야 합니다.";
				// {0} 의 입력값의 길이는 {1} 이상이어야 합니다.
				return this.gfnGetMessage("5171",[titile, arrItem2[1]]);
			}
			break;
		// 최대 size 크기(Byte) : maxlengthB:3
		case "maxlengthbyte":
			if (this.lookupFunc("gfnLengthByte").call(itemValue) > parseInt(arrItem2[1]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" 최대 "+arrItem2[1]+"자리 입니다.";
				// {0} 의 입력값의 길이는 {1} 이하이어야 합니다.
				return this.gfnGetMessage("5172",[titile, arrItem2[1]]);
			}
			break;
		// 최소 size 크기(Byte) : minlengthB:3
		case "minlengthbyte":
			if (this.lookupFunc("gfnLengthByte").call(itemValue) < parseInt(arrItem2[1]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" 최소 "+arrItem2[1]+"자리 이상이어야 합니다.";
				// {0} 의 입력값의 길이는 {1} 이상이어야 합니다.
				return this.gfnGetMessage("5171",[titile, arrItem2[1]]);
			}
			break;
		// 숫자 여부 : digits
		case "digits":		
			if (!this.lookupFunc("gfnIsDigit").call(itemValue))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" 숫자만 입력 가능합니다.";
				// {0} 은(는) 숫자만 입력 가능합니다.
				return this.gfnGetMessage("5163",[titile]);
			}
			break;
		// 해당 숫자 이하 : min:7
		case "min":
			if (parseFloat(itemValue) < parseFloat(arrItem2[1]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" "+arrItem2[1]+" 이상의 숫자만 입력 가능합니다.";
				// {0} 은(는) {1} 이상의 숫자만 입력 가능합니다.
				return this.gfnGetMessage("5158",[titile, arrItem2[1]]);
			}
			break;
		// 해당 숫자 이상 : max:7
		case "max":
			if (parseFloat(itemValue) > parseFloat(arrItem2[1]))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" "+arrItem2[1]+" 이하의 숫자만 입력 가능합니다.";
				// {0} 은(는) {1} 이하의 숫자만 입력 가능합니다.
				return this.gfnGetMessage("5160",[titile, arrItem2[1]]);
			}
			break;
		// 소숫점 자리수 비교 - declimit:3
		case "declimit":
			let isExistDot = (""+itemValue).indexOf(".");
			if (isExistDot == -1)
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)")+" 소숫점 "+arrItem2[1]+" 자리로 구성되어야 합니다.";
				// {0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.
				return this.gfnGetMessage("5162",[titile, arrItem2[1]]);
			}
			else
			{
				let decLen = (""+itemValue).substr(isExistDot + 1, itemValue.length);
				if (decLen.length != parseInt(arrItem2[1]))
				{
					//return this.gfnGetKoreanTarget(titile, "은(는)")+" 소숫점 "+arrItem2[1]+" 자리로 구성되어야 합니다.";
					// {0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.
					return this.gfnGetMessage("5162",[titile, arrItem2[1]]);
				}
			}
			break;
		// 날짜 년월일 체크 : date
		case "date":
			if (!this.lookupFunc("gfnIsYMD").call(itemValue))
			{
				//return titile + "에 등록된 날짜가 잘못되었습니다.";
				// {0} 은(는) 유효하지 않은 날짜 형식입니다.
				return this.gfnGetMessage("5165",[titile]);
			}
			break;
		// 날짜 년월 체크 : dateym
		case "dateym":
			if (!this.lookupFunc("gfnIsYM").call(itemValue))
			{
				//return titile + "에 등록된 년월 형식의 날짜가 잘못되었습니다.";
				// {0} 은(는) 유효하지 않은 년월 형식입니다.
				return this.gfnGetMessage("5166",[titile]);
			}
			break;
		// 사이의 값인지 비교 - range:40:100
		case "range":
			if (parseInt(itemValue) < parseInt(arrItem2[1]) || parseInt(itemValue) > parseInt(arrItem2[2]))
			{
				//return titile + "의 값은 "+arrItem2[1]+" 와(과) "+arrItem2[2]+" 사이의 값이어야 합니다.";
				// {0} 은(는) {1} 와(과) {2} 사이의 값입니다.
				return this.gfnGetMessage("5001",[titile,arrItem2[1],arrItem2[2]]);
				
				
			}
			break;
		// 코드값이 목록내의 값인지 비교 - code:1:2:3
		case "code":
			for (let i = 1; i < arrItem2.length; i++)
			{
				if (parseInt(itemValue) == parseInt(arrItem2[i]))
				{
					return "";
				}
			}
			//return this.gfnGetKoreanTarget(titile, "은(는)")+" "+nexacro.replaceAll(validationRuleSet.split("code:")[1],":",",")+" 중 하나의 값이어야 합니다.";
			// {0} 은(는) {1} 중 하나의 값이어야 합니다.
			return this.gfnGetMessage("5161",[titile,nexacro.replaceAll(validationRuleSet.split("code:")[1],":",",")]);
			break;
		// 타 칼럼값과 같은지 비교 - equalto:target칼럼명
		case "equalto":
			if( compare1 != compare2 )
			{
				if (itemName.indexOf("^_^") != -1 ) {
					//return this.gfnGetKoreanTarget(columname1, "이(가)") + " "+columname2+"과 일치하지 않습니다.";
					// {0} 이(가) {1} 와(과) 일치하지 않습니다.
					return this.gfnGetMessage("5175",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else {
					//return  titile + "의 값과 "+compare2+"와 일치하지 않습니다.";
					// {0} 이(가) {1} 와(과) 일치하지 않습니다.
					return this.gfnGetMessage("5175",[titile,compare2]);
				}
			}
			break;
		// 날짜 from ~ to 비교 : comparedate:target칼럼명
		case "fromto":
			if (compare1 < compare2)
			{
				if( itemName.indexOf("^_^") > -1 )
				{
					//return columname1 + "의 날짜가 "+columname2+"의 날짜보다 작습니다.";
					// {0} 의 날짜가 {1} 의 날짜보다 작습니다.
					return this.gfnGetMessage("5176",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else {
					//return  titile + "의 날짜가 "+compare2+"일 보다 작습니다.";
					// {0} 의 날짜가 {1} 의 날짜보다 작습니다.
					return this.gfnGetMessage("5176",[titile,compare2]);
				}
			}
			break;
		// 타 칼럼값보다 큰값인지 비교 - comparemax:target칼럼명
		case "comparebig":
			if( parseFloat(compare1) < parseFloat(compare2) )
			{
				if( itemName.indexOf("^_^") != -1 ) {
					//return columname1 + "의 값은 "+columname2+"의 값보다 커야 합니다.";
					// {0} 이(가) {1} 보다 작습니다.
					return this.gfnGetMessage("5004",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else {
					//return titile + "의 값은 "+compare2+"보다 커야 합니다.";
					// {0} 이(가) {1} 보다 작습니다.
					return this.gfnGetMessage("5004",[titile,compare2]);
				}
			}
			break;
		// 타 칼럼값과 작은값인지 비교 - comparemin:comparetarget
		case "comparesmall":
			if( parseFloat(compare1) > parseFloat(compare2) )
			{
				if( itemName.indexOf("^_^") != -1 ) {
					//return columname1 + "의 값은 "+columname2+"의 값보다 작아야 합니다.";
					// {0} 이(가) {1} 보다 큽니다.
					return this.gfnGetMessage("5006",[columname1,columname2]);
				}
				// 비교대상 칼럼의 title을 넘겨주지 않았을 경우 해당 값을 표시
				else {
					//return titile + "의 값은 "+compare2+"보다 작아야 합니다.";
					// {0} 이(가) {1} 보다 큽니다.
					return this.gfnGetMessage("5006",[titile,compare2]);
				}
			}
			break;

		// 아래부터는 해당 프로젝트에서 추가한 Validation 함수로 체크 로직 추가 가능
		// 주민등록번호 체크 - isssn
		case "isssn":
			if (!this.lookupFunc("gfnIsSSN").call(itemValue))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)") + " 올바른 주민번호가 아닙니다.";
				// {0} 은(는) 올바른 주민번호가 아닙니다.
				return this.gfnGetMessage("5164",[titile]);
				
			}
			break;
		// 외국인등록번호 체크 - isfrn
		case "isfrn":
			if (!this.lookupFunc("gfnIsFrnrIdNo").call(itemValue))
			{
				return this.gfnGetMessage("5014",[titile]);
				//this.gfnGetKoreanTarget(titile, "은(는)") + " 올바른 외국인등록번호가 아닙니다.";
			}
			break;
		// 사업자등록번호 체크 - isbzid
		case "isbzid":
			if (!this.lookupFunc("gfnIsBzIdNo").call(itemValue))
			{
				return this.gfnGetMessage("5012",[titile]);
				//this.gfnGetKoreanTarget(titile, "은(는)") + " 올바른 사업자등록번호가 아닙니다.";
			}
			break;
		// 법인등록번호 체크 - isfirmid
		case "isfirmid":
			if (!this.lookupFunc("gfnIsFirmIdNo").call(itemValue))
			{
				return this.gfnGetMessage("5011",[titile]);
				//this.gfnGetKoreanTarget(titile, "은(는)") + " 올바른 법인등록번호가 아닙니다.";
			}
			break;
		// 신용카드번호 체크 - iscardno
		case "iscardno":
			if (!this.lookupFunc("gfnIsCardNo").call(itemValue))
			{
				return this.gfnGetMessage("5013",[titile]);
				//this.gfnGetKoreanTarget(titile, "은(는)") + " 올바른 신용카드번호가 아닙니다.";
			}
			break;
		// 이메일 체크 - isemail
		case "isemail":
			if (!this.lookupFunc("gfnIsEmail").call(itemValue))
			{
				//return this.gfnGetKoreanTarget(titile, "은(는)") + " 올바른 이메일이 아닙니다.";
			
				return this.gfnGetMessage("5015",[titile]);
			}
			break;
		// 둘 중 하나 필수값 체크
		case "reqeither":
			if (this.gfnIsNull(compare1) && this.gfnIsNull(compare2))
			{
			   //[{0}][{1}]둘 중 하나 필수 입력 입니다.
				return this.gfnGetMessage("5018",[columname1,columname2]);
			}
			break;

		default:
			return "";
			break;
	}
	return "";
};

/**
 * @class Validation 에러시 메세지 후 callBack함수
 * @param {String} sid - 팝업ID
 * @param {String} rtn - 전달값
 * @return N/A
 */
_pForm.gfnValidationCallback = function(sid, rtn)
{
	// Validation 오류시 focus 처리
	this.gfnSetValidationFocus(this.validationObject, this.validationColumn);
};

/**
 * @class 정합성 체크 오류시 해당 콤포넌트의 ERROR 스타일 처리 및 포커스 처리
 * @param  {Object} obj - Grid 및 Dataset
 * @param  {String} bindcolumid - 입력오류항목 컬럼명
 * @return N/A
 */
_pForm.gfnSetValidationFocus = function(obj, bindcolumid)
{
	let binddataset;

	if (obj instanceof Grid) {
		binddataset = obj.getBindDataset();
	}
	else {
		binddataset = obj;
	}

	// 바인딩된 Components
	for(let j=0;j<this.binds.length;j++)
	{
		if( eval("this."+this.binds[j].datasetid) == binddataset && this.binds[j].columnid == bindcolumid )
		{
			let targetobj = eval("this."+this.binds[j].compid);

			// Validation ERROR class 사용 시(PROJECT의 CSS에 맞게 수정 필요)
			if (this.useErrorClass)
			{
				let objtype = targetobj.valueOf();
				if (objtype == "[object Edit]") {
					targetobj.orgcssclass = targetobj.cssclass;
				//	targetobj.cssclass = "edt_WF_Error";
				}
				else if (objtype == "[object MaskEdit]") {
					targetobj.orgcssclass = targetobj.cssclass;
				//	targetobj.cssclass = "msk_WF_Error";
				}
				else if (objtype == "[object Combo]") {
					targetobj.orgcssclass = targetobj.cssclass;
				//	targetobj.cssclass = "cmb_WF_Error";
				}
				else if (objtype == "[object Calendar]") {
					targetobj.orgcssclass = targetobj.cssclass;
				//	targetobj.cssclass ="cal_WF_Error";
				}
				else if (objtype == "[object TextArea]") {
					targetobj.orgcssclass = targetobj.cssclass;
				//	targetobj.cssclass ="txt_WF_Error";
				}
				else if (objtype == "[object Spin]") {
					targetobj.orgcssclass = targetobj.cssclass;
					//targetobj.cssclass ="spn_WF_Error";
				}
				else if (objtype == "[object Radio]") {
					targetobj.orgcssclass = targetobj.cssclass;
				//	targetobj.cssclass ="rdo_WF_Error";
				}
				else if (objtype == "[object CheckBox]") {
					targetobj.orgcssclass = targetobj.cssclass;
					//targetobj.cssclass = "chk_WF_Error";
				}
			}

			targetobj.setFocus();
			return;
		}
	}

	// 그리드
	if (obj instanceof Grid) {
		obj.setCellPos(obj.getBindCellIndex("Body", bindcolumid));
		obj.showEditor(true);
		obj.setFocus();
	}
	// 데이터셋
	else {
		if (!this.gfnIsNull(obj.bindgrid)) {
			let gridobj = obj.bindgrid;
			gridobj.setCellPos(gridobj.getBindCellIndex("Body", bindcolumid));
			gridobj.showEditor(true);
			gridobj.setFocus();
		}
	}
};

/**
 * @class 정합성 체크 오류시 변경된 ERROR 스타일 원복 처리
 * @param  {Object} validationarg - Dataset/Grid 목록
 * @return N/A
 */
_pForm.gfnResetValidationCss = function(validationarg)
{
    for(let m=0;m<validationarg.length;m++)
    {
        let dataset;

        // 데이터셋
        if (validationarg[m] instanceof Dataset)
        {
            dataset = validationarg[m];
        }
        // 그리드
        else if (validationarg[m] instanceof Grid)
        {
            dataset = validationarg[m].getBindDataset();
        }
        else
        {
            continue;
        }

        // 해당 데이터셋을 바인딩하는 Component에 대해 cssclassr값을 원래 값으로 복원
        for(let j=0;j<this.binds.length;j++)
        {
            let sBindDs = this.binds[j].datasetid;
            if(this.gfnIsNull(sBindDs)==true) continue;

            if (eval("this."+this.binds[j].datasetid) == dataset) {
                try
                {
                    let targetobj  = eval("this."+this.binds[j].compid);
                    if( targetobj.cssclass.indexOf("Error") != -1 )
                    {
                        targetobj.cssclass = targetobj.orgcssclass;
                        targetobj.orgcssclass = "";
                    }
                }
                catch(e)
                {
                }
            }
        }
    }
};

/**
 * @class 한글의 은(는) 이(가) 을(를)에 대한 메세지처리를 초정/중성/종성의 갯수로 파악해서 처리한다.
 * @param {String} itemName - 대상 한글
 * @param {String} option - 접미사
 * @return {String} 완성형 메세지
 */
_pForm.gfnGetKoreanTarget = function(itemName, option)
{
    if (option == "은(는)")
    {
        if (itemName[itemName.length-1].toKorChars().length == 2) {
            return itemName+"는";
        } 
		else {
            return itemName+"은";
		}
    }
    else if (option == "이(가)")
    {
        if (itemName[itemName.length-1].toKorChars().length == 2) {
            return itemName+"가";
        } 
		else {
            return itemName+"이";
		}
    }
    else if (option == "을(를)")
    {
        if (itemName[itemName.length-1].toKorChars().length == 2) {
            return itemName+"를";
        } 
		else {
            return itemName+"은";
		}
    }
    else {
         itemName;
    }
};

/**
 * @class      	문자열(한글)의 초성/중성/종성의 정보를 가져온다.
 * @return 		{Array} 초성/중성/종성의 갯수만큼을 Array 배열로 리턴한다.
 */
String.prototype.toKorChars = function()
{
    let cCho  = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ],
        cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ],
        cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ],
        cho, jung, jong;

    let str = this,
        cnt = str.length,
        chars = [],
        cCode;

    for (let i = 0; i < cnt; i++) 
	{
        cCode = str.charCodeAt(i);

		if (cCode == 32) { continue; }

        // 한글이 아닌 경우
        if (cCode < 0xAC00 || cCode > 0xD7A3) {
            chars.push(str.charAt(i));
            continue;
        }

        cCode  = str.charCodeAt(i) - 0xAC00;

        jong = cCode % 28; // 종성
        jung = ((cCode - jong) / 28 ) % 21 // 중성
        cho  = (((cCode - jong) / 28 ) - jung ) / 21 // 초성

        chars.push(cCho[cho], cJung[jung]);
		if (cJong[jong] !== '') { chars.push(cJong[jong]); }
    }

    return chars;
};



/**
 * @class  validation component null 체크 함수
 *@param {component} form, div, grd 
 * @return true: 성공 fale : 오류 
 * @example
   let isCompsNull  = this.gfnIsNullEssential(this.div00);	
   let isGrdNull  =  this.gfnIsNullEssential(this.grd00);	
 * @memberOf 
 */
_pForm.gfnIsNullEssential = function (targetComp)
{
	  let res = true;
	  const xcomps = this.gfnCompsQuery(targetComp, "isVisible == true && prop[cssclass]=='Essential' && prop[readonly] == false && prop[enable] == true");
	  let checkComp;

	  xcomps.forEach((comp)=>{	  

		  if(comp instanceof nexacro.Combo
		    || comp instanceof nexacro.Radio
			|| comp instanceof nexacro.Edit){
			
		      if(!comp.value) {	
			    checkComp = comp;
			    comp.setFocus();
			    res = false;				
				return false;
			  }
		  }
	  });
		
     if(!res){	      
	    //[{0}]을 확인해 주세요.
	    this.gfnAlert("5016",["필수입력"],"w");
		return;
	 }

	 return res;
};

delete _pForm;