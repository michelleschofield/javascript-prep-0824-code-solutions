const number1 = 23;
const number2 = 3;
product = number1 * number2;
console.log('product:', product, 'Type:', typeof product);

const charge = 37;
const payment = 24;
const amountRemaining = charge - payment;
console.log(
  'amountRemaining',
  amountRemaining,
  'Type:',
  typeof amountRemaining
);

const tests = 4;
const assignments = 8;
const final = 12;
const grade = (tests + assignments + final) / 3;
console.log('grade:', grade, 'Type:', typeof grade);

const firstName = 'Ebenezer';
const lastName = 'Scrooge';
const fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName, 'Type:', typeof fullName);

const pH = 4;
const isAcidic = pH < 7;
console.log('isAcidic:', isAcidic, 'Type:', typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers === 300;
console.log('isSparta:', isSparta, 'Type:', typeof isSparta);
if (isSparta) {
  console.log('This is SPARTA!!');
}

let nickname = fullName;
nickname += ' is the best!';
console.log('nickname:', nickname, 'Type:', typeof nickname);
