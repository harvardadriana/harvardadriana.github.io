$(document).ready(function(){
	console.log("Ready!");

	// show email form
	$('#emailpic').click(function () {
		$('#myForm').attr('class', 'visible');
		$('#contact').attr('class', 'hidden');
		$('#myPhone').attr('class', 'hidden');
		$('#myForm').fadeIn();
	});

	// show phone form
	$('#phone').click(function () {
		$('#myPhone').attr('class', 'visible');
		$('#contact').attr('class', 'hidden');
		$('#myForm').attr('class', 'hidden');
	});

	// validating message field
	$('#message').focusout(function(){
		if($('#message').val().length == 0) {
			$('.message-group .help-block').text("Please enter your message");
			$('.message-group').attr({
				class: "col-xs-5 col-xs-offset-4 form-group message-group has-error"
			}); // end attr
		} else {
			$('.message-group .help-block').text('');
			$('.message-group').attr({ class: 'col-xs-5 col-xs-offset-4 form-group message-group' }); // end attr
		}
	}); // end focus out

	// validating message field
	$('button').click(function(submit){
		if($('#message').val().length == 0) {
			$('.message-group .help-block').text("Please enter your message");
			$('.message-group').attr({class: "col-xs-5 col-xs-offset-4 form-group name-group has-error"});
			submit.preventDefault();

		} else {
			$('#myForm').fadeOut(4500);
			alert('Your message has been submitted!');
			submit.preventDefault();
		}
	}); // end click

});  // end ready