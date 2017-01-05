import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export class LogoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/login', 'signin']);
    }
}
LogoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-logout',
                template: `
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onLogout()">Logout</button>
    </div>
  `
            },] },
];
/** @nocollapse */
LogoutComponent.ctorParameters = [
    { type: AuthService, },
    { type: Router, },
];
//# sourceMappingURL=logout.component.js.map