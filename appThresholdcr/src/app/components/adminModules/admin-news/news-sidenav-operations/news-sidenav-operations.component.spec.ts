import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSidenavOperationsComponent } from './news-sidenav-operations.component';

describe('NewsSidenavOperationsComponent', () => {
  let component: NewsSidenavOperationsComponent;
  let fixture: ComponentFixture<NewsSidenavOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSidenavOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSidenavOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
