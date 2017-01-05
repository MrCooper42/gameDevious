import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import { worksRouting } from './works.routing';
import { WorksComponent } from './works.component';
import { UploadModule } from '../upload/upload.module';

@NgModule({
  declarations: [
    WorksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UploadModule
    // worksRouting
  ]
})

export class WorksModule {

}
