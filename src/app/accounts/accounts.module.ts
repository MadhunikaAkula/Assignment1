import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from '../accounts/login/login.component';
import { RegisterComponent } from '../accounts/register/register.component';
import { HomeComponent } from './home/home.component';
import{AuthGuard}from'../interceptors/auth.guard';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'login/:token',component:LoginComponent},
  {path:'login/:string',component:LoginComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule,ReactiveFormsModule 
  ]
})
export class AccountsModule { }
