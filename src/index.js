import http from 'http';
import {TodolistServices} from './services/todolist-service.js';

const service = new TodolistServices();
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method === "GET") {
        service.getTodoList(req, res);
    } else if (req.method === "POST") {
        service.createTodolist(req, res);
    } else if (req.method === "PUT") {
        service.updateTodolist(req, res);
    } else if (req.method === "DELETE") {
        service.deleteTodolist(req, res);
    }
});

server.listen(3000);