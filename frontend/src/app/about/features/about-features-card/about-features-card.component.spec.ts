import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFeaturesCardComponent } from './about-features-card.component';

describe('AboutFeaturesCardComponent', () => {
  let component: AboutFeaturesCardComponent;
  let fixture: ComponentFixture<AboutFeaturesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFeaturesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFeaturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
