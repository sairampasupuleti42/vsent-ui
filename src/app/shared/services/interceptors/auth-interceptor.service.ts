import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ANSHAI_VESTN = '123456';
    return next.handle(req.clone({ setHeaders: { ANSHAI_VESTN } })).pipe(retry(1),
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