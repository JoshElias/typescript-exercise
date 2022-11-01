import { ReportSource } from "./Reporter.js";
import { MatchData, MatchResult } from "./MatchReader.js";

export class AverageGoalReport implements ReportSource {
    run(matches: MatchData[]): string {
        return matches.reduce((wins: number, match: MatchData) => {
            return ((match[1] === "Man United" && match[5] === MatchResult.HomeWin)
                || (match[2] === "Man United" && match[5] === MatchResult.AwayWin)) 
            ? ++wins : wins;
        }, 0).toString();
    }
}