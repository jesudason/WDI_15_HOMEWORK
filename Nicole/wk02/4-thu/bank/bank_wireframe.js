var checkInput = document.querySelector('.checkInput');
var calcCheckDeposit = document.querySelector('.checkDeposit');
var calcCheckWithdraw = document.querySelector('.checkWithdraw');
var checkBalSpan = document.querySelector('.checkBal');

var savingsInput = document.querySelector('.savingsInput');
var calcSavDeposit = document.querySelector('.savDeposit');
var calcSavWithdraw = document.querySelector('.savWithdraw');
var savBalSpan = document.querySelector('.savBal');

savBalSpan.textContent = 500;
checkBalSpan.textContent = 650;


var checkDeposit = function() {
	var total = Number(checkBalSpan.textContent) + Number(checkInput.value);
	checkBalSpan.textContent = total;
}

var checkWithdraw = function() {
	var total;
	if (Number(checkBalSpan.textContent) - Number(checkInput.value) > 0) {
		total = Number(checkBalSpan.textContent) - Number(checkInput.value);
	} else {
		alert("You have insufficient funds to make this transaction");
		total = Number(checkBalSpan.textContent);
	}
	checkBalSpan.textContent = total;
}


var savingsDeposit = function() {
	var total = Number(savBalSpan.textContent) + Number(savingsInput.value);
	savBalSpan.textContent = total;
}

var savingsWithdraw = function() {
	var total;
	if (Number(savBalSpan.textContent) - Number(savingsInput.value) >= 0) {
		total = Number(savBalSpan.textContent) - Number(savingsInput.value);
	} else {
		alert("You have insufficient funds to make this transaction");
		total = Number(savBalSpan.textContent);
	} 
	savBalSpan.textContent = total;
}

calcSavWithdraw.addEventListener( 'click',savingsWithdraw );
calcSavDeposit.addEventListener( 'click', savingsDeposit );
calcCheckWithdraw.addEventListener( 'click', checkWithdraw );
calcCheckDeposit.addEventListener('click', checkDeposit );

/*


Summary
This lab will help you practice JavaScript functions and manipulating the DOM. You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.

Specification:
Keep track of the checking and savings balances somewhere
Add functionality so that a user can deposit money into one of the bank accounts.
Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
Add functionality so that a user can withdraw money from one of the bank accounts.
Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account
*/