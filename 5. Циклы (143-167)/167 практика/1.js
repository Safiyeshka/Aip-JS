//1
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//2
for (let i = 100; i >= 1; i--) {
  console.log(i);
}
//3
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
//4
let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push("x");
}

console.log(arr);
//5
let arr1 = [];

for (let i = 1; i <= 10; i++) {
  arr1.push(i);
}

console.log(arr1);

//6
let arr2 = [2, 5, 9, 12, 7, 4, 6, 1, 8];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}
//7
let arr3 = [2, 5, 9, 12, 7, 4, 6, 1, 8];

let hasFive = false;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 5) {
    hasFive = true;
    break;
  }
}

console.log(hasFive);

//8
let arr4 = [2, 5, 9, 12, 7, 4, 6, 1, 8];

let sum = 0;

for (let i = 0; i < arr4.length; i++) {
  sum += arr4[i];
}

console.log(sum);

//9
let arr5 = [2, 5, 9, 12, 7, 4, 6, 1, 8];

let sumSquares = 0;

for (let i = 0; i < arr5.length; i++) {
  sumSquares += arr5[i] ** 2;
}

console.log(sumSquares);

//10
let arr6 = [2, 5, 9, 12, 7, 4, 6, 1, 8];

let sum6 = 0;

for (let i = 0; i < arr6.length; i++) {
  sum6 += arr6[i];
}

let average = sum6 / arr6.length;

console.log(average);

//11
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

//12
let arr7 = [];
for (let i = 10; i >= 1; i--) {
  arr7.push(i);
}
console.log(arr7); 

//13
let arr8 = [1, -2, 3, -4, 5];
let sum8 = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] > 0) {
    sum8 += arr8[i];
  }
}
console.log(sum8); 
//14
let arr9 = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr9.length; i++) {
  let numString = arr9[i].toString();
  let firstDigit = parseInt(numString.charAt(0));
  if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
    console.log(9[i]);
  }
}

//15
let arr11 = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr11.length - 1; i >= 0; i--) {
  reversed.push(arr11[i]);
}
console.log(reversed);

//16
let arr12 = [0, 1, 2, 2, 4];
for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] === i) {
    console.log(arr12[i]);
  }
}

//17
let arr13 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr13.length; i++) {
  document.write(arr13[i] + " ");
}

//18
let arr14 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr14.length; i++) {
  document.write("<p>" + arr14[i] + "</p>");
}

//19
let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === 5 || i === 6) {
    document.write("<strong>" + daysOfWeek[i] + "</strong>");
  } else {
    document.write(daysOfWeek[i] + " ");
  }
}


//20
let daysOfWeek2 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = new Date().getDay();

for (let i = 0; i < daysOfWeek2.length; i++) {
  if (i === day) {
    document.write("<em>" + daysOfWeek2[i] + "</em> ");
  } else {
    document.write(daysOfWeek2[i] + " ");
  }
}

// 21
for (let key in obj) {
  if (obj[key] <= 400) {
    obj[key] *= 1.1;
  }
}

// 22
let newObj = {};
for (let i = 0; i < arr1.length; i++) {
  newObj[arr1[i]] = arr2[i];
}

// 23
let sumKeys = 0;
let sumValues = 0;
for (let key in obj) {
  sumKeys += Number(key);
  sumValues += obj[key];
}
let result = sumKeys / sumValues;

// 24
let keysArr = Object.keys(obj);
let valuesArr = Object.values(obj);

// 25
let newArr = [];
for (let key in obj) {
  if (String(obj[key]).charAt(0) === '1' || String(obj[key]).charAt(0) === '2') {
    newArr.push(obj[key]);
  }
}

// 26
let newObj1 = {};
for (let i = 0; i < arr.length; i++) {
  newObj1[i + 1] = arr[i];
}

// 27
let newObj2 = {};
for (let i = 0; i < arr.length; i++) {
  newObj2[arr[i]] = i + 1;
}