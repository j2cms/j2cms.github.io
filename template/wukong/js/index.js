// var speed=70; //数字越大速度越慢
// var tab=document.getElementById("demo_activity");
// var tab1=document.getElementById("demo1_activity");
// var tab2=document.getElementById("demo2_activity");
// tab2.innerHTML=tab1.innerHTML;

// function Marquee(){
	// if(tab2.offsetTop-tab.scrollTop<=0)
		// tab.scrollTop-=tab1.offsetHeight;
	// else{
		// tab.scrollTop++;
	// }
// }

// var MyMar=setInterval(Marquee,speed);
// tab.onmouseover=function() {clearInterval(MyMar)};
// tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};


// var current_logos = 0;


// function next_logos(){
	// if(current_logos == 2){
		// index_logo_1.src=index_logos[0];
		// index_logo_2.src=index_logos[1];
		// index_logo_3.src=index_logos[2];
		// index_logo_4.src=index_logos[3];
		// index_logo_5.src=index_logos[4];
		// index_logo_6.src=index_logos[5];
		// index_logo_7.src=index_logos[6];
		// index_logo_8.src=index_logos[7];
		// index_logo_9.src=index_logos[8];
		// index_logo_10.src=index_logos[9];
		// index_logo_11.src=index_logos[10];
		// index_logo_12.src=index_logos[11];
	// }else if(current_logos == 0){
		// index_logo_1.src=index_logos[12];
		// index_logo_2.src=index_logos[13];
		// index_logo_3.src=index_logos[14];
		// index_logo_4.src=index_logos[15];
		// index_logo_5.src=index_logos[16];
		// index_logo_6.src=index_logos[17];
		// index_logo_7.src=index_logos[18];
		// index_logo_8.src=index_logos[19];
		// index_logo_9.src=index_logos[20];
		// index_logo_10.src=index_logos[21];
		// index_logo_11.src=index_logos[22];
		// index_logo_12.src=index_logos[23];
	// }else if(current_logos == 1){
		// index_logo_1.src=index_logos[24];
		// index_logo_2.src=index_logos[25];
		// index_logo_3.src=index_logos[26];
		// index_logo_4.src=index_logos[27];
		// index_logo_5.src=index_logos[28];
		// index_logo_6.src=index_logos[29];
		// index_logo_7.src=index_logos[30];
		// index_logo_8.src=index_logos[31];
		// index_logo_9.src=index_logos[32];
		// index_logo_10.src=index_logos[33];
		// index_logo_11.src=index_logos[34];
		// index_logo_12.src=index_logos[35];
	// }
	// current_logos = current_logos + 1;
	
	// if(current_logos > 2){
		// current_logos = 0;
	// }
// }

// function last_logos(){
	// if(current_logos == 0){
		// index_logo_1.src=index_logos[12];
		// index_logo_2.src=index_logos[13];
		// index_logo_3.src=index_logos[14];
		// index_logo_4.src=index_logos[15];
		// index_logo_5.src=index_logos[16];
		// index_logo_6.src=index_logos[17];
		// index_logo_7.src=index_logos[18];
		// index_logo_8.src=index_logos[19];
		// index_logo_9.src=index_logos[20];
		// index_logo_10.src=index_logos[21];
		// index_logo_11.src=index_logos[22];
		// index_logo_12.src=index_logos[23];
	// }else if(current_logos == 1){
		// index_logo_1.src=index_logos[24];
		// index_logo_2.src=index_logos[25];
		// index_logo_3.src=index_logos[26];
		// index_logo_4.src=index_logos[27];
		// index_logo_5.src=index_logos[28];
		// index_logo_6.src=index_logos[29];
		// index_logo_7.src=index_logos[30];
		// index_logo_8.src=index_logos[31];
		// index_logo_9.src=index_logos[32];
		// index_logo_10.src=index_logos[33];
		// index_logo_11.src=index_logos[34];
		// index_logo_12.src=index_logos[35];
	// }else if(current_logos == 2){
		// index_logo_1.src=index_logos[0];
		// index_logo_2.src=index_logos[1];
		// index_logo_3.src=index_logos[2];
		// index_logo_4.src=index_logos[3];
		// index_logo_5.src=index_logos[4];
		// index_logo_6.src=index_logos[5];
		// index_logo_7.src=index_logos[6];
		// index_logo_8.src=index_logos[7];
		// index_logo_9.src=index_logos[8];
		// index_logo_10.src=index_logos[9];
		// index_logo_11.src=index_logos[10];
		// index_logo_12.src=index_logos[11];
	// }
	// current_logos --;
	// if(current_logos < 0){
		// current_logos = 2;
	// }
// }

// setInterval("next_logos()",6000); 

$(function(){
	 var index = 0;
	 $("#operate span").mouseover(function(){
		index  =  $("#operate span").index(this);
		showImg(index);
	});	
	 //滑入 停止动画，滑出开始动画.
	 $('#slideshow').hover(function(){
			  if(MyTime){
				 clearInterval(MyTime);
			  }
	 },function(){
			  MyTime = setInterval(function(){
			    showImg(index)
				index++;
				if(index==5){index=0;}
			  } , 3000);
	 });
	 //自动开始
	 var MyTime = setInterval(function(){
		showImg(index)
		index++;
		if(index==5){index=0;}
	 } , 3000);
})
//关键函数：通过控制i ，来显示不同的幻灯片
function showImg(i){
		$("#showimg img")
			.eq(i).stop(true,true).fadeIn(1000)
			.parent().siblings().find("img").hide();
		 $("#operate span")
			.eq(i).addClass("hov")
			.siblings().removeClass("hov");
}