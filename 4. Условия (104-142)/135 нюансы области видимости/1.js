//1
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);
//2
let age1 = 17;
let adult1;

if (age >= 18) {
	adult1 = true;
} else {
	adult1 = false;
}

console.log(adult1);

//3
let age2 = 17;
let res2;

if (age2 >= 18) {
	if (age2 <= 23) {
		res2 = 'от 18 до 23';
	} else {
		res2 = 'больше 23';
	}
} else {
	res2 = 'меньше 18';
}

console.log(res2);

//4
let age3 = 19;
let res3;

if (age3 >= 18) {
	res3;
	
	if (age3 <= 23) {
		res3 = 'от 18 до 23';
	} else {
		res3 = 'больше 23';
	}
} else {
	res3 = 'меньше 18';
}

console.log(res3);
