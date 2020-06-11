import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { FeatureAuthenticationService } from 'src/app/core/_services/feature-authentication.service';
import { PatientsService } from 'src/app/core/_services/apiRest/patients.service';
import { AlertService } from 'src/app/core/_alert/alert.service';
import { Observable } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/core/error-state/error-state-matcher';
import { DocteurData } from 'src/app/core/modeles/docteur-data';
import { PatientData } from 'src/app/core/modeles/patientData';
import { MedecinsService } from 'src/app/core/_services/apiRest/medecins.service';


@Component({
  selector: 'app-detail-profil-docteurs',
  templateUrl: './detail-profil-docteurs.component.html',
  styleUrls: ['./detail-profil-docteurs.component.scss']
})
export class DetailProfilDocteursComponent implements OnInit , OnChanges{

  public docteurForm : FormGroup;
  submitted = false;

  @Input('docteurcard') docteurcard : DocteurData;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<DocteurData>();

  addMode =false;
  editingDocteur : DocteurData;
  errorMatcherInformulaire = new MyErrorStateMatcher();


  constructor( private authService : FeatureAuthenticationService, private docteurBuilder : FormBuilder,
    private docteurService :MedecinsService, private snackBarservice : AlertService) { }

  ngOnInit() {
    this.preloadFormulaire();
  }

  ngOnChanges(changes :SimpleChanges){
    if(this.docteurcard){
      this.editingDocteur = {...this.docteurcard};
      this.addMode = false;
    }
    else{
      this.editingDocteur =
      {
        adressemaildoc :'',adressepostaldoc:'',dateUpdatedInformations :null,datecreateDoc:null,datenaisodc:null,enabled:false,matriculedoc:null,nomdoc:'',numerotelephonedoc:'',prenomsdoc:'',randomKeyCompareWithObject:null,rendezvous:null,worked:null
      }
    }
     
  }

  preloadFormulaire(){
    const webregex: RegExp = /^((https?|http?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const dateRegex : RegExp = /^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))/;

    //construire le formulaire en renseignant les differents champs de saisie
    this.docteurForm = this.docteurBuilder.group({
      nomdoc :[this.editingDocteur.nomdoc,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],

      prenomsdoc :[this.editingDocteur.prenomsdoc,[Validators.required,Validators.minLength(3),Validators.maxLength(60)]],
      adressemaildoc:[this.editingDocteur.adressemaildoc, [Validators.required, Validators.pattern(emailregex)]],
      adressepostaldoc:[this.editingDocteur.adressepostaldoc,[Validators.required,Validators.minLength(8),Validators.maxLength(200)]],
      datenaisodc:[this.editingDocteur.datenaisodc, [Validators.required, Validators.pattern(dateRegex)]],
      numerotelephonedoc:[this.editingDocteur.numerotelephonedoc,[Validators.required,Validators.minLength(11),Validators.maxLength(20)]],
     
    })
  }
  clear(){
    this.unselect.emit();
  }

  saveDocteur(){
    this.submitted = true;
    if(this.docteurForm.invalid){
      this.snackBarservice.openAvertissementSnacBar("Erreur de saisie dans le formulaire veuillez verifier les champs saisies !!!");
      return ;
    }
    else{
      this.save.emit(this.editingDocteur);
      this.clear();
    }
  }

}
