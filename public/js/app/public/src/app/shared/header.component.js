import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
export var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isIn = false; // store state
        this.isNavbarCollapsed = false;
    }
    HeaderComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    HeaderComponent.prototype.belongsToUser = function () {
        // just getting userId
        return localStorage.getItem('userId');
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login', 'signin']);
    };
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
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map