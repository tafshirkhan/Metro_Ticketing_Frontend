import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = "https://localhost:7020/api/";
  constructor(
    public httpService: HttpClient
  ) { }

  registerUser(val: any) {
    return this.httpService.post<any>(this.baseURL + 'User/CreateUser', val);
  }

  loginUser(data: any){
    console.log(data);
    return this.httpService.post<any>(this.baseURL+'User/LoginUser',data)
  }
}
