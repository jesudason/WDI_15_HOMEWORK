		

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverley = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var allTrainLines = [alamein, glenWaverley, sandringham];

var origin = prompt('Please enter origin station');
var destination = prompt('Please enter your destination');

/*
Search for both origin and destination in array 1
	If not found, search array 2
	If not found, search array 3
------------> use includes function to see if both are in array?

If both origin and destination is found in array 1-3
	print journey
If not search origin in array 1 - 3
Save origin to Richmond (from that particular array)
Search destination in array 1 - 3
Save Richmond (from that array) to destination
concat origin to Rich and Rich to destination
print result

*/
var i;

var originSearch = function() {
	for (i = 0; i < allTrainLines.length; i++) {
		if (allTrainLines[i].includes(origin)) {
			return allTrainLines[i];
		}
	}
}

var destinationSearch = function() {
	for (i = 0; i < allTrainLines.length; i++) {
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
		console.log(oneTrip());
	} else {
		console.log(toRichmond().concat(fromRichmond()));
	}
}
console.log(journeyPlanner());
