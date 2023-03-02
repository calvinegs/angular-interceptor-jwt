import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {
  private _isLogin$ = new BehaviorSubject<boolean>(false);
  isLogin$: Observable<boolean> = this._isLogin$.pipe(
    switchMap(isLogin => {
      if (!isLogin) {
        return of(false);
      }
      return of(true);
    })
  )
  constructor() { }

  logout(): void {
    window.sessionStorage.clear();
    this._isLogin$.next(false);
  }

  checkLoginStatus(): void {
    this._isLogin$.next(!!sessionStorage.getItem(TOKEN_KEY));
  }

  isLogin() {
    return (sessionStorage.getItem(TOKEN_KEY));
  }

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }
}
