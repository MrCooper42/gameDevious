import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const TOKEN = localStorage.getItem('token');
const URL = '/upload/works';

@Component({
  selector: 'app-upload-works',
  templateUrl: 'upload-works.component.html',
  styleUrls: ['./upload-works.component.css']
})
export class UploadWorksComponent {

  constructor(public activeModal: NgbActiveModal) { }

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
