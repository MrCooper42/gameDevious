import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './shared/header.component';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { ProfileService } from './profile/profile.service';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { GamesModule } from './games/games.module';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { FilesComponent } from './files/files.component';
import { ProfileModule } from './profile/profile.module';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        HeaderComponent,
                        ErrorComponent,
                        NewsComponent,
                        JobListingsComponent,
                        FilesComponent
                    ],
                    imports: [
                        NgbModule.forRoot(),
                        routing,
                        AuthModule,
                        UploadModule,
                        BrowserModule,
                        GamesModule,
                        FormsModule,
                        HttpModule,
                        ProfileModule
                    ],
                    providers: [
                        AuthService,
                        ErrorService,
                        NewsService,
                        ProfileService
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map