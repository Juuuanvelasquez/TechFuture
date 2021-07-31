import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexeditComponent } from './indexedit.component';

describe('IndexeditComponent', () => {
  let component: IndexeditComponent;
  let fixture: ComponentFixture<IndexeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
