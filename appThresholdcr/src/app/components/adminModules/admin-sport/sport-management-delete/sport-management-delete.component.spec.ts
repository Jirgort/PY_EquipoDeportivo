import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportManagementDeleteComponent } from './sport-management-delete.component';

describe('SportManagementDeleteComponent', () => {
  let component: SportManagementDeleteComponent;
  let fixture: ComponentFixture<SportManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportManagementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
