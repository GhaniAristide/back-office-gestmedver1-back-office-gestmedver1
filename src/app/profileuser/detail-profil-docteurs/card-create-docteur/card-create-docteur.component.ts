import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { FeatureAuthenticationService } from 'src/app/core/_services/feature-authentication.service';
import { MedecinsService } from 'src/app/core/_services/apiRest/medecins.service';
import { AlertService } from 'src/app/core/_alert/alert.service';
import { Observable } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/core/error-state/error-state-matcher';
import { DocteurData } from 'src/app/core/modeles/docteur-data';
import { Medecins } from 'src/app/core/modeles/medecins';

@Component({
  selector: 'app-card-create-docteur',
  templateUrl: './card-create-docteur.component.html',
  styleUrls: ['../detail-profil-docteurs.component.scss']
})
export class CardCreateDocteurComponent implements OnInit, OnChanges {

  docteurForms : FormGroup;
  submitted = false;
  @Input('docteur') docteur : Medecins;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Medecins>();
  
  
  editingDocteur :Medecins;
  errorMatcherInformulaire = new MyErrorStateMatcher();


  constructor(private docteurBuilder : FormBuilder, private authService : FeatureAuthenticationService,
    private docteurService : MedecinsService, private snackBarservice : AlertService) { }

  ngOnInit() {
    this.preloadFormulaire();
    this.errorMatcherInformulaire;
  }
  

  ngOnChanges(changes :SimpleChanges){
    this.editingDocteur ={adressemail :'',adressepostal:'', datenais:null,nom:'',numerotelephone:'',password:'',prenoms:'',worked:false}
  }

  preloadFormulaire(){
    const webregex: RegExp = /^((https?|http?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const dateRegex : RegExp = /^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))/;
    const passwordregex : RegExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/;

    //construire le formulaire en renseignant les differents champs de saisie
    this.docteurForms = this.docteurBuilder.group({

      nom :[this.editingDocteur.nom,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
 
      prenoms :[this.editingDocteur.prenoms,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      adressemail:[this.editingDocteur.adressemail, [Validators.required, Validators.pattern(emailregex)]],
      adressepostal:[this.editingDocteur.adressepostal,[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
      datenais:[this.editingDocteur.datenais, [Validators.required, Validators.pattern(dateRegex)]],
      numerotelephone:[this.editingDocteur.numerotelephone,[Validators.required,Validators.minLength(11),Validators.maxLength(12)]],
       password:[this.editingDocteur.password,[Validators.required,Validators.pattern(passwordregex),Validators.minLength(8),Validators.maxLength(32)]],
     })
  }

    //qitter le mode edition du patient

    clear(){
      this.unselect.emit();
    }
  
      // sauvegarder un patient avec emit
      saveDocteur(){
       this.submitted = true;
        if(this.docteurForms.invalid){
          console.log('erreur sur les données du patient en cours ...');
          return;
        }else{
         console.log('envoie pour la sauvegarde des données du patient en cours ...');
          this.save.emit(this.editingDocteur);
          this.clear();
        }
     }

}
