import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicosformComponent } from './organicosform.component';

describe('OrganicosformComponent', () => {
  let component: OrganicosformComponent;
  let fixture: ComponentFixture<OrganicosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicosformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
