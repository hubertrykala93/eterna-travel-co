import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchFormComponent } from './blog-search-form.component';

describe('BlogSearchFormComponent', () => {
  let component: BlogSearchFormComponent;
  let fixture: ComponentFixture<BlogSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSearchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
