import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) {

  }
  signupApi(user:any):Observable<any>{
    console.log("signupApi")
    return  this.http.post("http://localhost:9494/public_api/addUser",user)
   }
  loginApi(user:any):Observable<any>{
   return this.http.post("http://localhost:9494/public_api/login",user)
  }
}
