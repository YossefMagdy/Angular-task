import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../../@theme/Components/product-card/product-card.component';
import { ProductService } from '../../../../@Core/Services/products/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Store/appReducer';
import {
  categorySelect,
  productSelect,
  searchSelector,
} from '../../../../Store/appSelector';
import { filterAction, productAction } from '../../../../Store/appAction';
import { Products } from '../../../../@Core/interface/products';
import { Observable, tap } from 'rxjs';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { LengthPipe } from '../../../../@Core/pipes/length.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe, LengthPipe, NgClass, NgIf, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products!: Products[];
  allproducts!: Products[];
  category$!: Observable<any>;
  filterKeyword: string = '';
  itemsPerPage = 9;
  currentPage = 1;

  constructor(
    private ProductService: ProductService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.getProducts();
    this.store.pipe(select(productSelect)).subscribe((products) => {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.allproducts = products;
      this.products = products.slice(startIndex, endIndex);
    });
    this.store.pipe(select(searchSelector)).subscribe((res) => {
      this.currentPage = 1;
    });
    this.category$ = this.store.pipe(select(categorySelect));
  }

  getProducts() {
    this.ProductService.getProduct().subscribe((res) => {
      this.store.dispatch(productAction({ products: res.products }));
    });
  }
  get totalPages() {
    return Math.ceil(this.allproducts.length / this.itemsPerPage);
  }
  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.products = this.allproducts.slice(startIndex, endIndex);
    }
  }
  isPageActive(page: number) {
    return this.currentPage === page;
  }

  filterProduct(title: string) {
    this.filterKeyword = title;
    if (title === 'All') {
      this.store.dispatch(filterAction({ filterKeyword: '' }));
      return;
    }
    this.store.dispatch(filterAction({ filterKeyword: title }));
  }
}
