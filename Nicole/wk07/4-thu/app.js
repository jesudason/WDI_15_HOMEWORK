var $searchForm = $('.search-form');
var $queryInput = $('.query-input');
var $resultsDiv = $('.results')

$searchForm.on('submit', function() {
	event.preventDefault();
	var getResults = $.get('http://api.giphy.com/v1/gifs/search?q=' + $queryInput.val() + '&api_key=i407PvQmBQ2zz1GfBvvO8t5UAjwN1dur&limit=5')
		.done(function(response) {
			response.data.forEach(function (result) {
				console.log(result.url);
				var $img = $('<img>').addClass('gif')
				var $a = $('<a>')
			});
		});

});


