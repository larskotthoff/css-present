var Slideshow = (function(){
        var index = 0;

        function initialize() {
        $(document).keydown(onKeyDown);
        total = $("slide").length;
        $("slide").each(function(i) {
            if($("toc")) {
                var label = i;
                if($(this).children("h1").length > 0) {
                    label = $(this).children("h1").first().text().trim();
                } else if($(this).children("h2").length > 0) {
                    label = $(this).children("h2").first().text().trim();
                } else if($(this).children("h3").length > 0) {
                    label = $(this).children("h3").first().text().trim();
                }
                $("<tocentry>" + label + "</tocentry>").appendTo("toc")
                .click(function() {
                    index = i;
                    updateSlides();
                    $("toc").toggleClass("active");
                    });
            }
            if($("#current-slide-number", this).get(0)) {
                $("#current-slide-number", this).replaceWith('' + (i+1));
            }
            if($("#total-slides-number", this).get(0)) {
                $("#total-slides-number", this).replaceWith('' + total);
            }
        });
        updateSlides();
        }

        function onKeyDown(event) {
            if(event.keyCode == 77) { // 'm'
                $("toc").toggleClass("active");
                if($("toc").hasClass("active")) {
                    updateToc();
                }
            }
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
                    $(this).addClass('active');
                    $(this).trigger('submit');
                } else {
                    $(this).removeClass('active');
                    $(this).trigger('reset');
                }
            });
            if($("toc").hasClass("active")) {
                updateToc();
            }
        }

        function updateToc() {
            $("toc > tocentry").each(function(i) {
                if(i == index) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }

        return {
            initialize: initialize
        };
})();
