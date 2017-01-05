import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GamesComponent } from './games.component';
import { GamesService } from './games.service';
export class GamesModule {
}
GamesModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @nocollapse */
GamesModule.ctorParameters = [];
//# sourceMappingURL=games.module.js.map