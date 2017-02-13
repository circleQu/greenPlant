/**
 * Created by Administrator on 2017/2/8.
 */

fetch("../json/progress.json").then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {

/*
            //清空show里面的所有内容
            //var detail = '';

            //for(var Attr in data){
            //alert(data[Attr]['peopleNum'])
            var detail = '<li>' + data['sun']
                + '</li><li>' + data['soil']
                + '</li><li>' + data['air']
                + '</li><li>' + data['water']
                + '</li>';
            // };
            $('.data_num').html(detail);
            $('.item2 .data_num').html(detail);
*/
            //var oDiv=document.getElementById('light').getAttribute("data-value");
            //oDiv.value=data['sunny']);
            //var myid= jQuery("#light").data('value');
            //alert(myid);
            //alert(data['sunny']);
            //myid.text(data['sunny']);
            // $('#light').attr("oLight",data['sunny']);
            //$("#light").css("data-value",data['sunny']);
            // var a = document.getElementById("light");
            // var value_big = a.getAttribute("data-value");//获取值
            //a.setAttribute("data-value", data['sunny']);
            $('.progress_bar_title_sun p').html(data['sun']);
            sun= $(".progress_bar_title_sun p").html().slice(0,-2)*100/10;
            $("#sun").css("width",sun+"%");

            $('.progress_bar_title_soil p').html(data['soil']);
            soil= $(".progress_bar_title_soil p").html()*100/10;
            $("#soil").css("width",soil+"%");

            $('.progress_bar_title_air p').html(data['soil']);
            air= $(".progress_bar_title_air p").html()*100/10;
            $("#air").css("width",air+"%");

            $('.progress_bar_title_water p').html(data['water']);
            water= $(".progress_bar_title_water p").html().slice(0,-2)/10;
            $("#water").css("width",water+"%");

            $('.progress_bar_title_tem p').html(data['tem']);
            tem= $(".progress_bar_title_tem p").html()*57/20;
            $("#tem").css("width",tem+"%");

            $('.progress_bar_title_health p').html(data['health']);
            health= $(".progress_bar_title_health p").html().slice(0,-1);
            //alert($('.progress_bar_title_health p').html(data['health']))
            $("#health").css("width",health+"%");

            console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
}, function(e) {
    console.log("Fetch failed!", e);
});
