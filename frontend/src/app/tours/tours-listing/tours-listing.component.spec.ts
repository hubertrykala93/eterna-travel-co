import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursListingComponent } from './tours-listing.component';

describe('ToursListingComponent', () => {
  let component: ToursListingComponent;
  let fixture: ComponentFixture<ToursListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
