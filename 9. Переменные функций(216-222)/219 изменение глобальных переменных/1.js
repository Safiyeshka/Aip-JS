//1
let num = 1;

function func() {
	num = 2;
}
func();

console.log(num);

//2
let num22 = 1;

function func() {
	num22 = 2;
}

console.log(num22);

//3
let num33 = 1;

function func() {
	let num33 = 2;
}
func();

console.log(num33);


//4
let num4 = 1;

function func() {
	let num4 = 2;
}

console.log(num4);
func();

//5
let num5 = 1;

function func() {
	num5 = 2;
}

console.log(num5);
func();

//6
let num6 = 1;

function func() {
	num6++;
}

func();
func();
func();
console.log(num6);

//7
function func() {
	num7 = 2;
}

let num7 = 1;
console.log(num7);
func();

//8
function func() {
	num8 = 2;
}

let num8 = 1;
func();
console.log(num8);

