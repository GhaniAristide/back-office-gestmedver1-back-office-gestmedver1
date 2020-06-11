import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import { PatientData } from 'src/app/core/modeles/patientData';

@Component({
  selector: 'app-card-patient',
  templateUrl: './card-patient.component.html',
  styleUrls: ['./card-patient.component.scss']
})
export class CardPatientComponent implements OnInit {

  @Input('patientcard') patientcard : PatientData;

  @Output()  selectedPAtientProfil = new EventEmitter<PatientData>();
  @Output('selectMyPatient ') selectMyPatient : PatientData; 
  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  

  selectPatient(patientcard :PatientData){
    console.log("charge moi les données depuis le card-Patient ", patientcard);
    this.selectMyPatient = patientcard;
    this.selectedPAtientProfil.emit(patientcard);
  }

}
