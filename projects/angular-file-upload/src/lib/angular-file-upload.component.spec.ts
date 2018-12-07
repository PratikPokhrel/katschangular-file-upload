import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFileUploadComponent } from './angular-file-upload.component';

describe('AngularFileUploadComponent', () => {
  let component: AngularFileUploadComponent;
  let fixture: ComponentFixture<AngularFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
