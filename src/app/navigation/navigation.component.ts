import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { JwtStorageService } from '../services/jwt-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isDarkTheme = false;
  loading$ = this._loadingService.loading$;
  isLogin$ = this.tokenService.isLogin$;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private _loadingService: LoadingService,
    private tokenService: JwtStorageService,
    private router: Router) {}

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
    this.tokenService.checkLoginStatus();
  }
  
  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }

  logout() {
    this.tokenService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
