$(function(){
    setInterval(function(){
        $(".slide").animate({left: "-375"},1000,function(){
            $(".slide li").eq(0).appendTo(".slide");
            $(".slide").css("left",0)
        })
    },4000)
})