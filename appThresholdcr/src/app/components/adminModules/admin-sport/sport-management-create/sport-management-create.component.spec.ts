import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportManagementCreateComponent } from './sport-management-create.component';

describe('SportManagementCreateComponent', () => {
  let component: SportManagementCreateComponent;
  let fixture: ComponentFixture<SportManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportManagementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
