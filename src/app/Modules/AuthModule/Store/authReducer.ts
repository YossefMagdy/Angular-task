import { createReducer, on } from '@ngrx/store';
import { userProfile } from '../../../@Core/interface/userInfo';
import { loginAction, logoutAction } from './auth.action';

export interface authState {
  user: userProfile | undefined;
}

export const initalAuthState: authState = {
  user: undefined,
};

export const authReducer = createReducer(
  initalAuthState,
  on(loginAction, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(logoutAction, (state, action) => {
    return {
      user: undefined,
    };
  }),
);
