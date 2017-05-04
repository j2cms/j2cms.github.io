	
	/**
	 * 打开或者掩藏ul
	 * @param id ul的id
	 */
	function showOrHiddendrop(id) {
		var existUlId = getCookie("existUlId");
//		alert(existUlId);
//		alert(id);
		setCookie("existUlId",id);
		var ul = document.getElementById(id);
		if(existUlId!=null){
			if(id==existUlId){
				if(ul.style.display=="inline")
					ul.style.display = 'none';
				else
					ul.style.display = "inline";
			}else{
				//将原来打开的关掉，是可选项
				var existUl = document.getElementById(existUlId);
				existUl.style.display = 'none';
				//将现在的打开
				ul.style.display = "inline";			
			}
		}else{
			ul.style.display = "inline";
		}
		

	}

	function goHref(liId, href) {
		//写入tid到cookie
		setCookie("existLiId",liId);
		
		//跳转
		//parent.frames.main.location.href = href;//如果是framset方式
		window.location.href = href;//如果是sitemesh方式

	}
	
	/**
	 * 页面加载时选定ul和li
	 * 每个ul下的li不超过10个才有效
	 */
	function onLoad(){
		var existLiId = getCookie("existLiId");
		
//		alert(existexistLiId);
		
		if(existLiId!=null){//页面首次加载时是没有的
			// 每个ul下的li不超过10个才有效
			var ulId = "ul"+existLiId.substring(2,existLiId.length-1);
//			alert(ulId);
			showOrHiddendrop(ulId);
			
			//将选定的li着色
			var li = document.getElementById(existLiId);
			li.style.color = "#00688B";
		}
		
//		for ( var j = 1; j <= menuNumber; j++) {
//			var ul = document.getElementById("ul" + j);
//			//每一个ul里的ul数组
//			var lis = ul.getElementsByTagName("li");
//			for ( var i = 0; i < lis.length; i++) {
//				if (lis[i].id == existLiId) {
//					//a[i].style.background="#19BBEB";
//					lis[i].style.color = "#00688B";
//					//a[i].getElementsByTagName("a")[0].style.color="#00688B";
//
//				} else {
//					//a[i].style.background="#EEFFFF";
//					//a[i].getElementsByTagName("a")[0].style.color="#19AADA";
//					lis[i].style.color = "#19AADA";
//				}
//			}
//		}
	}

	/*****************以下代码已经无用***************************/
	/**
	 * 打开ul
	 * @param id
	 */
	function showdrop(id) {
		for ( var j = 1; j <= menuNumber; j++) {
			var a = document.getElementById("ul" + j);
			if (a.id == id) {

				a.style.display = "inline";
			} else
				a.style.display = "none";
		}

	}
	
	/**
	 * 掩藏ul
	 * @param id
	 */
	function hidedrop(id) {
		var drop_div = document.getElementById(id);
		drop_div.style.display = "none";
	}
	
	/**
	 * 只是改变颜色
	 */
	function setli(tid) {
		for ( var j = 1; j <= menuNumber; j++) {
			var a = document.getElementById("ul" + j).getElementsByTagName("li");

			for ( var i = 0; i < a.length; i++) {
				if (a[i].id == tid) {
					a[i].style.color = "#00688B";
				} else {
					a[i].style.color = "#19AADA";
				}
			}
		}
	}
	
	