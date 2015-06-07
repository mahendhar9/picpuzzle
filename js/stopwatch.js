(function(){
			var hasTimer = false;
			// Init timer start
			$('.start-timer-btn').on('click', function() {
				hasTimer = true;
				$('.timer').timer({
					editable: true
                });
				$(this).addClass('hidden');
				$('.pause-timer-btn, .remove-timer-btn').removeClass('hidden');
			});
})();