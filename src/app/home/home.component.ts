import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any={}
user:string="";
userid:number=0;
  constructor(private userService:UserServiceService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    // const uid = localStorage.getItem("userId");//value store in variable
    // console.log("localUserId",localStorage.getItem('userId'));
    // const uname=localStorage.getItem("userName");
  
    const uid = localStorage.getItem("userId");//value store in variable
    console.log("dashboard on init")
   this.userService.getUserById(uid).subscribe(resp=>{
    console.log("user one only",resp)
   
    this.users=resp.data
    console.log("exam.."+this.users)
    
    

   })
  }

}
