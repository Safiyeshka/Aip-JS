//1
function func(obj) {
	obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj);

//2
function func(arg) {
	arg = '!';
}

let obj1 = {a: 1, b: 2, c: 3};
func(obj1.a);
console.log(obj1);

//3
function func(obj) {
	obj = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func(obj2.a);
console.log(obj2);


//4
function func(arr) {
	arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);


