$(document).ready(function(){
	
	
	$('#form').submit(function(e){
		
	e.preventDefault()	
	
	var z = getZ()	
	var message = $('#contact-message').val()
		
	if(!message) return;
	
	$('#feedback-msg').html('').hide()
	
	$('#loader2').show()
	
	$.post('queries/contact.php',{z:z, message:message},function(data){
	
	var path = pathToRoot()
	
	if(data.error=='wrong z') window.location = path+"member-login.html";
		
	$('#contact-message').val('')	
		
	$('#loader2').hide()
	
	$('#feedback-msg').html('Sent. Thanks!').show()
	
	},'json')//post
		
	})//click
	
})