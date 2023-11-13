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

  public clear(): void {
    this.loginResponse = undefined;
  }


  public isAuthenticated(): boolean {
    return Boolean( this.loginResponse?.body);
   
  }
}
