/**
 * 通用JS
 * @author GT 2013
 */

//	
//	//确认订单
//	function confirmMulti() 
//	{
//		var id = MultiX("ids","请勾选要确认的订单！");
//		if(id) {
//			location.href="confirm/"+id+"?href="+getHref();
//		}
//	}
//	
//	//发货订单
//	function shipMulti() 
//	{
//		var id = MultiX("ids","请勾选要发货的订单！");
//		if(id) {
//			location.href="ship/"+id+"?href="+getHref();
//		}
//	}
	
	//确认单个订单
	function confirmSingle(id,entitySate)
	{
		if (entitySate==233)
			alert("交易已经关闭,无法进行确认操作！");
		else if(entitySate==229)
			location.href="confirm/"+id+"?href="+getHref();
		else if(entitySate==230)
			alert("订单已经是确认状态！");
		else if(entitySate==231)
			alert("订单已经是发货状态！");
	}
	
	//发货单个订单
	function shipSingle(id,entitySate)
	{
		if (entitySate==233)
			alert("交易已经关闭,无法进行确认操作！");
		else if((entitySate==229)||(entitySate==230))
			location.href="ship/"+id+"?href="+getHref();
		else if(entitySate==231)
			alert("订单已经是发货状态！");
	}
	
	//作废单个订单
	function closeSingle(id,entitySate)
	{
		if (entitySate==233)
			alert("交易已经是关闭状态！");
		else if(confirm("订单关闭后将作废,您确定关闭吗？")){
			location.href="close/"+id+"?href="+getHref();
		}
	}
	
 