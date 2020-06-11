import { ErrorInterceptors } from './error-interceptors';
import { TestBed, async, inject } from '@angular/core/testing';

describe('ErrorInterceptors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorInterceptors]
    });
  });

  
  it('should ...', inject([ErrorInterceptors], (guard: ErrorInterceptors) => {
    expect(guard).toBeTruthy();
  }));
});
