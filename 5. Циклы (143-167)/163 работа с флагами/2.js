//2
function isPrimeWithFlag(number) {
  let flag = true; 

  if (number <= 1) {
    flag = false; 
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        flag = false; 
        break;       
      }
    }
  }

  return flag; 
}

if (isPrimeWithFlag(7)) {
  console.log('Число 7 является простым');
} else {
  console.log('Число 7 не является простым');
}
if (isPrimeWithFlag(10)) {
  console.log('Число 10 является простым');
} else {
  console.log('Число 10 не является простым');
}
