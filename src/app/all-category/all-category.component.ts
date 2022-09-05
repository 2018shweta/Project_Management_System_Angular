import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
   categories:Array<any>=[]
   display=false
  constructor(private categoryService:CategoryService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
   this.categoryService.allCategoryApi().subscribe(resp=>{
     console.log("oninit");
    console.log("res"+resp.data)
    
    this.categories=resp.data;
    console.log(this.categories)
   })


  }

  deleteCategory(categoryId:any){
console.log("del cat method");
console.log(categoryId)
    this.categoryService.deleteCategoryApi(categoryId).subscribe(resp=>{
      console.log(resp+"resp");
      
      this.toastr.success("Category Deleted...")
      this.categories=this.categories.filter(c=>c.categoryId!=categoryId)
      this.router.navigateByUrl("/allcategory")
    },err=>{
      console.log("err"+err)
      this.toastr.error(err)
    })
  }

}
