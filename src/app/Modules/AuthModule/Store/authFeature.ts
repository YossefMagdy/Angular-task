import { createFeature } from '@ngrx/store';
import { authReducer } from './authReducer';

export const authFeature = createFeature({
  name: 'auth',
  reducer: authReducer,
});
