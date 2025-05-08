/**
*  Log 관련 라이브러리
*  @FileName 	log.js
*  @Creator 	#{J}
*  @CreateDate :  2025.04.15
*/

/********************************************************************************************
*● console (log,error,warn,dev)     :  로그 처리 
*● gfnLog     :  멀티 trance 로그 (array,json,string)
********************************************************************************************/


/**
 * 개발자 로그 함수
 * @param arguments 
 * @return 
 * @example
    
 * @memberOf 
 */
_pForm.console = {
    log: function() {
	    const args = Array.from(arguments);		
		 let params = args.join(" ");				  
	     nexacro._Browser == "Runtime"  ?  trace(params) : console.log(params) ;
	},
	error : function()
	{
		 const args = Array.from(arguments);	
		 let params = args.join(" ");		  
	     nexacro._Browser == "Runtime" ? trace(params) : console.error(params) ;
	},
	warn : function ()
	{
		 const args = Array.from(arguments);		
		  let params = args.join(" ");						  
	     nexacro._Browser == "Runtime" ? trace(params) : console.warn(params) ;
	},
	dev : function() 
	{
	    const args = Array.from(arguments);		
	    let params = args.join(" ");	
	     _pForm.console.error("[DEV-ERR] " + params);
	}
};

/**
* 디버그 로그를 남긴다.<br><br>
* @public
* @param {string|object} msg 출력할 메시지 또는 옵션을 포함한 Object.
* @example		 *
* this.gfnLog("디버깅 출력 !!!");
* this.gfnLog(["디버깅 출력1","디버깅 출력2"]);
* this.gfnLog({message: "Filter 1 !!!", message2: "Test1"});
* ERROR :  * this.gfnLog("디버깅 출력 !!!","e");
* WARN :  * this.gfnLog("디버깅 출력 !!!","w");
*/	
_pForm.gfnLog = function()
{	
	const pthis= this;

	let sMsg = "" ;    //log message
	let resultMessage = "";	
	let params = arguments[0];
	let slevel  = arguments[1] || "info";
	let logFunc = this.gfnLog.caller,caller;	
	let argus = [].join.call(arguments.callee.caller.caller.arguments);
	let callFunc = logFunc.caller;				// 실제 로깅이 발생한 함수		
	let funcString      = pthis._gfnGetFuncFullName(callFunc);	
		
	let dataString =  pthis.gfnDateFormatString(new Date(), "%Y/%m/%d %H:%M:%S");

	sMsg +=  "\n===================== LOG ======================";
	
	if(!!params)
	{	
		 if(typeof(params) != "string")  sMsg += nexacro._logObject(params);
		else	sMsg += "\n  "+ params+ "\n";    //넘어온 아규먼트	 
		 
	}
	sMsg  += "===============================================\n";  

	 resultMessage =  dataString + " [" + slevel + "] " + " - " +  funcString + "(" + argus + ") - " +  sMsg + "\n";

    this._writeLog(resultMessage,slevel);	
	//    this.console.error(resultMessage,slevel);
		 // let e = new Error(resultMessage);
		//	  throw e;		
};

nexacro._logObject = function(param)
{

    let resMsg = "";
	if(nexacro._isArray(param)){
	    
		param.forEach((value,idx)=> resMsg += `\n [${idx}] ${value}`);		
		resMsg += "\n";
		
		return resMsg;
	    
	}else if(nexacro._isObject(param)){
		 let arrRes = [];   
		arrRes.push("\n");
		 if(nexacro._isObject(param))
		{
			 Object.entries(param).forEach(([key,value],idx) => {
			 arrRes.push(`[${idx}] ${key}:${value} \n`); 			 
			// this.console.log( `# index : ${idx}  # 키값 : ${key} # 데이터값 : ${value}`);
		  });  
		}  
		 
		return arrRes.join(" ");
	}
   
};

/**
* 로그 출력 처리.
* @private
* @param {string} message 출력할 메시지
* @param {string} 출력 옵션 "info" "error" "warn"

*/			
_pForm._writeLog =  function(message,slevel) 
{    
    
    switch(slevel) {
    case "e":
		this.console.error(message);
    	break;
    case "w":
	   this.console.warn(message);
    	break;
    default:	
	   this.console.log(message);
    }

};	 

