import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import{AccountsService}from'../accounts.service';
import{Router}from'@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error;
  success:boolean=false;
  constructor(private formBuilder: FormBuilder,private AccountsService:AccountsService,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var data={
      username:this.registerForm.value.firstName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }
    this.AccountsService.signUp(data).subscribe(Response=>{
      console.log("success");
      this.router.navigate(['login']);
      this.success=true;
    },err=>{
    this.error=err.error.message;
    })
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
