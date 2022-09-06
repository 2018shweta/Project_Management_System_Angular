import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogOutComponent } from './log-out/log-out.component';
import { TokenInterceptor } from './token.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AllUsersComponent } from './all-users/all-users.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { AllSubCategoryComponent } from './all-sub-category/all-sub-category.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    LogOutComponent,
    DashboardComponent,

    AllUsersComponent,
     AddCategoryComponent,
     AllCategoryComponent,
     AddSubCategoryComponent,
     AllSubCategoryComponent,
     EditUserComponent,
     AddProductComponent,
     AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
