import { Component } from '@angular/core';
import { FileItem, FileUploader, FileUploaderOptions, FileUploaderUtils } from 'angular-file-upload';
import { state, style, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  uploader: FileUploader = new FileUploader({});
  uploaderOptions: FileUploaderOptions = {};
  uploaderUtils = FileUploaderUtils;
  disabled: string;
  isDropZoneIndexHovered: boolean;
  displayAddedFiles: boolean;


  // Configuration für den Uploader
  queueLimit = 5;
  uploadUrl = 'https://evening-anchorage-3159.herokuapp.com/api/';
  uploadFilesInSingleRequest = false;
  allowedFileTypes = '.png,.jpg,.jpeg';


  constructor() {
    this.updateOptions();
    this.handleCompleteAll();
  }


  updateOptions() {
    this.uploaderOptions = {
      url: this.uploadUrl,
      uploadFilesInSingleRequest: this.uploadFilesInSingleRequest,
      queueLimit: this.queueLimit
    };

    if (this.uploadFilesInSingleRequest) {
      this.uploaderOptions = Object.assign(this.uploaderOptions, {
        disableMultipart: false,
        formatDataFunctionIsAsync: false
      });
    }

    this.uploader.setOptions(this.uploaderOptions);
  }


  handleCompleteAll() {
    this.uploader.onCompleteAll = () => {
      this.uploader.clearQueue();
    };
  }


  notificateForNewFiles(files: any) {
    this.displayAddedFiles = true;
    setTimeout(() => {
      this.displayAddedFiles = false;
    }, 4000);
  }


  getQueueFileSize() {
    let totalFileSize = 0;
    this.uploader.queue.forEach((file: FileItem) => {
      totalFileSize += file.file.size;
    });
    return (totalFileSize / 1000 / 1000).toFixed(1);
  }

}
