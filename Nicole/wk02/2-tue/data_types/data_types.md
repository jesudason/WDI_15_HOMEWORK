# Javascript Data Types Exercises

> This worksheet will double as Javascript notes for future reference! Copy it into your preferred note-taking program at the end of class.

## Data Types

For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof "potato"
// Prediction: Vegetable
// Actual: String
```

What is the output of each of the expressions below?

```js
typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual:  numebr

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: true


"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: '13'
// Actual:

"1" - "3"
// Prediction: undefined
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: undefined
// Actual: NaN

99 * "luftbaloons"
// Prediction: 99 luftbaloons
// Actual: NaN
```

### Arrays

Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
* Add an element to the back of an array.
	.push()
	eg. var abc = ["a", "b", "c"]
		abc.push("d"); returns abc = ["a", "b", "c", "d"]
* Remove an element from the back of an array.
	.pop()
	eg. abc.pop(); returns abc = ["a", "b", "c"]
* Add an element to the front of an array.
	.unshift()
	eg. abc.unshift("d"); returns abc = ["d", "a", "b", "c"]
* Remove an element from the front of an array.
	.shift()
	eg. abc.shift(); returns abc = ["a", "b", "c"]
* Concatenates all the elements in an array into a string.
	.join()
	eg. abc.join(); returns "a,b,c"
		abc.join(""); returns "abc"
* Separates the characters of a string into an array. This one is a string method.
	.split("")
	 eg. var alphajoin = abc.join("")  <!-- returning "abc" -->
	 	alphajoin.split("") returns ["a", "b", "c"]


> This is a great exercise for practicing your "Google Fu"! If you need a starting point, check out [MDN's documentation page on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
// Your answers go here.
```

What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

```js
var numbers = [2, 4, 6, 8]
numbers.pop() // [2,4,6]
numbers.push(10) // [2,4,6,10]
numbers.unshift(3) // [3,2,4,6,10]
```

```text
numbers = [3, 2, 4, 6, 10]
```

What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

```js
var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
```

```text
["dot", "dash", "pause", "dash", "dot"]
```

What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

```js
var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // bands = [beatles]
bands.unshift(stones) // bands = [stones, beatles]
bands[bands.length - 1].pop() // ["Brian", "Mick", "Keith", "Ronnie"]
bands[0].shift() // ["Mick", "Keith", "Ronnie"]
bands[1][3] = "Ringo" //["Paul", "John", "George", "Ringo"]
```

```text
Your answer goes here.
```

## Booleans & Comparison Operators

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

|a|!a|
|---|---|
|true|false|
|false|true|

Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
>
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a | b | a AND b |
| --- | --- | --- |
| true | true | true|
| true | false | false |
| false | true | false |
| false | false | false |

|a|b|a OR b|
|---|---|---|
|true|true|true|
|true|false|true|
|false|true|true|
|false|false|false|

|a|b|a `!=` b|
|---|---|---|
|3|3|false|
|1|5|true|
|2|"2"|false|

|a|b|!a AND (a OR b)|
|---|---|---|
|true|true|false|
|true|false|false|
|false|true|true|
|false|false|false|

## Conditionals

You're a bouncer at a bar. Given an `age` variable, create a conditional that satisfies the following requirements...
* If a patron is older than `21`, print out `"Come on in!"`.
* If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
* If a patron is younger than 18, print out `"You're too young to be in here!"`.
* If a patron is older than 75, print out `"Are you sure you want to be here?"`.

```js

var age;

var entry = function() {
	if (age > 21) {
		console.log("Come on in!");
	} else if (age >= 18 && age < 21) {
		console.log("Come on in (but no drinking!)");
	} else if (age < 18) {
		console.log("You're too young to be in here!");
	} if (age > 75) {
		console.log("Are you sure you want to be here?");
	}
}

```

#### Bonus

Bar patrons must have an ID if the bouncer is even going to consider what age they are.
- If the patron has an ID, the bouncer will then check if they are of the proper age
- If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

var hasId;

var idPatron = function() {
	if (hasId == true) {
		return entry();
	} else {
		console.log("No ID, no entry");
	}
}

> Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be? (boolean)

## Bonus: Fizz-Buzz

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...
* Counts from 1 to 100 and prints out something for each number.
* If the number is divisible by 3, print `"Fizz"`.
* If the number is divisible by 5, print `"Buzz"`.
* If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
* If the number does not meet any of the above conditions, just print the number.

Your output should look something like this...

```text
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
```

```js
var fizzbuzz = function() {
	for (var i = 1; i < 101; i++) {
		if (i % 5 == 0 && i % 3 == 0) {
			console.log("FizzBuzz"); 
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
```

#### Bonus (for the bonus)

* Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...

```js
fizzBuzz(1)
// => prints "1" to the console
 
fizzBuzz(3)
// => prints "3" to the console

fizzBuzz(15)
// => prints "FizzBuzz" to the console


```