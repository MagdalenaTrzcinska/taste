import { TestBed } from '@angular/core/testing';

import { LoginToPanelGuard } from './login-to-panel.guard';

describe('LoginToPanelGuard', () => {
  let guard: LoginToPanelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginToPanelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
