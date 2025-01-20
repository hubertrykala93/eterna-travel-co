import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursFilterFormComponent } from './tours-filter-form.component';

describe('ToursFilterFormComponent', () => {
  let component: ToursFilterFormComponent;
  let fixture: ComponentFixture<ToursFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursFilterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
