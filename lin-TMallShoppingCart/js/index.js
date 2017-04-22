var kg = 0;
$(".shop_car").css({right: "-225px"});
$(".car").mousemove(function () {
    $(this).css({cursor: "pointer"});
});
$(".car").click(function () {
    if (kg == 0) {
        $(".shop_car").animate({right: "0px"}, 500);
        kg = 1;
    } else {
        $(".shop_car").animate({right: "-225px"}, 500);
        kg = 0;
    }
});

$(".txt2 span").mouseover(function () {
    $(".txt2 span").css({cursor: "pointer"});
});
$(".txt2 span").click(function (event) {
    var _img = $(this).parent().siblings("img").attr("src");
    var _content = $(this).parent().siblings(".txt1").html();
    var _price = $(this).siblings("font").html();
    $(".shop_pro").append("<dl><dt><img src='" + _img + "' width='50px' height='50px'/></dt><dd>" + _content + "</dd><dd class='money'>" + _price + "</dd></dl>");
    addCart(event);
})

/*抛物线*/
/*function pao(e) {
    var e_x = $(".car").offset().left;
    var e_y = $(".car").offset().top;
    var _img=$(e.target).parent().siblings("img").attr("src");
    flyer="<img src='"+_img+"' width='50' height='50' style='border_radius:50%'>"
    flyer.fly=({
        start: {top:e.clientY+"px", left:e.clientX+"px"}, // top, left, width, height
        end: { top:e_y+"px", left:e_x+"px"},
        onEnd: function(){
            flyer.fadeout("300");
        }
});

}*/
function addCart(event) {
    var offset = $('.car').offset();
    var _img=$(event.target).parent().siblings("img").attr("src");
    flyer = $('<img  src="'+_img+'" width="50" height="50" style="border-radius: 50%"/>');
    flyer.fly({
        start: {
            left: event.pageX,
            top: event.pageY
        },
        end: {
            left: offset.left,
            top: offset.top,
            width: 20,
            height: 20
        },
        onEnd: function(){
            flyer.fadeOut("300",function(){
                $(this).remove();
            });
        }
    });
}
