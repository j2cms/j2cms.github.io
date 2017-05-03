//清空日志
function clean() 
{
	if(confirm("操作不可恢复,您确定删除吗？")){
		location.href="clean?href="+getHref();
	}    		
}