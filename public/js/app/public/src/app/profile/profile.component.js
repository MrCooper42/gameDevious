import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
export class ProfileComponent {
    constructor(profileService, router) {
        this.profileService = profileService;
        this.router = router;
    }
    loggedIn() {
        if (this.profileService.isLoggedIn() === false) {
            this.router.navigate(['/auth']);
        }
        else {
            console.log(this.profileService.isLoggedIn());
            return true;
        }
    }
    ngOnInit() {
    }
}
ProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            },] },
];
/** @nocollapse */
ProfileComponent.ctorParameters = [
    { type: ProfileService, },
    { type: Router, },
];
//# sourceMappingURL=profile.component.js.map