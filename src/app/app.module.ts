import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap';
import { AngularFileUploadModule } from 'angular-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    AngularFileUploadModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
