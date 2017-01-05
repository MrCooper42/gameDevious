import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const TOKEN = localStorage.getItem('token');
const URL = '/upload/works';

@Component({
  selector: 'app-upload-works-avatar',
  templateUrl: 'upload-works-avatar.component.html',
  styleUrls: ['./upload-works-avatar.component.css']
})
export class UploadWorksAvatarComponent {

  constructor() { }

  public uploader: FileUploader = new FileUploader({url: URL, authToken: TOKEN});

  public hasBaseDropZoneOver: boolean = false;

  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}

// !uploader.getNotUploadedItems().length for html upload all
