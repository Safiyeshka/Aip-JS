//1, 2
let arr = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];



for (let func of arr) {
	if (func() == '3') {
		console.log(func());
	} 
}

//3
let arr1 = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];

let sum = arr1[0]() + arr1[1]() + arr1[2]();
console.log(sum);

//4
let ar = [
	function() {return 1},
	function() {return 2},
	function() {return 3},
];

for (let func of ar) {
	console.log(func()); // вызываем наши функции в цикле
}

