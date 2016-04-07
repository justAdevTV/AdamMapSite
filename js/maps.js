$(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#options input:radio').click(function() {
    var id = $(this).attr('id');
    if (id === "population") {
      $('#mapOne').attr('src', 'images/1/population.png');
      $('#mapTwo').attr('src', 'images/2/population.png');
    } else if (id === "storage") {
      $('#mapOne').attr('src', 'images/1/reservoir.png');
      $('#mapTwo').attr('src', 'images/2/reservoir.png');
    } else if (id === "precipitation") {
      $('#mapOne').attr('src', 'images/1/rain.png');
      $('#mapTwo').attr('src', 'images/2/rain.png');
    } else if (id === "snow") {
      $('#mapOne').attr('src', 'images/1/snow.png');
      $('#mapTwo').attr('src', 'images/2/snow.png');
    }
  });
});