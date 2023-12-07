const DEBUG = false;

class isNumRelation {
	constructor(numList) {
		// check list size: exception in list length is over 10
		this.numList = numList
	}
	
	isEmpty() {
		if (this.numList.length > 0) {
			if (DEBUG) {console.log(this.numList.length)}
			return false;
		}
		return true;
	}
	
	isAllEven() {
		var num = 0
		for (num in this.numList) {
			if (num % 2 != 0) {
				return false;
			}
		}
		return true;
	}
	
	isAllOdd() {
		var num = 0
		for (num in this.numList) {
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

var numList = [1, 3, 11, 13];
console.log(numList)
const numRelation2 = new isNumRelation(numList);
console.log(numRelation2.isEmpty());
console.log(numRelation2.isAllEven());
console.log(numRelation2.isAllOdd());
console.log(numRelation2.isNoRelation());

