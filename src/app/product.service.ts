import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }




  getAllProduct():Observable<any>{
    console.log("allproducts api");
    
    return this.http.get("http://localhost:9494/private_api/allproduct")
  }

}
