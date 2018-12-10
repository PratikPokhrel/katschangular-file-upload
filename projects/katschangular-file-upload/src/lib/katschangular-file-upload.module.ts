import { NgModule } from '@angular/core';
import { FileDropDirective } from './file-upload/file-drop.directive';
import { FileSelectDirective } from './file-upload/file-select.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FileDropDirective,
    FileSelectDirective
  ],
  exports: [
    FileDropDirective,
    FileSelectDirective
  ]
})
export class KatschangularFileUploadModule { }
