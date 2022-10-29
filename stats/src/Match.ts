export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
} 

export class Match {
    date: Date;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    result: MatchResult;

    
    constructor(public data: string[]) {
        if(!data[0] || !data[1] || !data[2] || !data[3] || !data[4]) {
            throw new Error("Cannot create Match with incomplete data");
        }

        this.date = new Date(data[0]);
        this.homeTeam = data[1];
        this.awayTeam = data[2];
        this.homeScore = parseFloat(data[3]);
        this.awayScore = parseFloat(data[4]);
        this.result = data[5] as MatchResult;
    }
}