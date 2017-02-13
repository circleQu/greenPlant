/**
 * Created by Administrator on 2017/2/6.
 */


fetch("../json/index.json").then(function(res) {
    if (res.ok) {
        res.json().then(function(data) {

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
        console.log(data);
        });
    } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
    }
}, function(e) {
    console.log("Fetch failed!", e);
});



/*
$.ajax({
    type: "GET",
    url: "http://localhost:3000/html/index.html",
    contentType: "../json/index.json;charset=utf-8",
    data: {

    },
    dataType: "jsonp",
    success: function(data){
        //清空show里面的所有内容
        var detail = '';
        for(var Attr in data){
            //alert(data[Attr]['peopleNum'])
            detail = '<li>' + data[Attr]['sun']
                + '</li><li>' + data[Attr]['soil']
                + '</li><li>' + data[Attr]['air']
                + '</li><li>' + data[Attr]['water']
                + '</li>';
            alert(data['sun'])
        };
        $('.data_num').html(detail);
    }
});
*/




