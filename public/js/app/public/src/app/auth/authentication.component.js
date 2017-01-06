import { Component } from '@angular/core';
import { AuthService } from './auth.service';
export var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
        this.showContact = false;
    }
    AuthenticationComponent.prototype.contact = function () {
        this.showContact = !this.showContact;
    };
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authentication',
                    template: "\n    <header class=\"row spacing\">\n      <nav class=\"col-md-8 col-md-offset-2\">\n        <ul class=\"nav nav-tabs\">\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">Signup</a></li>\n          <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['signin']\">Signin</a></li>\n          <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['logout']\">Logout</a></li>\n          <li routerLinkActive=\"active\" (click)=\"contact()\"><a [routerLink]=\"['logout']\">Contact</a></li>\n        </ul>\n      </nav>\n    </header>\n    <div class=\"row spacing\">\n      <router-outlet></router-outlet>\n    </div>\n    <hr>\n    <br>\n    <div class=\"containter text-center\" *ngIf=\"showContact\">\n    <h1>Matthew Cooper</h1>\n    <h3>email: mr.cooper42co@gmail.com</h3>\n    <h3>github: https://github.com/MrCooper42</h3>\n    <h3>linkedin: https://www.linkedin.com/in/mrcooper42</h3>\n    </div>\n    <hr>\n  "
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return AuthenticationComponent;
}());
//# sourceMappingURL=authentication.component.js.map