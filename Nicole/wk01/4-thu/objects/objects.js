/*

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 
It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

*/

var favRecipe = {
	title: 'sandwich',
	servings: 2,
	ingredients: ['bread', 'halloumi', 'chilli', 'spinach', 'tomato', 'avocado']
}

console.log(favRecipe.title);
console.log(favRecipe.servings);
for (var i = 0; i < favRecipe.ingredients.length; i++) {
	console.log(favRecipe.ingredients[i]);
}


/*
The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, 
where each object describes a book and has properties for the title (a string), 
author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. 
For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". 
Now use an if/else statement to change the output depending on whether you read it yet or not. 
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/
	

var books = [ 
	{
		title: "Cat's Cradle",
		author: "Kurt Vonnegut",
		alreadyRead: true
	},
	{
		title: "War and Peace",
		author: 'Leo Tolstoy',
		alreadyRead: false
	},
	{
		title: "The Godfather",
		author: 'Mario Puzo',
		alreadyRead: true
	}
	];


for (var i = 0; i < books.length; i++) {
	var hasRead = (books[i].title + ' by ' + books[i].author);
	console.log(hasRead);

	if (books[i].alreadyRead == true) {
		console.log('You already read ' + hasRead);
	} else {
		console.log('You still need to read ' + hasRead);
	}
}


/*
The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: 
title (a string), 
duration (a number), 
and stars (an array of strings).

Create a function to print out the movie information like so: 
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

*/

var favMovie = {
	title: 'When Harry met Sally',
	duration: 2,
	stars: ['Meg Ryan', 'Carrie Fisher', 'Billy Crystal']
}

console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' hours. Stars: ' + favMovie.stars.join(', '));
