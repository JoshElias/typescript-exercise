import { ReportTarget } from "../reports/Reporter.js";

export class ConsoleTarget implements ReportTarget {
    async print(report: string): Promise<void> {
        console.log(`Manchester United Wins: ${report}`);
    }
}