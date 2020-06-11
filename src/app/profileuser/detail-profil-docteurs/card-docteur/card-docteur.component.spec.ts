import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDocteurComponent } from './card-docteur.component';

describe('CardDocteurComponent', () => {
  let component: CardDocteurComponent;
  let fixture: ComponentFixture<CardDocteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDocteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
