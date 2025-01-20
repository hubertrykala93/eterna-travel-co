import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursSortFormComponent } from './tours-sort-form.component';

describe('ToursSortFormComponent', () => {
  let component: ToursSortFormComponent;
  let fixture: ComponentFixture<ToursSortFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursSortFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursSortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
