import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseUsImageSectionComponent } from './why-choose-us-image-section.component';

describe('WhyChooseUsImageSectionComponent', () => {
  let component: WhyChooseUsImageSectionComponent;
  let fixture: ComponentFixture<WhyChooseUsImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseUsImageSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseUsImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
