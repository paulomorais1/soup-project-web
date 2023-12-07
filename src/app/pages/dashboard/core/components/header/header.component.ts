/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/resources/auth.service';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  name: string | null | undefined = null;
  surname: string | null | undefined = null;
  role: string | null | undefined = null;

  @Output() menuToggled = new EventEmitter<boolean>();

  constructor(private authService: AuthService,
    private router: Router,) {}
  
  ngOnInit() {
   
    const user = this.authService.loginResponse?.body; 
    this.name = typeof user === 'object' && 'name' in user ? (user as any).name : null;
    this.surname = typeof user === 'object' && 'surname' in user ? (user as any).surname : null;
    this.role = typeof user === 'object' && 'role' in user ? (user as any).role : null;
  
 
  }
  
  logout(): void {
    // Implemente a lógica de logout aqui, se necessário6
    this.router.navigate(['sign-in']);
    console.log('Logged out');
  }
}
