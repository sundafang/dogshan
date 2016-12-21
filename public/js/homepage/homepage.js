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
$(".navbar_02").on('touchstart',function(){
	
	a++;
	if(a==1){
		
		console.log(a)
		$(".navbar_02").html("<img src='public/img/homepage/content_icon01_down@2x.png'/>")
		
	}else if(a==2){
		a=0;
		$(".navbar_02").html('')
		$(".navbar_02").html("<img src='public/img/homepage/content_icon01_nor@2x.png'/>")
		
		
	}
	})
	

	
$(".navbar_01").on('touchstart',function(){
	var count = $(this).index();
	
		a++;
	if(a==1){
		
		console.log(a)
		$('.navbar_area').css('display','block')
		$(this).find(".navbar_p").css("color","#ea5404");
		$(this).find(".navbar_img").html("<img src='public/img/homepage/content_icon02_press@2x.png'/>")
		
	}else if(a==2){
		a=0;
		$('.navbar_area').css('display','none')
		$(".navbar_01").find(".navbar_p").css("color","#646464")
		$(".navbar_01").find(".navbar_img").html("<img src='public/img/homepage/content_icon02_nor@2x.png'/>")
		
	}
	
	
	
	//区域
	
	console.log("count"+count);
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
	                                                        	

	//定位浮动
	$(".head").css("display","none")
	$(".top").css("display","block").css("z-index","1");
				
	$(".navbar").css("position","fixed");
	$(".navbar").css("margin-top","-215px");
 	$(window).scrollTop(187)
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
 


//首页信息栏
$('.footer_poto').on("touchstart",function(){
	var poto = $(this).index();
	//console.log(poto)
	if(poto!==0){
		$("#a1").addClass("footer_poto_img01");
		$('.footer_poto_p').addClass("footer_poto_p01");
	}else{
		$("#a1").removeClass("footer_poto_img01");
		$('.footer_poto_p').removeClass("footer_poto_p01");
	}
	
	if(poto==1){
		$('#a2').addClass("footer_poto_img04");
		$('.footer_poto_p02').addClass("footer_poto_p02b");
	}else{
		$('#a2').removeClass("footer_poto_img04");
		$('.footer_poto_p02').removeClass("footer_poto_p02b");
	}
	if(poto==2){
		$('.footer_poto_img02').addClass("footer_poto_img02b")
	}else{
		$('.footer_poto_img02').removeClass("footer_poto_img02b")
	}
	if(poto==3){
		$('#a3').addClass("footer_poto_img05a");
		$('.footer_poto_p03').addClass("footer_poto_p03b");
		$('.message').css('display','block')
	}else{
		$('#a3').removeClass("footer_poto_img05a");
		$('.footer_poto_p03').removeClass("footer_poto_p03b");
		$('.message').css('display','none')
	}
	if(poto==4){
		$('#a4').addClass("footer_poto_img06a");
		$('.footer_poto_p04').addClass("footer_poto_p04b");
	}else{
		$('#a4').removeClass("footer_poto_img06a");
		$('.footer_poto_p04').removeClass("footer_poto_p04b");
	}
})



//信息里的导航

$('.message_top_span').on('tap',function(){
	var aa = $(this).index();
	if(aa==0){
		$('.message_top_span').removeClass('active');
		$(this).addClass('active')
	}else if(aa==1){
		$('.message_top_span').removeClass('active');
		$(this).addClass('active')
	}else if(aa==2)
		$('.message_top_span').removeClass('active');
		$(this).addClass('active')
	})





