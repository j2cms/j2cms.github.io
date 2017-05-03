/*!
 * dictionary 
 * 
 * 角色管理模块js
 * GuoTao
 * 2012-06-27
 */

function treeToIds(tree,ids){
    var s1="";
    var treeObj1 = $.fn.zTree.getZTreeObj(tree);
    var nodes1 = treeObj1.getCheckedNodes(true);
	for(var i=0,size = nodes1.length;i<size;i++){
		s1+=nodes1[i].id+",";
	}
	document.getElementById(ids).value =s1;
}
//拼接字符串
function treesToIds(){
	treeToIds("cTree","controllerIds");
	treeToIds("dTree","dataIds");
	treeToIds("oTree","groupIds");
}
//提交表单
function save(){
	treesToIds();
	var form = document.getElementById('entityForm');
	form.action ="save";
	document.entityForm.submit();
}

//更新表单
function update(){
	treesToIds();
	var form = document.getElementById('entityForm');
	form.action ="update";
	document.entityForm.submit();
}

