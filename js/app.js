$(document).ready(function(){
	console.log('Ready!');

	// changing flags
	$('#countries').change(function(){
		if ($('#countries').val() == 'argentina') {
				$('.help-block').html('<img src="img/flags/Argentina.GIF" alt="" class="img-responsive">');
			} else if ($('#countries').val() == 'australia') 
			{
				$('.help-block').html('<img src="img/flags/Australia.GIF" alt="" class="img-responsive">');
			} else if ($('#countries').val() == 'mexico') 
			{
				$('.help-block').html('<img src="img/flags/Mexico.GIF" alt="" class="img-responsive">');
			} else if ($('#countries').val() == 'spain') 
			{
				$('.help-block').html('<img src="img/flags/Spain.GIF" alt="" class="img-responsive">');
			} else if ($('#countries').val() == 'sweden') 
			{
				$('.help-block').html('<img src="img/flags/Sweden.GIF" alt="" class="img-responsive">');
			} else if ($('#countries').val() == 'uk') 
			{
				$('.help-block').html('<img src="img/flags/UK.GIF" alt="" class="img-responsive">');
			} else if ($('#countries').val() == 'usa') 
			{
				$('.help-block').html('<img src="img/flags/USA.GIF" alt="" class="img-responsive">');
			} else {
				$('.help-block').text('Please pick a country!');
			}
	}); //end changing flags

	// validating name field
	$('#myName').focusout(function(){
		if($('#myName').val().length == 0) {
			$('.name-group').attr({
				class: "col-xs-7 form-group name-group has-error"
			}); // end attr
		} else {
			$('.name-group').attr({
				class: 'col-xs-7 form-group name-group'
			}); // end attr
		}
	}); // end focus out

	// validating email field
	$('#myEmail').focusout(function(){
		if($('#myEmail').val().length == 0) {
			$('.email-group').attr({
				class: "col-xs-7 form-group email-group has-error"
			}); // end attr
		} else {
			$('.email-group').attr({
				class: 'col-xs-7 form-group email-group'
			}); // end attr
		}
	}); // end focus out

	// checking when submit button is clicked
	$('button').click(function(submit){
		if($('#myName').val().length == 0) {
			$('.name-group').attr({
				class: "col-xs-7 form-group name-group has-error"
			}); // end attr
			submit.preventDefault();
		} else  if($('#myEmail').val().length == 0) {
			$('.email-group').attr({
				class: "col-xs-7 form-group email-group has-error"
			}); // end attr
			submit.preventDefault();
		} else {
			$('#myModal').modal();
			submit.preventDefault();
		}
	}); // end click

});	