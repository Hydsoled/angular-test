import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {User} from './user.model';
import {tap} from 'rxjs/operators';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  API_SIGNUP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_oxLTiceleAGOqSX1ckiFkibKVBGAZPM';
  API_SIGNIN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_oxLTiceleAGOqSX1ckiFkibKVBGAZPM';
  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signup(mail: string, pass: string): any {
    return this.http.post<AuthResponseData>(this.API_SIGNUP,
      {
        email: mail,
        password: pass,
        returnSecureToken: true
      }
    ).pipe(tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number): void {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  login(mail: string, pass: string): any {
    return this.http.post<AuthResponseData>(this.API_SIGNIN,
      {
        email: mail,
        password: pass,
        returnSecureToken: true
      }
    ).pipe(tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }
}
