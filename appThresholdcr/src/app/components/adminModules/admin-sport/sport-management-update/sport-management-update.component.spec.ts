import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportManagementUpdateComponent } from './sport-management-update.component';

describe('SportManagementUpdateComponent', () => {
  let component: SportManagementUpdateComponent;
  let fixture: ComponentFixture<SportManagementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportManagementUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
