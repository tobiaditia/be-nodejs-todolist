import {
    TodolistServices
} from '../src/services/todolist-service.js';

const service = new TodolistServices();

test("get todolist must object", () => {
    const result = service.getJsonTodolist();
    expect(result).toMatchObject({
        "code": 200,
        "status": "success",
        "data": []
    });
})