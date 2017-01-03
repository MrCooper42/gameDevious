import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
export class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isIn = false; // store state
        this.isNavbarCollapsed = false;
    }
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
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                templateUrl: 'header.component.html',
                styleUrls: ['./header.component.css']
            },] },
];
/** @nocollapse */
HeaderComponent.ctorParameters = [
    { type: AuthService, },
    { type: Router, },
];
//# sourceMappingURL=header.component.js.map