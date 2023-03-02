import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { GetDataComponent } from './components/get-data/get-data.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'flexbox', pathMatch: 'full'},
      { path: 'flexbox', component: FlexboxComponent },
      { path: 'getdata', component: GetDataComponent, canActivate: [AuthGuard] },
    ]
  },
  {
      path: 'login',
      component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
