async function getTodo() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    const todo = await response.json();

    return todo;
}

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    return user;
}

const allPromise = Promise.all([
    getTodo(),
    getUser()
]);

const racePromise = Promise.race([
    getTodo(),
    getUser()
]);

const allResult = await allPromise;
console.log(allResult);

const raceResult = await racePromise;
console.log(raceResult);