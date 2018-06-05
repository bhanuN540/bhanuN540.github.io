$(document).ready(function(){
    var url_string = window.location.href
    var url = new URL(url_string);
    window.hotelName = url.searchParams.get("name");
    var path = "img/"+window.hotelName+".jpg"
    $("#img").attr("src",path);
    $("#header").text(window.hotelName);
});
