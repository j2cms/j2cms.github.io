

/*****************************************************  
 *  函数名：DateCheck()
 *  作  用：检查字符中是否在指定的大小范围内和是否含有非法字符
 *	参  数：date: 要检查的字符；
 *          minum:  字符最小的长度
 *  		maxnum: 字符最大的长度
 *  返回值：True:   数据不在指定范围内或含有非法字符
 *			False:  数据在指定范围内且不含有非法字符
 ******************************************************
*/
function DateCheck(date,minnum,maxnum)
{
	if (date.length < minnum || date.length > maxnum ){
		window.alert("输入数据的长度不能少于 " + minnum + " 位并且不能大于 " + maxnum + " 位!");
		return true;
	}

	 a = date.indexOf("'");
	 b = date.indexOf("|");
	 c = date.indexOf("\"");
	 
	 if (a != -1||b != -1 ||c != -1){
	   window.alert("您的输入含有特殊字符，请重新输入！");
	   return true;
	  	}
	return false;
}


/*****************************************************  
 *  函数名：	IsNum()
 *  作  用：检查字符是否是纯数字
 *	参  数：str: 要检查的字符；  
 *  返回值：True:   是数字
 *			False:  不是纯数字
 ******************************************************
*/
function IsNum(str)
{
	return !/\D/.test(str);
}


/*****************************************************  
 *  函数名：	IsStr()
 *  作  用：检查字符是否是字符
 *	参  数：str: 要检查的字符  
 *  返回值：True:   是字符
 *			False:  不是纯字符
 ******************************************************
*/
function IsStr(str)
{      
   if (/[^\x00-\xff]/g.test(str))
	{
		return false;
	}
   else 
	{
		return true;
	}
}


/*****************************************************  
 *  函数名：IsEmail()
 *  作  用：检查Email地址是否合法
 *	参  数：date: 要检查的Email地址  
 *  返回值：True: Email 地址合法
 *          False:Email 地址不合法
 *****************************************************
*/
function IsEmail(vEMail)
{
	var regInvalid=/(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/;
	var regValid=/^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/;
	return (!regInvalid.test(vEMail)&&regValid.test(vEMail));
}



/*****************************************************  
 *  函数名：CheckUser()
 *  作  用：检查用户表单信息
 *	参  数：无 
 *  返回值：True: 验证通过
 *          False: 验证没有通过
 ******************************************************
*/
function CheckUser(){

	var UserQQ = document.User.UserQQ.value;
	if (UserQQ != "") 
	{
		if(!IsNum(UserQQ))
		{
			alert("您输入的QQ不是纯数字,如果没有QQ请不要填写!");
			document.User.UserQQ.focus();
			document.User.UserQQ.value = "";
			return false;
		}
		if(DateCheck(UserQQ,4,10))
		{
			document.User.UserQQ.focus();
			document.User.UserQQ.value = "";
			return false;
		}
	}
}





/*****************************************************  
 *  函数名：CheckModPwd()
 *  作  用：修改密码表单数据验证
 *	参  数：无 
 *  返回值：True: 验证通过
 *          False: 验证没有通过
 *****************************************************
*/
function CheckModPwd()
{
	var OldPwd = document.User.OldPwd.value;
	if (OldPwd == "") {
	alert("请输入你的旧密码!");
	document.User.OldPwd.focus();
		return false;
	}
	
	if(DateCheck(OldPwd,4,16)){
		document.User.OldPwd.focus();
		document.User.OldPwd.value = "";
		return false;
	}
	
	var AdminPwd = document.User.AdminPwd.value;
	if (AdminPwd == "") {
	alert("新密码不能为空！");
	document.User.AdminPwd.focus();	
		return false;
	} 
	
	if(DateCheck(AdminPwd,4,16)){
		document.User.AdminPwd.focus();
		document.User.AdminPwd.value = "";
		return false;
	}
	
	var AdminPwd2 = document.User.AdminPwd2.value; 
	if (AdminPwd2 == "") {
	alert("请确认新密码！");
	document.User.AdminPwd2.focus();		
		return false;
      }
	  
	if(DateCheck(AdminPwd2,4,16)){
		document.User.AdminPwd2.focus();
		document.User.AdminPwd2.value = "";
		return false;
	}
	 
	if (AdminPwd != AdminPwd2) {
	alert("你两次输入的密码不一致，请重输入！");
	document.User.AdminPwd.focus();	
	document.User.AdminPwd.value = "";
	document.User.AdminPwd2.value = "";
		return false;
	}
	 
  return true;
  }    
 
 
 

