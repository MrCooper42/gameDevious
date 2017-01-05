import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
export class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signup(user)
            .subscribe(data => this.authService.signin(user)
            .subscribe(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/profile');
        }, error => console.error(error)), error => console.error(error, 'error on signup'));
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
SignupComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html'
            },] },
];
/** @nocollapse */
SignupComponent.ctorParameters = [
    { type: AuthService, },
    { type: Router, },
];
//# sourceMappingURL=signup.component.js.map