import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const TOKEN = localStorage.getItem('token');
const URL = '/upload/avatar';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, authToken: TOKEN});

  public hasBaseDropZoneOver: boolean = false;

  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() {
    console.log(TOKEN, "token here")
  }
}

// !uploader.getNotUploadedItems().length for html upload all
