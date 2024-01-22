import { TestBed } from '@angular/core/testing';

import { AngularFormcontrolsValidationService } from './angular-formcontrols-validation.service';

describe('AngularFormcontrolsValidationService', () => {
  let service: AngularFormcontrolsValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFormcontrolsValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
