

 var arrayID = new Array();
 var arrayName = new Array();
 var arrayPrice = new Array();
 var arrayCount = new Array();
 var shopID = document.getElementById("title_id").getAttribute("value");
 var shopName = document.getElementById("title_id").getAttribute("name");
 var orderJsonlist;
 var other_orderJsonlist;
 var orderJsonlists = new Array();
 var str_orderJsonlists;
 var foodID;
 var foodName;
 var foodPrice;
 var foodCount;
 var temp;
 var obj1;
 var all_price;
 var i=0;
 var j=0;
 var k=0;
 var del_index;
 var del_shopName;
 var del_shopID;
 init_product();

 function init_product(){
	orderJsonlists = [];
	other_orderJsonlist = "";
	orderJsonlist = '{ "shopID": "' + shopID + '","shopName":"' + shopName + '", ';
	temp = getCookie("orderJsonlists");
//	alert(temp);
	if(temp != ""){
		orderJsonlists = eval('(' + temp + ')');
	}

	document.getElementById("order_body").innerHTML="";
	all_price = 0;
	
	for(j=0;j<orderJsonlists.length;j++){
		document.getElementById("order_body").innerHTML = document.getElementById("order_body").innerHTML + "<div style='float:left;width:200px;font-weight:bold;margin-bottom:10px;margin-top:15px;color:#ff0000'>" + orderJsonlists[j].shopName + "</div>";
		arrayID = orderJsonlists[j].foodID.split(",");
		arrayName = orderJsonlists[j].foodName.split(",");
		arrayPrice = orderJsonlists[j].foodPrice.split(",");
		arrayCount = orderJsonlists[j].foodCount.split(",");
		for(i=0;i<arrayID.length;i++){
			document.getElementById("order_body").innerHTML = document.getElementById("order_body").innerHTML + "<div style='float:left;width:140px;'>" + arrayName[i] + "</div><div style='margin-left:5px;float:left;width:50px;text-align:right;'>" + arrayPrice[i] + "元</div><div style='margin-left:5px;float:left;width:50px;text-align:left;'>" + arrayCount[i] + "份</div><div id= '" + arrayID[i] +"' name= '" + orderJsonlists[j].shopID + "' style='float:right;width:100px;text-align:right;font-weight:bold;' onmouseup='delete_order(this);' class='mouse_change'><a>删除</a></div>" + "<br />";
			all_price = all_price + parseInt(arrayPrice[i])*parseInt(arrayCount[i]);
		}
	}
	if(arrayID.length>0){
		document.getElementById("submit_btn_pic").style.display="block";
		document.getElementById("all_price").innerHTML="总共<span style='font-weight:bold;vertical-align:bottom;'>" + all_price + "元</span>";
	}
 }
 function get_product(value){
	orderJsonlists = [];
	other_orderJsonlist = "";
	orderJsonlist = '{ "shopID": "' + shopID + '","shopName":"' + shopName + '", ';
	temp = getCookie("orderJsonlists");
	//alert(temp);
	if(temp != ""){
		orderJsonlists = eval('(' + temp + ')');
		for(i=0;i<orderJsonlists.length;i++){
			if(orderJsonlists[i].shopID==shopID){
				break;
			}
		}
		if(i<orderJsonlists.length){//说明当前商家存在于orderJsonlists中
			arrayID = orderJsonlists[i].foodID.split(",");
			arrayCount = orderJsonlists[i].foodCount.split(",");
			for(j=0;j<arrayID.length;j++){
				if (arrayID[j] == document.getElementById(value).id){
					foodID = orderJsonlists[i].foodID;
					foodName = orderJsonlists[i].foodName;
					foodPrice = orderJsonlists[i].foodPrice;
					arrayCount[j] = (parseInt(arrayCount[j])+1).toString();
					
					for(k=0;k<arrayID.length;k++){
						if(k==0){
							foodCount = arrayCount[k];
						}else{
							foodCount = foodCount + "," + arrayCount[k];
						}
					}
					orderJsonlists.splice(i,1);
					break;
				}
			}
			if(j==arrayID.length){ //商品没有重复
				foodID = document.getElementById(value).id  + ',' + orderJsonlists[i].foodID;
				foodName = document.getElementById(value).getAttribute("name") + ',' + orderJsonlists[i].foodName;
				foodPrice = document.getElementById(value).getAttribute("value") + ',' + orderJsonlists[i].foodPrice;
				foodCount = '1,' + orderJsonlists[i].foodCount;
				orderJsonlists.splice(i,1);
			}
		}
		else{//当前商家不存在于orderJsonlists中
			foodID = document.getElementById(value).id;
			foodName = document.getElementById(value).getAttribute("name");
			foodPrice = document.getElementById(value).getAttribute("value");
			foodCount = "1";
		}
		for(j=0;j<orderJsonlists.length;j++){
			other_orderJsonlist = other_orderJsonlist + ', { "shopID": "' + orderJsonlists[j].shopID + '","shopName":"' + orderJsonlists[j].shopName + '","foodID": "' + orderJsonlists[j].foodID + '","foodName":"' + orderJsonlists[j].foodName + '","foodPrice":"' + orderJsonlists[j].foodPrice + '","foodCount":"' + orderJsonlists[j].foodCount + '"}';
//			alert("other   "+other_orderJsonlist);
		}
	}else{//什么记录都没有的时候
		foodID = document.getElementById(value).id;
		foodName = document.getElementById(value).getAttribute("name");
		foodPrice = document.getElementById(value).getAttribute("value");
		foodCount = "1";
	}
	orderJsonlist = orderJsonlist + '"foodID": "' + foodID + '","foodName":"' + foodName + '","foodPrice":"' + foodPrice + '" ,"foodCount":"' + foodCount + '"}';
	orderJsonlists = orderJsonlist + other_orderJsonlist;
	str_orderJsonlists = "[" + orderJsonlists + "]";
	deleteCookie("orderJsonlists");
	addCookie("orderJsonlists",str_orderJsonlists,1);
	//alert("已加入我的订单");
	orderJsonlists = eval('(' + str_orderJsonlists + ')');
	document.getElementById("order_body").innerHTML="";
	all_price = 0;
	
	for(j=0;j<orderJsonlists.length;j++){
		document.getElementById("order_body").innerHTML = document.getElementById("order_body").innerHTML + "<div style='float:left;width:200px;font-weight:bold;margin-bottom:10px;margin-top:15px;color:#ff0000'>" + orderJsonlists[j].shopName + "</div>";
		arrayID = orderJsonlists[j].foodID.split(",");
		arrayName = orderJsonlists[j].foodName.split(",");
		arrayPrice = orderJsonlists[j].foodPrice.split(",");
		arrayCount = orderJsonlists[j].foodCount.split(",");
		for(i=0;i<arrayID.length;i++){
			document.getElementById("order_body").innerHTML = document.getElementById("order_body").innerHTML + "<div style='float:left;width:140px;'>" + arrayName[i] + "</div><div style='margin-left:5px;float:left;width:50px;text-align:right;'>" + arrayPrice[i] + "元</div><div style='margin-left:5px;float:left;width:50px;text-align:left;'>" + arrayCount[i] + "份</div><div id= '" + arrayID[i] +"' name= '" + orderJsonlists[j].shopID + "' style='float:right;width:100px;text-align:right;font-weight:bold;' onmouseup='delete_order(this);' class='mouse_change'><a>删除</a></div>" + "<br />";
			all_price = all_price + parseInt(arrayPrice[i])*parseInt(arrayCount[i]);
		}
	}
	if(arrayID.length>0){
		document.getElementById("submit_btn_pic").style.display="block";
		document.getElementById("all_price").innerHTML="总共<span style='font-weight:bold;vertical-align:bottom;'>" + all_price + "元</span>";
	}
	
}
 function submit_order(ctp){
	if(getCookie("USER_NAME")==""){
		alert("请先登录！");
		window.location.href=ctp+'/login';
	}else{
		window.location.href=ctp+'/cart';//转向购物车
	}
 }
 
// function submit_order(){
//		if(getCookie("USER_NAME")==""){
//			alert("请先登录！");
//			window.location.href='login';
//		}else{
//			window.location.href='submit.html';
//		}
//	 }
 
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
		if (this[i] == val)
			return i;
	}
    return -1;
};
		
function delete_order(div){
	orderJsonlists = [];
	other_orderJsonlist = "";
	orderJsonlist = '{ "shopID": "' + shopID + '","shopName":"' + shopName + '", ';
	temp = getCookie("orderJsonlists");
	
	if(temp != ""){
		orderJsonlists = eval('(' + temp + ')');
//		alert("orderJsonlists的长度为"+orderJsonlists.length);
		for(i=0;i<orderJsonlists.length;i++){
			if(orderJsonlists[i].shopID==div.getAttribute("name")){
				break;
			}
		}
		if(i<orderJsonlists.length){//说明存在
			foodID = orderJsonlists[i].foodID;
			foodName = orderJsonlists[i].foodName;
			foodPrice = orderJsonlists[i].foodPrice;
			foodCount = orderJsonlists[i].foodCount;
			del_shopName = orderJsonlists[i].shopName;
			del_shopID = orderJsonlists[i].shopID;
			orderJsonlists.splice(i,1);
		}
		for(j=0;j<orderJsonlists.length;j++){
			if(j==0){
				other_orderJsonlist = '{ "shopID": "' + orderJsonlists[j].shopID + '","shopName":"' + orderJsonlists[j].shopName + '","foodID": "' + orderJsonlists[j].foodID + '","foodName":"' + orderJsonlists[j].foodName + '","foodPrice":"' + orderJsonlists[j].foodPrice + '","foodCount":"' + orderJsonlists[j].foodCount + '" }';
			}else{
				other_orderJsonlist = other_orderJsonlist + ', { "shopID": "' + orderJsonlists[j].shopID + '","shopName":"' + orderJsonlists[j].shopName + '","foodID": "' + orderJsonlists[j].foodID + '","foodName":"' + orderJsonlists[j].foodName + '","foodPrice":"' + orderJsonlists[j].foodPrice + '","foodCount":"' + orderJsonlists[j].foodCount + '"}';
			}
//			alert("other   "+other_orderJsonlist);
		}
	}
	
	arrayID = foodID.split(",");
	arrayName = foodName.split(",");
	arrayPrice = foodPrice.split(",");
	arrayCount = foodCount.split(",");
	del_index = arrayID.indexOf(div.id);
	arrayID.splice(del_index,1);
	arrayName.splice(del_index,1);
	arrayPrice.splice(del_index,1);
	arrayCount.splice(del_index,1);
	
	for(i=0;i<arrayID.length;i++){
		if(i==0){
			foodID = arrayID[i];
			foodName = arrayName[i];
			foodPrice = arrayPrice[i];
			foodCount = arrayCount[i];
		}else{
			foodID = foodID + "," + arrayID[i];
			foodName = foodName + "," + arrayName[i];
			foodPrice = foodPrice + "," + arrayPrice[i];
			foodCount = foodCount + "," + arrayCount[i];
		}
	}
	if(arrayID.length==0){
		orderJsonlist = "";
	}else{
		if(other_orderJsonlist==""){
			orderJsonlist = '{ "shopID": "' + del_shopID + '","shopName":"' + del_shopName + '","foodID": "' + foodID + '","foodName":"' + foodName + '","foodPrice":"' + foodPrice + '","foodCount":"' + foodCount + '"}';
		}else{
			orderJsonlist = ',{ "shopID": "' + del_shopID + '","shopName":"' + del_shopName + '","foodID": "' + foodID + '","foodName":"' + foodName + '","foodPrice":"' + foodPrice + '","foodCount":"' + foodCount + '"}';
		}
	}
	orderJsonlists = other_orderJsonlist + orderJsonlist;
//	alert("all  "+orderJsonlists);
	str_orderJsonlists = "[" + orderJsonlists + "]";
	deleteCookie("orderJsonlists");
	addCookie("orderJsonlists",str_orderJsonlists,1);
	//alert("已从我的订单中删除");
	orderJsonlists = eval('(' + str_orderJsonlists + ')');
	document.getElementById("order_body").innerHTML="";
	all_price = 0;
	
	for(j=0;j<orderJsonlists.length;j++){
		document.getElementById("order_body").innerHTML = document.getElementById("order_body").innerHTML + "<div style='float:left;width:200px;font-weight:bold;margin-bottom:10px;margin-top:15px;color:#ff0000'>" + orderJsonlists[j].shopName + "</div>";
		arrayID = orderJsonlists[j].foodID.split(",");
		arrayName = orderJsonlists[j].foodName.split(",");
		arrayPrice = orderJsonlists[j].foodPrice.split(",");
		arrayCount = orderJsonlists[j].foodCount.split(",");
		for(i=0;i<arrayID.length;i++){
			document.getElementById("order_body").innerHTML = document.getElementById("order_body").innerHTML + "<div style='float:left;width:140px;'>" + arrayName[i] + "</div><div style='margin-left:5px;float:left;width:50px;text-align:right;'>" + arrayPrice[i] + "元</div><div style='margin-left:5px;float:left;width:50px;text-align:left;'>" + arrayCount[i] + "份</div><div id= '" + arrayID[i] +"' name= '" + orderJsonlists[j].shopID + "' style='float:right;width:100px;text-align:right;font-weight:bold;' onmouseup='delete_order(this);' class='mouse_change'><a>删除</a></div>" + "<br />";
			all_price = all_price + parseInt(arrayPrice[i])*parseInt(arrayCount[i]);
		}
	}
	if(arrayID.length>0){
		document.getElementById("submit_btn_pic").style.display="block";
		document.getElementById("all_price").innerHTML="总共<span style='font-weight:bold;vertical-align:bottom;'>" + all_price + "元</span>";
	}else if(arrayID.length==0){
		document.getElementById("submit_btn_pic").style.display="none";
		document.getElementById("all_price").innerHTML="";
	}
	
}