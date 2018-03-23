// Given any value
// print (x * $) x times

var increaseByTwo = function() {

}

var moneytree = function(numOfBranches) {
	// var branch = 0;
	for (var i = 0; i < numOfBranches; i++) {
		console.log(" ".repeat(numOfBranches-i)+"$".repeat(i+i+1));	
	}
}