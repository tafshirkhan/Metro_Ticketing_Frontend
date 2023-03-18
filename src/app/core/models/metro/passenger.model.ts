import { v4 as uuidv4 } from 'uuid';
export interface Passenger{
    passengerId:uuidv4
    userId:string
    passengerName:string
    age:number
    gender:string
}

export class passenger{
    passengerId: string;
    userId: string;
    passengerName: string;
    age: number;
    gender: string;
}

