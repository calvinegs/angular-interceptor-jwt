import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtStorageService } from 'src/app/services/jwt-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: JwtStorageService,
    private router: Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email, password).subscribe({
      next: data => {
        this.tokenService.saveToken(data.token);
        this.router.navigate(['/']);
      },
      error: err => {
        console.log('error');
      }
    });
  }
}
