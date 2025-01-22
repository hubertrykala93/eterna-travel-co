import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDestinationsCardComponent } from './home-destinations-card.component';

describe('HomeDestinationsCardComponent', () => {
  let component: HomeDestinationsCardComponent;
  let fixture: ComponentFixture<HomeDestinationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDestinationsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDestinationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
