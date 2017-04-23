
/*
var oLi=document.getElementsByTagName("li");
var arr=[
    {src:"images/1.jpg"},
    {src:"images/2.jpg"},
    {src:"images/3.jpg"},
    {src:"images/4.jpg"},
    {src:"images/5.jpg"},
    {src:"images/6.jpg"},
    {src:"images/7.jpg"},
    {src:"images/8.jpg"},
    {src:"images/9.jpg"},
    {src:"images/10.jpg"},
    {src:"images/11.jpg"},
    {src:"images/12.jpg"}
];
var i=0;
function load(){
    for(var i=0;;i++){
        if(i<12){
            create();
        }else{
            var sum=i;
            for(;i<sum+3;i++){
                create();
            }
        }
    }
}
function create(){
    var _index=getShort();
    var oImg=document.createElement('img');
    var i=0;
    oImg.src=arr[i%arr.length].src;
    oLi[_index].appendChild(oImg);
}
function getShort(){
    var index=0;
    var h=oLi[index].offsetHeight;
    for(var i=1;i<oLi.length;i++){
        if(h>oLi[i].offsetHeight){
            index=i;
            h=oLi[i].offsetHeight;
        }
    }
    return index;
}

*/
/*如果可视窗口的高度与滚动条滚动高度之和大于文档高度，就 加载图片
即为当最高的li小于（可视窗口的高度与滚动条滚动高度之和）时加载图片*//*



*/
/*而也有一种是 当最短的li小于（可视窗口的高度与滚动条滚动高度之和）时加载图片*//*


window.onload=function(){
window.onscroll=function (){
    if($(window).height()+$(window).scrollTop()>$(document).height()){
        console.log($(document).height());
        load();
    }
}

}
*/




var arr = [
    { src : "images/1.png"	},
    { src : "images/2.jpg"	},
    { src : "images/3.jpg"	},
    { src : "images/4.jpg"	},
    { src : "images/5.jpg"	},
    { src : "images/6.jpg"	},
    { src : "images/7.jpg"	},
    { src : "images/8.jpg"	},
    { src : "images/9.jpg"	},
    { src : "images/10.jpg"	},
    { src : "images/11.jpg"	},
    { src : "images/12.jpg"	}
];
//实现瀑流加载图片
var i = 0;
var sum = '';//做一个判断
function load(){//自定义图片加载函数
    i++;
    if ( i < 12 )
    {
        for (;i<12 ;i++ )
        {
            create();
        }
    }else{
        sum = i;
        for (;i<sum+3 ;i++ )
        {
            create();
        }
    }
}
//生成一张图片
function create(){
    //创建一个div盒子来放置图片
    var oDiv = document.createElement("div");
    //生成一个图片对象
    var oImg = new Image();
    //给oImg图片来添加上src路劲
    //arr[1] i%arr.length取模0-11数  0/12=0 余0  1/12 = 0余1 13/12 = 1 余1
    oImg.src = arr[i%arr.length].src;
    //设置图片的缩放属性
    oImg.style.cssText = "opacity:0;transform:scale(0)";
    //把图片添加到div盒子里面
    oDiv.appendChild(oImg);
    //把oDiv盒子添加到li列表里面
    getList($("ul li")).append(oDiv);
    (function(oImg){
        setTimeout(function(){//延迟加载动画
            oImg.style.cssText = "opacity:1;transform:scale(1)";
        },100);
    })(oImg);//立马执行这个函数
}
//获取li列表并对比高度 高度小的就添加一张图片
function getList(obj){
    var length = obj.length;//获取li列表长度
    var h = Infinity;//无限高
    var getList;//获取li列表
    for (var i = 0; i < length ;i++ )
    {	//eq(i)具体的哪个li
        //获取li的高度和h做对比 若果小于h 就添加一张图片
        if (obj.eq(i).height() < h)
        {
            h = obj.eq(i).height();
            getList = obj.eq(i);
        }
    }
    return getList;
}
//计算滚动条高度然后判断添加图片
var scrollH = '';//文档高度
var scrollT = '';//滚动条高度
$(function(){//等同于window.onload = function(){}
    var _height = $(window).height();//获取浏览器可视区域的高度
    //滚动条事件
    $(window).scroll(function(){
        scrollH = document.body.scrollHeight;//文档高度
        scrollT = document.body.scrollTop;//滚动条高度
        console.log(scrollT);//在控制台输出滚动条高度
        //若果可视区域的高度与滚动条高度的和大于文档高度的时候就添加图片
        if ( _height + scrollT + 50 > scrollH )
        {
            load();
        }
    });
})
load();
