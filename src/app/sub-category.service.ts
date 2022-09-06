import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http:HttpClient) { }

  addCategoryApi(subCategory:any):Observable<any>{
    console.log("cat api")
    return this.http.post("http://localhost:9494/private_api/addSubCategory/",subCategory)

  }

  allSubCategoryApi():Observable<any>{
    return this.http.get("http://localhost:9494/private_api/allSubCategory")
  }
  deleteSubCategoryApi(subCategoryId:any):Observable<any>{
    console.log("delete subc api");
    
    return this.http.delete("http://localhost:9494/private_api/deleteSubCategory/"+subCategoryId)

  }

}
