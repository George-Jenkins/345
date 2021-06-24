<?php
mysql_connect('localhost','******','******');

function cleanInput($input){
	
	$input = mysql_real_escape_string(htmlspecialchars($input));
	return $input;
}

?>
