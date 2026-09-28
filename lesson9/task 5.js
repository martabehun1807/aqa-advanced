const users = [
    { name: "John", email: "john24@gmail.com", age: 30 },
    { name: "Jane", age: 25 },
    { email: "mike4@gmail.com" }
];

for (const { name, email, age } of users) {
    console.log(
        `${name ?? "Default name"}, ${email ?? "Default email"}, ${age ?? "Default age"}`
    );
}