import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdatesCardComponent } from './home-updates-card.component';

describe('HomeUpdatesCardComponent', () => {
  let component: HomeUpdatesCardComponent;
  let fixture: ComponentFixture<HomeUpdatesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUpdatesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUpdatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
