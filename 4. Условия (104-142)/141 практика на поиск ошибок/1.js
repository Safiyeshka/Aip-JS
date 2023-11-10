//1
let num4 = 1;
let num5 = 2;

if (num4 + num5 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//2
let num1 = '1';
let num2 = '2';

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//3


if (Number(num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//4
let num = 123;

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}


//5


if (String(num[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}


//6


if (String(num)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}


//7

let first = String(num)[0];

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//8
let n = 12;

if (n.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//9

if (n.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//10

if (String(n.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//11

if (String(n.length) === String(2)) {
	console.log('+++');
} else {
	console.log('---');
}


//12
if (String(n.lenght) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//13

let a = '123033'; // берем в кавычки, чтобы обращаться к цифрам 

let sum1 = Number(a[0]) + Number(a[1]) + Number(a[2]); 
let sum2 = Number(a[3]) + Number(a[4]) + Number(a[5]); 

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}