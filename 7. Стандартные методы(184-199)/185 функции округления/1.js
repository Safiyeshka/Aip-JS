//1
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let employee of employees) 
  console.log(employee.name + ' - ' + employee.salary);

//2
let empl = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let totalSalary = 0;
for (let employee of empl) 
  totalSalary += employee.salary;

console.log('Сумма зарплат всех работников: ' + totalSalary);


//3
let employ = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

let totalSalaryOver30 = 0;
for (let employee of employ) 
  if (employee.age >= 30) 
    totalSalaryOver30 += employee.salary;
  

console.log('Сумма зарплат работников возрастом 30 и более лет: ' + totalSalaryOver30);