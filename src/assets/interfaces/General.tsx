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
    messagesAmount: number,
    nsfw: boolean
}

export interface siteEventData {
    type: string,
    color: string,
    endDate: Date
}

export interface siteData {
    events: Array<siteEventData>
    donationProgress: number
}