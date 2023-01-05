import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypeManagementCreateComponent } from './event-type-management-create.component';

describe('EventTypeManagementCreateComponent', () => {
  let component: EventTypeManagementCreateComponent;
  let fixture: ComponentFixture<EventTypeManagementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypeManagementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypeManagementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
