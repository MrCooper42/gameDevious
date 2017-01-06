import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component'
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'logger', pathMatch: 'full' },
    { path: 'logger', component: AuthenticationComponent,
  children: [
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
  ]}
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);
