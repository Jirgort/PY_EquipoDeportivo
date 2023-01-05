import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesTypeManagementCreateComponent } from './classes-type-management-create.component';

describe('ClassesTypeManagementCreateComponent', () => {
  let component: ClassesTypeManagementCreateComponent;
  let fixture: ComponentFixture<ClassesTypeManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesTypeManagementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesTypeManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
