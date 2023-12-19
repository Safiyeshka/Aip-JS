let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}

let sum = obj.a.key1 + obj.a.key2 + obj.a.key3 + obj.b.key1 + obj.b.key2 + obj.b.key3 + obj.c.key1 + obj.c.key2 + obj.c.key3;
console.log(sum);


//2
let obj2 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj2['2']['2']); 
console.log(obj2['3']['1']);

