//添加一个cookie
function addCookie(name,value,expiresHours){ 
	var cookieString=name+"="+escape(value);
	//判断是否设置过期时间
	if(expiresHours>0){ 
		var date=new Date(); 
		date.setTime(date.getTime()+expiresHours*3600*1000);
//		alert(date.getTime());
		cookieString=cookieString+"; path=/; expires="+date.toGMTString();
	}
	document.cookie=cookieString; 
}

//获取指定名称的cookie值
function getCookie(name){ 
	var strCookie=document.cookie; 
	var arrCookie=strCookie.split("; "); 
	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("="); 
		if(arr[0]==name)
			return unescape(arr[1]); 
	} 
	return ""; 
}

//删除一个指定的cookie
function deleteCookie(name){ 
	var date=new Date(); 
	date.setTime(date.getTime()-10000); 
	document.cookie=name+"=; path=/; expires="+date.toGMTString(); 
}