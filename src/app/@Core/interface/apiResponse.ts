export interface apiResponse<T> {
  limit: number;
  skip: number;
  total: number;
  products: T;
}
