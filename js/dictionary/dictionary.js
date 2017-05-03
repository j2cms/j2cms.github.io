//实现二级菜单联动,未测试成功
function setPid(){
	var kind = document.getElementById("kind").value;
	alert(kind);
	document.getElementById("pid").value = kind;
//	DrawSelector('multiSelect_pid','pid',kind);
}
