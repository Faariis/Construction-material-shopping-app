import { TestBed } from '@angular/core/testing';

import { DobavljaciService } from './dobavljaci.service';

describe('DobavljaciService', () => {
  let service: DobavljaciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DobavljaciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
