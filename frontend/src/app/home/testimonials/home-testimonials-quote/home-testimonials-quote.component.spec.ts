import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonialsQuoteComponent } from './home-testimonials-quote.component';

describe('HomeTestimonialsQuoteComponent', () => {
  let component: HomeTestimonialsQuoteComponent;
  let fixture: ComponentFixture<HomeTestimonialsQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTestimonialsQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTestimonialsQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
