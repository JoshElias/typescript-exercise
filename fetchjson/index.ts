import fetch, { Response } from 'node-fetch'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
const res = await fetch(url);
const todo: Todo = await res.json() as Todo;
const { id, title, completed } = todo;
console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
`);
