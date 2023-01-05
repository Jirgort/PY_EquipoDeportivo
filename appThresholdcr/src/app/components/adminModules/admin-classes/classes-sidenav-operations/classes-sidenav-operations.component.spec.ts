import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesSidenavOperationsComponent } from './classes-sidenav-operations.component';

describe('ClassesSidenavOperationsComponent', () => {
  let component: ClassesSidenavOperationsComponent;
  let fixture: ComponentFixture<ClassesSidenavOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesSidenavOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesSidenavOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
