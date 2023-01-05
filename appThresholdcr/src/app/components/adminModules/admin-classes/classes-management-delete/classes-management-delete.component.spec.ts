import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesManagementDeleteComponent } from './classes-management-delete.component';

describe('ClassesManagementDeleteComponent', () => {
  let component: ClassesManagementDeleteComponent;
  let fixture: ComponentFixture<ClassesManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesManagementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
