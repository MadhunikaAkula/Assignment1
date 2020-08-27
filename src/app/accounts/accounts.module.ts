import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from '../accounts/login/login.component';
import { RegisterComponent } from '../accounts/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, RouterModule.forRoot(routes), FormsModule,ReactiveFormsModule 
  ]
})
export class AccountsModule { }
