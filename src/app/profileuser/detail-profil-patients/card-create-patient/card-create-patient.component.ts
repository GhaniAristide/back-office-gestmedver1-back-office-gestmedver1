import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { FeatureAuthenticationService } from 'src/app/core/_services/feature-authentication.service';
import { PatientsService } from 'src/app/core/_services/apiRest/patients.service';
import { AlertService } from 'src/app/core/_alert/alert.service';
import { Observable } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/core/error-state/error-state-matcher';
import { Patients } from 'src/app/core/modeles/patients';


@Component({
  selector: 'app-card-create-patient',
  templateUrl: './card-create-patient.component.html',
  styleUrls: ['../detail-profil-patients.component.scss'] //./card-create-patient.component.scss
})
export class CardCreatePatientComponent implements OnInit , OnChanges{

  public patientForms : FormGroup;
  submitted = false;
  @Input('patient') patient :Patients;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Patients>();

  editingPatient : Patients;
  errorMatcherInformulaire = new MyErrorStateMatcher();

  constructor(private patientBuilder : FormBuilder,
    private authenticationService : FeatureAuthenticationService
    , private patientsServices : PatientsService, private snackBarservice : AlertService) { }

  ngOnInit(): void {
    this.preloadFormulaire();
    this.errorMatcherInformulaire;

  }

  ngOnChanges(changes :SimpleChanges){
     this.editingPatient = {adressemail:'',adressepostal:'',datenais:null,enabled:false,nom:'',numerotelephone:'',password:'',prenoms:'',rendrevous:null}

  }

  //formulaire avec le regex de verification 
  preloadFormulaire(){

    const webregex: RegExp = /^((https?|http?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const dateRegex : RegExp = /^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))/;
    const passwordregex : RegExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/;

    //construire le formulaire en renseignant les differents champs de saisie
    this.patientForms = this.patientBuilder.group({

     nom :[this.editingPatient.nom,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],

     prenoms :[this.editingPatient.prenoms,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
     adressemail:[this.editingPatient.adressemail, [Validators.required, Validators.pattern(emailregex)]],
     adressepostal:[this.editingPatient.adressepostal,[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
     datenais:[this.editingPatient.datenais, [Validators.required, Validators.pattern(dateRegex)]],
     numerotelephone:[this.editingPatient.numerotelephone,[Validators.required,Validators.minLength(11),Validators.maxLength(12)]],
      password:[this.editingPatient.password,[Validators.required,Validators.pattern(passwordregex),Validators.minLength(8),Validators.maxLength(32)]],
    })
  }

  //qitter le mode edition du patient

  clear(){
    this.unselect.emit();
  }

    // sauvegarder un patient avec emit
    savePatient(){
      this.submitted = true;
      if(this.patientForms.invalid){
        console.log('erreur sur les données du patient en cours ...');
        return;
      }else{
       console.log('envoie pour la sauvegarde des données du patient en cours ...');
        this.save.emit(this.editingPatient);
        this.clear();
      }
   }



}
