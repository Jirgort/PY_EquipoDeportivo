import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagmentCreateComponent } from './event-managment-create.component';

describe('EventManagmentCreateComponent', () => {
  let component: EventManagmentCreateComponent;
  let fixture: ComponentFixture<EventManagmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventManagmentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
