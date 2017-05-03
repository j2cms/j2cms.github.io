//var menuNumber =14; //菜单数量
 	
	function showdrop(id) {
		for ( var j = 1; j <= menuNumber; j++) {
			var a = document.getElementById("ul" + j);
			if (a.id == id) {

				a.style.display = "inline";
			} else
				a.style.display = "none";
		}

	}
	function hidedrop(drop) {
		var drop_div = document.getElementById(drop);
		drop_div.style.display = "none";
	}

	function setlis(tid, href) {
		for ( var j = 1; j <= menuNumber; j++) {
			var a = document.getElementById("ul" + j)
					.getElementsByTagName("li");

			for ( var i = 0; i < a.length; i++) {
				if (a[i].id == tid) {
					//a[i].style.background="#19BBEB";
					a[i].style.color = "#00688B";
					//a[i].getElementsByTagName("a")[0].style.color="#00688B";

				} else {
					//a[i].style.background="#EEFFFF";
					//a[i].getElementsByTagName("a")[0].style.color="#19AADA";
					a[i].style.color = "#19AADA";
				}
			}
		}
		//parent.frames.main.location.href = href;//如果是framset方式
		window.location.href = href;//如果是sitemesh方式
	}

	function setli(tid) {
		for ( var j = 1; j <= menuNumber; j++) {
			var a = document.getElementById("ul" + j)
					.getElementsByTagName("li");

			for ( var i = 0; i < a.length; i++) {
				if (a[i].id == tid) {
					a[i].style.color = "#00688B";
				} else {
					a[i].style.color = "#19AADA";
				}
			}
		}
	}