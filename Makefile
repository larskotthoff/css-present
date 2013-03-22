pdf: index.pdf

%.pdf: %.html
	phantomjs js/pdfify.js $*.html $*.pdf && pdfjam $**.pdf 1 --landscape --a4paper && rm -f $*-???.pdf && mv $**.pdf $*.pdf
