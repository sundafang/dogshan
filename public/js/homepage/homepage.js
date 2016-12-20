//获取轮播元素
var $boss_li = $(".boss-li");
//获取轮播容器
var $boss_ul = $(".boss_ul");
//获取所有的点
var $carousel_span = $(".carousel_02_span");
//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $(".boss-li").length;
//计算容器宽度
var boss_ul_wd = wd * lg;
console.log(boss_ul_wd);
//计算元素高度
var boss_li_hg = wd;
console.log(boss_li_hg)
//设置容器宽度
 $boss_ul.width(boss_ul_wd);
 console.log($boss_ul.width())
//设置元素宽高
$boss_li.width(boss_ul_wd/4).height(boss_li_hg);
console.log("图片",$boss_li.width());
/*console.log($boss_li.width(boss_ul_wd).height(boss_li_hg))*/


//定时轮播
var n=0;
var settime = setInterval(sum,2000);
	function sum(){	
	$(".boss_ul").css("margin-left",0);
	$('.boss_ul').animate({
		"marginLeft" :-wd+"px"
	},1000)
	$(".boss_li").eq(0).prependTo(".boss_ul");	
	
	//元素点
	n++;
	
	if(n>=$(".carousel_02_span").length){
		n=0;
	} 
	$(".carousel_02_span").html("<img src='../../public/img/homepage/banner_icon_point_nor@2x.png'/>");
	$(".carousel_02_span").eq(n).html("<img src='../../public/img/homepage/banner_icon_point_press@2x.png'/>")
	
}


//拖动事件
/*	var a=0
	
	$(".boss_ul").on('swipeLeft',function(){
		clearInterval(settime);

		if(a<$(".carousel_02_span").length-1){
			var c =(++a)*wd
			$(".boss_ul").css("transform",'translateX(-'+ c +'px)');
			
			
			//点
			$(".carousel_02_span").html("<img src='../../public/img/homepage/banner_icon_point_nor@2x.png'/>");
			$(".carousel_02_span").eq(a).html("<img src='../../public/img/homepage/banner_icon_point_press@2x.png'/>")
		}else{
			a=0
		}
	})*/

	

$(".navbar_02").on('touchstart',function(){
	$(".navbar_01").find(".navbar_p").css("color","#646464")
	$(".navbar_01").find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_nor@2x.png'/>")
	$(".navbar_02").html("<img src='../../public/img/homepage/content_icon01_nor@2x.png'/>")
	
	$(this).html("");
	$(this).html("<img src='../../public/img/homepage/content_icon01_down@2x.png'/>")
})
$(".navbar_01").on('touchstart',function(){
	
	$(".navbar_01").find(".navbar_p").css("color","#646464")
	$(".navbar_01").find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_nor@2x.png'/>")
	$(".navbar_02").html("<img src='../../public/img/homepage/content_icon01_nor@2x.png'/>")
	
	$(this).find(".navbar_p").css("color","#ea5404");
	$(this).find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_press@2x.png'/>")
	/*$(this).find(".navbar_img").animate({
		rotate:'180deg'
	})*/
	//定位浮动
	$(".head").css("display","none")
	$(".top").css("display","block").css("z-index","1");
				
	$(".navbar").css("position","fixed");
	$(".navbar").css("margin-top","-215px");
 	$(window).scrollTop(187);
 	
 	
 	
	//区域
	var count = $(this).index();
	//console.log(count);
	switch(count){
		case 0:
		console.log(count);
		$('.cost').css("display","none")
		$('.area').css("display","none")
		$('.xuanze').css("display","block")
		$('.unit').find("ul").eq(1).css('display','none')
		$('.unit').find("ul").eq(0).css('display','none')
		$('.area_left').find("ul").eq(1).css("display","none")
		$('.area_right').find("ul").eq(1).css("display","none")
		$('.area_left').find("ul").eq(0).css("display","block")
		$('.area_right').find("ul").eq(0).css("display","block")
		
		break;
		case 1:
		console.log(count);
		$('.xuanze').css("display","none")
		$('.cost').css("display","none")
		$('.area').css("display","block")
		$('.area_left').find("ul").eq(1).css("display","none")
		$('.area_right').find("ul").eq(1).css("display","none")
		$('.area_left').find("ul").eq(0).css("display","none")
		$('.area_right').find("ul").eq(0).css("display","none")
		$('.unit').find("ul").eq(1).css('display','none')
		$('.unit').find("ul").eq(0).css('display','block')
		
		break;
		case 2:
		console.log(count);
		$('.area').css("display","none")
		$('.xuanze').css("display","none")
		$('.cost').css("display","block")
		$('.area_left').find("ul").eq(0).css("display","none")
		$('.area_right').find("ul").eq(0).css("display","none")
		$('.area_left').find("ul").eq(1).css("display","none")
		$('.area_right').find("ul").eq(1).css("display","none")
		$('.unit').find("ul").eq(0).css('display','none')
		$('.unit').find("ul").eq(1).css('display','block')
		break;
		case 3:
		$('.area').css("display","none")
		$('.xuanze').css("display","none")
		$('.cost').css("display","none")
		$('.box').css('display','block')
		$('.unit').find("ul").eq(0).css('display','none')
		$('.unit').find("ul").eq(1).css('display','none')
		$('.area_left').find("ul").eq(0).css("display","none")
		$('.area_right').find("ul").eq(0).css("display","none")
		$('.area_left').find("ul").eq(1).css("display","block")
		$('.area_right').find("ul").eq(1).css("display","block")
		
		
	}
 
	
	
	
	$('.top_head_span').on("touchstart",function(){
		location.replace("https://www.baidu.com/");
	})
})


 
/*var t=$("body").scrollTop;
console.log(t)
$(window).scrollTop(function(){
	if(t>100){
		$(".head").css("display","none");
		$(".top").css("display","block")
	}
})*/
$(window).on('scroll',function(){
	var top = parseInt($(window).scrollTop());
	
	if(top>133){
		$(".head").css("display","none")
		$(".top").css("display","block").css("z-index","1");
		
	}else{
		$(".head").css("display","block");
		$(".top").css("display","none")
	}
	if(top>187){
		$(".navbar").css("position","fixed");
		$(".navbar").css("margin-top","-215px");
		$(".foot_img").css("display","block");
	}else if(top<187){
//		${".navbar"}.romove();
		$(".navbar").css("position","relative");
		$(".navbar").css("margin-top","0");
		$(".foot_img").css("display","none");
	}
	
	
	$(".foot_img").on('touchstart',function(){
 	$(window).scrollTop(0);
 })
})
 


