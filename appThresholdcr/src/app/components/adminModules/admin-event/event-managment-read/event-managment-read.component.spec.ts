import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagmentReadComponent } from './event-managment-read.component';

describe('EventManagmentReadComponent', () => {
  let component: EventManagmentReadComponent;
  let fixture: ComponentFixture<EventManagmentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventManagmentReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventManagmentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
