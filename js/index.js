


$( ".open" ).click(function() {
  //alert( "Handler for .click() called." );
          $(this).fadeOut();
          //$(".shutter").css({"top":"-865px"});
          $( ".shutter" ).animate({top: "-590px"}, 1500);
          setTimeout(function (){
              $("#section1 h1").fadeIn(1500);
            },1700);
            setTimeout(function (){
                $("#nav").fadeIn(1000);
            },4000);
});

 
 
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
                                                percentage: 91,
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
                                                percentage: 84,
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
                                                percentage: 78,
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
                                                percentage: 80,
                                                lineWidth: 15,
                                                width: 150, // width of the loader in pixels
                                                height: 150,
                                                remainingLineColor: 'rgba(200,200,200,0.1)'
                                            });
            },1000);
                    
});
$("#nav").scroll_navi();
