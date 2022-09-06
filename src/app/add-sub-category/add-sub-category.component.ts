import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';
import { SubCategoryService } from '../sub-category.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subcategoryForm:FormGroup
  categorieses:Array<any>=[]
  constructor(private tsService: ToastrService, private router: Router,private subcategoryService:SubCategoryService,private categoryService:CategoryService) {
    this.subcategoryForm=new FormGroup({
      // categoryId:new FormControl('',[Validators.required]),
      categories:new FormControl('',[Validators.required]),
      subCategoryName: new FormControl('', [Validators.required]),
      isActive:new FormControl('true')
    })


   }

  ngOnInit(): void {
this.categoryService.allCategoryApi().subscribe(resp=>{
  this.categorieses=resp.data
  console.log(this.categorieses);
  
})


  }

  addsubcategory(){
console.log(this.subcategoryForm.value);

console.log(this.subcategoryForm.valid);

    if(this.subcategoryForm.valid){
      this.subcategoryService.addCategoryApi(this.subcategoryForm.value).subscribe(resp=>{
        console.log(resp)
       console.log("first if cat")
       if(resp){
        console.log("resp")
        this.tsService.success("subCategory Added", "", { timeOut: 30000 });
        this.router.navigateByUrl("/allsubcategory");

       }
      },err=> {
        console.log("cat err")
        this.tsService.error("Try Again")
        this.router.navigateByUrl("/addsubcategory");
       })

  }




  }







}
