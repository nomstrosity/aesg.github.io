$( document ).ready(function() {
	$( "#audit-reports" ).addClass( "box-open" );
	$( "#audit-reports .box-content" ).show();
	$( ".box-title" ).click(function() {
		$(this).parent().parent().find( ".box-open .box-content" ).slideUp();
		$(this).parent().parent().find( ".box-open" ).removeClass( "box-open" );
		$(this).parent().addClass( "box-open" );
		$(this).parent().find( ".box-content" ).slideDown();
	});
	$( ".box-image" ).click(function() {
		$(this).parent().toggleClass( "box-open" );
		$(this).parent().find( ".box-content" ).slideToggle();
	});
	$( ".navbar-toggle" ).click(function() {
		$(this).toggleClass( "navbar-open" );
		$( ".navbar-collapse" ).toggleClass( "collapse" );
	});
	$( ".read-more-bt" ).click(function() {
		$(this).parent().find( ".read-more" ).slideDown();
		$(this).remove();
	});
});
