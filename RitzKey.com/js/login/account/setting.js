$(document).ready(function(){
	
	$('#settings-form').submit(function(e){
		
		e.preventDefault()
		
		var z = getZ()
		
		$('#hiddenZ').val(z)
		
		$('#loader1').show()
		$('#done-msg').html('')
		
		var formData = $('form').serialize()
		
		$.ajax({
			
			type:'POST',
			url:'queries/settings.php',
			data:formData,
			dataType:'json',
			success: function(data){
				
				$('#hiddenZ').val('')
				
				if(data.error=='wrong z'){
					
					window.location = '/index.html';
				}//if
				
				if(data.done=='done'){
					
					$('#loader1').hide()
					$('#done-msg').html('Saved')
				}//if
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				
			}
		})//ajax
		
	})//submit
	
	//handle deleting
	$('#yes-delete-account').click(function(){
		
		var z = getZ()
		
		$.post('queries/delete-account.php',{z:z},function(data){
			window.location = "/index.html";
		},'json')//post
	})//click
	
	$('#delete-account-text').click(function(){
		
		$('#delete-table').show()
	})//click
	
	$('#no-delete-account').click(function(){
		
		$('#delete-table').hide()
	})//click
})