import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteManagmentUpdateComponent } from './athlete-managment-update.component';

describe('AthleteManagmentUpdateComponent', () => {
  let component: AthleteManagmentUpdateComponent;
  let fixture: ComponentFixture<AthleteManagmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteManagmentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteManagmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
