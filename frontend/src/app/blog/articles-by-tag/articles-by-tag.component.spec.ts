import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesByTagComponent } from './articles-by-tag.component';

describe('ArticlesByTagComponent', () => {
  let component: ArticlesByTagComponent;
  let fixture: ComponentFixture<ArticlesByTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesByTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
