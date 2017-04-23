 var b=true
    $(window).scroll(function(){
        if(b){
            if($(window).scrollTop()>300){
                $(".menu").show();
            }else{
                $(".menu").hide();
            }
            $(".main ul li").each(function (){
                if($(this).offset().top>$(window).scrollTop()){
                    $(".menu ul li").eq($(this).index()).addClass('on').siblings().removeClass('on');
                    return false;
                }
            });
        }
    });

    $(".menu ul li").click(function (){jjj
        b=false;
        $(this).addClass('on').siblings().removeClass('on');
        var _height=$(".main ul li").eq($(this).index()).offset().top;
        $("html,body").animate({scrollTop:_height},500,function (){
            b=true;
        });
    });



/*var Menu_li = $('.menu ul li');//获取到菜单下的li
var Main_li = $('.main ul li');//获取到内容下的li
var b=true;
//浏览器滚动
$(window).scroll(function(){
        if(b){
        //获取浏览器滚动高度
        var _top = $(window).scrollTop();
        //console.log(_top);
        if(_top>300){
            console.log(_top);
            $('.menu').show();//显示
        }else{
            $('.menu').hide();//隐藏
        };
        //遍历  对每一个元素都访问
        Main_li.each(function(){
            var _index = $(this).index();//获取到当前下标
            var _height = $(this).offset().top;//向上的偏移值
            if(_height>_top){
                Menu_li.eq(_index).addClass('on').siblings().removeClass('on');
                return false;//跳出遍历
            }
        });
        }
})
Menu_li.click(function(){
    b=false;
    $(this).addClass('on').siblings().removeClass('on');
    var _index = $(this).index();//获取到当前下标
    var _height = Main_li.eq(_index).offset().top;//向上的偏移值
    $('html,body').animate({scrollTop:_height},500,function(){
        b=true;
    });
})*/
/*$(document).clientHeight/2*/

