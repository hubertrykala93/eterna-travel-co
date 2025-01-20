import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursSearchFormComponent } from './tours-search-form.component';

describe('ToursSearchFormComponent', () => {
  let component: ToursSearchFormComponent;
  let fixture: ComponentFixture<ToursSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
