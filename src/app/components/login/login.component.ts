import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // Formulario reactivo
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loading = false;     // Para mostrar spinner o deshabilitar botón
  errorMessage = '';   // Para mostrar error en el template

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Si ya hay token, redirigimos directamente
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  onLoginSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      return; // no enviar si el formulario no es válido
    }

    this.loading = true;

    if (!this.username?.value || !this.password?.value) {
  this.errorMessage = 'Por favor ingresa usuario y contraseña';
  return;
}

const credentials = {
  username: this.username.value,
  password: this.password.value
};

    this.auth.login(credentials).subscribe({
      next: (res) => {
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  // Helpers para el template
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
