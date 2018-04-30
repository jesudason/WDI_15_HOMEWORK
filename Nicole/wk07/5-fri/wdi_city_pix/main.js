
// When you select a city in the drop-down box, the background image should change to show that city. The images for the five cities are in the images folder. We have already provided the css code for changing the background image in the style.css file (at the bottom). Feel free to use those classes.

var cityType = document.getElementById("city-type");

function addCity(city, className) {
    var option = document.createElement("option");
    option.text = city;
    option.value = className;
    console.log(this);
	cityType.add(option);
}

var cities = ['NYC','SF','LA','SYD','ATX'];
var classNames = ['nyc', 'sf', 'la', 'sydney', 'austin'];

for (var i = 0; i < cities.length; i++) {
	addCity(cities[i], classNames[i]);
}

cityType.addEventListener('change', function(event) { document.body.className = this.value});




