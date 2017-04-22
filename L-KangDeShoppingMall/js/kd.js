$(".tab_l li").hover(function(){
    $(this).css({background:"#fff",color:" #FF94C6",borderRight:"#fff"});
},function(){ $(this).css({background:" #FF94C6",color:" #fff",borderRight:" #FF94C6"});})

function showDIV(i){
    var obj=document.getElementById("div"+i);
    obj.style.display="block";}

function hideDIV(i){
    var obj=document.getElementById("div"+i);
    obj.style.display="none";}

function showD(i){
    var obj=document.getElementById("d"+i);
    obj.style.display="block";}

function hideD(i){
    var obj=document.getElementById("d"+i);
    obj.style.display="none";}


