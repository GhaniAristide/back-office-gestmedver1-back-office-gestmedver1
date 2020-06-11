import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';


import { ProfileuserComponent } from './profileuser.component';
import { CardprofilComponent } from './cardprofil/cardprofil.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DetailProfilPatientsComponent } from './detail-profil-patients/detail-profil-patients.component';
import { DetailProfilDocteursComponent } from './detail-profil-docteurs/detail-profil-docteurs.component';
import { DetailOtherProfilsComponent } from './detail-other-profils/detail-other-profils.component';
import { CardPatientComponent } from './detail-profil-patients/card-patient/card-patient.component';
import { CardCreatePatientComponent } from './detail-profil-patients/card-create-patient/card-create-patient.component';
import { CardCreateDocteurComponent } from './detail-profil-docteurs/card-create-docteur/card-create-docteur.component';
import { CardDocteurComponent } from './detail-profil-docteurs/card-docteur/card-docteur.component';


const routes: Routes = [{ path: '', component: ProfileuserComponent, data:{title:''} }];

@NgModule({
  declarations: [ProfileuserComponent, CardprofilComponent, DetailProfilPatientsComponent, DetailProfilDocteursComponent, DetailOtherProfilsComponent, CardPatientComponent, CardCreatePatientComponent, CardCreateDocteurComponent, CardDocteurComponent],
  imports: [
    CommonModule,SharedModule,MaterialModule,
    RouterModule.forChild(routes)
  ], exports:[RouterModule]
})
export class ProfileuserModule { }
