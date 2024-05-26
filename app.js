//const toNumList = require('./appHelp')

class isNumRelation {
	constructor(numList) {
		// check list size: exception in list length is over 10
		if (numList.length > 10) {
			throw new Error("More than 10");
		}
		// check if list size is empty
		if (this.#isEmpty(numList) == true) {
			throw new Error("No numbers in list");
		}
		this.numList = numList
	}

	#isEmpty = (numList) => {
		if (numList.length > 0) {
			return false;
		}
		return true;
	}

	isAllEven = () => {
		var num = 0
		for (var i in this.numList) {
			num = this.numList[i]
			if (num % 2 != 0) {
				return false;
			}
		}
		return true;
	}

	isAllOdd = () => {
		var num = 0
		for (var i in this.numList) {
			num = this.numList[i]
			if (num % 2 != 1) {
				return false;
			}
		}
		return true;
	}

	isAllPrime = () => {
		return;
	}

	isAllComposite = () => {
		return;
	}

	isNoRelation = () => {
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

module.exports = {
	isNumRelation
};
// alert ("Hello from app.js")
