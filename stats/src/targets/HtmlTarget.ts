import { ReportTarget } from "../reports/Reporter.js";

export class HtmlTarget implements ReportTarget {
    print(report: string) {
        return `
        <html>
            <body>
                <h1>Football Report</h1>
                <p>${report}</p>
            </body>
        </html>`
    }
}