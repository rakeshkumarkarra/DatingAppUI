import { TestBed } from '@angular/core/testing';

import { PreventUnsavedChagesGuard } from './prevent-unsaved-chages.guard';

describe('PreventUnsavedChagesGuard', () => {
  let guard: PreventUnsavedChagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventUnsavedChagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
