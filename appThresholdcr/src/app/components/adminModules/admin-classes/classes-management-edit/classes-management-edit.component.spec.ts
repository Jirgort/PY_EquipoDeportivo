import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesManagementEditComponent } from './classes-management-edit.component';

describe('ClassesManagementEditComponent', () => {
  let component: ClassesManagementEditComponent;
  let fixture: ComponentFixture<ClassesManagementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesManagementEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
