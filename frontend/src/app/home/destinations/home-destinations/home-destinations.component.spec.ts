import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDestinationsComponent } from './home-destinations.component';

describe('HomeDestinationsComponent', () => {
  let component: HomeDestinationsComponent;
  let fixture: ComponentFixture<HomeDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDestinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
