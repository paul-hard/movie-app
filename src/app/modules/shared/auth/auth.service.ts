import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ICreateUser, IUser } from '../../global-interfaces';
import { CookieService } from 'ngx-cookie-service';

// export interface IToken {
//   access_token: string
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userProfile: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    _id: '0',
    usernanme: 'username'
  })

  public urlSignUp: string = 'http://localhost:3200/auth/signup';
  public urlSignIn: string = 'http://localhost:3200/auth/signin';

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  signUp(payload: ICreateUser): Observable<Object> {
    return this.http.post(this.urlSignUp, payload, { withCredentials: true })
  }

  signIn(payload: ICreateUser) {
    return this.http.post(this.urlSignIn, payload, { withCredentials: true })
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3200/user-profile`, { withCredentials: true })
  }

  getSuggestedMovies() {
    return this.http.get(`http://localhost:3200/suggested-movies`, { withCredentials: true })
  }

  refreshToken() {
    return this.http.get(`http://localhost:3200/refresh-token`, { withCredentials: true })
  }

  logOut() {
    return this.http.get(`http://localhost:3200/logout`, { withCredentials: true })
  }

  // saveUser(user: IUser) {
  //   this.userProfile.next(user);
  //   localStorage.setItem('user-profile', JSON.stringify(user));
  // }

  // getFromLocalStorage(): boolean {
  //   let bool = localStorage.hasOwnProperty('user-profile')
  //   return bool
  // }



  // getUser(username: string): Observable<IUser> {
  //   return this.http.get<IUser>(`http://localhost:3200/auth/${username}`, { withCredentials: true })
  // }

  // Error management

  // get isLoggedIn(): boolean {
  //   const isLoggedIn = this.cookie.check('TOKEN');
  //   return isLoggedIn
  // }

}

// .subscribe({
//   next: (data) => {
//     this.cookie.set('TOKEN', data.access_token, 0.1, null, null, true, 'Strict')
//   },
//   error: (err) => {
//     window.alert(err.statusText)
//   }
