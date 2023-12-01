import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBeneficiary } from '../../../beneficiary.models';
import { ResponseLogin } from '../../../ResponseLogin';
import { AuthService } from 'app/resources/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CreateBeneficiaryService {
  private apiUrl = 'https://soup-project-backend-product.up.railway.app/api/v1/auth/beneficiary/create';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public SubmitCreate(requestCreate: IBeneficiary): Observable<any> {
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
