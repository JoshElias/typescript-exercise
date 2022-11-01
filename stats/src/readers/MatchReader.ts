import { dateStringToDate } from "../utils.js";
import { DataReader } from "./DataReader.js";

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
} 

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    async load(): Promise<MatchData[]> {
        return this.matches = (await this.reader.read())
            .map((row :string[]) => {
                if(!row[0] || !row[1] || !row[2] || !row[3] 
                    || !row[4] || !row[5] || !row[6]) {
                    console.log(row);
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
            });
    }
}