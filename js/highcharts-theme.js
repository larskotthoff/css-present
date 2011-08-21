Highcharts.theme = {
	colors: ["red", "blue", "green", "orange", "purple"],
	chart: {
		backgroundColor: 'transparent',
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: null,
        shadow: false
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#000',
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
                font: '18px sans-serif',
                lineHeight: "1.2em"
			}
		}
	},
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		gridLineColor: '#000',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#000',
                font: '18px sans-serif'
			}
		},
	},
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
