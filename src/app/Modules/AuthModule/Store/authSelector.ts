import { createSelector } from '@ngrx/store';
import { RootState } from '../../../Store/appReducer';

const selectFeature = (state: RootState) => state.auth;

export const userInfoSelector = createSelector(
  selectFeature,
  (state) => state?.user,
);
