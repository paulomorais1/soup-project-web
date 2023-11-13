import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../RequestLogin';
import { ResponseLogin } from '../ResponseLogin';
import { AuthService } from 'app/resources/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient
      .post<ResponseLogin>(
        'http://localhost:8080/api/v1/auth/user/sign-in',
        requestLogin
      )
      .pipe(
        tap((loginResponse) => (this.authService.loginResponse = loginResponse))
      );
  }
}
