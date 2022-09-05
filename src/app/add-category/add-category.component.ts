import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 categoryForm:FormGroup
  constructor(private tsService: ToastrService, private router: Router,private categoryService:CategoryService) {
    
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required]),
      isActive:new FormControl('true')
    })
  }

  ngOnInit(): void {
  }

  addcategory(){
    console.log("start")
    if(this.categoryForm.valid){
        this.categoryService.addCategoryApi(this.categoryForm.value).subscribe(resp=>{
          console.log(resp)
         console.log("first if cat")
         if(resp){
          console.log("resp")
          this.tsService.success("Category Added", "", { timeOut: 30000 });
          this.router.navigateByUrl("/allcategory");

         }
        },err=> {
          console.log("cat err")
          this.tsService.error("Try Again")
          this.router.navigateByUrl("/addcategory");
         })

    }

  }

}
