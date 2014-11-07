$(document).ready(function(){
	console.log("Ready!");

	// confirm subscription
	if($('#sure').click(function(){ alert('Thank you for subscribing!'); })
	);

	// 'Hide' button
   	if($("button").hover(function(){ $('button').animate({ "marginLeft" : "-700px" }) }, 
       			      function(){ 	$('button').animate({ "marginLeft" : "-700px"}); 
       			      		$('#missingButton').text('Ops, it seems that this button went missing!!') 
   				         }   
   			      )   			       
   	) {   }
   
});