import { CsvFileReader } from "./CsvFileReader.js";
import { MatchResult } from "./Match.js";

const matches = await new CsvFileReader("football.csv").read();
const manUnitedWins = matches.reduce((wins, match) => {
    return ((match[1] === "Man United" && match[5] === MatchResult.HomeWin)
        || (match[2] === "Man United" && match[5] === MatchResult.AwayWin)) 
    ? ++wins : wins;
}, 0); 

console.log(`Manchester United Wins: ${manUnitedWins}`);