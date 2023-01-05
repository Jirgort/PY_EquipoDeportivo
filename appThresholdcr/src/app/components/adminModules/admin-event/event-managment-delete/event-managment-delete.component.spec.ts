import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagmentDeleteComponent } from './event-managment-delete.component';

describe('EventManagmentDeleteComponent', () => {
  let component: EventManagmentDeleteComponent;
  let fixture: ComponentFixture<EventManagmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventManagmentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
