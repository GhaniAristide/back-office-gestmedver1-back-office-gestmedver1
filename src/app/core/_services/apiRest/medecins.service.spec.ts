import { TestBed } from '@angular/core/testing';

import { MedecinsService } from './medecins.service';

describe('MedecinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedecinsService = TestBed.get(MedecinsService);
    expect(service).toBeTruthy();
  });
});
