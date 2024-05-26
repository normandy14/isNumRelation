const hello = require('./app');

const DEBUG = false;

// alert ("Hello from app.js")
if (DEBUG) {
	// Case 1: Sequential numbers
	var numList = [1, 2, 3, 4];
	console.log(numList)
	var numRelation = new isNumRelation(numList);
	console.log(numRelation.isAllEven());
	console.log(numRelation.isAllOdd());
	console.log(numRelation.isNoRelation());
	delete numRelation;

	// Case 2: Even numbers
	var numList = [2, 4, 8, 10];
	console.log(numList)
	var numRelation = new isNumRelation(numList);
	console.log(numRelation.isAllEven());
	console.log(numRelation.isAllOdd());
	console.log(numRelation.isNoRelation());
	delete numRelation;

	//Case 3: Odd numbers
	var numList = [1, 3, 7, 11];
	console.log(numList);
	var numRelation = new isNumRelation(numList);
	console.log(numRelation.isAllEven());
	console.log(numRelation.isAllOdd());
	console.log(numRelation.isNoRelation());
	delete numRelation;

	// Case 4: Too many numbers
	try {
	  var numList = [1, 3, 11, 13, 15, 16, 17, 18, 19, 20 , 21, 22, 23];
	  const numRelation = new isNumRelation(numList);
	}
	catch (e) {
	  console.error(e);
	}

	// Case 5: No numbers
	try {
	  var numList = [];
	  const numRelation = new isNumRelation(numList);
	}
	catch (e) {
	  console.error(e);
	}
}

// module.exports = isNumRelation;
