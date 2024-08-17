import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../Store/appReducer';
import { userInfoSelector } from '../../Modules/AuthModule/Store/authSelector';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  return store.pipe(
    select(userInfoSelector),
    map((loggedIn) => {
      if (!loggedIn) {
        router.navigate(['/auth/login']);
        return false;
      }
      return true;
    }),
  );
};
