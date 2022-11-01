import { ReportTarget } from "./Reporter.js";

export class ConsoleTarget implements ReportTarget {
    print(report: string): void {
        console.log(`Manchester United Wins: ${report}`);
    }
}