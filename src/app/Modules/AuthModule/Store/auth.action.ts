import { createAction, props } from '@ngrx/store';
import { userProfile } from '../../../@Core/interface/userInfo';

export const loginAction = createAction(
  '[login page] user login',
  props<{ user: userProfile }>(),
);

export const logoutAction = createAction('[top navbar] user logout');
