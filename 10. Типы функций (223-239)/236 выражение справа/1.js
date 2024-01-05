//1
func();
function func() {
	console.log('!');
}
+1;
//Function Declaration
//2
func();
function func() {
	console.log('!');
} + 1;
//Function Declaration

//3
func();
+function func() {
	console.log('!');
} + 1;
//Function Expression

//4
func();
+
function func() {
	console.log('!');
} + 1;
//Function Expression

//5
func();
+ 1
function func() {
	console.log('!');
} + 1;
//Function Declaration

//6
func();
function func() {
	console.log('!');
} + console.log('!');
//Function Declaration

