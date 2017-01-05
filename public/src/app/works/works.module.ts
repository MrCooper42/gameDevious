import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorksComponent } from './works.component';
import { UploadModule } from '../upload/upload.module';

@NgModule({
  declarations: [
    WorksComponent
  ],
  imports: [
    CommonModule,
    UploadModule,
    ReactiveFormsModule
  ]
})

export class WorksModule {

}
