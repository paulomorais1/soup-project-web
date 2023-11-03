import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLogin } from '../RequestLogin';
import { ResponseLogin } from '../ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/api/v1/auth/user/sign-in',
      requestLogin
    );
  }
}
