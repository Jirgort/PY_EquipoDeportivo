import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachManagementEditComponent } from './coach-management-edit.component';

describe('CoachManagementEditComponent', () => {
  let component: CoachManagementEditComponent;
  let fixture: ComponentFixture<CoachManagementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachManagementEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
