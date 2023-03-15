import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  baseURL = "https://localhost:7020/api/";

  constructor(
    public httpService: HttpClient
  ) { }
}
