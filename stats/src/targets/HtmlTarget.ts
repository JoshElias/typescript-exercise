import { ReportTarget } from "../reports/Reporter.js";
import { writeFile } from "fs/promises";

export class HtmlTarget implements ReportTarget {
    async print(report: string): Promise<void> {
        const html = `
        <html>
            <body>
                <h1>Football Report</h1>
                <p>${report}</p>
            </body>
        </html>
        `;
        await writeFile('report.html', html);
    }
}