/**
* Form에 존재하는 함수들의 debug정보를 구성한다.<br><br>
* 폼의 함수를 익명함수 형태로 하므로 본 함수를<br>
* 호출하지 않으면 anonymous function 으로 표시된다.<br>
* stack 기능을 사용하려면 이 함수가 호출되어야 한다.<br>
* @private
* @param {Form} form 대상 Form
* @example
* 
* this._gfnSetDebugInfoFunctions(this, false);
*/			
_pForm._gfnSetDebugInfoFunctions =  function(form)
{

	for ( let nm in form )
	{
		if ( form.hasOwnProperty(nm) && typeof form[nm] == "function" )
		{S
		   
			form[nm]._thisName = nm;
			form[nm]._thisOwner = form;
		}
	}
};

/**
* function full name을 얻어온다.
* @private
* @param {function} func 대상 function.
* @return {string} function full name.
*/		
_pForm._gfnGetFuncFullName = function(func) 
{

	let name = "";
	if (func._thisOwner)
	{
		name += (func._thisOwner._className || this._gfnGetPathName(func._thisOwner)) + ".";
	}

	if (func._thisName)
	{
		name += func._thisName;
	}
	else
	{
		let funcName = "";
		if ( 'name' in func )
		{
			funcName = func.name;
		}
		else
		{					
			const reg = /function\s*([\w\-$]+)?\s*\(/i;
			funcName = reg.test(func.toString()) ? RegExp.$1 : "";
		}
		
		if( funcName.length == 0 )
		{
			funcName = "anonymous function";
		}
						
		name += funcName;
	}
	return name;
};

/**
* ChildFrame에 속한 계층 위치의 정보까지 명칭으로 얻는다.
* @param {XComp} obj nexacro component.
* @param {XComp=} refParent 계층 구조에서 중단할 상위 nexacro component.
* @return {string} obj 계층 구조의 명칭(ex: form.Div00.Button01).
* @example
*
* // obj = Button
* trace(this._getPathName(obj, this));
* // output : Button00
*
* trace(this.getPathName(Div00.form.st_test, this));
* // output : Div00.form.st_test
*/
_pForm._gfnGetPathName =  function(obj, refParent)	
{
	let c = obj, arr = [];			
	while ( c )
	{
		if ( c instanceof ChildFrame ) break;
		if ( refParent && c === refParent ) break;
		arr.push(c.name);
		c = c.parent;
	}
	arr = arr.reverse();
	return arr.join(".");
};
 
	/**
 * component의 depth에 포함된 하위 component 또는 object 반환(recursive).<br>
 * component가 container가 아닐 경우 undefind 반환.
 * @private
 * @param {XComp} from 대상 container component.
 * @param {object} depth max & current depth object.
 * @return {array} 하위 component 또는 object.
 */		
_pForm._gfnGetChildren = function(from, depth)
{
	const pThis = this;
	let formChild = [];
	let children = pThis._gfnGetAll(from);
	let results = [], c, cs0, recvCs;
	
	depth.current += 1;
	
	for (let i=0,len=children.length; i<len; i++)
	{
		c = children[i];
		
		if ( depth.max > depth.current ) {
			results.push(c);
			cs0 = pThis._gfnGetAll(c);
			if ( cs0 && cs0.length > 0) {
				recvCs = pThis._gfnGetChildren(c, depth);
				results = results.concat(recvCs);
				depth.current -= 1;						
			}	

		}
		else
		{	
			results.push(c);
		}
	}
	
	return results;
};

/**
 * component에 포함된 모든 하위 component 또는 object 반환.
 * @private
 * @param {nexacro Component} c 대상 component.
 * @return {array} 하위 component 또는 object.
 * @memberOf 
 */
_pForm._gfnGetAll = function(c)
{
	let children = [];
	let cs = c.all;
	
	if(c instanceof nexacro.Div) {
		children.push(c.form);
		return children;
		
	} else if(c instanceof nexacro.PopupDiv) {
		children.push(c.form);
		return children;
		
	} else if(c instanceof nexacro.Tab) {
		c = c.tabpages;
		return c;
		
	} else if(c instanceof nexacro.Tabpage) {
		//c = c.form;
		children.push(c.form);
		return children;				
	}
	
	//trace("_gfnGetAll > c.all=" + cs);
	
	if ( cs )
	{
		for (var i=0,len=cs.length; i<len; i++)
		{
			children.push(cs[i]);
		}
	}
	else 
	{
		cs = c.objects;
		if ( cs )
		{
			for (var i=0,len=cs.length; i<len; i++)
			{
				children.push(cs[i]);
			}				
		}
		
		cs = c.components;
		if ( cs )
		{
			for (var i=0,len=cs.length; i<len; i++)
			{
				children.push(cs[i]);
			}				
		}
	}	
	return children;
};

/**
 * where 조건문을 파싱하여 실행 함수를 반환.
 * @private
 * @param {string} where where 문자열.
 * @return {function} where 조건 실행 함수.
 */
_pForm._parseQueryWhere = function(where)
{
	const pThis = this;
	let cache = pThis._parseQueryCache[where];
	
	if ( cache )
	{
		return cache;
	}
	
	let token, type, value, temp;
	let tokens = pThis._tokenizeQueryWhere(where);
	
	let depth = 0, maxDepth=0;
	let syntax = [];
	let i=0;
	for (i=0,len=tokens.length; i<len; i++)
	{
		token = tokens[i];
		type = token.type;
		value = token.value;
		//trace(type + " : " + value);
		if ( type == "bracket" )
		{
			if ( value == "(" )
			{
				syntax.push({depth:depth, type:"value", value:"("});
				depth += 1;
				maxDepth = depth;
			}
			else if ( value == ")" )
			{
				depth -= 1;
				syntax.push({depth:depth, type:"value", value:")"});						
			}
		}
		else if ( type == "named" )
		{			
			if ( value == "prop")
			{
				
				i += 1;
				token = tokens[i];
				
				
				if ( token.type == "bracket" && token.value == "[" )
				{
					i += 1;
					token = tokens[i];
					syntax.push({depth:depth, type:"operand", value:"this._getQueryCompValue(obj, \""+value+"\", \""+token.value+"\")"});
				}
				i += 1;
			}
			else if ( value == "typeOf" || value == "isVisible" || value == "isVisual" || value == "isEnable" )
			{
				syntax.push({depth:depth, type:"operand", value:"this.gfn"+this.gfnCapitalize(value)+"(obj)"});
			}
		}
		else if ( type == "operator" )
		{
			if ( value == "&&" || value == "||" )
			{
				syntax.push({depth:depth, type:"operator", value:value});
			}
			else
			{
				temp = "";
				switch (value)
				{
					case '==' :
						temp = "equal";
						break;
					case '!=' :
						temp = "notEqual";
						break;
					case '>' :
						temp = "greaterThan";
						break;
					case '>=' :
						temp = "greaterThanEqual";
						break;
					case '<' :
						temp = "lessThan";
						break;
					case '<=' :
						temp = "lessThanEqual";
						break;
					case '*=' :
						temp = "contains";
						break;	
					case '^=' :
						temp = "startWith";
						break;	
					case '$=' :
						temp = "endWith";
						break;																																				
				}
				syntax.push({depth:depth, type:"replaceOperator", value:"this._operators."+temp+"($1, $2)"});
			}
		} 		
		else if ( type == "string" )
		{
			syntax.push({depth:depth, type:"operand", value:"\""+value+"\""});
		}
		else if ( type == "number" || type == "boolean" )
		{		
			syntax.push({depth:depth, type:"operand", value:value});
		}
	}

	let s, s0, s1;
	for (i=maxDepth; i>=0; i--)
	{
		pThis._replaceOperator(i, syntax);
	}
	
	var result = [];
	for (i=0,len=syntax.length; i<len ;i++)
	{
		s = syntax[i];
		result.push(syntax[i].value);
	}
	
	var fn = "var f = function(obj) {\n	return " + result.join(" ") + ";\n}";

	try 
	{
		eval(fn);
	}
	catch(e)
	{
		trace("eval error:"+e.description);
	}
				
	pThis._parseQueryCache[where] = f;
	
	return f;
};

/**
 * where 조건문의 연산자에 피연산자를 대입한다.
 * @private
 * @param {number} depth 우선순위 깊이.
 * @param {number} syntax 변환 대상 token.
 * @memberOf 
 */		
_pForm._replaceOperator =  function(depth, syntax)
{
	let s,i=0;
	for (i=0,len=syntax.length; i<len; i++)
	{
		s = syntax[i];
		if ( s.depth == depth )
		{
			if ( s.type == "replaceOperator" )
			{
				s0 = syntax[i-1];
				s1 = syntax[i+1];
				
				if ( s0 && s0.depth == depth && s0.type == "operand" && 
					 s1 && s1.depth == depth && s1.type == "operand" )
				{
					temp = s.value;
					temp = temp.replace("$1", s0.value);
					temp = temp.replace("$2", s1.value);

					s.depth = s.depth-1;
					s.type = "operand";
					s.value = temp;
					
					s0.depth = null;
					s1.depth = null;
					
					i += 1;
				}
			}
		}
	}
	
	for (i=(syntax.length-1); i>=0; i--)
	{
		s = syntax[i];
		if ( s.depth == null )
		{
			syntax.splice(i,1);
			i--;
		}
	}
};



/**
 * where 조건문의 token을 얻어온다.<br>
 * thanks to Douglas Crockford. tokens.js (crockford.com)
 * @private
 * @param {string} str where 문자열.
 * @return {array} type, value 를 가지는 token collecion.
 */
_pForm._tokenizeQueryWhere =  function(str)
{
	let c;				// The current character.
	let i = 0;			// The index of the current character.	
	let s;				// The string value.
	let n;				// The number value.
	let q;				// The quote character.
	
	let result = [];	// An array to hold the results.
	
	const prefix = '<>&|=*^$!';
	const suffix = '=>&|';
	
	let length = str.length;
	
	c = str.charAt(i);
	
	while (c) 
	{
		// Ignore whitespace.
		if (c <= ' ') 
		{
			i += 1;
			c = str.charAt(i);
		}
		// named or boolean
		else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_') 
		{
			s = c;
			i += 1;
			for (;;) 
			{
				c = str.charAt(i);
				if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') ||
						(c >= '0' && c <= '9') || c === '_') {
					s += c;
					i += 1;
				} else {
					break;
				}
			}
			
			if ( s == 'true' || s == 'false' )
			{
				result.push({type:'boolean', value:s});
			}
			else
			{
				result.push({type:'named', value:s});
			}
		} 
		// number.
		// A number cannot start with a decimal point. It must start with a digit,
		// possibly '0'.
		else if (c >= '0' && c <= '9') {
			s = c;
			i += 1;
			// Look for more digits.
			for (;;) 
			{
				c = str.charAt(i);
				if (c < '0' || c > '9') {
					break;
				}
				i += 1;
				s += c;
			}
			// Look for a decimal fraction part.
			if (c === '.') {
				i += 1;
				s += c;
				for (;;) 
				{
					c = str.charAt(i);
					if (c < '0' || c > '9') {
						break;
					}
					i += 1;
					s += c;
				}
			}
			// Look for an exponent part.
			if (c === 'e' || c === 'E') {
				i += 1;
				s += c;
				c = str.charAt(i);
				if (c === '-' || c === '+') {
					i += 1;
					s += c;
					c = str.charAt(i);
				}
				if (c < '0' || c > '9') {
					trace("Bad exponent");
				}
				do {
					i += 1;
					s += c;
					c = str.charAt(i);
				} while (c >= '0' && c <= '9');
			}
			// Make sure the next character is not a letter.
			if (c >= 'a' && c <= 'z') 
			{
				s += c;
				i += 1;                
				trace("Bad number");
			}
			// Convert the string value to a number. If it is finite, then it is a good
			// token.
			n = +s;
			if (isFinite(n)) 
			{
				result.push({type:'number', value:n});
			}
			else 
			{
				trace("Bad number");
			}
		}
		// string
		else if (c === '\'' || c === '"') {
			s = '';
			q = c;
			i += 1;
			for (;;) 
			{
				c = str.charAt(i);
				if (c < ' ') {
					if (c === '\n' || c === '\r' || c === '')
					{
						trace("Unterminated string.");
					}
					else
					{
						trace("Control character in string.");
					}
				}

				// Look for the closing quote.
				if (c === q) 
				{
					break;
				}

				// Look for escapement.
				if (c === '\\') {
					i += 1;
					if (i >= length) 
					{
					   trace("Unterminated string");
					}
					c = str.charAt(i);
					switch (c) {
					case 'b':
						c = '\b';
						break;
					case 'f':
						c = '\f';
						break;
					case 'n':
						c = '\n';
						break;
					case 'r':
						c = '\r';
						break;
					case 't':
						c = '\t';
						break;
					case 'u':
						if (i >= length) 
						{
							trace("Unterminated string");
						}
						c = parseInt(str.substr(i + 1, 4), 16);
						if (!isFinite(c) || c < 0) {
							trace("Unterminated string");
						}
						c = String.fromCharCode(c);
						i += 4;
						break;
					}
				}
				s += c;
				i += 1;
			}
			i += 1;
			result.push({type:'string', value:s});
			c = str.charAt(i);
		} 
		// comment. (not use)
		else if (c === '/' && str.charAt(i + 1) === '/') 
		{
			i += 1;
			for (;;) 
			{
				c = str.charAt(i);
				if (c === '\n' || c === '\r' || c === '') {
					break;
				}
				i += 1;
			}
		} 
		// combining
		else if (prefix.indexOf(c) >= 0) 
		{
			s = c;
			i += 1;
			while (true) 
			{
				c = str.charAt(i);
				if (i >= length || suffix.indexOf(c) < 0) 
				{
					break;
				}
				s += c;
				i += 1;
			}
			result.push({type:'operator', value:s});
		} 
		// single-character operator
		else 
		{
			if ( "()[]".indexOf(c) > -1 )
			{
				result.push({type:'bracket', value:c});
			}
			else
			{
				result.push({type:'operator', value:c});
			}
			
			i += 1;            
			c = str.charAt(i);
		}	
	}
	return result;
};

