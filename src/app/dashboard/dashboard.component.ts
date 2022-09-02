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
user:number=0;

  constructor(private userService:UserServiceService,private toastr: ToastrService, private router: Router) { }

  
  ngOnInit(): void {
    localStorage.getItem("userId")
    const uid = localStorage.getItem("userId");//value store in variable
    console.log("localUserId",localStorage.getItem('userId'));
    console.log("dashboard on init")
   this.userService.getUserById(uid).subscribe(resp=>{
    console.log("user one only",resp)
    this.user=resp.data;
    console.log("this user",this.user)
    console.log("user in",Object.values)

   })
  }

  



}
