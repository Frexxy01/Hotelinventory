import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { LoginGuard } from './login.guard';

describe('loginGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginGuard
      ]
    });
  });

  it('should be created', () => {
    expect(LoginGuard).toBeTruthy();
  });
});
