import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
export var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signup(user)
            .subscribe(function (data) {
            return _this.authService.signin(user)
                .subscribe(function (data) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                _this.router.navigateByUrl('/profile');
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error, 'error on signup'); });
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
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
    return SignupComponent;
}());
//# sourceMappingURL=signup.component.js.map