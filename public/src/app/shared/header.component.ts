import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  isIn = false; // store state

  isNavbarCollapsed = false;

  constructor(private authService: AuthService, private router: Router) { }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  belongsToUser() {
    // just getting userId
    return localStorage.getItem('userId');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login', 'signin']);
  }
}
