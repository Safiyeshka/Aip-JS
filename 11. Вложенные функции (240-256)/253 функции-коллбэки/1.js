//1
function each(arr, callback) {
	let result = [];

	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}

	return result;
}

let result = each([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});

console.log(result);

//2
function each(arr, callback) {
	let result = [];

	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}

	return result;
}

let result2 = each(['123', 'abc'], function(num) {
	return num.split("").reverse().join("");
});

console.log(result2);

//3
function each(arr, callback) {
	let result = [];

	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}

	return result;
}

let result3 = each(['123', 'abc'], function(num) {
	let splitted = num.split("");
	return splitted[0].toUpperCase();
});

console.log(result3);
