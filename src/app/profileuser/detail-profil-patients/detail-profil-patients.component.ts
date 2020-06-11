import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { FeatureAuthenticationService } from 'src/app/core/_services/feature-authentication.service';
import { PatientsService } from 'src/app/core/_services/apiRest/patients.service';
import { AlertService } from 'src/app/core/_alert/alert.service';
import { Observable } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/core/error-state/error-state-matcher';
import { PatientData } from 'src/app/core/modeles/patientData';





@Component({
  selector: 'app-detail-profil-patients',
  templateUrl: './detail-profil-patients.component.html',
  styleUrls: ['./detail-profil-patients.component.scss']
})
export class DetailProfilPatientsComponent implements OnInit , OnChanges {

  public patientdataForm :FormGroup;
  submitted = false;

  @Input('patientcard') patientcard :PatientData;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<PatientData>();


   addMode = false;
   editingPatientdata : PatientData;


  errorMatcherInformulaire = new MyErrorStateMatcher();




  constructor(private patientBuilder : FormBuilder,
    private authenticationService : FeatureAuthenticationService
    , private patientsServices : PatientsService, private snackBarservice : AlertService) { }

  ngOnChanges(changes:SimpleChanges){
    if(this.patientcard ){
      this.editingPatientdata = {...this.patientcard};
      this.addMode = false;
    }else{
      this.editingPatientdata = {id:null,nompatient:'',prenompatient:'',emailpatient:'',numeropatient:'',adresspostale:'',datenaissance:null,keycomparepatientwithuserobjet:null, datecreationpatient :null,
    dateupdateinfopatient:null,enabled:null};
      this.addMode =true;
    }

  }

  ngOnInit() {
   this.preloadFormulaire();


  }

  //initailiser le formulaire à remplir avec les données



  preloadFormulaire(){

    const webregex: RegExp = /^((https?|http?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const dateRegex : RegExp = /^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))/;
    const passwordregex : RegExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/;

    //construire le formulaire en renseignant les differents champs de saisie
    this.patientdataForm = this.patientBuilder.group({
      nompatient :[this.editingPatientdata.nompatient,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],

      prenompatient :[this.editingPatientdata.prenompatient,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      emailpatient:[this.editingPatientdata.emailpatient, [Validators.required, Validators.pattern(emailregex)]],
      adresspostale:[this.editingPatientdata.adresspostale,[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
      datenaissance:[this.editingPatientdata.datenaissance, [Validators.required, Validators.pattern(dateRegex)]],
      numeropatient:[this.editingPatientdata.numeropatient,[Validators.required,Validators.minLength(11),Validators.maxLength(12)]],
      //password:[this.editingPatientVers2.password,[Validators.required,Validators.pattern(passwordregex),Validators.minLength(8),Validators.maxLength(32)]],
    })
  }

  //qitter le mode edition du patient

  clear(){
    this.unselect.emit();
  }

  // sauvegarder un patient avec emit
  savePatient(){
     this.submitted = true;
     if(this.patientdataForm.invalid){
       console.log('erreur sur les données du patient en cours ...');
       return;
     }else{
      console.log('envoie pour la sauvegarde des données du patient en cours ...');
       this.save.emit(this.editingPatientdata);
       this.clear();
     }
  }


}
