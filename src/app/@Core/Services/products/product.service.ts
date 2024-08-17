import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResponse } from '../../interface/apiResponse';
import { Products } from '../../interface/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getProduct(): Observable<apiResponse<Products[]>> {
    return this._http.get<apiResponse<Products[]>>(
      'https://dummyjson.com/products',
    );
  }
}
