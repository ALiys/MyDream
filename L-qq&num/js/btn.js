/**
 * Created by Administrator on 17-4-18.
 */
$(".tr").hide();
$(".btn").click(function(){
    $(this).parent().parent().parent().find(".tr").show();
});
