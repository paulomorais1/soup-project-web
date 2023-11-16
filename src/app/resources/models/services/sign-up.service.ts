/* eslint-disable quotes */
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { IUser } from "../colaborador.models";
import { ResponseLogin } from "../ResponseLogin";
import { AuthService } from "app/resources/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/user/create';

 

  constructor(private httpClient: HttpClient,
    private authService: AuthService) {}

  public onSignUp(requestCreate: IUser): Observable<any> {
   

    return this.httpClient
      .post<ResponseLogin>(this.apiUrl, requestCreate)
      .pipe(  tap((createResponse: ResponseLogin | undefined) => (this.authService.createResponse = createResponse))
      );
  }
}
