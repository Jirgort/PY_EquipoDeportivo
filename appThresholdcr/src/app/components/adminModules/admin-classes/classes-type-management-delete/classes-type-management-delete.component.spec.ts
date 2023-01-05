import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesTypeManagementDeleteComponent } from './classes-type-management-delete.component';

describe('ClassesTypeManagementDeleteComponent', () => {
  let component: ClassesTypeManagementDeleteComponent;
  let fixture: ComponentFixture<ClassesTypeManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesTypeManagementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesTypeManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
