import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportManagementReadComponent } from './sport-management-read.component';

describe('SportManagementReadComponent', () => {
  let component: SportManagementReadComponent;
  let fixture: ComponentFixture<SportManagementReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportManagementReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportManagementReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
