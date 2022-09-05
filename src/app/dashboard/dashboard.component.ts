import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
users:any={}
userId:number=0

  constructor(private userService:UserServiceService,private toastr: ToastrService, private router: Router) { }

  
  ngOnInit(): void {
    const uid = localStorage.getItem("userId");//value store in variable
    console.log("dashboard on init")
   this.userService.getUserById(uid).subscribe(resp=>{
    // console.log("user one only",resp)
   
    this.users=resp.data
    // console.log("exam.."+this.users)
    
    

   })

  }
  
  }

  




