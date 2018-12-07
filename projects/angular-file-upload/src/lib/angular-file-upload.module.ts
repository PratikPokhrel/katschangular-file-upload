import { NgModule } from '@angular/core';
import { AngularFileUploadComponent } from './angular-file-upload.component';
import { FileDropDirective } from './file-upload/file-drop.directive';
import { FileSelectDirective } from './file-upload/file-select.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AngularFileUploadComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  exports: [
    AngularFileUploadComponent,
    FileDropDirective,
    FileSelectDirective
  ]
})
export class AngularFileUploadModule { }
