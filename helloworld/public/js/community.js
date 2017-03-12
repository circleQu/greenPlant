/**
 * Created by Administrator on 2017/2/3.
 */
$(".read").on("click",function(){
    //$(".pic").css("display","block");
    //$(".hui").css("display","block");
    //$(".item div").removeClass("two");
    //$(this).prev().prev().removeClass("two");
    $(this).parent().children($(".intwoline")).removeClass("two");
    $(this).css("display","none");
    $(this).siblings().css("display","block");

    $(".hui").click(function(){
        /*
         $(this).siblings().css("display","none");
         $(this).closest().find($(".intwoline")).addClass("two");
         $(this).closest().find($(".pic")).css("display","none");
         $(this).prev().css("display","block");
         */
        //$(this).parent().children($(".intwoline")).addClass("two");
        //$(".pic").css("display","none");
        //$(".item div").addClass("two");
        //$(this).parent().find().filter($(".pic")).css("display","none");
        //$(".read").css("display","block");
        //$(this).prev().css("display","block");
        //$(this).css("display","none");
        //$(this).parent().children().not(".read").css("display","none");
        //$(this).parent().children().not(".people_name").css("display","none");
        $(".pic").css("display","none");
        $(".item div").addClass("two");
        $(".hui").css("display","none");
        $(".read").css("display","block");
    });
});

$("#f_plant").on("click",function(){
    $("#f_plant img").attr("src","../img/zhiwu_g.png");
    $("#f_plant p").css("color","#0e932e");
    window.location.href="../html/index.html";
    $("#f_communion img").attr("src","../img/shequ_w%20(1).png");
    $("#f_communion p").css("color","#324c5f");

});
$("#f_book").on("click",function(){
    $("#f_book img").attr("src","../img/baodian_g.png");
    $("#f_book p").css("color","#0e932e");
    window.location.href="../html/book.html";
    $("#f_communion img").attr("src","../img/shequ_w%20(1).png");
    $("#f_communion p").css("color","#324c5f");
});

fetch("../json/community.json",{
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

            $(".item img").not(".pic").eq(0).attr('src',data['tx'][0]);
            var name = data['people_name'][0]
                + '<br/><span class="people_language">' + data['people_data'][0]
                + '</span>';
            $('.item .people_name').eq(0).html(name);
            $(".item .intwoline,.two").eq(0).html(data['question'][0]);
            $('.item .pic').eq(0).attr('src',data['liuyan'][0]);
            $('.item .pic').eq(1).attr('src',data['liuyan'][0]);

            $(".item img").not(".pic").eq(1).attr('src',data['tx'][1]);
            var name = data['people_name'][1]
                + '<br/><span class="people_language">' + data['people_data'][1]
                + '</span>';
            $('.item .people_name').eq(1).html(name);
            $(".item .intwoline,.two").eq(1).html(data['question'][1]);
            $('.item .pic').eq(2).attr('src',data['liuyan'][1]);
            $('.item .pic').eq(3).attr('src',data['liuyan'][2]);
            $('.item .pic').eq(4).attr('src',data['liuyan'][3]);
            $('.item .pic').eq(5).attr('src',data['liuyan'][4]);

            $(".item img").not(".pic").eq(2).attr('src',data['tx'][2]);
            var name = data['people_name'][2]
                + '<br/><span class="people_language">' + data['people_data'][2]
                + '</span>';
            $('.item .people_name').eq(2).html(name);
            $(".item .intwoline,.two").eq(2).html(data['question'][2]);
            $('.item .pic').eq(6).attr('src',data['liuyan'][6]);

            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
}, function(e) {
    console.log("Fetch failed!", e);
});

