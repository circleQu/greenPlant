/**
 * Created by Administrator on 2017/2/2.
 */
$('.item').click(function () {
    $(this).css({'background-color':'#FFFF88','opacity':'1'});
    window.location.href="../html/data.html";
});

$("#f_plant").on("click",function(){
    $("#f_plant img").attr("src","../img/zhiwu_g.png");
    $("#f_plant p").css("color","#0e932e");
    window.location.href="../html/index.html";
    $("#f_book img").attr("src","../img/baodian_w%20(1).png");
    $("#f_book p").css("color","#324c5f");
});
$("#f_communion").on("click",function(){
    $("#f_communion img").attr("src","../img/shequ_g.png");
    $("#f_communion p").css("color","#0e932e");
    window.location.href="../html/community.html";
    $("#f_book img").attr("src","../img/baodian_w%20(1).png");
    $("#f_book p").css("color","#324c5f");
});
fetch("../json/book.json",{
    method:'GET',
    headers:{
        'Content-Type': 'x-www-form-urlencoded;charset=utf-8'
        },
    mode:'cors',
    cache:"default",
}).then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {
            //清空show里面的所有内容
            //var detail = '';
            //for(var Attr in data){
            //alert(data[Attr]['peopleNum'])
            //$("#a").attr('src',data['lvluo']);

            $(".item img").eq(0).attr('src',data['plant'][0]);
            var detail_zll = data['plant_word'][0]
                + '<br/><span class="flower_language">' + data['plant_flower_w'][0]
                + '</span>';
            $('.item div').eq(0).html(detail_zll);

            $(".item img").eq(1).attr('src',data['plant'][1]);
            var detail_ll = data['plant_word'][1]
                + '<br/><span class="flower_language">' + data['plant_flower_w'][1]
                + '</span>';
            $('.item div').eq(1).html(detail_ll);

            $(".item img").eq(2).attr('src',data['plant'][2]);
            var detail_wz = data['plant_word'][2]
                + '<br/><span class="flower_language">' + data['plant_flower_w'][2]
                + '</span>';
            $('.item div').eq(2).html(detail_wz);

            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
}, function(e) {
    console.log("Fetch failed!", e);
});
