export interface userData {
    username: string,
    factorPoints: number
    invitations: number,
    seedingCount: number,
    downloadingCount: number,
    seedAmount: number,
    downloadAmount: number,
    factorPerHour: number
}

export interface siteData {
    type: string,
    color: string,
    endDate: Date
}