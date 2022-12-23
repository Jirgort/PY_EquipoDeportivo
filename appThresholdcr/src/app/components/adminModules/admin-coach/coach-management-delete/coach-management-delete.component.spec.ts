import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachManagementDeleteComponent } from './coach-management-delete.component';

describe('CoachManagementDeleteComponent', () => {
  let component: CoachManagementDeleteComponent;
  let fixture: ComponentFixture<CoachManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachManagementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
