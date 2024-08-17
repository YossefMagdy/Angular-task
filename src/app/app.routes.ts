import { Routes } from '@angular/router';
import { authGuard } from './@Core/Guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/AuthModule/auth.routes').then((r) => r.Auth_routes),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./Components/home/home.component').then((r) => r.HomeComponent),
  },
];
