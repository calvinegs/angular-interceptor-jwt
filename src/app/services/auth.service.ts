import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../shared/helpers/appSettings';

const API_URL = AppSettings.API_URL + 'Authenticate/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(API_URL + 'login', {
      email: email,
      password: password
    })
  }
}
