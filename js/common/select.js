/*!
 * 分级下拉菜单
 * GuoTao
 * 2012-06-05
 * 使用方法 : 
 * DrawSelector('DIV的名字','select的名字','父级的值','JS函数');   //JS函数 如  window.alert(this.value)
 * 例：
 *			<div class="padd6 left">类别：</div>
            <div id="multiSelect_searchSecondKind" style="display:none">       
	            <c:forEach var="tb" items="${secondKinds}" varStatus="status">
	            	<li id="${tb.id}" title="${tb.pid}" >${tb.name}</li>
	            </c:forEach>
			</div>           
            <script>DrawSelector('multiSelect_searchSecondKind','searchSecondKind','${dictionaryListVo.searchKind}','find();'); </script>
            <script>document.getElementById("searchSecondKind").value ='${dictionaryListVo.searchSecondKind}';</script> 
 */

//定义栈
function Stack() {
	this.__DataItem = new Array;
	this.length = 0;
	this.__StackPointer = -1;
}
Stack.prototype.Push = function(data) {
	this.length++;
	this.__StackPointer++;
	this.__DataItem[this.__StackPointer] = data;
};
Stack.prototype.Pop = function() {
	if (this.length <= 0)
		return null;
	if (this.__StackPointer <= -1)
		return null;
	this.length--;
	this.__StackPointer--;
	return this.__DataItem[this.__StackPointer + 1];
};
Stack.prototype.toString = function() {
	var chr;
	try {
		chr = arguments[0];
	} catch (e) {
		chr = '';
	} finally {
		if (typeof (chr) != 'string')
			chr = '';
	}
	if (this.length <= 0)
		return "";
	var retStr = "";
	for ( var iCnt = 0; iCnt < this.length; iCnt++)
		retStr += this.__DataItem[iCnt] + chr;
	return retStr;
};
Stack.prototype.Item = function(ind) {
	if (ind < 0)
		return null;
	if (ind > this.__StackPointer)
		return null;
	return this.__DataItem[ind];
};
Stack.prototype.Top = function() {
	if (this.__StackPointer < 0)
		return null;
	return this.__DataItem[this.__StackPointer];
};

//DrawSelector('DIV的名字','select的名字','父级的值','JS函数');   //JS函数 如  window.alert(this.value)
function DrawSelector(divId,selectName,pid,optionOnChange) {
	var gStack = new Stack();
	
	//获得所有的结点
	function getAllItems() {
		var oData = document.getElementById(divId).getElementsByTagName('li');
		return oData;
	}
	
	//是否有孩子结点
	function hasChildItem(object) {
		if (object == null)
			return false;

		var hasChild = false;
		var oData = getAllItems();
		if (oData != null) {
			for ( var i = 0; i < oData.length; i++) {
				if (oData[i].title == object.id)
					hasChild = true;
			}
		}
		return hasChild;
	}

	//获得孩子结点
	function getChildren(object) {
		if (object != null) {
			var children = new Array();
			var oData = getAllItems();
			for ( var i = 0; i < oData.length; i++) {
				if (object.id == oData[i].title)
					children.push(oData[i]);
			}
			return children;
		} else {
			return null;
		}
	}

	//求出所有父级的节点
	function getTopLevelItems() {
		var obj = new Array();
		var oData = getAllItems();
		for ( var i = 0; i < oData.length; i++) {
//			if ((oData[i].title == '') || (oData[i].title == '0')) // 父结点为空或者为'0'
			if (oData[i].title == pid) // 父结点为空
				obj.push(oData[i]);
		}
		return obj;
	}

	
	//生成树
	function BuildTree(object, iGrade, bolCont) {
		var fla = hasChildItem(object);

		document.write('<option value="' + object.id + '">');
		document.write(gStack.toString());
		document.write(object.innerHTML + '　</option>');

		var oNodeTemp = getChildren(object);
		if (fla) {
			if (iGrade > 0) {
				gStack.Pop();
				if (bolCont)
					gStack.Push('│');
				else
					gStack.Push('　');
			}
			gStack.Push('&nbsp;');
			for ( var iCnt = 0; iCnt < oNodeTemp.length; iCnt++) {
				if (iCnt == oNodeTemp.length - 1) {
					gStack.Push('└');
					BuildTree(oNodeTemp[iCnt], iGrade + 1, false);
					gStack.Pop();
				} else {
					gStack.Push('├');
					BuildTree(oNodeTemp[iCnt], iGrade + 1, true);
					gStack.Pop();
				}
			}
			gStack.Pop();
		}
	}
	 if(optionOnChange)
		 document.write ('<select name="' + selectName + '"'+'  id="' + selectName + '" onchange="'+optionOnChange+'">');
	 else
		 document.write('<select name="' + selectName + '"'+'  id="' + selectName + '">' );
	document.write('<option value="">====请选择====</option>');
	
	var oData = getTopLevelItems(); // 所有父级为空的节点
	for ( var iCnt = 0; iCnt < oData.length; iCnt++) {
		if (iCnt == oData.length - 1) {
			BuildTree(oData[iCnt], 0, false);
		} else {
			BuildTree(oData[iCnt], 0, true);
		}
	}
	document.write('</select>');
	
	
}





//显示所有数据
function showAllItems(divId) {
	var oData = document.getElementById(divId).getElementsByTagName('li');
	var str = "";
	for ( var i = 0; i < oData.length; i++) {
		str = str + oData[i].id + oData[i].title+oData[i].innerHTML;
	}
	alert(str);
}
