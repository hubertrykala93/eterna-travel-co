import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursHeaderComponent } from './tours-header.component';

describe('ToursHeaderComponent', () => {
  let component: ToursHeaderComponent;
  let fixture: ComponentFixture<ToursHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
