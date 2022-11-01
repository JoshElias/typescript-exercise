import { MatchData } from "../readers/MatchReader.js";
import { WinsReport } from "./WinsReport.js";
import { HtmlTarget } from "../targets/HtmlTarget.js";

export interface ReportSource {
    run(matches: MatchData[]): string
}

export interface ReportTarget {
    print(report: string): Promise<void>;
}

export class Reporter {
    static winsToHtml(team: string): Reporter {
        return new Reporter(
                new WinsReport(team), 
                new HtmlTarget()
        );
    }

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