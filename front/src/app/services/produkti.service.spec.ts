import { TestBed } from '@angular/core/testing';

import { ProduktiService } from './produkti.service';

describe('ProduktiService', () => {
  let service: ProduktiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduktiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
