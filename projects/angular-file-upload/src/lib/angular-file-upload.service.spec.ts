import { TestBed, inject } from '@angular/core/testing';

import { AngularFileUploadService } from './angular-file-upload.service';

describe('AngularFileUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFileUploadService]
    });
  });

  it('should be created', inject([AngularFileUploadService], (service: AngularFileUploadService) => {
    expect(service).toBeTruthy();
  }));
});
