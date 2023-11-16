import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBeneficiary } from '../create-beneficiary.models';
import { ResponseLogin } from '../ResponseLogin';
import { AuthService } from 'app/resources/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/beneficiary/create';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public onSubmitBn(requestCreate: IBeneficiary): Observable<any> {
    console.log('Enviando solicitação para a API. Dados:', requestCreate);

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
