import { CsvFileReader } from "./CsvFileReader.js";
import { Match, MatchResult } from "./Match.js";

const data = await new CsvFileReader("football.csv").read();
const matches = data.map(m => new Match(m));
const manUnitedWins = matches.reduce((wins, match) => {
    return ((match.homeTeam === "Man United" && match.result === MatchResult.HomeWin)
        || (match.awayTeam === "Man United" && match.result === MatchResult.AwayWin)) 
    ? ++wins : wins;
}, 0); 

console.log(`Manchester United Wins: ${manUnitedWins}`);