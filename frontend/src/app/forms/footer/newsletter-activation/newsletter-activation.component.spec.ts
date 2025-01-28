import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterActivationComponent } from './newsletter-activation.component';

describe('NewsletterActivationComponent', () => {
  let component: NewsletterActivationComponent;
  let fixture: ComponentFixture<NewsletterActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
