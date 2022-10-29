import { readFile } from "fs/promises";
import { Match, MatchResult } from "./Match.js";
import { dateStringToDate } from "./utils.js";

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    async read(): Promise<Match[]> {
        const matches = await readFile(this.filename, {
            encoding: "utf-8"
        });
        
        return matches
            .split('\n')
            .map(row => row.split(","))
            .map((row: string[]) => {

                if(!row[0] || !row[1] || !row[2] || !row[3] || !row[4]) {
                    console.log(row);
                    throw new Error("invalid match data");
                }
                return new Match(
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseFloat(row[3]),
                    parseFloat(row[4]),
                    row[5] as MatchResult
                );
            });
        }
}