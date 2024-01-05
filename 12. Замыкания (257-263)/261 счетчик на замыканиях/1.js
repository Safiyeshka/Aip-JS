function test() {
	let num = 1;

	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2


//2
function test() {
	let num = 10;

	return function() {
		console.log(num);
		num--;
	};
}

let func3 = test(); // первый счетчик
func3();  //выведет 1
func3();  //выведет 2

//3
function test() {
	let num = 10;

	return function() {
		if (num > 0 ) {
			console.log(num);
			num--;
		}
		if (num <= 0) {
			console.log('Отсчет окончен');
		}
	};
}

let func4 = test(); // первый счетчик
func4();  //выведет 1
func4();  //выведет 2
func4();  //выведет 1
func4();  //выведет 2
func4();  //выведет 1
func4();  //выведет 2
func4();  //выведет 1
func4();  //выведет 2
func4();  //выведет 1
func4();  //выведет 2
func4();  //выведет 1
func4();  //выведет 2



