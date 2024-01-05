//1
let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let f1 = test;

let f2 = f1();
let f3 = f1();
f2();
f3();
f2();
f3();


//2
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let f = test()();

let func3 = f;
let func4 = f;
func3();
func4();
func3();
func4();


//3
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();

