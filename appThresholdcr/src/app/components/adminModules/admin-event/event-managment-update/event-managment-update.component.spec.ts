import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagmentUpdateComponent } from './event-managment-update.component';

describe('EventManagmentUpdateComponent', () => {
  let component: EventManagmentUpdateComponent;
  let fixture: ComponentFixture<EventManagmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventManagmentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
