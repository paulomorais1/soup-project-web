import { Injectable } from '@angular/core';
import { ResponseLogin } from './models/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticate() {
    throw new Error('Method not implemented.');
  }


  public loginResponse: ResponseLogin | undefined;
  public createResponse: ResponseLogin | undefined;

  public clear(): void {
    this.loginResponse = undefined;
  }
 
// Método para obter o nome do usuário
getUserName(): string | null {
  const name = this.loginResponse ? this.loginResponse.body?.user || null : null;
 
  return name;
}


  public isAuthenticated(): boolean {
    return Boolean( this.loginResponse?.body);
   
  }
}
