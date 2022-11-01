import { ReportSource } from "../reports/Reporter.js";
import { MatchData, MatchResult } from "../readers/MatchReader.js";

export class WinsReport implements ReportSource {
    constructor(public team: string) {} 
    run(matches: MatchData[]): string {
        return matches.reduce((wins: number, match: MatchData) => {
            return ((match[1] === this.team && match[5] === MatchResult.HomeWin)
                || (match[2] === this.team && match[5] === MatchResult.AwayWin)) 
            ? ++wins : wins;
        }, 0).toString();
    }
}