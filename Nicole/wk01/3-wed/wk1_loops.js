console.log('Nicole is great');

/*

# The even/odd reporter

Write a for loop that will iterate from 0 to 20. 
For each iteration, it will check if the current number is even or odd, 
and report that to the screen (e.g. "2 is even").

*/


for (var count = 0; count < 21; count++) {
	if (count % 2) {
		console.log(count);
	} else {
		console.log(count + ' is even');
	}
}

/*

# Multiplication Tables

Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

*/

for (var mult = 0; mult < 11; mult++) {
	console.log(mult + " * 9 = " + mult * 9);
}

// bonus exercise - nested for loop

for (var multi = 0; multi <= 10; multi++) {
 for (var i = 0; i <= 10; i++) {
   var result = multi * i;
   console.log(multi + ' * ' + i + ' = ' + result);
 }
}

/*

# Your top choices

Create an array to hold your top choices (colors, presidents, whatever).

For each choice, log to the screen a string like: "My #1 choice is blue."

Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

*/

var topChoices = ['colours', 'presidents', 'whatever'];
var getOrdinal = function(n) {
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
}
topChoices[0] = 'blue';
topChoices[1] = 'Obama';
topChoices[2] = 'Whatever whatever';

for (var i = 0; i < topChoices.length; i++) {
	console.log('My ' + getOrdinal(i + 1) + ' choice is ' + topChoices[i]);
}

/* var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    alert(myStringArray[i]);
    //Do something
} */




