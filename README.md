# css-present

css-present is a presentation package using CSS3 and JavaScript. Should work at
least in Chrome/Chromium. Includes JQuery as it is a dependency.

### Quick start

To get started, include the Javascript and CSS files in the header of your
document.

    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery.js"></script>
    <script src="js/slideshow.js"></script>

In the document body, include `<slide></slide>` tags for your slides.

    <slide>Hello World!</slide>

Initialize the library.

    <script type="text/javascript">
        Slideshow.initialize();
    </script>

Load the file in your browser and present away!


### Details

Other libraries you might find useful to use with it are
* d3 (http://d3js.org/)
* MathJax (http://www.mathjax.org/)

The included example (index.html) demonstrates how to use the library and some
of the concepts. In particular, it shows the following items:
* including `<toc></toc>` in the body of the document will generate a table of
  contents that is made visible by pressing the 'm' key. There is one entry for
  each slide; clicking it will take you to that slide. The text for each entry
  is derived automatically from the contents of the slide (i.e. the header
  tags).
* The CSS class "title" should be used for the title slide.
* The CSS class "highlight" can be used to highlight text.
* The CSS class "allcenter" causes its contents to appear big and in the center
  of the slide.
* When a slide is made active, a "submit" event is sent to it. This can be used
  to initialize transitions or similar, as demonstrated in the example.
* Elements with the special IDs "current-slide-number" and "total-slides-number"
  are populated with the respective numbers.

The main style file uses CSS media queries to adapt the font size to the
resolution of the monitor. Currently it only distinguishes between x resolutions
less than 800 pixels and greater than that. If you are planning to use this
library with resolutions of much more than 800 pixels wide, you should define
your own font sizes as the text will look very small otherwise.

All of the above can be customised by editing `js/slideshow.js` or
`css/main.css`. There is currently no support for themes or similar.

### Converting to PDF

PDF conversion is provided via PhantomJS (http://phantomjs.org/). The file
`js/pdfify.js` contains all the necessary code and will generate one PDF file
per slide. It does this by loading the document, rendering the current view,
advancing to the next slide, rendering and so on for all slides. It waits 1
second between switching to a slide and rendering it to allow for any animations
to finish.

The Makefile at the top level wraps the call to the pdfify script and combines
the individual pages into a single PDF with PDFjam.

(c) Lars Kotthoff <lars@larsko.org> 2011-2013
