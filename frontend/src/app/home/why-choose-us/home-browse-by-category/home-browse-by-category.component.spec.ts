import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrowseByCategoryComponent } from './home-browse-by-category.component';

describe('HomeBrowseByCategoryComponent', () => {
  let component: HomeBrowseByCategoryComponent;
  let fixture: ComponentFixture<HomeBrowseByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBrowseByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBrowseByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
