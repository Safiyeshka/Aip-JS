//1
let month = 10;
 if (month == 12 || month == 1 || month == 2) {
	alert('зима')
 } if (month == 3 || month == 4 || month == 5) {
	alert('весна')
 } if (month == 6 || month == 7 || month == 8) {
	alert('лето')
 } else {
	alert ('осень')
 }

//2
let str = 'abcde';
let first = str[str.length - 5];

if (first == 'a') {
	alert('да')
} else {
	alert('нет');
}

//3
let str1 = '12345';
let first1 = str[str1.length - 5];

if (first1 == 1 || first1 == 2 || first1 == 3) {
	alert('yes');
} else {
	alert('no')
}

//4
let d = 123;
let r = String(d);
alert (Number(r[0]) + Number(r[1]) + Number(r[2]));

//5
let h = 123114;
let k = String(d);
let m = (Number(k[0]) + Number(k[1]) + Number(k[2]));
let n = (Number(k[0]) + Number(k[1]) + Number(k[2]))
if (m == n) {
    alert('+')
} else {
	alert('-')
}
