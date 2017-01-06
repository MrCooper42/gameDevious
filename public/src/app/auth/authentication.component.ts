import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-authentication',
    template: `
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
          <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
          <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
          <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>
          <li routerLinkActive="active" (click)="contact()"><a [routerLink]="['logout']">Contact</a></li>
        </ul>
      </nav>
    </header>
    <div class="row spacing">
      <router-outlet></router-outlet>
    </div>
    <hr>
    <br>
    <div class="containter text-center" *ngIf="showContact">
    <h1>Matthew Cooper</h1>
    <h3>email: mr.cooper42co@gmail.com</h3>
    <h3>github: https://github.com/MrCooper42</h3>
    <h3>linkedin: https://www.linkedin.com/in/mrcooper42</h3>
    </div>
    <hr>
  `
})

export class AuthenticationComponent {

    showContact: Boolean = false;

    constructor(private authService: AuthService) { }

    contact() {
      this.showContact = !this.showContact;
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
