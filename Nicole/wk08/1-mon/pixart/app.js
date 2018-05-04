var colorInput = $('.color-input');
var square = $('.square');
var $movieSelect = $('.movie-select');

var options =  {
	url: "http://omdbapi.com/?s="+ movieSelect.val() + "&apikey=2f6435d9"
}

$movieSelect.on('submit', function(event) {
	
})

for (var i = 0; i < 100; i++) {
	square = $("<div>").addClass("square").appendTo('.container');
	
}
	$('.square').mouseover(function() {
		if ($(this).hasClass("clicked")) {
			// debugger
			$(this).addClass( "unclicked" ).removeClass("clicked");
		} else if ($(this).hasClass("unclicked")) {
			$(this).removeClass("unclicked").addClass("clicked");
		} else {
			$(this).addClass( "clicked" );
		}

	$('.unclicked').css( { backgroundColor: 'white'});
	$('.clicked').css( { backgroundColor: colorInput.val()});
	});


$('.set-color').on("click", function(event) {
	event.preventDefault()
	$('.brush').css( { backgroundColor: colorInput.val()});
	// $('.square').css( { backgroundColor: colorInput.val()});
});

$('.movie-background').on("click", function(event) {
	event.preventDefault()
	debugger
	$('main').css("background-image", );

});

