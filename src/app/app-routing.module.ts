import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {component:HomeComponent,path:"home"},
  {component:SignUpComponent,path:"signup"},
  {component:LoginComponent,path:"login"},
  {component:LoginComponent,path:""},
  {component:LogOutComponent,path:"logout"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
