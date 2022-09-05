import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { 

  }

  addCategoryApi(category:any):Observable<any>{
    console.log("cat api")
    return this.http.post("http://localhost:9494/private_api/addCategory/",category)

  }
  
  allCategoryApi():Observable<any>{
    console.log("api allcat")
    return this.http.get(environment.url+"private_api/allCategory/")
  }

  deleteCategoryApi(categoryId:any):Observable<any>{
    console.log("deleteapi");
    
return this.http.delete(environment.url+"private_api/deleteCategory/"+categoryId)
  }


}
