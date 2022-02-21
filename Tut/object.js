// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// // accessing type 1
// person.lastName;

// // accessing type 1
// person['lastName'];

const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

name = person.fullName();
name = person.fullName;
