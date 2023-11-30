//1
let sum = 0;
let arr = [10, 20, 30, 40, 21, 32, 51]; 

for (let elem of arr) {
  let firstDigit = Math.floor(elem / 10); 
  
  if (firstDigit === 1 || firstDigit === 2) {
    sum += elem; 
  }
}

console.log(sum);