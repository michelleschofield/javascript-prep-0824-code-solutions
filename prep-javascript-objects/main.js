const person = {
  firstName: 'Snoop',
  lastName: 'Dogg',
  hobby: 'watching olympics',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("Person's name:", fullName);

person.job = 'Rapper';
console.log("Person's job:", person.job);

person['previousJob'] = 'just some guy';
console.log("Person's previous job:", person['previousJob']);

console.log(person);
