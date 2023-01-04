import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManagementEditComponent } from './news-management-edit.component';

describe('NewsManagementEditComponent', () => {
  let component: NewsManagementEditComponent;
  let fixture: ComponentFixture<NewsManagementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsManagementEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
