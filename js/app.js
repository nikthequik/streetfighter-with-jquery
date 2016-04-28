$('.ryu').on('mousedown', function() {
	$('.ryu-ready').hide();
	$('.ryu-still').hide();
	$('.ryu-throwing').show();
});

$('.ryu').on('mouseup', function() {
	$('.ryu-throwing').hide();
	$('.ryu-still').hide();
	$('.ryu-ready').show();
});

$('.ryu').on('mouseover', function() {
	$('.ryu-still').hide();
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
});

$('.ryu').on('mouseout', function() {
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.ryu-still').show();
});

