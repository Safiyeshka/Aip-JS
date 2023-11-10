//1
let num = 12345;
let str = String(num);

if (str[4] == 0) {
	console.log('+++');
} else {
	console.log('---');
}

//2

let n = 12345;
let first = String(n)[4];

if (first == 0 || first == 2 || first == 4 || first == 6 || first == 8) {
	console.log('+++');
} else {
	console.log('---');
}