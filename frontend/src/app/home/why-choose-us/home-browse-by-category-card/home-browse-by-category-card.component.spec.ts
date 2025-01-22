import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrowseByCategoryCardComponent } from './home-browse-by-category-card.component';

describe('HomeBrowseByCategoryCardComponent', () => {
  let component: HomeBrowseByCategoryCardComponent;
  let fixture: ComponentFixture<HomeBrowseByCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBrowseByCategoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBrowseByCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
