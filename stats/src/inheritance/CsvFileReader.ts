import { readFile } from "fs/promises";


export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {}

    async read(): Promise<T[]> {
        const matches = await readFile(this.filename, {
            encoding: "utf-8"
        });
        
        return matches
            .split('\n')
            .map(row => row.split(","))
            .map(this.mapRow)
    }
        
    
    abstract mapRow(row: string[]): T   
}