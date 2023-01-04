import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManagementCreateComponent } from './news-management-create.component';

describe('NewsManagementCreateComponent', () => {
  let component: NewsManagementCreateComponent;
  let fixture: ComponentFixture<NewsManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsManagementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
