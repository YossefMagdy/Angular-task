import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../@theme/Components/button/button.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../@Core/Services/auth/auth.service';
import { NgIf } from '@angular/common';
import { noop, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../Store/appReducer';
import { loginAction } from '../../Store/auth.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  _fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  store = inject(Store<AppState>);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      username: ['emilys', [Validators.required, Validators.minLength(3)]],
      password: ['emilyspass', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe(
          tap((user) => {
            this.store.dispatch(loginAction({ user }));
            this.router.navigate(['/home']);
          }),
        )
        .subscribe(noop);
    }
  }
}
