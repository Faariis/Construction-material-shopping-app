import { TestBed } from '@angular/core/testing';

import { ProizvodniProcesiService } from './proizvodni-procesi.service';

describe('ProizvodniProcesiService', () => {
  let service: ProizvodniProcesiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProizvodniProcesiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
