/**
 * 通用JS
 * @author GT 2013
 */

	
	//作废单个订单
	function closeSingle(id,entitySate)
	{
		if (entitySate==233)
			alert("交易已经是关闭状态！");
		else if(entitySate==231)
			alert("订单已经是发货状态，不能关闭，您可以直接联系商家！");
		else if(entitySate==230)
			alert("订单已经是确认状态，不能关闭，您可以直接联系商家！");
		else if(entitySate==232)
			alert("订单已经是交易成功状态，不能关闭，您可以直接联系商家！");
		else if(confirm("订单关闭后将作废,您确定关闭吗？")){
			location.href="close/"+id+"?href="+getHref();
		}
	}
	
 