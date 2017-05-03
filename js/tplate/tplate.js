
//生成模版HTML
function makeTemplate() 
{
	var id = MultiX("ids","请勾选要生成HTML的记录");
	if(id) {
		location.href="makeTemplate/"+id+"?href="+getHref();
	};
}