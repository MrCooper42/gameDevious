import { Component } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
export class MessageInputComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    onSubmit(form) {
        if (this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(result => console.log(result, 'result'));
            this.message = null;
        }
        else {
            // Create
            const message = new Message(form.value.content, 'Cooper');
            this.messageService.addMessage(message)
                .subscribe(data => console.log(data), error => console.error(error));
        }
        form.resetForm();
    }
    ;
    onClear(form) {
        this.message = null;
        form.resetForm();
    }
    ngOnInit() {
        this.messageService.messageIsEdit.subscribe((message) => this.message = message);
    }
}
MessageInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-message-input',
                templateUrl: './message-input.component.html',
            },] },
];
/** @nocollapse */
MessageInputComponent.ctorParameters = [
    { type: MessageService, },
];
//# sourceMappingURL=message-input.component.js.map