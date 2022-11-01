import { MatchData } from "./MatchReader.js";

export interface ReportSource {
    run(matches: MatchData[]): string
}

export interface ReportTarget {
    print(report: string): void
}

export class Reporter {
    constructor(
        public source: ReportSource,
        public target: ReportTarget,
    ) {

    }

    buildAndPrint(data: MatchData[]): void {
        const report = this.source.run(data);
        this.target.print(report);
    }
}