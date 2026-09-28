const users = [
  { name: "John", email:"john24@gmail.com", age: 30 },
  { name: "Jane", email:"jane25@gmail.com", age: 25 },
  { name: "Mike", email:"mike4@gmail.com", age: 40 }
];
for (const {name, email, age} of users) {
    console.log(`${name} with email ${email} is ${age} years old`)
};