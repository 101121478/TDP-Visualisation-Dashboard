// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

function createCharts(date, psngrDataRows) {
	
	// Convert Chart data rows to Data tables 
			var bus_passenger_data = google.visualization.arrayToDataTable(psngrDataRows);

			var busPassengersChartOption = {'title':'Average Passengers per bus for '+date,
                       'width':1200,
                       'height':300,};		   
					   
					
			// Create the Bar Charts and put them in the specified Document elements		
			var busPassengerChart = new google.visualization.BarChart(document.getElementById('busPassengersChart_div'));
			
			
			// Draw the Bar Charts to the screen using the Data Tables and Options Specified
			busPassengerChart.draw(bus_passenger_data, busPassengersChartOption);
}
