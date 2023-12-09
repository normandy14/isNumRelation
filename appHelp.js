const DEBUG2 = true;

let toNumList = (string) => {
	numString = string.split(",");
	// console.log(numString);
	numList = []
	for (var i in numString) {
		// console.log(s);
		num = numString[i];
		s = parseInt(num);
		numList.push(s);
	}
	return numList
}

if (DEBUG2) {
	var numList = toNumList("2, 4, 6, 8");
	console.log(numList);
}
