$(window).load(function() {		
	//Required for loading
	$("#loading").hide();							
});
		
var win_w=$(window).width();

if(win_w<=482)
{
    enable_scroll();
    
}
disable_scroll();

var shu_h = $('.shutter').height();
console.log(shu_h);
console.log(shu_h-30);
shu_h=shu_h-30;
$( ".open" ).click(function() {
  //alert( "Handler for .click() called." );
          $(this).fadeOut();
          //$(".shutter").css({"top":"-865px"});
          $( ".shutter" ).animate({top: "-94%"}, 1500);
          setTimeout(function (){
              $("#section1 .senthil1").animate({left:"42%",opacity:"0.2"},700).fadeOut(500);
              $("#section1 .senthil2").animate({right:"42%",opacity:"0.2"},700).fadeOut(500);
            },1300);
            setTimeout(function (){
              $("#section1 .senthil").animate({left:"65%"},900);
             
            },2100);
            
          setTimeout(function (){
              $("#section1 h1").slideDown(500);
            },3700);
            /*enable_scroll();*/
            setTimeout(function (){
                $("#nav").fadeIn(1000);
            },4000);
});
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}
 
 function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}
var i=100;
    setInterval(function (){ 
        i=i-10;
        $(".cloud").css({"background-position":i+"px 0"});
    }, 100);

$( "#sec2btn" ).click(function() { 
    //alert("sdf");
    setTimeout(function (){
        //$("#section2 h1").fadeIn(1000);
        $("ul.skills li").fadeIn(1000);
                                        $('.loader1').ClassyLoader({
                                                speed: 20,
                                                diameter: 60,
                                                fontSize: '30px',
                                                fontFamily: 'Courier',
                                                fontColor: '#fff',
                                                lineColor: '#fff',
                                                percentage: 90,
                                                lineWidth: 15,
                                                width: 150, // width of the loader in pixels
                                                height: 150,
                                                remainingLineColor: 'rgba(200,200,200,0.1)'
                                            });
                                            $('.loader2').ClassyLoader({
                                                speed: 20,
                                                diameter: 60,
                                                fontSize: '30px',
                                                fontFamily: 'Courier',
                                                fontColor: '#fff',
                                                lineColor: '#fff',
                                                percentage: 78,
                                                lineWidth: 15,
                                                width: 150, // width of the loader in pixels
                                                height: 150,
                                                remainingLineColor: 'rgba(200,200,200,0.1)'
                                            });
                                            $('.loader3').ClassyLoader({
                                                speed: 20,
                                                diameter: 60,
                                                fontSize: '30px',
                                                fontFamily: 'Courier',
                                                fontColor: '#fff',
                                                lineColor: '#fff',
                                                percentage: 70,
                                                lineWidth: 15,
                                                width: 150, // width of the loader in pixels
                                                height: 150,
                                                remainingLineColor: 'rgba(200,200,200,0.1)'
                                            });
                                            $('.loader4').ClassyLoader({
                                                speed: 20,
                                                diameter: 60,
                                                fontSize: '30px',
                                                fontFamily: 'Courier',
                                                fontColor: '#fff',
                                                lineColor: '#fff',
                                                percentage: 68,
                                                lineWidth: 15,
                                                width: 150, // width of the loader in pixels
                                                height: 150,
                                                remainingLineColor: 'rgba(200,200,200,0.1)'
                                            });
                                            
                                           
            },1000);
                    
});

$("#sec3btn").click(function(){

 /* $( ".car" ).animate({right: "1500px"}, 3600, function () {
      
      $( ".car" ).css({right: "-600px"});
      //$( ".car" ).css({transform: translate(0, 0)});
 
  });*/
      //$( ".title_ex" ).fadeIn(2000);
      
  setTimeout(function (){
             $( ".timeline" ).animate({width: "50%"}, 1600);
            },1300);
  
  setTimeout(function (){
              $( ".timeline" ).animate({height: "40px"}, 600);
            },2900);
  setTimeout(function (){
              $( ".dot" ).fadeIn();
            },3500);
    setTimeout(function (){
              $( ".ex_y" ).fadeIn(800);
            },4500);
    setTimeout(function (){
              $( "#section3 h1" ).fadeIn(800);
            },5300);
    setTimeout(function (){
              $( "#section3 p" ).fadeIn(800);
            },6100);
            
});

 $( window ).scroll(function() {
    var val = $(window).scrollTop();
    console.log(val);
    $("#section4").css({"background-position":"50% -"+val*1.5+"px"}); 
 });
 
 $("#sec4btn").click(function(){
      setTimeout(function (){
              $("#section4 ul").fadeIn(2000);
            },1300);
     
     
 });
 
 $(".box_exp").click(function (){
    // alert();
     $(".popup_window img").attr("src","images/"+$(this).attr("data-img")+"big.jpg");
     $(".popup_window h1").text($(this).find("h1").text());
     $(".popup_window p").text($(this).find("p").text());
     var height_win= $(window).height();
     var width_win= $(window).width();
     var val = $(window).scrollTop();
     $(".popup_wrapper").css({width:width_win+"px", height:height_win+"px", top:val+"px"});
    $(".popup_wrapper").fadeIn();
    $(".popup_window").slideToggle(1200);
 });
 
 $(".close_pop").click(function (){
     $(".popup_window").fadeOut();
    $(".popup_wrapper").fadeOut();
 });
 
 $("#sec5btn").click(function (){
     
    //$(".aerop").animate({bottom:"450px"},2000);
     $( "img.aerop" ).animate({bottom:"600px",left:"800px"}, 2000,function(){
         $( "img.aerop" ).css({bottom:"-300px",left:"-600px"});
     });
   // alert();
 });
 
$("#nav").scroll_navi();



/* google map */

// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(12.994145, 80.256054), // New York
                    disableDefaultUI: true,
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
                };
                 
                
                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using out element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
                
                var marker = new google.maps.Marker({
                    position: mapOptions.center,
                    map: map,
                    title: 'senthil'
                });
            }