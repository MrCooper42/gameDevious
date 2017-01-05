import { Component } from '@angular/core';
export class MessagesComponent {
}
MessagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-messages',
                template: `
      <div class="row">
        <app-message-input></app-message-input>
      </div>
      <hr>
      <div class="row">
        <app-message-list></app-message-list>
      </div>
    `
            },] },
];
/** @nocollapse */
MessagesComponent.ctorParameters = [];
//# sourceMappingURL=messages.component.js.map