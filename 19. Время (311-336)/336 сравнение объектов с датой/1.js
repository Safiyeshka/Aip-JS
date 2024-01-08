//1
let Date1 = new Date();

let Date2 = new Date();
Date2.setHours(12, 0, 0, 0);

if (Date1.getTime() >= Date2.getTime()) {
  console.log('Полдень уже был');
} else {
  console.log('Полдень еще не наступил');
}

//2
let Date12 = new Date();

let Date22 = new Date(2023, 10, 15);

if (Date12.getTime() >= Date22.getTime()) {
  console.log('Половина месяца уже прошла');
} else {
  console.log('Половина месяца еще не прошла');
}

