function setimg(obj, maxw, maxh)
{
	var imgw = jQuery(obj).width();
	var imgh = jQuery(obj).height();
	if(imgw > maxw || imgh > maxh){
		a=imgw/maxw; b=imgh/maxh; 
		if(b>a) a=b;
		imgw=imgw/a; imgh=imgh/a;
	}
	jQuery(obj).css({"width":imgw,"height":imgh,"marginTop":Math.ceil(maxh-imgh)/2,"marginLeft":Math.ceil(maxw-imgw)/2});
}

/*
var  flag=false;
function  setimg(ImgD,p_width,p_height){
     var  image=new  Image();
     image.src=ImgD.src;
     //��Ҫ�������
     var needwidth=p_width;
     //��Ҫ�����߶�
     var needheight=p_height;
     if(image.width>0  &&  image.height>0){
       flag=true;
	   //image.width/image.height>=  needwidth/needheight��ʾ���ǵ�ǰ��ͼƬ�ǿ��>�߶�
       if(image.width/image.height>=  needwidth/needheight){
         if(image.width>needwidth){
         ImgD.width=needwidth;
         ImgD.height=(image.height*needwidth)/image.width;
		 ImgD.style.marginTop=Math.ceil(needheight-ImgD.height)/2;
		 ImgD.style.marginLeft=Math.ceil(needwidth-ImgD.width)/2;
         }else{
         ImgD.width=image.width;
         ImgD.height=image.height;
		 
         }

         }
       else{
         if(image.height>needheight){
         ImgD.height=needheight;
         ImgD.width=(image.width*needheight)/image.height;
		 ImgD.style.marginTop=Math.ceil(needheight-ImgD.height)/2;
		 ImgD.style.marginLeft=Math.ceil(needwidth-ImgD.width)/2;
         }else{
         ImgD.width=image.width;
         ImgD.height=image.height;
         }

         }
       }
}*/