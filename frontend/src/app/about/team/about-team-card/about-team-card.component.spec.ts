import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamCardComponent } from './about-team-card.component';

describe('AboutTeamCardComponent', () => {
  let component: AboutTeamCardComponent;
  let fixture: ComponentFixture<AboutTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
