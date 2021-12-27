$(function(){
    setInterval(function(){
        $(".slide").animate({top: "-970"},1000,function(){
            $(".slide li").eq(0).appendTo(".slide");
            $(".slide").css("top",0)
        })
    },4000)
    
})
var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE;', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
for (var word in mobileKeyWords){
    if (navigator.userAgent.match(mobileKeyWords[word]) != null){
        window.location.href = "wjwj0916.woobi.co.kr/portfolio_apri/mobile/index.html";
        break;
    }
}

