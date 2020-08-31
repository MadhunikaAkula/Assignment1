import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import { AccountsService } from '../accounts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forgotForm: FormGroup;
  loginForm: FormGroup;
  resetForm: FormGroup;
  submitted = false;
  password;
  show = false;
  IsModelShow: boolean = false;
  IsSignUpShow: boolean = true;
  IsResetShow: boolean = false;
  success: boolean = false;
  mailcheck: boolean = false;
  resetsuccess: boolean = false;
  error;
  forgorerror;
  forgotToken;
  constructor(private formBuilder: FormBuilder, private Router: Router, private AccountsService: AccountsService, private ActivatedRoute: ActivatedRoute) {
    this.forgotToken = this.ActivatedRoute.snapshot.paramMap.get("token");
    if (this.forgotToken) {
      this.IsSignUpShow = false;
      this.IsResetShow = true;
      localStorage.setItem('forgotToken', this.forgotToken)
    }

  }

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
    this.IsResetShow = false;
  }
  onForgotReset() {
    this.submitted = false;
    this.forgotForm.reset();
  }
  openResetModel() {
    this.IsResetShow = true;
    this.IsModelShow = false;
  }
  onResetReset() {
    this.submitted = false;
    this.resetForm.reset();
  }
  onSignIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    var data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.AccountsService.signIn(data).subscribe(response => {
      this.success = true;
    }, err => {
      this.error = err.error.message;
    })
  }

  onForgotSave() {
    var data = {
      email: this.forgotForm.value.email,
    }
    this.AccountsService.forgotpassword(data).subscribe(response => {
      this.mailcheck = true;
      this.IsSignUpShow=true;
      this.IsModelShow=false;
      localStorage.setItem('userInfo', JSON.stringify(response));
    }, err => {
      this.forgorerror = err.error.message;
    })
  }
  onResetSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo)
    var data = {
      newpassword: this.resetForm.value.password,
      resetpasswordToken: this.forgotToken,
      userId: userInfo.id
    }
    this.AccountsService.resetpassword(data).subscribe(response => {
      this.resetsuccess = true;
      this.Router.navigate(['login']);

    })
  }
}