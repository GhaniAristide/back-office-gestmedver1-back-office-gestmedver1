import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilDocteursComponent } from './detail-profil-docteurs.component';

describe('DetailProfilDocteursComponent', () => {
  let component: DetailProfilDocteursComponent;
  let fixture: ComponentFixture<DetailProfilDocteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProfilDocteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilDocteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
