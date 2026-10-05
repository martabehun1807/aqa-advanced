class TodoService {
    async getTodo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const todo = await response.json();

        return todo;
    }
}

class UserService {
    async getUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();

        return user;
    }
}

const todoService = new TodoService();
const userService = new UserService();

const allPromise = Promise.all([
    todoService.getTodo(),
    userService.getUser()
]);

const racePromise = Promise.race([
    todoService.getTodo(),
    userService.getUser()
]);

const allResult = await allPromise;
console.log(allResult);

const raceResult = await racePromise;
console.log(raceResult);