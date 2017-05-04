 var arrayID = new Array();
 var arrayName = new Array();
 var arrayPrice = new Array();
 var arrayCount = new Array();
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
	temp = getCookie("orderJsonlists");
//	alert(temp);
	if(temp != ""){
		orderJsonlists = eval('(' + temp + ')');
	}
	document.getElementById("submit_order_detail").innerHTML="";
	all_price = 0;
	document.getElementById("name").value=getCookie("USER_NAME");
	for(j=0;j<orderJsonlists.length;j++){
		document.getElementById("submit_order_detail").innerHTML = document.getElementById("submit_order_detail").innerHTML + "<div style='float:left;width:600px;font-weight:bold;color:#ff0000;'>" + orderJsonlists[j].shopName + "</div>";
		if(j==0){
			document.getElementById("shopIds").value=orderJsonlists[j].shopID;
		}else{
			document.getElementById("shopIds").value=document.getElementById("shopIds").value + "," + orderJsonlists[j].shopID;
		}

		arrayID = orderJsonlists[j].foodID.split(",");
		arrayName = orderJsonlists[j].foodName.split(",");
		arrayPrice = orderJsonlists[j].foodPrice.split(",");
		arrayCount = orderJsonlists[j].foodCount.split(",");
		for(i=0;i<arrayID.length;i++){
			document.getElementById("submit_order_detail").innerHTML = document.getElementById("submit_order_detail").innerHTML + "<div style='float:left;letter-spacing:3px;'><div style='float:left;width:300px;'>" + arrayName[i] + "</div><div style='float:left;width:150px;float:left;'>" + arrayPrice[i] + "元</div><div style='float:left;width:150px;'>" + arrayCount[i] + "份</div></div>";
			all_price = all_price + parseInt(arrayPrice[i])*parseInt(arrayCount[i]);
			if(j==0){
				if(i==0){
					document.getElementById("foodIds").value=arrayID[i];
					document.getElementById("foodCounts").value=arrayCount[i];
				}else{
					document.getElementById("foodIds").value=document.getElementById("foodIds").value + ":" + arrayID[i];
					document.getElementById("foodCounts").value=document.getElementById("foodCounts").value + ":" + arrayCount[i];
				}
			}else{
				if(i==0){
					document.getElementById("foodIds").value= document.getElementById("foodIds").value + "," + arrayID[i];
					document.getElementById("foodCounts").value= document.getElementById("foodCounts").value + "," + arrayCount[i];
				}else{
					document.getElementById("foodIds").value=document.getElementById("foodIds").value + ":" + arrayID[i];
					document.getElementById("foodCounts").value=document.getElementById("foodCounts").value + ":" + arrayCount[i];
				}
			}
		}
		document.getElementById("submit_order_detail").innerHTML = document.getElementById("submit_order_detail").innerHTML + "<br/><br/>";
	}
	if(arrayID.length>0){
		document.getElementById("all_price").style.display="block";
		document.getElementById("submit_order_detail").style.display="block";
		document.getElementById("all_price").innerHTML="总共<span style='font-weight:bold;vertical-align:bottom;'>" + all_price + "元</span>";
	}else if(arrayID.length==0){
		document.getElementById("submit_order_detail").innerHTML="暂无订单！";
		document.getElementById("all_price").style.display="none";
		document.getElementById("all_price").innerHTML="";
		document.getgetElementById("submit").style.display="none";
	}
//	alert(document.getElementById("foodCounts").value);
 }
 /*
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
	alert("已从我的订单中删除");
	orderJsonlists = eval('(' + str_orderJsonlists + ')');
	document.getElementById("submit_order_detail").innerHTML="";
	
	document.getElementById("userId").value=getCookie("USER_NAME");
	all_price = 0;
	for(j=0;j<orderJsonlists.length;j++){
		document.getElementById("submit_order_detail").innerHTML = document.getElementById("submit_order_detail").innerHTML + "<div style='float:left;width:600px;font-weight:bold;margin-bottom:10px;margin-top:15px;color:#ff0000'>" + orderJsonlists[j].shopName + "</div>";
		if(j==0){
			document.getElementById("shopIds").value=orderJsonlists[j].shopID;
		}else{
			document.getElementById("shopIds").value=document.getElementById("shopIds").value + "," + orderJsonlists[j].shopID;
		}
		arrayID = orderJsonlists[j].foodID.split(",");
		arrayName = orderJsonlists[j].foodName.split(",");
		arrayPrice = orderJsonlists[j].foodPrice.split(",");
		arrayCount = orderJsonlists[j].foodCount.split(",");
		for(i=0;i<arrayID.length;i++){
			document.getElementById("submit_order_detail").innerHTML = document.getElementById("submit_order_detail").innerHTML + "<div style='float:left;width:140px;'>" + arrayName[i] + "</div><div style='margin-left:5px;float:left;width:50px;text-align:right;'>" + arrayPrice[i] + "元</div><div style='margin-left:5px;float:left;width:50px;text-align:left;'>" + arrayCount[i] + "份</div><div id= '" + arrayID[i] +"' name= '" + orderJsonlists[j].shopID + "' style='float:right;width:150px;text-align:right;font-weight:bold;' onmouseup='delete_order(this);' class='mouse_change'><a>删除此条记录</a></div>" + "<br />";
			all_price = all_price + parseInt(arrayPrice[i])*parseInt(arrayCount[i]);
			if(j==0){
				if(i==0){
					document.getElementById("foodIds").value=arrayID[i];
				}else{
					document.getElementById("foodIds").value=document.getElementById("foodIds").value + ":" + arrayID[i];
				}
			}else{
				if(i==0){
					document.getElementById("foodIds").value= document.getElementById("foodIds").value + "," + arrayID[i];
				}else{
					document.getElementById("foodIds").value=document.getElementById("foodIds").value + ":" + arrayID[i];
				}
			}
		}
	}
	if(arrayID.length>0){
		document.getElementById("all_price").style.display="block";
		document.getElementById("submit_order_detail").style.display="block";
		document.getElementById("all_price").innerHTML="总共<span style='font-weight:bold;vertical-align:bottom;'>" + all_price + "元</span>";
	}else if(arrayID.length==0){
		document.getElementById("submit_order_detail").innerHTML="暂无订单！";
		document.getElementById("all_price").style.display="none";
		document.getElementById("all_price").innerHTML="";
		document.getElementById("submit").style.display="none";
	}
	window.location.reload(true);
}*/