


disable_scroll();

var shu_h = $('.shutter').height();
console.log(shu_h);
console.log(shu_h-30);
shu_h=shu_h-30;
$( ".open" ).click(function() {
  //alert( "Handler for .click() called." );
          $(this).fadeOut();
          //$(".shutter").css({"top":"-865px"});
          $( ".shutter" ).animate({top: "-"+shu_h+"px"}, 1500);
          setTimeout(function (){
              $("#section1 h1").fadeIn(1500);
            },1700);
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


$( "#sec2btn" ).click(function() { 
    //alert("sdf");
    setTimeout(function (){
        $("#section2 h1").fadeIn(1000);
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
                                                percentage: 65,
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
                                                percentage: 70,
                                                lineWidth: 15,
                                                width: 150, // width of the loader in pixels
                                                height: 150,
                                                remainingLineColor: 'rgba(200,200,200,0.1)'
                                            });
            },1000);
                    
});

$("#sec3btn").click(function(){

  $( ".car" ).animate({right: "1500px"}, 8000, function () {
      
      $( ".car" ).css({right: "-600px"});
      //$( ".car" ).css({transform: translate(0, 0)});
 
  });
  
});

$("#nav").scroll_navi();
