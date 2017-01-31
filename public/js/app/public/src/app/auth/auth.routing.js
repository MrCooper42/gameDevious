import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';
var AUTH_ROUTES = [
    { path: 'login', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthenticationComponent,
        children: [
            { path: 'signup', component: SignupComponent },
            { path: 'signin', component: SigninComponent },
            { path: 'logout', component: LogoutComponent }
        ] }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
//# sourceMappingURL=auth.routing.js.map