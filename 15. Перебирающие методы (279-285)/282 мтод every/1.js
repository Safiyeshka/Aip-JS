//1
let arr = [1, 2, 3, 4, 5];

let check = arr.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);


//2
let arr2 = [1, 2, 3, 4, 5];

let check2 = arr2.every(function(elem, index) {
	if (elem * (index + 1) < 30) {
		return true;
	} else {
		return false;
	}
});

console.log(check2);

