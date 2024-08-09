function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(7, 12);
console.log('Sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(4);
console.log('Minutes:', minutes);

function getGreeting(name) {
  return 'Good morning ' + name + '!';
}
const greeting = getGreeting('Greg');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(4, 2);
console.log('Sum times five:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedFive = multiplyAndDivideBy5(3, 4);
console.log('Product divided by five:', productDividedFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(12, 4);
console.log('Difference:', difference);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
const circumference = getCircleCircumference(3);
console.log('Circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Sasha', 'Jones');
console.log('Full name:', fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(7);
console.log('Cubed:', cubed);
