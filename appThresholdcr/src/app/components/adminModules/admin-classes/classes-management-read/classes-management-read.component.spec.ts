import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesManagementReadComponent } from './classes-management-read.component';

describe('ClassesManagementReadComponent', () => {
  let component: ClassesManagementReadComponent;
  let fixture: ComponentFixture<ClassesManagementReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesManagementReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesManagementReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
