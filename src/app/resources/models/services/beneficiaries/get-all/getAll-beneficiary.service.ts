import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IBeneficiary } from '../../../beneficiary.models';
import { AuthService } from 'app/resources/auth.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetAllBeneficiaryService {
  private apiUrl = 'http://soup-project-backend-prod.up.railway.app/api/v1/beneficiary/get-all';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {}

  public getAllBeneficiaries(): Observable<IBeneficiary[]> {
    // Utiliza o HttpClient para fazer uma solicitação GET à API
    return this.httpClient.get<IBeneficiary[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        // Aqui você pode adicionar lógica de tratamento de erro, como registrar o erro ou exibir uma mensagem ao usuário.
        console.error('Error fetching beneficiaries:', error);
        
        // Retornar um Observable vazio ou um observable com um valor padrão, dependendo do seu caso.
        return throwError('Erro ao obter beneficiários. Tente novamente mais tarde.');
      }),
      // Adiciona um console.log para verificar os dados recebidos
      tap((data) => console.log('Beneficiaries received:', data))
    );
  }
}
