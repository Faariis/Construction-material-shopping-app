import { TestBed } from '@angular/core/testing';

import { SirovineService } from './sirovine.service';

describe('SirovineService', () => {
  let service: SirovineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SirovineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
