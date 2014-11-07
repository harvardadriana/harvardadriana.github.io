$(document).ready(function(){

	$('table th').css({
		backgroundColor: "olive",
		color: "#000000"
	});

	$('table tr:even').css({
		backgroundColor: "#C0C0C0"
	});

	$('table tr:odd').css({
		backgroundColor: "#fff"
	});

	// changing color on mouse hover
	$('table tr').hover(function(){ $(this).css({backgroundColor: "#EEE8AA" }) },
			   function(){ 

				$('table tr:even').css({ backgroundColor: "#C0C0C0" }) ;
			   	$('table tr:odd').css({ backgroundColor: "#fff" })
			   	}
			   );
});