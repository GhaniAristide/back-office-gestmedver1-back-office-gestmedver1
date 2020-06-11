import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOtherProfilsComponent } from './detail-other-profils.component';

describe('DetailOtherProfilsComponent', () => {
  let component: DetailOtherProfilsComponent;
  let fixture: ComponentFixture<DetailOtherProfilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOtherProfilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOtherProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
