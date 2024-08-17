import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state['appState'];

export const productSelect = createSelector(
  selectFeature,
  (state) => state!['filterProducts'],
);
export const categorySelect = createSelector(
  selectFeature,
  (state) => state!['category'],
);
export const cartSelector = createSelector(
  selectFeature,
  (state) => state!['cartItem'],
);
export const searchSelector = createSelector(
  selectFeature,
  (state) => state!['searchText'],
);
export const filterSelector = createSelector(
  selectFeature,
  (state) => state!['filterKeyword'],
);
