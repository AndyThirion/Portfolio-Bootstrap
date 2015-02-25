/*

My Custom JS
============

Author:  Andy Thirion
Updated: January 2015
Notes:	 

*/


$(function(){
	$('#alertMe').click(function(e){

		e.preventDefault();

		$('#successAlert').slideDown();
	})
})