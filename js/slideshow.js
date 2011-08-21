var Slideshow = (function(){
	var index = 0;
	
	function initialize() {
		document.addEventListener('keydown', onKeyDown, false);
        total = $("slide").length;
        $("slide").each(function(i) {
            if($("#current-slide-number", this).get(0)) {
                $("#current-slide-number", this).replaceWith('' + (i+1));
            }
            if($("#total-slide-number", this).get(0)) {
                $("#total-slide-number", this).replaceWith('' + total);
            }
        });
		updateSlides();
	}
	
	function onKeyDown(event) {
		if(event.keyCode >= 33 && event.keyCode <= 39) {
			switch(event.keyCode) {
				case 33: index--; break; // page up
				case 34: index++; break; // page down
				case 37: index--; break; // left
				case 39: index++; break; // right
			}
            index = Math.max(Math.min(index, $("slide").length - 1), 0);
			
			updateSlides();
			event.preventDefault();
		}
	}
	
	function updateSlides() {
        $("slide").each(function(i) {
            if(i == index) {
                $(this).removeClass('inactive');
                $(this).addClass('active');
                $(this).trigger('submit');
            } else {
                $(this).removeClass('active');
                $(this).addClass('inactive');
                $(this).trigger('reset');
            }
		});
	}
	
	// Expose some methods publicly
	return {
		initialize: initialize
	};
})();
