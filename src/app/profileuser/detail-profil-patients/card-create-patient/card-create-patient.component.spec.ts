import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreatePatientComponent } from './card-create-patient.component';

describe('CardCreatePatientComponent', () => {
  let component: CardCreatePatientComponent;
  let fixture: ComponentFixture<CardCreatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCreatePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
