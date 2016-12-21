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


var a=0;
/*$('.navbar_01').on('touchstart',function(){
//	var c=$(this).index();
	a++;
	if(a==1){
		
		console.log(a)
		$('.navbar_area').css('display','block')
		
	}else if(a==2){
		a=0;
		$('.navbar_area').css('display','none')
		
		
	}
})*/



	

$(".navbar_02").on('touchstart',function(){
	
	a++;
	if(a==1){
		
		console.log(a)
		$(".navbar_02").html("<img src='../../public/img/homepage/content_icon01_down@2x.png'/>")
		
	}else if(a==2){
		a=0;
		$(".navbar_02").html('')
		$(".navbar_02").html("<img src='../../public/img/homepage/content_icon01_nor@2x.png'/>")
		
		
	}
	
//	$(".navbar_01").find(".navbar_p").css("color","#646464")
//	$(".navbar_01").find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_nor@2x.png'/>")
//	$(".navbar_02").html("<img src='../../public/img/homepage/content_icon01_nor@2x.png'/>")
//	
//	$(this).html("");
//	$(this).html("<img src='../../public/img/homepage/content_icon01_down@2x.png'/>")
})
$(".navbar_01").on('touchstart',function(){
	
	
		a++;
	if(a==1){
		
		console.log(a)
		$('.navbar_area').css('display','block')
		$(this).find(".navbar_p").css("color","#ea5404");
		$(this).find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_press@2x.png'/>")
		
	}else if(a==2){
		a=0;
		$('.navbar_area').css('display','none')
		$(".navbar_01").find(".navbar_p").css("color","#646464")
		$(".navbar_01").find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_nor@2x.png'/>")
		
	}
	
	
	
	
	
//	$(".navbar_01").find(".navbar_p").css("color","#646464")
//	$(".navbar_01").find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_nor@2x.png'/>")
//	$(".navbar_02").html("<img src='../../public/img/homepage/content_icon01_nor@2x.png'/>")
//	
//	$(this).find(".navbar_p").css("color","#ea5404");
//	$(this).find(".navbar_img").html("<img src='../../public/img/homepage/content_icon02_press@2x.png'/>")
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
	//	console.log(count);
		$('.cost').css("display","none")
		$('.area').css("display","none")
		$('.xuanze').css("display","block")
		$('.unit').css("display","none")
		$('.unit').find("ul").eq(1).css('display','none')
		$('.unit').find("ul").eq(0).css('display','none')
		$('.area_left').find("ul").eq(1).css("display","none")
		$('.area_right').find("ul").eq(1).css("display","none")
		$('.area_left').find("ul").eq(0).css("display","block")
		$('.area_right').find("ul").eq(0).css("display","block")
		
		break;
		case 1:
		//console.log(count);
		$('.xuanze').css("display","none")
		$('.cost').css("display","none")
		$('.area').css("display","block")
		$('.area_left').find("ul").eq(1).css("display","none")
		$('.area_right').find("ul").eq(1).css("display","none")
		$('.area_left').find("ul").eq(0).css("display","none")
		$('.area_right').find("ul").eq(0).css("display","none")
		$('.unit').find("ul").eq(1).css('display','none')
		$('.unit').css("display","block")
		$('.unit').find("ul").eq(0).css('display','block')
		
		break;
		case 2:
		//console.log(count);
		$('.area').css("display","none")
		$('.xuanze').css("display","none")
		$('.cost').css("display","block")
		$('.area_left').find("ul").eq(0).css("display","none")
		$('.area_right').find("ul").eq(0).css("display","none")
		$('.area_left').find("ul").eq(1).css("display","none")
		$('.area_right').find("ul").eq(1).css("display","none")
		$('.unit').find("ul").eq(0).css('display','none')
		$('.unit').css("display","block")
		$('.unit').find("ul").eq(1).css('display','block')
		break;
		case 3:
		$('.area').css("display","none")
		$('.xuanze').css("display","none")
		$('.cost').css("display","none")
		$('.box').css('display','block')
		$('.unit').css("display","none")
		$('.unit').find("ul").eq(0).css('display','none')
		$('.unit').find("ul").eq(1).css('display','none')
		$('.area_left').find("ul").eq(0).css("display","none")
		$('.area_right').find("ul").eq(0).css("display","none")
		$('.area_left').find("ul").eq(1).css("display","block")
		$('.area_right').find("ul").eq(1).css("display","block").css('background','#E1E1E1');
		
		
		
	}
	$('.top_head_span').on("touchstart",function(){
		location.replace("https://www.baidu.com/");
	})
})
	


$('.mold').on('touchstart',function(){
	var a = $(this).index();
	//console.log(a)
	$('.mold').removeClass('active')
	$(this).addClass("active")
	if(a==1){
		$('.area_right').find('ul').css('display','none');
		$('.area_right').find('ul').eq(2).css('display','block').css("background"," #e1e1e1");
	}else if(a==2){
		$('.area_right').find('ul').css('display','none');
		$('.area_right').find('ul').eq(3).css('display','block').css("background"," #e1e1e1");
	}
})
 



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
 
$('.footer_poto').on("touchstart",function(){
//	var poto = $(this).index();
//	console.log(poto)
	if($("#a1").hasClass("footer_poto_img")){
		$("#a1").removeClass("footer_poto_img")
		$("#a1").addClass("footer_poto_img01")
		
//		$(this).find('div').removeClass('.footer_poto_img');
		
//		$('.footer_poto').eq(0).find('div').eq(0).addClass('.footer_poto_img01');
		
		
	}
})

