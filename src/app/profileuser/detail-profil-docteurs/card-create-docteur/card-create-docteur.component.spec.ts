import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateDocteurComponent } from './card-create-docteur.component';

describe('CardCreateDocteurComponent', () => {
  let component: CardCreateDocteurComponent;
  let fixture: ComponentFixture<CardCreateDocteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCreateDocteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
