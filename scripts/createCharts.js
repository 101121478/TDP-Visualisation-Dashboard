// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

function createCharts(date, avgPsngrDataRows, totalPsngrDataRows) {
	
	// Convert Chart data rows to Data tables 
			var bus_avgPassenger_data = google.visualization.arrayToDataTable(avgPsngrDataRows);
			var bus_totalPassenger_data = google.visualization.arrayToDataTable(totalPsngrDataRows);

			var busAvgPassengersChartOption = {'title':'Average Passengers per bus for '+date,
                       'width': 1050,
                       'height':600,};

			var busTotalPassengersChartOption = {'title':'Total Passengers per bus for '+date,
                       'width':1050,
                       'height':600,};						   
					   
					
			// Create the Bar Charts and put them in the specified Document elements		
			var busAvgPassengerChart = new google.visualization.BarChart(document.getElementById('busAvgPassengersChart_div'));
			var busTotalPassengerChart = new google.visualization.BarChart(document.getElementById('busTotalPassengersChart_div'));
			
			
			// Draw the Bar Charts to the screen using the Data Tables and Options Specified
			busAvgPassengerChart.draw(bus_avgPassenger_data, busAvgPassengersChartOption);
			busTotalPassengerChart.draw(bus_totalPassenger_data, busTotalPassengersChartOption);
}
