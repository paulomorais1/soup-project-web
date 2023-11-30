import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'app/resources/auth.service';
import { ResponseLogin } from 'app/resources/models/ResponseLogin';
import { RequestLogin } from 'app/resources/models/RequestLogin';


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
        'https://soup-project-backend-prod.up.railway.app/api/v1/auth/user/sign-in',
        requestLogin
      )
      .pipe(
        tap((loginResponse) => (this.authService.loginResponse = loginResponse))
      );
  }
}
