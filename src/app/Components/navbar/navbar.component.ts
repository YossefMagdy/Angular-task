import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '../../@theme/Components/button/button.component';
import { RouterLink } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../Store/appReducer';
import { userProfile } from '../../@Core/interface/userInfo';
import { userInfoSelector } from '../../Modules/AuthModule/Store/authSelector';
import { logoutAction } from '../../Modules/AuthModule/Store/auth.action';
import { Observable } from 'rxjs';
import { Products } from '../../@Core/interface/products';
import { cartSelector } from '../../Store/appSelector';
import { AsyncPipe } from '@angular/common';
import { LengthPipe } from '../../@Core/pipes/length.pipe';
import { productSearch } from '../../Store/appAction';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, RouterLink, AsyncPipe, LengthPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  #store = inject(Store<AppState>);
  userInfo = signal<userProfile | undefined>(undefined);
  cartItem$!: Observable<Products[]>;
  debounce: any;
  openMenu = false;
  ngOnInit() {
    this.#store.pipe(select(userInfoSelector)).subscribe((user) => {
      if (user) {
        this.userInfo.set(user);
      } else {
        this.userInfo.set(undefined);
      }
    });
    this.cartItem$ = this.#store.pipe(select(cartSelector));
  }

  productSearch(event: KeyboardEvent): void {
    const inputElement = event.target as HTMLInputElement;
    const searchValue = inputElement.value;
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.#store.dispatch(productSearch({ searchText: searchValue }));
    }, 200);
  }

  logout() {
    this.#store.dispatch(logoutAction());
  }
}
