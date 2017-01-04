import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthService } from './auth.service';
export class SigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/profile');
        }, error => console.error(error));
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
SigninComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html'
            },] },
];
/** @nocollapse */
SigninComponent.ctorParameters = [
    { type: AuthService, },
    { type: Router, },
];
//# sourceMappingURL=signin.component.js.map