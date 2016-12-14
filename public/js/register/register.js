$('.code').one(function(){
	var a=60;
 var sum = setTimeout(function(){
 	a--;
 	$(".code").html(a+"s后从新获取").attr("disaled","disaled")
 	
 	if(a<1){
 		clearTimeout(sum);
 		$(".code").html("获取验证码").css("background","#ea5404 ").css("fontSize","14px")
 	}
// 	if(a>1&&a<60){
// 		$(".code").attr("disaled","disaled")
// 	}
 },1000)
	$(this).css("background","#ccc").css("fontSize","12px");
	
})

