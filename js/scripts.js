   function initMap() {
  var myLatLng = {lat: 40.4193412, lng: -3.6952723};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}


$(document).ready(function() {

//tooltip   
$(function(){
  $('[data-toggle="tooltip"]').tooltip()
});


//formulario de contacto

  $("#enviar").on("click", function() {
  console.log("clicked");
  return false;
});

$("#enviar").on("click", function() {
  var comment = $("#message-box").val();
   $("#visible-comment").html(comment);
   $("#message-box").hide();
  return false;
});

// main text

$("#message-box").css("border", "2px solid red");

//smooth scroll
var $root = $('html, body');
$('.navbar-nav a,.navbar-header a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});

// Show character count for message
  $("#message").on("keyup", function(){
    var charCount = $(this).val().length;
    if(charCount == 0){
      $("#char-count").hide();
    }
    else {
      $("#char-count").show();
      $("#char-count").html(charCount);
    }

    if(charCount > 50){
      $("#char-count").css("color", "red");
    }
    else {
      $("#char-count").css("color", "black");
    }
  });

  
//work section
for(var i = 0; i < works.length; ++i){
  $("#work").append("\
    <div class='col-md-6' data-toggle='tooltip' title='¡proyectos!'>\
      <a href='" + works[i].link + "' class='work-img'>\
      <img src= '" + works[i].pic + "' class='img-responsive sample'>\
      <span class='info'><p class='proj-title''text-align:center'></p>"+ works[i].title +"</span>\
      </a>\
    </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
 
 };
  $(".work-img").mouseenter(function(){
    $(".info", this).fadeIn();
}).mouseleave(function(){
  $(".info", this).fadeOut();
});
});
 
