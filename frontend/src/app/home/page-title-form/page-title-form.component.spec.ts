import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleFormComponent } from './page-title-form.component';

describe('PageTitleFormComponent', () => {
  let component: PageTitleFormComponent;
  let fixture: ComponentFixture<PageTitleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
