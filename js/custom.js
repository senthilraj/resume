document.addEventListener('DOMContentLoaded', function(){
  Typed.new('.intro-text', {
    strings: ["^600 Senthilkumar.", "^600 a Front end Developer.", "^1000 a UI/UX Designer.", "^600 a Mobile app Developer."],
    typeSpeed: 0,
    startDelay: 1000,
    loop: true
  });
});




$(document).ready(function() {
	$('#portfolio-page').fullpage({
	  sectionsColor: ['#1b1b1b', '#FFF', '#337ab7', 'whitesmoke', '#ccddff'],
	  anchors: [ 'home', 'about', 'skills', 'contact', 'portfolio'],
	  menu: '#menu-item',
	  afterLoad: function(anchorLink, index){
	  	if( anchorLink == 'about' )
	  	$('.about-me-image').addClass('about-image-opacity');
	  }
	});
});



// Map load

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
        title: 'I am here'
    });
}
