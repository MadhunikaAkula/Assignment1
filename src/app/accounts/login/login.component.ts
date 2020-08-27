import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forgotForm: FormGroup;
  loginForm: FormGroup;
  resetForm:FormGroup;
  submitted = false;
  password;
  show = false;
  IsModelShow: boolean = false;
  IsSignUpShow: boolean = true;
  IsResetShow:boolean=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get g() { return this.resetForm.controls; }

  onSignIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
  onResetRegister() {
    this.submitted = false;
    this.loginForm.reset();
  }
  onEyeClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  openForgotModel() {
    console.log("console")
    this.IsModelShow = true;
    this.IsSignUpShow = false;
  }
  closeModel() {
    this.IsModelShow = false;
    this.IsSignUpShow = true;
  }
  onForgotReset() {
    this.submitted = false;
    this.forgotForm.reset();
  }
  openResetModel(){
   this.IsResetShow=true;
   this.IsModelShow=false;
  }
  onResetReset(){
    this.submitted=false;
    this.resetForm.reset();
  }

  onResetSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value, null, 4));
  }
}