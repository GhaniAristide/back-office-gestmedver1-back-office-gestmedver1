import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocteursComponent } from './docteurs.component';

describe('DocteursComponent', () => {
  let component: DocteursComponent;
  let fixture: ComponentFixture<DocteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
