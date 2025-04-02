// TODO:
// toNumList with ',' vs ' '

const DEBUG2 = false;

let toNumList = (string) => {
	console.log("string is " + string);
	if (string == "") {
		console.log("string is empty!");
		return [];
	}
	numString = string.split(",");
	// console.log(numString);
	numList = []
	for (var i in numString) {
		// console.log(s);
		num = numString[i];
		s = parseInt(num);
		numList.push(s);
	}
	console.log(numList)
	console.log(numList[0])
	return numList
}

module.exports = toNumList;

if (DEBUG2) {
	var numList = toNumList("2, 4, 6, 8");
	console.log(numList);
}
