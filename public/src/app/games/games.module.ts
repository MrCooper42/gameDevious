import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GamesComponent } from './games.component';
import { GamesService } from './games.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GamesComponent
  ],
  providers: [
    GamesService
  ]
})
export class GamesModule { }
