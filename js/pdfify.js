var page = require('webpage').create(), address, output,
    w = 1200, h = 770;

function pad(i) {
    if(i < 10) { return "00" + i; }
    if(i < 100) { return "0" + i; }
    return i;
}

if(phantom.args.length < 2 || phantom.args.length > 3) {
    console.log('Usage: pdfify.js URL filename');
    phantom.exit();
} else {
    address = phantom.args[0];
    output = phantom.args[1];
    page.viewportSize = { width: w, height: h };
    page.clipRect = { width: w, height: h };
    page.open(address, function(status) {
        if(status !== 'success') {
            console.log('Unable to load the address!');
        } else {
            page.evaluate(function() {
                $("body").css("background-color", "white");
            });
            var pages = page.evaluate(function() {
                    return $("slide").length;
                });
            (function renderNext(j) {
                if(j <= pages) {
                    window.setTimeout(function() {
                        page.render(output.replace(".", "-" + pad(j) + "."));
                        page.evaluate(function() {
                            var e = jQuery.Event("keydown");
                            e.keyCode = 39;
                            $(document).trigger(e);
                        });
                        renderNext(j+1);
                    }, 1000);
                } else {
                    phantom.exit();
                }
            })(1);
        }
    });
}
