//3
let numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let positive = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive.push(numbers[i]);
  }
}

console.log(positive);