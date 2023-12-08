const DEBUG = false;

class isNumRelation {
	constructor(numList) {
		// check list size: exception in list length is over 10
		if (numList.length > 10) {
			throw new Error("More than 10");
		}
		// check if list size is empty
		if (this.isEmpty(numList) == true) {
			throw new Error("No numbers in list");	
		}
		this.numList = numList
	}
	
	isEmpty(list) {
		if (list.length > 0) {
			return false;
		}
		return true;
	}
	
	isAllEven() {
		var num = 0
		for (var i in this.numList) {
			num = this.numList[i]
			if (num % 2 != 0) {
				return false;
			}
		}
		return true;
	}
	
	isAllOdd() {
		var num = 0
		for (var i in this.numList) {
			num = this.numList[i]
			if (num % 2 != 1) {
				return false;
			}
		}
		return true;
	}
	
	isAllPrime() {
		return;
	}
	
	isAllComposite() {
		return;
	}
	
	isNoRelation() {
		if (this.isAllEven() == false && this.isAllOdd() == false) {
			return true;
		}
		return false;
	}
	
	/*
	isAllMultipleOf() {
		return;
	}
	*/
	
	// is all Positive, is all Negative
	// is all greater than, is all less than
	
}
/*
// Case 1
var numList = [1, 2, 3, 4];
console.log(numList)
// var numList1 = [1, 3, 11, 13];
const numRelation1 = new isNumRelation(numList);
console.log(numRelation1.isEmpty());
console.log(numRelation1.isAllEven());
console.log(numRelation1.isAllOdd());
console.log(numRelation1.isNoRelation());
*/

var numList = [2, 4, 8, 10];
console.log(numList)
const numRelation2 = new isNumRelation(numList);
console.log(numRelation2.isAllEven());
console.log(numRelation2.isAllOdd());
console.log(numRelation2.isNoRelation());

var numList = [1, 3, 7, 11];
console.log(numList)
const numRelation4 = new isNumRelation(numList);
console.log(numRelation4.isAllEven());
console.log(numRelation4.isAllOdd());
console.log(numRelation4.isNoRelation());



try {
  var numList = [1, 3, 11, 13, 15, 16, 17, 18, 19, 20 , 21, 22, 23];
  const numRelation3 = new isNumRelation(numList);
} catch (e) {
  console.error(e);
}

try {
  var numList = [];
  const numRelation4 = new isNumRelation(numList);
} catch (e) {
  console.error(e);
}

