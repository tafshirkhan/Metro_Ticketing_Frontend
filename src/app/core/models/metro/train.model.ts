export interface Train{
    trainId: string,
    name: string,
    arrivalTime: string,
    departureTime: string,
    arrivalDate: Date,
    departureDate: Date,
    arrivalStation: string,
    departureStation: string,
    "distance": number,
    isActive: boolean
}