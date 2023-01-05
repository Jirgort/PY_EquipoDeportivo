import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSidenavOperationsComponent } from './event-sidenav-operations.component';

describe('EventSidenavOperationsComponent', () => {
  let component: EventSidenavOperationsComponent;
  let fixture: ComponentFixture<EventSidenavOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSidenavOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSidenavOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
