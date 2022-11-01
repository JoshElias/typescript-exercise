import { readFile } from "fs/promises";
import { DataReader } from "./DataReader.js";


export class CsvFileReader implements DataReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    async read(): Promise<string[][]> {
        return this.data = (await readFile(this.filename, {
            encoding: "utf-8"
        }))
        .split('\n')
        .map(row => row.split(','));
    }
}