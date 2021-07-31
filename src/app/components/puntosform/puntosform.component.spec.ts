import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosformComponent } from './puntosform.component';

describe('PuntosformComponent', () => {
  let component: PuntosformComponent;
  let fixture: ComponentFixture<PuntosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
