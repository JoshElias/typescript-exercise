import { CsvFileReader } from "./CsvFileReader.js";
import { MatchReader, MatchResult, MatchData } from "./MatchReader.js";

const reader = new CsvFileReader("football.csv");
const manUnitedWins = (await new MatchReader(reader).load())
    .reduce((wins: number, match: MatchData) => {
    return ((match[1] === "Man United" && match[5] === MatchResult.HomeWin)
        || (match[2] === "Man United" && match[5] === MatchResult.AwayWin)) 
    ? ++wins : wins;
}, 0); 

console.log(`Manchester United Wins: ${manUnitedWins}`);