import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
  //  FileSelectDirective, FileDropDirective,

const TOKEN = localStorage.getItem('token');
const URL = '/upload/';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

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
