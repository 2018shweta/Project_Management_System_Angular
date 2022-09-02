import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getAllUsers():Observable<any>{
    console.log("getallusers methods")
    return this.http.get(environment.url+"private_api/allUser")
  }

  //delete method
  deleteUser(userId:any):Observable<any>{
    return this.http.delete(environment.url+"private_api/del/"+userId)
  }

  //update
  getUserByIdApi(userId:any):Observable<any>{
    return this.http.get(environment.url+"public_api/update/"+userId)
  }
//getUserById
  getUserById(userId:any):Observable<any>{
    return this.http.get(environment.url+"public_api/getUserById/"+userId)
  }
}
