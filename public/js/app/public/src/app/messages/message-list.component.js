import { Component } from '@angular/core';
import { MessageService } from './message.service';
export class MessageListComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
        this.messageService.getMessages()
            .subscribe((messages) => {
            this.messages = messages;
        });
    }
}
MessageListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-message-list',
                template: `
  <div class="col-md-8 col-md-offset-2">
  <app-message
      [inputMessage]="message"
      *ngFor="let message of messages"></app-message>
  <div>
  `,
            },] },
];
/** @nocollapse */
MessageListComponent.ctorParameters = [
    { type: MessageService, },
];
//# sourceMappingURL=message-list.component.js.map