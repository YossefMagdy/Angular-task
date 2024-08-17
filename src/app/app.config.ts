import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  APP_INITIALIZER,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideStore,
  provideState,
  Store,
  ActionReducerMap,
} from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { appReducers } from './Store/appReducer';
import { authFeature } from './Modules/AuthModule/Store/authFeature';
import { provideEffects } from '@ngrx/effects';
import { AuthEffect } from './Modules/AuthModule/Store/auth.effect';
import { loginAction } from './Modules/AuthModule/Store/auth.action';

function checkUser() {
  const store = inject(Store);
  return () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo != null) {
      store.dispatch(loginAction({ user: JSON.parse(userInfo) }));
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ ['appState']: appReducers }),
    provideState(authFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(),
    provideEffects(AuthEffect),
    {
      provide: APP_INITIALIZER,
      useFactory: checkUser,
      multi: true,
    },
  ],
};
