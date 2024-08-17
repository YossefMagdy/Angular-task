import { createReducer, on } from '@ngrx/store';
import { Products } from '../@Core/interface/products';
import {
  addToCart,
  filterAction,
  productAction,
  productSearch,
} from './appAction';
import { authState } from '../Modules/AuthModule/Store/authReducer';

export interface RootState {
  appStore: AppState;
  auth: authState;
}

export interface AppState {
  products: Products[];
  filterProducts: Products[];
  category: any[];
  cartItem: Products[];
  searchText: string;
  filterKeyword: string;
}

export const initalState: AppState = {
  products: [],
  filterProducts: [],
  category: [],
  cartItem: [],
  searchText: '',
  filterKeyword: '',
};
export const appReducers = createReducer(
  initalState,
  on(productAction, (state, action) => {
    const categories = action.products.map((product) => product.category);
    const categoryCountMap = categories.reduce((countMap: any, category) => {
      countMap[category] = (countMap[category] || 0) + 1;
      return countMap;
    }, {});

    const categoryCounts = Object.entries(categoryCountMap).map(
      ([category, count]) => ({
        category,
        count,
      }),
    );
    return {
      ...state,
      products: action.products,
      filterProducts: action.products,
      category: [
        { category: 'All', count: action.products.length },
        ...categoryCounts,
      ],
    };
  }),
  on(addToCart, (state, action) => {
    return {
      ...state,
      cartItem: [...state.cartItem, action.cart],
    };
  }),
  on(productSearch, (state, action) => {
    const product = state.products.filter((product) => {
      return (
        product.title
          .toLocaleLowerCase()
          .includes(action.searchText.toLocaleLowerCase()) ||
        product.description
          .toLocaleLowerCase()
          .includes(action.searchText.toLocaleLowerCase())
      );
    });

    const categories = product.map((product) => product.category);
    const categoryCountMap = categories.reduce((countMap: any, category) => {
      countMap[category] = (countMap[category] || 0) + 1;
      return countMap;
    }, {});

    const categoryCounts = Object.entries(categoryCountMap).map(
      ([category, count]) => ({
        category,
        count,
      }),
    );
    return {
      ...state,
      filterProducts: product,
      category: [{ category: 'All', count: product.length }, ...categoryCounts],
      searchText: action.searchText,
    };
  }),
  on(filterAction, (state, action) => {
    const products = state.products.filter((product) => {
      return product.category.includes(action.filterKeyword);
    });
    const categories = state.products.map((product) => product.category);
    const categoryCountMap = categories.reduce((countMap: any, category) => {
      countMap[category] = (countMap[category] || 0) + 1;
      return countMap;
    }, {});

    const categoryCounts = Object.entries(categoryCountMap).map(
      ([category, count]) => ({
        category,
        count,
      }),
    );
    return {
      ...state,
      filterProducts: products,
      category: [
        { category: 'All', count: state.products.length },
        ...categoryCounts,
      ],
      filterKeyword: action.filterKeyword,
    };
  }),
);
