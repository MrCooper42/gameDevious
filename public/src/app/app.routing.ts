import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { ProfileEditComponent } from './profile/profile-edit.component';
import { GamesComponent } from './games/games.component';
import { UploadComponent } from './upload/upload.component';
import { AuthenticationComponent } from './auth/authentication.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: NewsComponent },
    { path: 'profile', component: ProfileEditComponent, loadChildren: './profile/profile.module#ProfileModule' },
    { path: 'games', component: GamesComponent },
    { path: 'newblog', component: GamesComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'login', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
