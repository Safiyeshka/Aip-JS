let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}

console.log(arr);

//2

let arr2 = [];

for (let i = 0; i < 3; i++) {
	arr2[i] = []; // создаем подмассив
	
	for (let j = 0; j < 5; j++) {
		arr2[i].push('x'); // заполняем подмассив числами
	}
}

console.log(arr2);


//3


let arr3 = [];

for (let i = 0; i < 3; i++) {
	arr3[i] = []; // создаем подмассив
	
	for (let j = 0; j < 2; j++) {
    arr3[j] = [];
	

    for (let k = 0; k < 5; k++) {
      arr3[k].push(k + 1); 
    }
  }
}

console.log(arr3);