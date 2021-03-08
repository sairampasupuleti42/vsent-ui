import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { AuthService } from '../common/auth.service';
import { TokenService } from '../common/token.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public auth: AuthService, private tokenSvc: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ANSHAI_VESTN = 'sbosrpa';
  
    const token = this.tokenSvc.getToken();
    return next.handle(
      req.clone(
        { setHeaders: { ANSHAI_VESTN, Authorization: `r,${token}` } }
      )).pipe(
        tap((event: HttpEvent<any>) => {

          if (event instanceof HttpResponse && event.status === 200) {
            if (!("Notification" in window)) {
              alert("This browser does not support desktop notification");
            } else if (Notification.permission === "granted") {
              // new Notification(this.capitalize(req.body.req_id + ' success !'));
            }
            else if (Notification.permission !== "denied") {
              Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                  //  new Notification("Hi there!");
                }
              });
            }
          }
        }), catchError((error: HttpErrorResponse) => {

          return throwError(error.error);
        }));
  }

}