import fetch, { Response } from 'node-fetch'

const url = "https://jsonplaceholder.typicode.com/todos/1";

const run = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};
run();
