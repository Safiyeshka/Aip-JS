//1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
//3
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
//4
let index = 0;

while (index <= 10) {
  console.log(index);
  index++;
}
//5
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);
//6
let product = 1;

for (let i = 1; i <= 10; i++) {
  product *= i;
}

console.log(product);

//7
let arr = ['1', '2', '3', '4', '5'];
let sum1 = 0;

for (let elem of arr) {
  sum1 += parseInt(elem);
}

console.log(sum1);

//8
let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;

for (let elem of arr2) {
  sum2 += +elem;
}

console.log(sum2); 

//9
let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;

for (let elem of arr3) {
  sum3 += +elem;
}

console.log(sum); 
//10
let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;

for (let i = 0; i < arr.length; i++) {
  sum4 += +arr4[i];
}

console.log(sum4);
//11
let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;

for (let i = 0; i < arr.length; i++) {
  sum5 += +arr5[i];
}

console.log(sum5);
//12
let arr6 = ['1', '2', '3', '4', '5'];
let sum6 = 0;

for (let i = 0; i < arr.length; i++) {
  sum6 += +arr6[i];
}

console.log(sum6); 
//13
let arr7 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr7.length; i++) {
  arr7[i] = arr7[i] ** 2;
}

console.log(arr7);
//14
let arr8 = [];

for (let i = 1; i <= 5; i++) {
  arr8.push(i);
}

console.log(arr8);

//15

let obj = {a: 1, b: 2, c: 3};
let sum9 = 0;

for (let key in obj) {
  sum9 += obj[key];
}

console.log(sum9);
//16
let obj11 = {a: 1, b: 2, c: 3};
let sum11 = 0;

for (let key in obj11) {
  sum11 += obj11[key];
}

console.log(sum11);
//17
let arr12 = [1, 2, 3, 4, 5];
let res = '---';

for (let elem of arr12) {
  if (elem === 3) {
    res12 = '+++';
    break;
  }
}

console.log(res12);
//18
let arr13 = [];

for (let i = 1; i <= 5; i++) {
  arr13.push(i);
}

console.log(arr13);
//19
let arr14 = [1, 2, 3, 4, 5];
let res14 = false;

for (let elem of arr14) {
  if (elem === 3) {
    res14 = true;
    break;
  }
}

console.log(res14);
//20
let arr15 = [1, 2, 3, 4, 5];

for (let elem of arr15) {
  if (elem % 2 === 0) {
    console.log(elem);
  }
}
//21
let arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res16 = [];

for (let elem of arr16) {
  if (elem % 2 !== 0) {
    res.push(elem);
  }
}

console.log(res16);