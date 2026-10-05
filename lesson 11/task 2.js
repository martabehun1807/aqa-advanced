function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json());
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json());
}

const allPromise = Promise.all([
    getTodo(),
    getUser()
]);

const racePromise = Promise.race([
    getTodo(),
    getUser()
]);

allPromise
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
});

racePromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });