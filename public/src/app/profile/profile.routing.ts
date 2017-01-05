import { Routes, RouterModule } from '@angular/router';

import { ProfileEditComponent } from './profile-edit.component';
import { WorkDetailsComponent } from './work-details.component';
import { UploadWorksComponent } from '../upload/upload-works.component';
import { UploadWorksAvatarComponent } from '../upload/upload-works-avatar.component';

const PROFILE_ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'profile', component: ProfileEditComponent,
    children: [
      { path: 'detials', component: WorkDetailsComponent },
      { path: 'work-file', component: UploadWorksComponent },
      { path: 'work-avatar', component: UploadWorksAvatarComponent }
    ]
  },
];

export const profileRouting = RouterModule.forChild(PROFILE_ROUTES);
