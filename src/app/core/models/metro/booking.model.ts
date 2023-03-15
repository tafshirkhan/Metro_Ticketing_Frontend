export interface Booking{
    bookingId:string,
    trainId:string,
    passengerId:string,
    userId:string,
    fare:number
    date:Date,
    status:string,
    seatNum:number,
    isActive:boolean
}