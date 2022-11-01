import { Reporter } from "./Reporter.js";
import { AverageGoalReport } from "./AverageGoalReport.js";
import { ConsoleTarget } from "./ConsoleTarget.js";
import { CsvFileReader } from "./CsvFileReader.js";
import { MatchReader } from "./MatchReader.js";

const reader = new CsvFileReader("football.csv");
const matches = await new MatchReader(reader).load();
const averageGoalReport = new AverageGoalReport();
const consoleTarget = new ConsoleTarget();
const reporter = new Reporter(averageGoalReport, consoleTarget);
reporter.buildAndPrint(matches);

//console.log(`Manchester United Wins: ${manUnitedWins}`);