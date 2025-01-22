import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsImageSectionComponent } from './testimonials-image-section.component';

describe('TestimonialsImageSectionComponent', () => {
  let component: TestimonialsImageSectionComponent;
  let fixture: ComponentFixture<TestimonialsImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsImageSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
