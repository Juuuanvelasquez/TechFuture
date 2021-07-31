import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexformComponent } from './indexform.component';

describe('IndexformComponent', () => {
  let component: IndexformComponent;
  let fixture: ComponentFixture<IndexformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
