import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginAction, logoutAction } from './auth.action';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  login$: any;
  logout$: any;
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {
    this.login$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(loginAction),
          tap((actions) => {
            localStorage.setItem('userInfo', JSON.stringify(actions.user));
          }),
        ),
      { dispatch: false },
    );

    this.logout$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(logoutAction),
          tap((action) => {
            localStorage.removeItem('userInfo');
            this.router.navigate(['/auth/login']);
          }),
        ),
      { dispatch: false },
    );
  }
}
