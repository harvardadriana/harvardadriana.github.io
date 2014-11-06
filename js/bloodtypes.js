$(document).ready(function(){

	$('table th').css({
		backgroundColor: "#000099",
		color: "#fff"
	});

	$('table tr:even').css({
		backgroundColor: "#C0C0C0"
	});

	// changing color on mouse hover
	$('table tr').hover(function(){ $(this).css({backgroundColor: "#3300FF"}) },
			   function(){ 

				$('table tr:even').css({ backgroundColor: "#C0C0C0" }) ;
			   	$('table tr:odd').css({ backgroundColor: "#fff" })
			   	}
			   );
});