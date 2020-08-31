import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
}) export class AppConstants {
    constructor() {
    }
    public readonly signIn: string = 'http://localhost:8080/api/auth/signin';
    public readonly signUp: string = 'http://localhost:8080/api/auth/signup';
    public readonly forgotpassword: string = 'http://localhost:8080/api/auth/forgotpassword';
    public readonly resetpassword: string = 'http://localhost:8080/api/auth/resetpassword';

}
