import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderSectionComponent } from './home-header-section.component';

describe('HomeHeaderSectionComponent', () => {
  let component: HomeHeaderSectionComponent;
  let fixture: ComponentFixture<HomeHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeaderSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
