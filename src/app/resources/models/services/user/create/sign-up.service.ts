/* eslint-disable quotes */
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../../../ResponseLogin';
import { AuthService } from 'app/resources/auth.service';
import { Injectable } from '@angular/core';
import { IUser } from 'app/resources/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl = 'http://soup-project-backend-product.up.railway.app/api/v1/auth/user/create';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public onSignUp(requestCreate: IUser): Observable<any> {
    return this.httpClient
      .post<ResponseLogin>(this.apiUrl, requestCreate)
      .pipe(
        tap(
          (createResponse: ResponseLogin | undefined) =>
            (this.authService.createResponse = createResponse)
        )
      );
  }
}
