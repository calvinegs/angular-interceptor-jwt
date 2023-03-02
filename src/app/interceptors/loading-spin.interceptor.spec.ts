import { TestBed } from '@angular/core/testing';

import { LoadingSpinInterceptor } from './loading-spin.interceptor';

describe('LoadingSpinInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingSpinInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingSpinInterceptor = TestBed.inject(LoadingSpinInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
