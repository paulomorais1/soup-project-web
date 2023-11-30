// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // Configurar cabeçalhos para incluir 'Content-Type' e, se necessário, 'Authorization'
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer SeuTokenJWT', // Se aplicável
    });

    return this.httpClient
      .post<ResponseLogin>(
        'https://soup-project-backend-production.up.railway.app/api/v1/auth/user/sign-in',
        requestLogin,
        { headers, withCredentials: true } // Adicionar cabeçalhos e incluir credenciais
      )
      .pipe(
        tap((loginResponse) => (this.authService.loginResponse = loginResponse))
      );
  }
}
