import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseURL = "https://localhost:7020/api/";

  jwtHelperService = new JwtHelperService();



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
