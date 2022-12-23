import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachReadComponent } from './coach-read.component';

describe('CoachReadComponent', () => {
  let component: CoachReadComponent;
  let fixture: ComponentFixture<CoachReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
