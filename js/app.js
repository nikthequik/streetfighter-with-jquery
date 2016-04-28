$(function() {
$('.ryu').on('mousedown', function() {
	playHadouken();
	$('.ryu-ready').hide();
	$('.ryu-still').hide();
	$('.ryu-throwing').show();
	$('.hadouken').finish().show().animate({
		left: '1020px'
		}, 800, function() {
			$(this).hide();
			$(this).css({
			left: '520px'
		});
	})
	
});

$('.ryu').on('mouseup', function() {
	$('.ryu-throwing').hide();
	$('.ryu-still').hide();
	$('.ryu-ready').show();
});

$('.ryu').on('mouseenter', function() {
	$('.ryu-still').hide();
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
});

$('.ryu').on('mouseleave', function() {
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.ryu-still').show();
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
});
