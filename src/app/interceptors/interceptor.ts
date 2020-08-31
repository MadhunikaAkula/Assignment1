import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user') != null) {
            const user = localStorage.getItem('user');
            const parseduser = JSON.parse(user);
            const httprequest = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json;',
                    'Accept': 'application/json',
                    // 'Authorization': `Bearer ${parseduser.accessToken}`
                    'x-access-token': `${parseduser.user.accessToken}`
                }
            });
            return next.handle(httprequest)
        }
        else {
            return next.handle(request);
        }
    }
}