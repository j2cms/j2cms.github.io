/**
 * 通用JS
 * @author GT 2013
 */

	//查询,提交表单
	function query() 
	{
		document.entityForm.action = "list";
		document.entityForm.submit();//document.getElementById("entityForm").submit();
	}
	
	//保存表单
	function save(){
		var form = document.getElementById('entityForm');
		form.action ="save";
		form.submit();
	}

	//更新表单
	function update(){
		var form = document.getElementById('entityForm');
		form.action ="update";
		form.submit();
	}

	//跳转到增加页面
	function add() 
	{
		location.href = "add?href="+getHref();
	}
	
	//跳转到编辑页面
	function edit() 
	{
		var id = MultiX("ids","请勾选要修改的记录！");
		if(id) {
			if(id.toString().split(",").length>1){
				 alert("请仅勾选一个记录修改！");
	        	 return  false;
			}
			 id=id.split(':')[0];//如RelRoleUser里转的id为 2:3这种形式
	    	 location.href="edit/"+id+"?href="+getHref();			
		}
	}
	//编辑单个实体
	function editSingle(id)
	{
		location.href="edit/"+id+"?href="+getHref();
	}
	
	//显示单个实体
	function viewSingle(id)
	{
		location.href="view/"+id+"?href="+getHref();
	}
	

	//批量删除多个实体,带实体名 。这里用MutiX()方式调用不成功,所以还是用这种方式
	function del() 
	{
		var id="";
		var name="";
    	var count = 0;
    	var chk = document.getElementsByName("ids");
    	
    	if(chk == null) 
    	{
	        alert("请勾选要删除的记录！");
	        return  false;
    	}
    	if(chk[0] == null) 
    	{
        	if(chk.checked) 
        	{
        		id = chk.value;
        		name = chk.title;
        		count++;
        	}
   	 	}
   		else 
    	{
        	for(var i=0;i<chk.length;i++) 
        	{
            	if(chk[i].checked) 
            	{
            		id += chk[i].value+",";
            		name += chk[i].title+",";;
                	count++;
            	}
        	}
        	id = id.substring(0,id.length-1);//去掉最后一个","
        	name = name.substring(0,name.length-1);
    	}
    	if(count==0) 
   		{
        	alert("请勾选要删除的记录！");
        	return  false;
   	 	}
   		document.getElementById("href").value = getHref();//设置操作完成后的返还URL
    	if(document.getElementById("sl.entityState").value=="14") //'${sl.entityState}'
    	{
    		if(confirm("操作不可恢复,您确定删除吗？")){
				location.href="delete/"+id+"?name="+name+"&href="+getHref();
    		}
    	}
   	 	else{
			location.href="recycle/"+id+"?name="+name+"&href="+getHref();//用post方式无法在url里加参数
   	   	}
	}
	
	//原来的函数操作的是两个对象
	//<input type='checkbox' name='ids' value="${entityBean.id}" /><input type="hidden" name='names' value="${entityBean.name}" />
