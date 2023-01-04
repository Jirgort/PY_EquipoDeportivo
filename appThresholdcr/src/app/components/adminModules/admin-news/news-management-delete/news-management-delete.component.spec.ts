import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManagementDeleteComponent } from './news-management-delete.component';

describe('NewsManagementDeleteComponent', () => {
  let component: NewsManagementDeleteComponent;
  let fixture: ComponentFixture<NewsManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsManagementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
