$(document).ready(function(){

	// hover effect - adjust opacity of images and increase size
	$('.thumb li ').hover(
		function(){
			$('.thumb li:hover').css({opacity:'1.0', width: '+=10%', height: '+=10%'});},
		function(){
			$('.thumb li').css({opacity:'0.3', width: "", height: ""});
	});

});