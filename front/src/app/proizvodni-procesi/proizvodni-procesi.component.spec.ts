import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodniProcesiComponent } from './proizvodni-procesi.component';

describe('ProizvodniProcesiComponent', () => {
  let component: ProizvodniProcesiComponent;
  let fixture: ComponentFixture<ProizvodniProcesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodniProcesiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProizvodniProcesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
