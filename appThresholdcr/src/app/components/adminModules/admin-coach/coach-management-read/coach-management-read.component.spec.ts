import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachManagementReadComponent } from './coach-management-read.component';

describe('CoachManagementReadComponent', () => {
  let component: CoachManagementReadComponent;
  let fixture: ComponentFixture<CoachManagementReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachManagementReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachManagementReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
