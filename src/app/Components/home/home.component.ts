import { Component } from '@angular/core';
import { ProductsComponent } from '../../Modules/ProductsModule/Components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
