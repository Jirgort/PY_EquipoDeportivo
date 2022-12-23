import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteManagmentCreateComponent } from './athlete-managment-create.component';

describe('AthleteManagmentCreateComponent', () => {
  let component: AthleteManagmentCreateComponent;
  let fixture: ComponentFixture<AthleteManagmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteManagmentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteManagmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
