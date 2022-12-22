import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSidenavOperationsComponent } from './coach-sidenav-operations.component';

describe('CoachSidenavOperationsComponent', () => {
  let component: CoachSidenavOperationsComponent;
  let fixture: ComponentFixture<CoachSidenavOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachSidenavOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachSidenavOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
