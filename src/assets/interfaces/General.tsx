export interface userData {
    username: string,
    role: string,
    factorPoints: number
    invitations: number,
    seedingCount: number,
    downloadingCount: number,
    seedAmount: number,
    downloadAmount: number,
    factorPerHour: number,
    hnr: number,
    messagesAmount: number
}

export interface siteData {
    type: string,
    color: string,
    endDate: Date
}