import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteSidenavOperationsComponent } from './athlete-sidenav-operations.component';

describe('AthleteSidenavOperationsComponent', () => {
  let component: AthleteSidenavOperationsComponent;
  let fixture: ComponentFixture<AthleteSidenavOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteSidenavOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteSidenavOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
