import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { userProfile } from '../../interface/userInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  login(form: FormGroup): Observable<userProfile> {
    return this._http.post<userProfile>(
      'https://dummyjson.com/auth/login',
      form,
    );
  }
}
