var word = ""
var wordDom = document.querySelector('.word');
var guessLetter = document.querySelector('.guessLetter');

var clueSpan = document.querySelector('.clue');
var submit = document.querySelector('.submit');
var guess = document.querySelector('.guess');
var guessErr = document.querySelector('.guessErr');

var clueToArr;
var wordToArr;

var subWord = function() {
	word = wordDom.value;
	wordDom.value = ""
	clueSpan.textContent = "_ ".repeat(word.length)
	clueToArr = clueSpan.textContent.split(' ');
	wordToArr = word.split('');
}

 

submit.addEventListener('click', subWord);
guess.addEventListener('click', check);



var check = function() {
	if (word.includes(guessLetter.value) === true) {
		for (var i = 0; i < wordToArr.length; i++) {
			if (wordToArr[i] === guessLetter.value) {
				clueToArr.splice(i, 1, guessLetter.value);
			}
		}	clueSpan.textContent = clueToArr;
	} if (word.includes(guessLetter.value) !== true) {
		guessErr.textContent = guessLetter.value;
	}
	
}

