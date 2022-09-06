import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubCategoryService } from '../sub-category.service';

@Component({
  selector: 'app-all-sub-category',
  templateUrl: './all-sub-category.component.html',
  styleUrls: ['./all-sub-category.component.css']
})
export class AllSubCategoryComponent implements OnInit {
  subCategories:Array<any>=[]
  display=false
  constructor(private subCategoryService:SubCategoryService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {

    this.subCategoryService.allSubCategoryApi().subscribe(resp=>{
      console.log("oninit");
     console.log("res"+resp.data)
     
     this.subCategories=resp.data;
     console.log(this.subCategories)
    })


  }

  deleteSubCategory(subCategoryId:any){
    console.log("del cat method");
    console.log(subCategoryId)
        this.subCategoryService.deleteSubCategoryApi(subCategoryId).subscribe(resp=>{
          console.log(resp+"resp");
          
          this.toastr.success("Category Deleted...")
          this.subCategories=this.subCategories.filter(c=>c.subCategoryId!=subCategoryId)
          this.router.navigateByUrl("/allsubcategory")
        },err=>{
          console.log("err"+err)
          this.toastr.error("Something wrong")
        })
      }
}
