import { readFile } from "fs/promises";

const matches = await readFile("football.csv", {
    encoding: 'utf-8'
});

const manUnitedWins = matches
    .split('\n')
    .map(row => row.split(','))
    .reduce((wins, match) => {
        return ((match[1] === 'Man United' && match[5] === "H")
            || (match[2] === 'Man United' && match[5] === "A")) 
        ? ++wins : wins;
    }, 0); 


console.log(`Manchester United Wins: ${manUnitedWins}`);