export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
} 

export class Match {
    constructor(
        public date: Date,
        public homeTeam: string,
        public awayTeam: string,
        public homeScore: number,
        public awayScore: number,
        public result: MatchResult) {
    }
}