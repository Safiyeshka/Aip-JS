//1
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 

let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getSeconds());

console.log((date1 - date) / 1000);

//2
let now2 = new Date();
let endOfDay = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 23, 59, 59);
let secondsLeft = Math.floor((endOfDay - now2) / 1000);
console.log("Seconds left until the end of the day: " + secondsLeft);

//3
let now3 = new Date();
let newyear = new Date(2023, 11, 32);
let nooww = new Date(now3.getFullYear(), now3.getMonth(), now3.getDate());

console.log((newyear - nooww) / (1000 * 60 * 60 * 24));

//4
let count = 0;
let now4  = new Date();
let year = now4.getFullYear();
for (let month = 0; month < 12; month++) {
  let date = new Date(year, month, 13);
  if (date.getDay() == 5) { 
    count++;
  }
}
console.log("Number of Friday the 13th this year: " + count);

//5
let now5  = new Date();
let date5 = new Date(now5.getFullYear(), now5.getMonth() - 3); 

console.log(date5);

//6
let now6  = new Date(); // получаем текущий момент 
let date6 = new Date(now6.getFullYear(), 30, 10); // получаем нашу дату 

console.log(date6.getDay());

//7
let now7  = new Date();
let date7 = new Date(now7.getFullYear());
console.log(isLeap(date7));

function isLeap() {
    if (date7.getDate() == 29) {
        return true;
    } else {
        return false;
    }
}

//8
function getLastLeapYear() {
    const year = new Date().getFullYear();
    const diff = year % 4;
    return year - diff;
  }

console.log(getLastLeapYear());

//9
let currentYear = new Date().getFullYear();
let nextLeapYear = currentYear;

while (true) {
  nextLeapYear++;
  if ((nextLeapYear % 4 === 0 && nextLeapYear % 100 !== 0) || nextLeapYear % 400 === 0) {
    console.log("The next leap year is: " + nextLeapYear);
    break;
  }
}

