import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserAccount } from 'src/app/shared/models/userAccount';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedin(): boolean {
    return this.authenticationService.isLoggedin();
  }

  getEmail(): UserAccount {
    return this.authenticationService.decodeToken();
  }

  logout() {
    this.authenticationService.logout();
  }

}
