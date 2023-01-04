import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManagementReadComponent } from './news-management-read.component';

describe('NewsManagementReadComponent', () => {
  let component: NewsManagementReadComponent;
  let fixture: ComponentFixture<NewsManagementReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsManagementReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsManagementReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
