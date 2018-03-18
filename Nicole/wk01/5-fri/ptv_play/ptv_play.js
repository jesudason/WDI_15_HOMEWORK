		

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverley = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var allTrainLines = [alamein, glenWaverley, sandringham];


// var origin = function() {
// 	return document.getElementById("origin").value;
// 	}

// var destination = function() {
// 	return document.getElementById("destination").value;
// 	}

var origin = prompt('Please enter origin station');
var destination = prompt('Please enter your destination');


var originSearch = function() { 
	for (var i = 0; i < allTrainLines.length; i++) {
		if (allTrainLines[i].includes(origin)) {
			return allTrainLines[i];
		}
	}
}

var destinationSearch = function() {
	for (var i = 0; i < allTrainLines.length; i++) {
		if (allTrainLines[i].includes(destination)) {
			return allTrainLines[i];
		}
	}
}

var originIndex = originSearch().indexOf(origin);

var destinationIndex = destinationSearch().indexOf(destination);


// returns journey based on travel direction
var journey = originSearch().slice(originIndex,destinationIndex+1);
var revJourney = (originSearch().slice(destinationIndex, originIndex+1)).reverse();

// function to apply travel direction
var oneTrip = function() {
	if (originIndex < destinationIndex) {
		return journey;
	} else {
		return revJourney;
	}
}
var whichRichmondTo = function() {
	return originSearch().indexOf('Richmond');
}

var whichRichmondFrom = function() {
	return destinationSearch().indexOf('Richmond');
}

var toRichmond = function() {
	if (originIndex < whichRichmondTo()) {
		return originSearch().slice(originIndex,(whichRichmondTo()));
	} else {
		return originSearch().slice(whichRichmondTo()+1,originIndex+1).reverse();
	}
}

var fromRichmond = function() {
	if (whichRichmondFrom() < destinationIndex) {
		return destinationSearch().slice((whichRichmondFrom()), destinationIndex+1);
	} else {
		return destinationSearch().slice(destinationIndex, whichRichmondFrom()+1).reverse();
	}
}

// if an array includes origin and destination
// print oneTrip function

var journeyPlanner = function() {
	if ((originSearch().includes(origin) == true) && (originSearch().includes(destination) == true)) {
		return (oneTrip());
	} else {
		return (toRichmond().concat(fromRichmond()));
	}
}

var stops = function() {
	console.log('Trip Origin: ' + journeyPlanner()[0]);
	for (var j = 1; j < journeyPlanner().length-1; j++) {
		console.log('Stop ' + j + '. ' + journeyPlanner()[j]);
	}
	console.log('Destination: ' + journeyPlanner()[journeyPlanner().length-1]);
}

var logJourney = function() {
	document.getElementById("insert").innerHTML = stops();
}



