import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private path = environment.googleRedirectURI;

  constructor(private http: HttpClient) {}

  public signOutExternal = () => {
    localStorage.removeItem('token');
    console.log('token deleted');
  };

  LoginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.post(
      this.path + 'LoginWithGoogle',
      JSON.stringify(credentials),
      { headers: header }
    );
  }
}
