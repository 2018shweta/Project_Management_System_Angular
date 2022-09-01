import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../auth-token.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private authTokenService:AuthTokenService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.authTokenService.authToken = "" 
    this.router.navigateByUrl("/login")
    this.toastr.success("game over - logout")
  }

}
