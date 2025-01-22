import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdatesComponent } from './home-updates.component';

describe('HomeUpdatesComponent', () => {
  let component: HomeUpdatesComponent;
  let fixture: ComponentFixture<HomeUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
