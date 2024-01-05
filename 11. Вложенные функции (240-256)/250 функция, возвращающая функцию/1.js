function func2() {
	return function() {
		return 2;
	};
}

console.log( func2()() ); // выведет '!'