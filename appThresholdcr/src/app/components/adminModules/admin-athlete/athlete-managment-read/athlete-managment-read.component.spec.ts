import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteManagmentReadComponent } from './athlete-managment-read.component';

describe('AthleteManagmentReadComponent', () => {
  let component: AthleteManagmentReadComponent;
  let fixture: ComponentFixture<AthleteManagmentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteManagmentReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteManagmentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
