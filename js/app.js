$(function() {

	var ryuState = "ryu-still";
	var ryuTakingAction = "";
	var ryuHide = function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.nice').hide();
	};

	$('.ryu').on('mousedown', function() {
		if (!ryuTakingAction) {
			ryuTakingAction = "ryu-throwing";
			ryuState = "ryu-throwing";
			playHadouken();
			ryuHide();
			$('.ryu-throwing').show();
			$('.nice, .x').show();
			$('.hadouken').finish().show().animate({
				left: '1220px'
				}, 800, function() {
					$(this).hide();
					$(this).css({
					left: '520px'
				});
			});
		}
	});

	$('.ryu').on('mouseup', function() {
		ryuState = "ryu-ready";
		ryuHide();
		$('.ryu-ready').show();
		ryuTakingAction = "";
	});

	$('.ryu').on('mouseenter', function() {
		ryuState = "ryu-ready";
		ryuHide();
		$('.ryu-ready').show();
	});

	$('.ryu').on('mouseleave', function() {
		ryuState = "ryu-still";
		ryuHide();
		$('.ryu-still').show();
	});

	$(window).on('keydown', (function(e) {
		console.log(e);
		if (e.keyCode === 88){
			if (!ryuTakingAction) { 
				ryuTakingAction = "ryu-cool";
				ryuHide();
				$('.ryu-cool').show();
			}
		};
	}));

	$(window).on('keyup', (function(e) {
	
		if (e.keyCode === 88){
			ryuTakingAction = "";
			ryuHide();

			if (ryuState === "ryu-still") {
				$('.ryu-still').show();
			}
			else if (ryuState === "ryu-throwing") {
				$('.ryu-throwing').show();
			}
			else{
				$('.ryu-ready').show();
			}
		};
	}));

	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}
});
