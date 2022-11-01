import { Reporter } from "./reports/Reporter.js";
import { MatchReader } from "./readers/MatchReader.js";


const matches = await (await MatchReader.fromCsv("football.csv")).load();
const reporter = Reporter.winsToHtml("Man United");
reporter.buildAndPrint(matches);