//	//批量删除多个实体,带实体名 。这里用MutiX()方式调用不成功,所以还是用这种方式
//	function del() 
//	{
//		var id="";
//		var name="";
//    	var count = 0;
//    	var chk = document.getElementsByName("ids");
//    	var nameArray = document.getElementsByName("names");
//    	if(chk == null) 
//    	{
//	        alert("请勾选要删除的记录！");
//	        return  false;
//    	}
//    	if(chk[0] == null) 
//    	{
//        	if(chk.checked) 
//        	{
//        		id = chk.value;
//        		name = nameArray.value;
//        		count++;
//        	}
//   	 	}
//   		else 
//    	{
//        	for(var i=0;i<chk.length;i++) 
//        	{
//            	if(chk[i].checked) 
//            	{
//            		id += chk[i].value+",";
//            		name += nameArray[i].value+",";
//                	count++;
//            	}
//        	}
//        	id = id.substring(0,id.length-1);//去掉最后一个","
//        	name = name.substring(0,name.length-1);
//    	}
//    	if(count==0) 
//   		{
//        	alert("请勾选要删除的记录！");
//        	return  false;
//   	 	}
//   		document.getElementById("href").value = getHref();//设置操作完成后的返还URL
//    	if(document.getElementById("sl.entityState").value=="14") //'${sl.entityState}'
//    	{
//    		if(confirm("操作不可恢复,您确定删除吗？")){
//				location.href="delete/"+id+"?name="+name+"&href="+getHref();
//    		}
//    	}
//   	 	else{
//			location.href="recycle/"+id+"?name="+name+"&href="+getHref();//用post方式无法在url里加参数
//   	   	}
//	}
//	

	
//	//批量删除多个实体,带实体名
//	function del() {
//		var id = MultiX("ids","请勾选要删除的记录！");
//		if(id) {
//			var idArray = id.toString().split(",");
//			var name = "";//获取实体名串
//	    	var nameArray = document.getElementsByName("names");
//	    	for(var i=0;i<idArray.length;i++){
//	    		var d = idArray[i];
//	    		alert(d);
//	    		name += nameArray[d].value+","; //关键是这里获取到的不是正确的name
//	    	}
//	    	name = name.substring(0,name.length-1);//去掉最后一个","
//			if(document.getElementById("sl.entityState").value=="14") //'${sl.entityState}'
//	    	{
//	    		if(confirm("操作不可恢复,您确定删除吗？")){
//	    			location.href="delete/"+id+"?name="+name+"&href="+getHref();
//	    		}
//	    	}
//	   	 	else{
//	   	 	location.href="recycle/"+id+"?name="+name+"&href="+getHref();
//	   	   	}
//		}
//	}

	
	//批量删除多个实体,不带实体名
	function deleteMulti() 
	{
		var id = MultiX("ids","请勾选要删除的记录！");
		if(id) {
			if(document.getElementById("sl.entityState").value=="14") //'${sl.entityState}'
	    	{
	    		if(confirm("操作不可恢复,您确定删除吗？")){
					location.href="delete/"+id+"?href="+getHref();
	    		}
	    	}
	   	 	else{
				location.href="recycle/"+id+"?href="+getHref();
	   	   	}
		}
	}
	
	//生成HTML
	function html() 
	{
		var id = MultiX("ids","请勾选要生成HTML的记录");
		if(id) {
			location.href="makeHtml/"+id+"?href="+getHref();
		};
	}
	
	//删除单个实体
	function delSingle(id,name,entityState) 
	{
		if(entityState=="14")
    		{
    			if(confirm("操作不可恢复,您确定删除吗？")){
    				location.href="delete/"+id+"?name="+name+"&href="+getHref();
    			}    		
    		}
    	else{
    			location.href="recycle/"+id+"?name="+name+"&href="+getHref();
    		}
	}

	//删除单个实体
	function delSingleWithoutName(id,entityState) 
	{
		if(entityState=="14")
    		{
    			if(confirm("操作不可恢复,您确定删除吗？")){
    				location.href="delete/"+id+"?href="+getHref();
    			}    		
    		}
    	else{
    		location.href="recycle/"+id+"?href="+getHref();
    		}
	}

	//全选中
	function selectAll(allSelect) 
	{
    	var chk = document.getElementsByName("ids");
    	if(chk == null) 
    	{
        	return  false;
    	}
    	if(chk[0] == null)  //只有一个ids,check就不是一个数组
    	{
       		chk.checked = allSelect.checked;
    	}
    	else 
    	{
        	for(var i=0;i<chk.length;i++) 
        	{
           	 	chk[i].checked = allSelect.checked;
        	}
    	}
	}
	
	//跳转到指定页码的页面
	function pageQuery(page) 
	{
		document.getElementById("currentPage").value=page;   
		document.entityForm.submit();
	}
	
	/**
	 * 多项选定的处理，调用方式可以带参数MultiX(tip)也可以不带MultiX()
	 * @param action 提交的动作
	 * @param ids  选中的input的name值。如<input type='checkbox' name='ids' value="" />  则为ids
	 * @param tip  提示信息
	 * @returns {Boolean}
	 * @author GT  2013-04-14
	 */
	function MultiX(ids,tip){
		var t =(tip==null?"请勾选至少一条记录！":tip);
		var id="";
    	var count = 0;
    	var chk = document.getElementsByName(ids);
    	if(chk == null) 
    	{
	        alert(t);
	        return  false;
    	}
    	if(chk[0] == null) 
    	{
        	if(chk.checked) //如果只勾选了一个值的话chk就不是一个数组,所以会存在这种情况
        	{
        		id = chk.value;
        		count++;
        	}
   	 	}
    	else 
    	{
        	for(var i=0;i<chk.length;i++) 
        	{
            	if(chk[i].checked) 
            	{
            		id += chk[i].value+",";
                	count++;
            	}
        	}
        	id = id.substring(0,id.length-1);//去掉最后一个","
    	}
    	if(count==0) 
   		{
    		alert(t);
    		$.jGrowl("请至少选择一项");
        	return  false;
   	 	}
    	document.getElementById("href").value = getHref();//设置操作完成后的返还URL
    	return id.toString();

	}
	
	//跳转到指定url
	function go(url) {
		document.location.href = url;
	}
	
	//跳转到指定url
	function open(url) {
		window.open(url);
	}
	
	//获取来源URL路径
	function getHref(){
		var href = window.location.href;
		href=href.replace(/&/g, "AND");//SpringMVC将&符号过滤了,所以在这里做一个替换,相应的java代码里也有反替换
		href=href.replace(/[^\u0000-\u00FF]/g, function ($0) { return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;") ;});
		//可以把names去掉,因为传过去也用不到,而且还会增加数据量
		href=encodeURI(href);
		return href;
	}
	
	//跳转到来源URL
	function goToHref(){
		var href = document.getElementById("href").value;
		if((href==null)||(href=="")){
			document.location.href = "list";
		}
		else{
			href=href.replace(/AND/g, "&");
			document.location.href = href;
		}
		
    }
	
    //获取当天的日期
    function getDay(){
    	var d=new Date();
    	var day=d.getDate();
    	var month=d.getMonth() + 1;
    	var year=d.getFullYear();
    	return day + "-" + month + "-" + year;
    }
	