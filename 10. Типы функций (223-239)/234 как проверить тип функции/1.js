//1
func();
let test = function func() {
	console.log('!');
}
//Function Expression

//2
func();
console.log(
	function func() {
		console.log('!');
	}
);
//Function Expression

//3
func();
+function func() {
	console.log('!');
}
//Function Expression

//4
func();
function func() {
	console.log('!');
}
//Function Declaration
