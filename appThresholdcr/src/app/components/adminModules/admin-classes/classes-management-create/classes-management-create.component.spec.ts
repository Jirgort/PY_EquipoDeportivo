import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesManagementCreateComponent } from './classes-management-create.component';

describe('ClassesManagementCreateComponent', () => {
  let component: ClassesManagementCreateComponent;
  let fixture: ComponentFixture<ClassesManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesManagementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
