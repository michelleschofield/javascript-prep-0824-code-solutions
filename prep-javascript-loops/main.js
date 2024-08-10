function whileLoop1() {
  const arr = [];
  let i = 0;
  while (i <= 9) {
    arr.push(i);
    i++;
  }
  return arr;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const arr = [];
  let i = 0;
  while (i <= 18) {
    arr.push(i);
    i += 2;
  }
  return arr;
}

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const arr = [];
  for (let i = 0; i <= 9; i++) {
    arr.push(i);
  }
  return arr;
}

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    const message = 'Time till explosion ' + i + '!';
    console.log(message);
  }
  console.log('BOOM!');
}

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
