$(document).ready(function(){
    var url_string = window.location.href
    var url = new URL(url_string);
    //code = url.searchParams.get("ac");
    code="BA"
    
    //var images= [{"url":"1.jpg"},{"url":"2.jpg"},{"url":"3.jpg"},{"url":"4.jpg"},{"url":"5.jpg"}];
    var images=[{"url":"1.jpg"},{"url":"2.jpg"}];
    //var images=[{"url":"1.jpg"},{"url":"2.jpg"},{"url":"3.jpg"},{"url":"4.jpg"},{"url":"5.jpg"}];
    var path = "img/"+code+"/"+images[0].url;
    $("#img").attr("src",path);
    count=1;
    setInterval(function(){ 
      dispImg(images[count].url);
      count=count+1;
      if(count==images.length) count=0;
      //$("#img").fadeOut();
    },2000);
});
function dispImg(url){
  var path = "img/"+code+"/"+url;
  $("#img").attr("src",path);
  //$("#img").fadeIn("500");
  //$("#img").fadeout("slow");
}