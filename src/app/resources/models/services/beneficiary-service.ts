// beneficiary.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBeneficiary } from '../create-beneficiary.models';


@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/beneficiary/create'; // Altere a URL conforme necessário

  constructor(private httpClient: HttpClient) {}

  public onSubmitBn(beneficiaryData: IBeneficiary): Observable<any> {
    console.log('Dados recebidos no serviço:', beneficiaryData);

    return this.httpClient
      .post(this.apiUrl, beneficiaryData)
      .pipe(
        tap((response) => {
          console.log('Resposta da API:', response);
        })
      );
  }
}
