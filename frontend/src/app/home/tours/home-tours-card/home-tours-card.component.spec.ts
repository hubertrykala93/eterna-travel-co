import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeToursCardComponent } from './home-tours-card.component';

describe('HomeToursCardComponent', () => {
  let component: HomeToursCardComponent;
  let fixture: ComponentFixture<HomeToursCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeToursCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeToursCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
