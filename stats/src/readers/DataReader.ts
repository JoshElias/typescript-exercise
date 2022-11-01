export interface DataReader {
    read(): Promise<string[][]>
    data: string[][];
}