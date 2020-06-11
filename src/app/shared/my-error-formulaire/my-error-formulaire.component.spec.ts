import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyErrorFormulaireComponent } from './my-error-formulaire.component';

describe('MyErrorFormulaireComponent', () => {
  let component: MyErrorFormulaireComponent;
  let fixture: ComponentFixture<MyErrorFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyErrorFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyErrorFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
