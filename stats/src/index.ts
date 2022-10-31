import { MatchReader, MatchResult } from "./MatchReader.js";

const matches = await new MatchReader("football.csv").read();
const manUnitedWins = matches.reduce((wins, match) => {
    return ((match[1] === "Man United" && match[5] === MatchResult.HomeWin)
        || (match[2] === "Man United" && match[5] === MatchResult.AwayWin)) 
    ? ++wins : wins;
}, 0); 

console.log(`Manchester United Wins: ${manUnitedWins}`);