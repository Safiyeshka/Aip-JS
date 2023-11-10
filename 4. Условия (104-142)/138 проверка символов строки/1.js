//1

let str = 'a2345';
let first = str[str.length - 5];

if (first == 'a') {
	console.log('!');
}
//2

let str1 = '123bx';
let last = str1[str1.length - 1];

if (last == 'x') {
	console.log('+');
}

//3
let str2 = 'a2345';
let first2 = str2[str2.length - 5];

if (first2 == 'a' || first2 == 'b') {
	console.log('++');
}