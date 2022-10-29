import { readFile } from "fs/promises";

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    async read() {
        const matches = await readFile(this.filename, {
            encoding: "utf-8"
        });
        
        return matches
            .split('\n')
            .map(row => row.split(","))
    }
}