/**
 * component의 property에서 특정 name에 해당하는 값을 얻어온다.
 * @private
 * @param {nexacro Component} obj XComponent.
 * @param {string} type 검색 대상(property).
 * @param {string} name property에서 찾을 명칭.
 * @return {string} name(명칭)에 해당하는 값.
 * @memberOf 
 */		
_pForm._getQueryCompValue = function(obj, type, name)
{
	let ret;
	if ( type == "prop" ) 
	{
		ret = obj[name];
	} 

	
	if ( ret && typeof ret == "object" ) 
	{
		if ( ret.toString ) 
		{
			ret = ret.toString();
		}
		else
		{
			ret = ret + "";
		}
		ret = ret.trim();
	}
	
	return ret;
};

/**
 * component의 depth에 포함된 하위 component 또는 object 반환(recursive).<br>
 * component가 container가 아닐 경우 undefind 반환.
 * @private
 * @param {XComp} from 대상 container component.
 * @param {object} depth max & current depth object.
 * @return {array} 하위 component 또는 object.
 * @memberOf 
 */		
_pForm._getChildren = function(from, depth)
{
	const pThis = this;
	let formChild = [];
	let children = pThis._getAll(from);
	let results = [], c, cs0, recvCs;
	
	depth.current += 1;
	
	for (let i=0,len=children.length; i<len; i++)
	{
		c = children[i];
		
		if ( depth.max > depth.current ) {
			results.push(c);
			cs0 = pThis._getAll(c);
			if ( cs0 && cs0.length > 0) {
				recvCs = pThis._getChildren(c, depth);
				results = results.concat(recvCs);
				depth.current -= 1;						
			}	

		}
		else
		{	
			results.push(c);
		}
	}
	
	return results;
};
/**
 * component에 포함된 모든 하위 component 또는 object 반환.
 * @private
 * @param {nexacro Component} c 대상 component.
 * @return {array} 하위 component 또는 object.
 * @memberOf 
 */
_pForm._getAll = function(c)
{
	let children = [];
	let cs = c.all;
	
	if(c instanceof nexacro.Div) {
		children.push(c.form);
		return children;
		
	} else if(c instanceof nexacro.PopupDiv) {
		children.push(c.form);
		return children;
		
	} else if(c instanceof nexacro.Tab) {
		c = c.tabpages;
		return c;
		
	} else if(c instanceof nexacro.Tabpage) {
		//c = c.form;
		children.push(c.form);
		return children;				
	}
	
	//trace("_getAll > c.all=" + cs);
	
	if ( cs )
	{
		for (var i=0,len=cs.length; i<len; i++)
		{
			children.push(cs[i]);
		}
	}
	else 
	{
		cs = c.objects;
		if ( cs )
		{
			for (var i=0,len=cs.length; i<len; i++)
			{
				children.push(cs[i]);
			}				
		}
		
		cs = c.components;
		if ( cs )
		{
			for (var i=0,len=cs.length; i<len; i++)
			{
				children.push(cs[i]);
			}				
		}
	}	
	return children;
};

			
delete _pForm;