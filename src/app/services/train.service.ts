import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Seat } from '../core/models/metro/seat.model';
import { Train } from '../core/models/metro/train.model';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  baseURL = "https://localhost:7020/api/";
  
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
}
