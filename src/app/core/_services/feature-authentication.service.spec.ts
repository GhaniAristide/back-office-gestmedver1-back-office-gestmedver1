import { TestBed } from '@angular/core/testing';

import { FeatureAuthenticationService } from './feature-authentication.service';

describe('FeatureAuthenticationService', () => {
  let service: FeatureAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
