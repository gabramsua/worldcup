export interface Match {
    id: number,
    homeTeam: string,
    awayTeam: string,
    homeFlag: string,
    awayFlag: string
}

export interface FinalizedMatch {
    match: Match,
    homeScore: number,
    awayScore: number,
    goals: number,
    datetime: number // Timestamp
}
