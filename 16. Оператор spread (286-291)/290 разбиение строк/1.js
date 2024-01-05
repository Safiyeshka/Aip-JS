//1
let arr = [...'12345'];
console.log(arr);

//2
let arr2 = ['a', ...'12345'];
console.log(arr2);

//3
let arr3 = [...'12345', ...'56789'];
console.log(arr3);

//4
let arr1 = ['a', 'b', 'c'];
let arr5 = [...arr1, ...'12345'];

console.log(arr5);

