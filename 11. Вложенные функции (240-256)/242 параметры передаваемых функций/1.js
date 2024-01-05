//1
test(function(num) {
	return Math.pow(num, 3);
});

function test(func) {
	console.log(func(3));
}
//2
test(func);

function func(num) {
  return Math.pow(num, 3);
}

function test(func) {
  console.log(func(3));
}
//3
let func = function(num1, num2) {
  return num1 + num2;
}


function test(func) {
  alert(func(2, 3));
}

test(func);

