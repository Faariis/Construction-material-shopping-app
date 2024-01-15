import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirovineComponent } from './sirovine.component';

describe('SirovineComponent', () => {
  let component: SirovineComponent;
  let fixture: ComponentFixture<SirovineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirovineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SirovineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
