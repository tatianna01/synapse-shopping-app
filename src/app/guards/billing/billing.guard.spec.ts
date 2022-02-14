import { TestBed } from '@angular/core/testing';

import { BillingGuard } from './billing.guard';

describe('BillingGuard', () => {
  let guard: BillingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BillingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
