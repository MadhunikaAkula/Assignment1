import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient, private AppConstants: AppConstants) { }
  signUp(data) {
    return this.http.post(this.AppConstants.signUp, data);
  }
  signIn(data) {
    return this.http.post(this.AppConstants.signIn, data);
  }
  forgotpassword(data){
    return this.http.post(this.AppConstants.forgotpassword,data)
  }
  resetpassword(data){
    return this.http.post(this.AppConstants.resetpassword,data)
  }
}
