import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginRequest, LoginResponse } from "@public/models/interfaces";
import { Observable, tap } from "rxjs";
import { environment } from "@environments/environment.prod";
import { JwtHelperService } from "@auth0/angular-jwt";
import Swal from "sweetalert2";
import { User } from "@models/interfaces";

@Injectable()
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly jwtHelperService: JwtHelperService,
  ) {
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${ environment.apiBaseUrl }/users/login`,
      loginRequest,
    ).pipe(
      tap({
        next: (response: LoginResponse) => {
          localStorage.setItem('access_token', response.access_token);
          this.showMessageDialog('Inicio de sesión exitoso', 'Bienvenido', 'success');
        },
        error: (error) => {
          const incorrectField = error.error.errors.incorrect_field;
          this.showMessageDialog(error.error.message, `El campo ${ incorrectField } es incorrecto`, 'error');
        },
      }),
    );
  }

  showMessageDialog(title: string, text: string, icon: any) {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'Aceptar',
      timer: 3000,
    });
  }

  getLoggedUser(): User {
    const decodedToken = this.jwtHelperService.decodeToken();
    return decodedToken.user;
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
