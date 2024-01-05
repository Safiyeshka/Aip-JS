//1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr  = ['a', ...arr1, 'b', 'c', 
	...arr2]; 
console.log(arr);

//2
let arr4 = [1, 2, 3];
let arr3 = [4, 5, 6];

let ar4  = ['a', ...arr1, ...arr1, 'b', 
	'c']; 
console.log(ar4);

//3
let arr5 = [1, 2, 3];
let arr6 = [...arr1, 4, 5, 6];

let ar5  = ['a', 'b', 'c', ...arr2];
console.log(ar5);

//4
let arr7 = [1, 2, 3];
let arr8 = [...arr1, 4, 5, 6];
let arr9 = [...arr2, 7, 8, 9];

let arr11  = [0, ...arr3];
console.log(arr11);
