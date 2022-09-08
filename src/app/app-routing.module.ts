import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllSubCategoryComponent } from './all-sub-category/all-sub-category.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
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
  {component:DashboardComponent,path:"dashboard"},
  {component:AllUsersComponent,path:"allusers"},
  {component:AddCategoryComponent,path:"addcategory"},
  {component:AddSubCategoryComponent,path:"addsubcategory"},
  {component:AllCategoryComponent,path:"allcategory"},
  {component:AllSubCategoryComponent,path:"allsubcategory"},
  {component:EditUserComponent,path:"edituser/:userId"},
  {component:AddProductComponent,path:"addproduct"},
  {component:AllProductsComponent,path:"allproducts"},
  {component:ForgotpasswordComponent,path:"forgotpassword"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
