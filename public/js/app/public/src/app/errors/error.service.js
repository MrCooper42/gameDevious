import { EventEmitter } from '@angular/core';
import { Error } from './error.model';
export class ErrorService {
    constructor() {
        this.errorOccured = new EventEmitter();
    }
    handleError(error) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    }
}
//# sourceMappingURL=error.service.js.map