import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../core/models/metro/train.model';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  baseURL = "https://localhost:7020/api/";

  constructor(
    public httpService: HttpClient
  ) { }

  getAllTrains():Observable<Train>{
    return this.httpService.get<Train>(this.baseURL+'Train/GetAll');
  }
  saveTrain(val: any) {
    return this.httpService.post<any>(this.baseURL + 'Train/SaveTrain', val);
  }
  // editTrain(id:number){
  //   return this.httpService.get<Train>(this.baseURL+'Train/GetTrain?TrainId='+id)
  // }
  deleteTrain(id:any){
    return this.httpService.delete<Train>(this.baseURL + 'Train?id='+id);
  }
}
