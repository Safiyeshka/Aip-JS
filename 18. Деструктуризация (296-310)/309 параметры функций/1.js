//1
function func(employee) {
	console.log(employee);  // выведет 2025
}

func( ['John', 'Smit', 'development', 
	'programmer', 2000] );


//2
function func2(employee) {
	console.log(employee[0]);
	console.log(employee[1]); 
	console.log(employee[2]); 
}

func2( ['John', 'Smit', 'development', 
	'programmer', 2000] ); 

//3

function func3(employee) {

	let position;
	if (employee[3] !== undefined) {
	  position = employee[3];
	} else {
	  position = 'джуниор';
	}
	console.log(position);
  }

  func3( ['John', 'Smit', 'development'] );

  //4
  function func(department, employee, hired) {
	console.log(employee[0]);
	console.log(employee[1]);
	console.log(hired[0]);
	console.log(hired[1]);
	console.log(hired[2]);
}

func( 'development', ['John', 'Smit'], 
	[2018, 12, 31] ); 

