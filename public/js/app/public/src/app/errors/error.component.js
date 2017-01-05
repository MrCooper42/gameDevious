import { Component } from '@angular/core';
import { ErrorService } from './error.service';
export class ErrorComponent {
    constructor(errorService) {
        this.errorService = errorService;
        this.display = 'none';
    }
    onErrorHandled() {
        this.display = 'none';
    }
    ngOnInit() {
        this.errorService.errorOccured
            .subscribe((error) => {
            this.error = error;
            this.display = 'block';
        });
    }
}
ErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styles: ['./error.component.css']
            },] },
];
/** @nocollapse */
ErrorComponent.ctorParameters = [
    { type: ErrorService, },
];
//# sourceMappingURL=error.component.js.map