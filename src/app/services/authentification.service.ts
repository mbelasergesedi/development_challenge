import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiAuthentification = 'http://localhost:3080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http: HttpClient) {
  }
  // Pour identifier un utilisateur qui en principe à déjà un compte
  logInUser(permissions: any): Observable<any> {
    return this.http.post(apiAuthentification + 'signin', {
      username: permissions.user_email,
      password: permissions.user_pwd
    }, httpOptions);
  }
  // Pour delogguer un utilisateur
  logOutUser() { }

  // Pour créer un nouvel utilisateur
  newUser(credits: any):  Observable<any> {
    return this.http.post(apiAuthentification + 'signup', {
      username: credits.username,
      password: credits.password
    }, httpOptions);
  }
}