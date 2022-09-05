import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup
  constructor(private userService:UserServiceService,private toastr:ToastrService,private router:Router,private aRoute: ActivatedRoute) { 
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userId:new FormControl(this.aRoute.snapshot.params["userId"]),
      address: new FormControl(),
      
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
     
      contactNo:new FormControl('',[Validators.required, Validators.minLength(10)]),
    
    })
  }
userId=0
firstName=""
lastName=""
contactNo=""
address=""
  ngOnInit(): void {
this.userId=this.aRoute.snapshot.params["userId"]
this.getUserById();

  }
  getUserById(){
    this.userService.getUserById(this.userId).subscribe(resp=>{
      console.log("get user methiod resp"+resp.data);
      this.firstName=resp.data.firstName;
      console.log(resp.data.firstName);
      
      this.lastName=resp.data.lastName;
      this.contactNo=resp.data.contactNo;
      this.address=resp.data.address;

      console.log(this.address);
      
    })
  }


//   updateUser(userId:any){
    
  
//   let user={"userId":this.userId,"firstName":this.firstName,"lastname":this.lastName,"contactNo":this.contactNo}
//   this.userService.getUserByIdApi(user).subscribe(resp=>{
//     this.toastr.success("user modified");
//     this.router.navigateByUrl("/dashboard")
 
      
//     },err=>{
//       console.log(err)
//   this.toastr.error("something wrong");
//     })  

// }

updateUser(){
  console.log("form"+this.userForm.value+"value userform");
  
  console.log("userid"+this.userId)
  
  this.userService.getUserByIdApi(this.userForm.value).subscribe(res => {
    console.log(res.data+"resp.data");
    
    
      console.log("second if")
      console.log("answer"+  res.data);
      
      this.toastr.success("update  done", "", { timeOut: 30000 });
      this.router.navigateByUrl("/dashboard");
    
    
  }, err => {
    console.log(err)
  
    this.toastr.error("tru again")
    this.router.navigateByUrl("/edituser");
  })
  
}
}
