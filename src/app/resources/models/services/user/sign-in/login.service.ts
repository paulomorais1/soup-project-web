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
    // Use HTTPS instead of HTTP
    const apiUrl = 'https://soup-project-backend-production.up.railway.app/api/v1/auth/user/sign-in';

    console.log(`Trying to login to: ${apiUrl}`);

    return this.httpClient
      .post<ResponseLogin>(apiUrl, requestLogin, { withCredentials: true })
      .pipe(
        tap(
          (loginResponse) => {
            console.log('Login successful', loginResponse);
            this.authService.loginResponse = loginResponse;
          },
          (error) => console.error('Login failed', error)
        )
      );
  }
}
