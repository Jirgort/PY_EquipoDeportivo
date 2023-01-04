import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSidenavOperationsComponent } from './sport-sidenav-operations.component';

describe('SportSidenavOperationsComponent', () => {
  let component: SportSidenavOperationsComponent;
  let fixture: ComponentFixture<SportSidenavOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportSidenavOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportSidenavOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
