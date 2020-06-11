import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { Utilisateurs } from 'src/app/core/modeles/utilisateurs';
import { PatientsService } from 'src/app/core/_services/apiRest/patients.service';
import { Patients } from 'src/app/core/modeles/patients';
import { PatientData } from 'src/app/core/modeles/patientData';




@Component({
  selector: 'app-cardprofil',
  templateUrl: './cardprofil.component.html',
  styleUrls: ['./cardprofil.component.scss'],

})
export class CardprofilComponent  implements OnInit {

  @Input('utilisateur')public utilisateur : Utilisateurs;

  @Output() deleted = new EventEmitter<Utilisateurs>();
  @Output() selected = new EventEmitter<Utilisateurs>();
  @Output() selectedPatient = new EventEmitter<Patients>();
  ngOnInit(){
  }

  constructor(private router : Router, private patientService : PatientsService) { }



/**
statut patients
*/
 /**  selectUtilisateurs(patient : Utilisateurs){
    console.log("is selected user" , patient);
    console.log("selectionnée le profil du patient");
      this.patientService.findOne(patient.keyCompareRandomWithObject)
       .subscribe((data)=>{
         let patient : PatientData;
         patient = data;
         console.log("quel est le patient selectionné :", patient);
         //this.selectedPatient.emit(patient);
         
       })


  } **/

  deleteUtilisateurs(patient : Utilisateurs){
    console.log("is deletede patient");
    this.selected.emit(patient);
  }







}
