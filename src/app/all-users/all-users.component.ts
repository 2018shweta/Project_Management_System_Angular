import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users:Array<any>=[]
display=false
  constructor(private userService:UserServiceService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    console.log("oninit allusers")
    this.userService.getAllUsers().subscribe(resp=>{
      console.log("allusers",resp);
      this.users=resp.data;
    })
  }
//delete user
deleteUser(userId:any){
this.userService.deleteUser(userId).subscribe(res=>{

  this.toastr.success("User Deleted...")
  this.users=this.users.filter(u=>u.userId !=userId)
  this.router.navigateByUrl("/allusers")

},err=>{

console.log(err)
this.toastr.error(err);
})
}


}
