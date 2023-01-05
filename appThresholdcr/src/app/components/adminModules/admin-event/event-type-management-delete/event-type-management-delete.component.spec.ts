import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypeManagementDeleteComponent } from './event-type-management-delete.component';

describe('EventTypeManagementDeleteComponent', () => {
  let component: EventTypeManagementDeleteComponent;
  let fixture: ComponentFixture<EventTypeManagementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTypeManagementDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypeManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
