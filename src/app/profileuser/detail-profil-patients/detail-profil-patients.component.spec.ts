import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilPatientsComponent } from './detail-profil-patients.component';

describe('DetailProfilPatientsComponent', () => {
  let component: DetailProfilPatientsComponent;
  let fixture: ComponentFixture<DetailProfilPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProfilPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
