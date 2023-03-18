import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Seat } from '../core/models/metro/seat.model';
import { Train } from '../core/models/metro/train.model';
import { passenger } from '../core/models/metro/passenger.model';
import { Passenger } from '../core/models/metro/passenger.model';
import { booking, Booking } from '../core/models/metro/booking.model';
import { Transaction } from '../core/models/metro/transaction.model';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  baseURL = "https://localhost:7020/api/";

  jwtHelperService = new JwtHelperService();

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    public httpService: HttpClient
  ) { }

  getAllTrains():Observable<Train>{
    return this.httpService.get<Train>(this.baseURL+'Train/GetAll');
  }
  saveTrain(val: any) {
    return this.httpService.post<any>(this.baseURL + 'Train/SaveTrain', val);
  }
  findTrain(id:number){
    return this.httpService.get<Train>(this.baseURL+'Train/'+id)
  }
  deleteTrain(id:number){
    return this.httpService.delete<Train>(this.baseURL + 'Train/'+id);
  }
  // updateTrain(id: number,train): Observable<Train> {
  //   return this.httpService.put<Train>(this.baseURL + 'Train/' + id, JSON.stringify(train), this.httpOptions);
  // }
  updateTrain(data:any){
    return this.httpService.put<any>(this.baseURL+'Train/UpdateTrain',data);
  }

  //Seat
  getAllSeat():Observable<Seat>{
    return this.httpService.get<Seat>(this.baseURL+'Seat/GetAllSeats');
  }
  saveSeat(val: any) {
    return this.httpService.post<any>(this.baseURL + 'Seat', val);
  }
  deleteSeat(id:number){
    return this.httpService.delete<Seat>(this.baseURL + 'Seat/'+id);
  }

  //User train search
  searchTrain(arrival:any,depature:any,date:any){
    return this.httpService.get<Train>(this.baseURL +'Train/SearchTrain?arrivalStation='+arrival+'&departureStation='+depature+'&date='+date);
  }
  getTrainbyId(id:number){
    return this.httpService.get<Train>(this.baseURL +'Train/'+id)
  }

  //Passenger
  addPassenger(val:any){
    return this.httpService.post<Passenger>(this.baseURL +'Passenger/SavePassenger',val);
  }

  getAllPassenger():Observable<Passenger>{
    return this.httpService.get<Passenger>(this.baseURL +'Passenger');
  }

  calculatedTrainFare(trainId:number,passengerId:number,userId:number){
    return this.httpService.get<any>(this.baseURL +'Booking/CalculateTotalFare?trainId='+trainId+'&passengerId='+passengerId+'&userId='+userId);
  }

  getPassengerById(id:number){
    return this.httpService.get<Passenger>(this.baseURL +'Passenger/'+id);
  }

  addBooking(val:any){
    return this.httpService.post<booking>(this.baseURL +'Booking/SaveBooking',val);
  }
  getAllBooking():Observable<booking>{
    return this.httpService.get<booking>(this.baseURL +'Booking');
  }
  getBookingById(id:number){
    return this.httpService.get<Booking>(this.baseURL + 'Booking/'+id);
  }
  
  getBookingPassengerId(passengerId:number){
    return this.httpService.get<Passenger>(this.baseURL +'Booking/BookingByPassenger/'+passengerId);
  }
  confirmBooking(bookingId:any){
    return this.httpService.get<any>(this.baseURL+'Booking/ConfirmBooking/'+bookingId);
  }


  addTransaction(val:any){
    return this.httpService.post<Transaction>(this.baseURL +'Transaction',val);
  }

  addTicket(passengerId:number,bookingId:number,trainId:number){
    return this.httpService.get<any>(this.baseURL+'Ticket/SaveTicket?passengerId='+passengerId+'&bookingId='+bookingId+'&trainId='+trainId);
  }


  //User login & registration
  registerUser(val: any) {
    return this.httpService.post<any>(this.baseURL + 'User/CreateUser', val);
  }

  loginUser(data: any){
    console.log(data);
    return this.httpService.post<any>(this.baseURL+'User/LoginUser',data)
  }

  setToken(token: string) {
    //localStorage.setItem("access_token", token);
    localStorage.getItem('token')
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    
    console.log(userInfo);
  }

}
