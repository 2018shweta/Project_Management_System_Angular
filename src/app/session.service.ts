import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  emailsend(email:any):Observable<any>{
    return this.http.post(environment.url+"public_api/otpsend",email)
  }
  checkotp(otpbean:any):Observable<any>{
    return this.http.post(environment.url+"public_api/otp",otpbean)
  }
  resetpassword(passwordbean:any):Observable<any>{
    return this.http.post(environment.url+"public_api/forgot",passwordbean)
  }
}
