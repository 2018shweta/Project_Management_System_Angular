import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  otpsend: FormGroup;
  display: boolean = false;
  constructor(private tsService: ToastrService, private router: Router, private sessionService: SessionService,private toastr:ToastrService) { 
    console.log("constructore")
    this.loginForm = new FormGroup({
      
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8), this.strongPassword]),
      
    })
    this.otpsend = new FormGroup({
      email: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit(): void {
  }


  otpsend1(){
    console.log(this.otpsend.value);
    if(this.otpsend.valid){
      this.sessionService.emailsend(this.otpsend.value).subscribe(res => {
        this.toastr.success("otp send successfully")
        localStorage.setItem("email",this.otpsend.value.email)
        this.router.navigateByUrl("/forgotpassword")
      }, err => {
        this.toastr.error("something went wrong")
        console.log(err);
      })
    } else {
      this.toastr.error("please check email")
    }
  }
  showDialog() {
    this.display = true;
  
  }



login()
{
  console.log(this.loginForm.value);
  console.log(this.loginForm.valid);
  this.sessionService.loginApi(this.loginForm.value).subscribe(res=>{
    // console.log(res);
    // console.log(res.data.user.role.roleName)
    console.log("data",res)
    
    //console.log(res.data.role.roleName)

  this.toastr.success("login done")
  localStorage.setItem("userId",res.data.userId)//local storage ma set karava mate 
  localStorage.setItem("userName",res.data.firstName)
  localStorage.setItem("email",res.data.email)
  if(res.data.role.roleName=="user"){
   // console.log(res.data.role.roleName)
  this.router.navigateByUrl("/dashboard")}
  else if(res.data.role.roleName=="admin"){
    
    this.router.navigateByUrl("/home") 
  
  }
  },err=>{
  this.toastr.error("please again try")
  })
}
strongPassword(password: AbstractControl): ValidationErrors| null {
  let isUpper = false
  let isLower = false
  let isSpecial = false
  let isDigit = false
  let passwordValue = password.value as string

  if (passwordValue.length < 8)
    return null

  for (let i = 0; i < passwordValue.length; i++) {
    if (passwordValue.charAt(i) >= 'A' && passwordValue.charAt(i) <= 'Z') {
      isUpper = true
    } else if (passwordValue.charAt(i) >= 'a' && passwordValue.charAt(i) <= 'z') {
      isLower = true
    }
    else if (passwordValue.charAt(i) == '$' || passwordValue.charAt(i) == '#' || passwordValue.charAt(i) == '@') {
      isSpecial = true
    }
    else if (passwordValue.charAt(i) >= '0' && passwordValue.charAt(i) <= '9') {
      isDigit = true
    }
  }

  if (isLower && isUpper && isSpecial && isDigit)
    return null
  else
    return { "strongPassword": true }
  // return null;//no errors 
}
}
