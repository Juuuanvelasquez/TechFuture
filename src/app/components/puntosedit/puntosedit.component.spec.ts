import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoseditComponent } from './puntosedit.component';

describe('PuntoseditComponent', () => {
  let component: PuntoseditComponent;
  let fixture: ComponentFixture<PuntoseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
