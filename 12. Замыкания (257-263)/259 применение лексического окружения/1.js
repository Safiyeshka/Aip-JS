//1
function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func = test();
console.log(func());

//2
function test() {
	let n1 = 1;
	let n2 = 2;
	
	return function() {
		return n1 + n2;
	}
}

console.log(test()());

//3
function test() {
	let num3 = 1;
	
	return function() {
		return num3 + num4;
	}
}

let num4 = 2;
let func1 = test();
console.log(func1());

//4
function test() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num = 2;
let func2 = test();
console.log(func2());
