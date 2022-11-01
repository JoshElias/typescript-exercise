import { Reporter } from "./reports/Reporter.js";
import { ManUnitedWinsReport } from "./reports/ManUnitedWinsReport.js";
import { ConsoleTarget } from "./targets/ConsoleTarget.js";
import { HtmlTarget } from "./targets/HtmlTarget.js";
import { CsvFileReader } from "./readers/CsvFileReader.js";
import { MatchReader } from "./readers/MatchReader.js";
import { AverageGoalsReport } from "./reports/AverageGoalsReport.js";

const reader = new CsvFileReader("football.csv");
const matches = await new MatchReader(reader).load();

const consoleTarget = new ConsoleTarget();
const htmlTarget = new HtmlTarget();

const manUnitedWinsReport = new ManUnitedWinsReport();

const reporter = new Reporter(manUnitedWinsReport, consoleTarget);
reporter.buildAndPrint(matches);
reporter.target = htmlTarget;
reporter.buildAndPrint(matches);

const averageGoalsReport = new AverageGoalsReport();
reporter.source = averageGoalsReport;
reporter.target = consoleTarget;
reporter.buildAndPrint(matches);



//console.log(`Manchester United Wins: ${manUnitedWins}`);