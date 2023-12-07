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
		for (var i =0; i < this.numList.length; i++) {
			num = this.numList[i]
			// console.log(num);
			if (num % 2 != 0) {
				return false;
			}
		}
		return true;
	}
	
	isAllOdd() {
		var num = 0
		for (var i =0; i < this.numList.length; i++) {
			num = this.numList[i]
			// console.log(num);
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

var numList1 = [1, 2, 3, 4];
// var numList1 = [1, 3, 11, 13];
const numRelation = new isNumRelation(numList1);
if (DEBUG) {console.log(numRelation.isEmpty())};
console.log(numRelation.isAllEven());
console.log(numRelation.isAllOdd());
console.log(numRelation.isNoRelation());