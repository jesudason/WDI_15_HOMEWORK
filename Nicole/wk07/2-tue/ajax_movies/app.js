// var $searchBtn = $('.searchBtn');
// var movieSearch = document.querySelector('.movieSearch');
var $searchForm = $('.search-form');
var $queryInput = $('.query-input');
var $resultsDiv = $('.results')
// var printResults = document.querySelectorAll('.searchResults')

$searchForm.on('submit', function(event) {
	event.preventDefault();
	// $(event.target).text('abc')
	console.log($queryInput.val());
	
	var options =  {
		url: 'http://omdbapi.com/?s='+ $queryInput.val() +'&apikey=2f6435d9'
	}

	var showResults = function(res) {
		res.Search.forEach(function(movie) {
			console.log(movie)
			// var newElem = document.createElement('p');
			// newElem.textContent = movie.Title;

			// var resultsDiv = document.querySelector('.results');
			// resultsDiv.appendChild(newElem);
			var $h2 = $('<h2>').addClass('title');
			var $a = $('<a>')
				.attr('target', '_blank')
				.attr('href', 'http:www.imdb.com/title' + movie.imdbId)
				.text(movie.Title);
			$h2.append($a);
			$resultsDiv.append($h2);

			// var $newElem = $('<p>')
		})
	}

$.ajax(options).done(showResults);
})

// var searchResults = function(res) { 
// 	res.Search.forEach(function(result) {
// 		$(".printResults").append($('p')[1].textContent = (result.Title));

// 		// $('p')[1].textContent = (result.Title);
// 	});
// }

// 	$searchBtn.on('click', function(event) {
// 		event.preventDefault();
// 		// $.ajax({ url: 'http://omdbapi.com/?t='+ movieTitle.value +'&apikey=2f6435d9'}).done(function(res) {
// 		// 	$('p')[1].textContent = (res.Title);
// 		// })
// 		$.ajax({ url: 'http://omdbapi.com/?s='+ movieSearch.value +'&apikey=2f6435d9'}).done(function(res) {
// 			searchResults(res);
// 		})
		
// 	});

