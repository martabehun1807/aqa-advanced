
import axios from "axios";
import { jest, describe, test, expect, afterEach } from "@jest/globals";

async function getInvalidPost() {
    try {
        await axios.get(
            "https://jsonplaceholder.typicode.com/invalid-endpoint"
        );
    } catch (error) {
        if (error.response?.status === 404) {
            return "Request failed with status code 404";
        }

        return error.message;
    }
}

async function getPostsWithHeadersAndParams() {
    return axios.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "X-Custom-Header": "MyTestValue",
        },
        params: {
            userId: 1,
        },
    });
}

async function getPostById(id) {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        return response.data;
    } catch (error) {
        return error.message;
    }
}

describe("Axios Advanced API Tests", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Handle invalid URL error", async () => {
        const result = await getInvalidPost();

        expect(result).toBe("Request failed with status code 404");
    });

    test("Check custom headers and URL params", async () => {
        const requestSpy = jest.spyOn(axios, "get").mockResolvedValue({
            status: 200,
            data: [],
        });

        await getPostsWithHeadersAndParams();

        expect(requestSpy).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/posts",
            {
                headers: {
                    "X-Custom-Header": "MyTestValue",
                },
                params: {
                    userId: 1,
                },
            }
        );
    });

    test("Mock successful Axios request", async () => {
        const mockPost = {
            id: 1,
            title: "Mocked post",
            body: "Test body",
            userId: 1,
        };

        jest.spyOn(axios, "get").mockResolvedValue({
            status: 200,
            data: mockPost,
        });

        const result = await getPostById(1);

        expect(result).toEqual(mockPost);
        expect(axios.get).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
    });

    test("Mock failed Axios request", async () => {
        jest.spyOn(axios, "get").mockRejectedValue(
            new Error("Network Error")
        );

        const result = await getPostById(1);

        expect(result).toBe("Network Error");
    });
});
