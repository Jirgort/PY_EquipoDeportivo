import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteManagmentDeleteComponent } from './athlete-managment-delete.component';

describe('AthleteManagmentDeleteComponent', () => {
  let component: AthleteManagmentDeleteComponent;
  let fixture: ComponentFixture<AthleteManagmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteManagmentDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteManagmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
