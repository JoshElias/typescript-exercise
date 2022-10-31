import { dateStringToDate } from "./utils.js";
import { CsvFileReader } from "./CsvFileReader.js";

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
} 

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        if(!row[0] || !row[1] || !row[2] || !row[3] 
            || !row[4] || !row[5] || !row[6]) {
            throw new Error("invalid match data");
        }
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseFloat(row[3]),
            parseFloat(row[4]),
            row[5] as MatchResult,
            row[6]
        ];
    };   
}