/**
 * dictionary 
 * 
 * 角色用户关系管理模块js
 * GT 2013-01-26
 * @since 2012-07-04
 */


//角色用户关系删除
function checkDelete(){
	var count = 0;
	var size = document.forms[0].elements.length;
	for(var i=0;i<size;i++){
		var elm = document.forms[0].elements[i];
		if(elm.name.endWith("chk")){
			if(elm.checked==true){
				count++;
				break;
			}
		}
	}
	if(count==0){
		$.jGrowl("请至少选择一项");
		return false;
	}
	if(confirm("确定要删除吗？")){
		var form = document.getElementById('entityForm');
		form.action = "deleteRelRoleUser.do";
		form.onsubmit = null;
		form.submit();
		return false;
	} else {
		return false;
	}
}

//删除单个
function deleteSingle(rowNum) {
	var size = document.forms[0].elements.length;
	for(var i=0;i<size;i++){
		var elm = document.forms[0].elements[i];
		if(elm.name.endWith(".chk")){
			if(elm.name.endWith("[" + rowNum + "].chk")){
				if(!elm.checked){
					elm.click();
				}
			} else {
				if(elm.checked){
					elm.click();
				}
			}
		}
	}
	checkDelete();
}

//查询
function query() 
{
	document.entityForm.action = "listName";
	document.entityForm.submit();
}
	
function openWindow(mylink)
{
window.open(mylink,"","toolbar=no,scrollbars=yes, status=no,directories=no,location=no,resizable=no,menubar=no,left=200,top=0,width=1000,height=800"); 
}


function checkAllRoleIds(allSelect) {
	checkAllIds(allSelect,"roleIds","roleNames"); 
}

function checkAllUserIds(allSelect) {
	checkAllIds(allSelect,"userIds","userNames"); 
}

function checkAllIds(allSelect,ids,names) {
	var check = document.all["ids"];
	var chk= new Array();
	if(check[0] == null) { //只有一个ids,check就不是一个数组
		chk[0] = check;
	}
	else{
		chk=check;
	}
//	alert(chk.length);
	if(allSelect.checked){
		for(var i=0;i<chk.length;i++) 
    	{
       	 	chk[i].checked = true;
       	 	try{
       	 	addIdToTarget(chk[i].id,ids);
       	 	addIdToTarget(chk[i].value,names);
       	 	}catch(err){
       	 	}
       	 	
    	}
	}
	else{
		for(var i=0;i<chk.length;i++) 
    	{
       	 	chk[i].checked = false;
	       	 try{
	       	 	removeIdFromTarget(chk[i].id,ids);
	       	 	removeIdFromTarget(chk[i].value,names);
	       	}catch(err){
       	 	}
    	}
	}
}	

function checkSingleId(single,ids,names){
	if(single.checked){
		addIdToTarget(single.id,ids);
		addIdToTarget(single.value,names);
	}
	else{
		removeIdFromTarget(single.id,ids);
		removeIdFromTarget(single.value,names);
	}
}

function addIdToTarget(id,target){
	var tar = top.document.getElementById(target).value;
	var tarArray = ((tar!=null)&&(tar!=""))?tar.split(','):new Array();
	var flag = false;
	for(var i = 0;i<tarArray.length;i++){
		if(id==tarArray[i]) {
			flag = true;
			break;
		}
	}
	if(!flag){
		tarArray.push(id);
	}
	top.document.getElementById(target).value = tarArray.join(); // or join()
}

function removeIdFromTarget(id,target){
	var tar = top.document.getElementById(target).value;
	var tarArray = ((tar!=null)&&(tar!=""))?tar.split(','):new Array();
	for(var i = 0;i<tarArray.length;i++){
		if(id==tarArray[i]) {
			tarArray.splice(i,1);
			break;
		}
	}
	top.document.getElementById(target).value = tarArray.toString(); 
}

function clearIds(ids,names){
	document.getElementById("chkAll").checked=false;
	var chk = document.all["ids"];
	for(var i=0;i<chk.length;i++) 
   	 	chk[i].checked = false;
 	top.document.getElementById(ids).value="";
 	top.document.getElementById(names).value="";
}

function setFormCheckedStateAfterQuery(id){
	 var ids = top.document.getElementById(id).value;
	  var idArray = ((ids!=null)&&(ids!=""))?ids.split(','):new Array();
	  try{
		  for(var i = 0;i<idArray.length;i++){
			  try{
				  document.getElementById(idArray[i]).checked=true;
			  }
			  catch(e){}
		  }
	  }
	  catch(e){}
}

//判断iframe是否加载完,加载完后调用回调函数
function iframeLoaded(iframeEl,callback) {
        if(iframeEl.attachEvent) {
            iframeEl.attachEvent("onload", function() {
                if(callback && typeof(callback) == "function") {
                    callback();
                }
            });
        } else {
            iframeEl.onload = function() {
                if(callback && typeof(callback) == "function") {
                    callback();
                }
            }
        }
 }

 //加载完后的回调函数
function changeIframeSrc(iframe,src){
	 document.getElementById(iframe).src=src;
}
