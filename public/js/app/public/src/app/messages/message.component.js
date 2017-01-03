import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';
export class MessageComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.color = 'red';
    }
    onEdit() {
        this.messageService.editMessage(this.message);
    }
    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(result => console.log(result, 'deleted result'));
    }
    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-message',
                templateUrl: './message.component.html',
                styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
            },] },
];
/** @nocollapse */
MessageComponent.ctorParameters = [
    { type: MessageService, },
];
MessageComponent.propDecorators = {
    'message': [{ type: Input, args: ['inputMessage',] },],
};
//# sourceMappingURL=message.component.js.map