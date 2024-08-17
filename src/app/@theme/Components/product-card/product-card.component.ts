import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Products } from '../../../@Core/interface/products';
import { Store } from '@ngrx/store';
import { AppState } from '../../../Store/appReducer';
import { addToCart } from '../../../Store/appAction';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input.required<Products>();

  store = inject(Store<AppState>);

  get discount() {
    const discountD = 1 - this.product().discountPercentage / 100;
    return (this.product().price * discountD).toFixed(2);
  }

  addTocart() {
    this.store.dispatch(addToCart({ cart: this.product() }));
  }
}
