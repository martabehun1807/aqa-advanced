import axios from "axios";

describe("JSONPlaceholder API tests", () => {
    test("GET post by ID", async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(response.data.title).toEqual(expect.any(String));
        expect(response.data.body).toEqual(expect.any(String));
    });

    test("GET user by ID", async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.name).toEqual(expect.any(String));
        expect(response.data.email).toEqual(expect.any(String));
        expect(response.data.address).toEqual(expect.any(Object));
    });

    test("GET todo by ID", async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(response.data.title).toEqual(expect.any(String));
        expect(response.data.completed).toEqual(expect.any(Boolean));
    });

    test("POST create first post", async () => {
        const newPost = {
            title: "My first post",
            body: "Learning API testing",
            userId: 1,
        };

        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            newPost
        );

        expect(response.status).toBe(201);
        expect(response.data.id).toBe(101);
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data.userId).toBe(newPost.userId);
    });

    test("POST create second post", async () => {
        const newPost = {
            title: "My second post",
            body: "Testing with Axios and Jest",
            userId: 2,
        };

        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            newPost
        );

        expect(response.status).toBe(201);
        expect(response.data.id).toBe(101);
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data.userId).toBe(newPost.userId);
    });
});