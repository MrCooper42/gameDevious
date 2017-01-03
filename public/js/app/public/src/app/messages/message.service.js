import { Http, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Message } from './message.model';
import { ErrorService } from '../errors/error.service';
export class MessageService {
    constructor(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
    }
    addMessage(message) {
        const body = JSON.stringify(message);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token')
            ? `?token=${localStorage.getItem('token')}` : '';
        return this.http.post(`http://localhost:3000/message${token}`, body, { headers: headers })
            .map((response) => {
            const result = response.json();
            const message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            this.messages.push(message);
            return message;
        })
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((response) => {
            const messages = response.json().messages;
            let transformedMessages = [];
            for (let message of messages) {
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    editMessage(message) {
        this.messageIsEdit.emit(message);
    }
    updateMessage(message) {
        const body = JSON.stringify(message);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token')
            ? `?token=${localStorage.getItem('token')}` : '';
        return this.http.patch(`http://localhost:3000/message/${message.messageId + token}`, body, { headers: headers })
            .map((response) => response.json())
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
    deleteMessage(message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
            ? `?token=${localStorage.getItem('token')}` : '';
        return this.http.delete(`http://localhost:3000/message/${message.messageId + token}`)
            .map((response) => response.json())
            .catch((error) => {
            this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    }
}
MessageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MessageService.ctorParameters = [
    { type: Http, },
    { type: ErrorService, },
];
//# sourceMappingURL=message.service.js.map