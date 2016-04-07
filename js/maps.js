$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#options input:radio').click(function () {
        var id = $(this).attr('id');
        if (id === "population") {
            $('#mapOne').attr('src', 'images/1/population.png');
            $('#mapTwo').attr('src', 'images/2/population.png');
            $('#explanation').text("This is the amount of people living in California. Original data was by county but for purposes of this model counties that exhist in multiple hydrology districts have been assigned to the district in which the majority of their population lived. A list is available on the information page.");
            $('#change').html("<p>There has been a <strong>33.02%</strong> increase in the California population since 1990.</p>");
        } else if (id === "storage") {
            $('#mapOne').attr('src', 'images/1/reservoir.png');
            $('#mapTwo').attr('src', 'images/2/reservoir.png');
            $('#explanation').text("This is the amount of water in thousands of acre-feet stored in California reservoirs. There were 155 reservoirs measured in 1988-1992 and only 154 measured in 2014. The 1988-1992 measurments were also taken in September (before rain) while the 2014 measurments were taken in February (after rain).");
            $('#change').html("<p>The differences in the data make an overall change unobtainable. However, the data and government news show that hydrologic infrastructure in California has had little improvement since 1992.</p>");
        } else if (id === "precipitation") {
            $('#mapOne').attr('src', 'images/1/rain.png');
            $('#mapTwo').attr('src', 'images/2/rain.png');
            $('#explanation').text("This is basically the amount of inches of rain California has received. It is measured in 4 places as seen on the map. The Northern Sierra Precipitation Index, The Southern Sierra Precipitation Index, The San Joaquin Precipitation Index, and Los Angeles.");
            $('#change').html("<p>There has been a <strong>21.95%</strong> decrease in the amount of precipitation California has received since the 1988-1992 drought.</p>");
        } else if (id === "snow") {
            $('#mapOne').attr('src', 'images/1/snow.png');
            $('#mapTwo').attr('src', 'images/2/snow.png');
            $('#explanation').text("This is the amount of inches of snow California has received. It is the average of several snow sensor's April readings in each of the applicable districts. No sensors where available in the districts without depths.");
            $('#change').html("<p>There has been a <strong>28.57%</strong> decrease in the amount of snow California has received since the 1988-1992 drought.</p>");
        }
    });
});
