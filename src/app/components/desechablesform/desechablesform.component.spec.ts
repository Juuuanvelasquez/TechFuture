import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesechablesformComponent } from './desechablesform.component';

describe('DesechablesformComponent', () => {
  let component: DesechablesformComponent;
  let fixture: ComponentFixture<DesechablesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesechablesformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesechablesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
