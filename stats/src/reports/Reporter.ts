import { MatchData } from "../readers/MatchReader.js";

export interface ReportSource {
    run(matches: MatchData[]): string
}

export interface ReportTarget {
    print(report: string): Promise<void>;
}

export class Reporter {
    constructor(
        public source: ReportSource,
        public target: ReportTarget,
    ) {

    }

    async buildAndPrint(data: MatchData[]): Promise<void> {
        const report = this.source.run(data);
        await this.target.print(report);
    }
}