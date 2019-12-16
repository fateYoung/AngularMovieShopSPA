import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserLogin } from 'src/app/shared/models/userLogin';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtStorageService } from './jwt-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserAccount } from 'src/app/shared/models/userAccount';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: UserAccount;

  constructor(private apiService: ApiService,
              private jwtService: JwtStorageService,
              private jwtHelperService: JwtHelperService) { }

  login(userLogin: UserLogin): Observable<boolean> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.apiService.create('/user/login', userLogin, options)
      .pipe(map(response => {
        if (response) {
          this.jwtService.saveToken(response.token);
          return true;
        }
        return false;
      }));
  }

  logout() {
    this.jwtService.destroyToken();
  }

  isLoggedin() {
    if (this.jwtHelperService.isTokenExpired(this.jwtService.getToken())) {
      console.log('inside isLoggedin false');
      return false;
    }
    console.log('inside isLoggedin true');
    return true;
  }

  decodeToken(): UserAccount {
    const token = this.jwtService.getToken();
    if (!token || new JwtHelperService().isTokenExpired(this.jwtService.getToken())) {
      this.logout();
      return null;
    }
    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

}
