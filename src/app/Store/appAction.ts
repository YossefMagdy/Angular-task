import { createAction, props } from '@ngrx/store';
import { Products } from '../@Core/interface/products';

export const productAction = createAction(
  '[product component] add product',
  props<{ products: Products[] }>(),
);

export const addToCart = createAction(
  '[product card item] add to cart',
  props<{ cart: Products }>(),
);
export const productSearch = createAction(
  '[navbar component search element] product search ',
  props<{ searchText: string }>(),
);
export const filterAction = createAction(
  '[product compoenet] product filter ',
  props<{ filterKeyword: string }>(),
);
