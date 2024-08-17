import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

export const Auth_routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
