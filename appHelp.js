function toNumList(string) {
	numString = string.split(",");
	// console.log(numString);
	numList = []
	var i = 0;
	for (s in numString) {
		// console.log(s);
		i = parseInt(s)
		numList.push(i);
	}
	return numList
}

var numList = toNumList("2, 3, 4, 8");
console.log(numList)