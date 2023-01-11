import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //solve infinite loop issue
    if (req.url.indexOf('refresh-token') > 0) { // true

      return next.handle(req)
    }
    console.log({ 'HTTP REQUST': req });
    return next.handle(req)
      .pipe(
        catchError((error) => {
          if (error.status == 401) {
            return this.handle401Error(req, next, error); // intercept 401 to modify and recive refresh token
          }
          return throwError(() => error) // More errors... -_-
        })
      )
  }

  private handle401Error(
    req: HttpRequest<any>,
    next: HttpHandler,
    originalError: any,
  ) {
    return this.authService.refreshToken()
      .pipe(
        switchMap(() => {
          console.log({ "inside handle 401": req });
          return next.handle(req);
        }),
        catchError((error) => {
          console.log('THROW ERROR');
          // localStorage.removeItem('user-profile');
          this.route.navigate(['/']);
          return throwError(() => originalError)
        })
      )

  }

}
