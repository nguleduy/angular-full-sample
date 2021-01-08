import { TestBed } from '@angular/core/testing';

import { SkypAuthService } from './skyp-auth.service';

describe('SkypAuthService', () => {
  let service: SkypAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkypAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
