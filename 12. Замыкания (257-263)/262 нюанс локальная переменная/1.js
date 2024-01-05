//1
function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func()();
func()();
func()();

//2
function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test = func;

test()();
test()();
test()();

