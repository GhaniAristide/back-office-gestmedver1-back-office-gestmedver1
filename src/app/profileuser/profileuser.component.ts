import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertService } from '../core/_alert/alert.service';
import { Observable } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from 'src/app/core/core.module';
import { Utilisateurs } from '../core/modeles/utilisateurs';
import { Item } from '../core/modeles/items';
import { ITEMS } from '../core/modeles/items-metadata';
import { FeatureAuthenticationService } from '../core/_services/feature-authentication.service';
import { Patients } from '../core/modeles/patients';
import { PatientsService } from '../core/_services/apiRest/patients.service';
import { PatientData } from '../core/modeles/patientData';
import { TokenCurrentUser} from '../core/modeles/tokenUser';
import { DocteurData } from '../core/modeles/docteur-data';
import { Medecins } from '../core/modeles/medecins';
import { MedecinsService } from '../core/_services/apiRest/medecins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.scss'],
  animations:[routeAnimations]
})
export class ProfileuserComponent implements OnInit {

  //boolean sur les card Patient
  boolToSeeCard : boolean = true;
  boolToEditCard : boolean =false;
  boolToCreateCard : boolean = false;

  //boolean active le template patientCard ou DocteurCard
  boolActiveCardPatient : boolean = false;
  boolActiveCardDocteur :boolean = false;


  //boolean sur les card docteurs
  boolToSeeCardDocteur : boolean = true;
  boolToEditCardDocteur : boolean =false;
  boolToCreateCardDocteur : boolean = false;


  items : Item[];

  //injection et dependance sur le patient
  patientInject$ : Observable<PatientData>;
  selectedPAtientProfil : PatientData;
  patientTodelete : PatientData;
  //créer un nouveau patient
  createPatientByAdmin :Patients;


  // à injecter dans le CARD Utilisateur
  utilisateurs$ : Observable<Utilisateurs>;

  selectedProfilutilisateur : Utilisateurs;

  //injection et dependance sur le Docteur
  docteurInject$ :Observable<DocteurData>;
  selectedDocteurProfil : DocteurData;
  docteurTodelete : DocteurData;
  createDocteurByAdmin :Medecins;

  //recharger l'utilisateur courrant
  public currentUser : Utilisateurs;
  public paternUser : any;
  public tokenUser : TokenCurrentUser;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private http: HttpClient,
    private authenticationService : FeatureAuthenticationService,
    private snackBarService : AlertService, private router :Router,
    private patientService : PatientsService,
    private docteurService : MedecinsService) {


   }

  ngOnInit(){
    this.returnUser();
    //this.returnCurrentUser();

  }

  public returnUser(){

    this.authenticationService.currentUser.subscribe(x=>this.tokenUser = x);

    console.log("i am User Connected  by TokenUser", this.tokenUser);
          //methode pour l'injection du profil dans les datas patient
           let keycompareUser : number = this.tokenUser.keyCompare;
          console.log("voir la clée de comparaison :" , keycompareUser);
          
          if(this.tokenUser.rolesList =="PATIENT"){
            this.patientInject$ =this.patientService.findOne(keycompareUser);
            this.boolActiveCardDocteur = false;
            this.boolActiveCardPatient =true;
          }else if(this.tokenUser.rolesList =="DOCTEUR"){
            this.docteurInject$ =this.docteurService.findOne(keycompareUser);
            this.boolActiveCardPatient =false;
            this.boolActiveCardDocteur = true;
                 
          }else {
            this.snackBarService.openAvertissementSnacBar("Votre profil n'est pas reconnu")
          }
      

  }


  /*=========================== Methode pour le patient  ===================================== */

  askTodelete(patientData :PatientData){
       this.deletePatient(patientData);
  }

  createNewPatient(){

    this.boolToSeeCard  = false;
    this.boolToEditCard  =false;
    this.boolToCreateCard  = true;
    this.createPatientByAdmin = new Patients();
  }

  loadPatients() {
    this.returnUser();
    this.boolToSeeCard  = true;
  }


  deletePatient(patientData : PatientData){

    if(patientData){
      this.patientService.deletePatient(patientData)
       .subscribe(response=>{
         this.snackBarService.openSuccessSnackBar("Suppression de votre profil effectué avec succèss");
         this.authenticationService.doLogout();
       },(error)=>{this.snackBarService.openFailureSnackBar("Erreur lors de la suppression de votre profil")});
    }
  }

  clear(){
    this.selectedPAtientProfil = null;
    this.boolToEditCard  =false;
    this.boolToCreateCard  = false;
    this.boolToSeeCard  = true;
  }

  clearPatientforSave(){
    this.boolToEditCard  =false;
    this.boolToCreateCard  = false;
    this.boolToSeeCard  = true;
    
    this.createPatientByAdmin = null;

  }



  select(patientData :PatientData){
    console.log('charge les données ', patientData);
    this.selectedPAtientProfil = patientData;
    this.boolToSeeCard  = false;
    this.boolToEditCard  =true;
    this.boolToCreateCard  = false;
  }

saveNewPatient(patient : Patients){
  console.log('to save patient');
    this.boolToSeeCard  = true;
    this.boolToEditCard  =false;
    this.boolToCreateCard  = false;
}
  save(patientData : PatientData){
    if(this.selectedPAtientProfil){
      this.update(patientData);
    }else{
      this.add(patientData);
    }
  }

  update(patientData : PatientData){
    this.patientService.updatePatient(patientData).subscribe(
      response=>{this.snackBarService.openSuccessSnackBar("Patient mise à jour avec success!!");
      this.returnUser();
    },
      (error)=>{
        this.snackBarService.openFailureSnackBar("Mise à Jour echouée !!!");
      }
    )
  }

  add(patientData : PatientData){
    this.patientService.savePatient(patientData)
     .subscribe((response)=>{
       this.snackBarService.openSuccessSnackBar("Patient Ajouté avec succès !!!")
     },(error)=>{
       this.snackBarService.openFailureSnackBar("Sauvegarde a echoué !!!");
     })
  }

  /* ===============================================end methode patient =================================================*/


    /*=========================== Methode pour le Docteur  ===================================== */

    askTodeleteDocteur(docteurData :DocteurData){
      this.deleteDocteur(docteurData);
 }

 createNewDocteur(){

   this.boolToSeeCardDocteur  = false;
   this.boolToEditCardDocteur  =false;
   this.boolToCreateCardDocteur  = true;
   this.createDocteurByAdmin= new Medecins();
 }

 loadDocteur() {
   this.returnUser();
   this.boolToSeeCardDocteur  = true;
 }


 deleteDocteur(docteurData : DocteurData){

   if(docteurData){
     this.docteurService.deleteDocteur(docteurData)
      .subscribe(response=>{
        this.snackBarService.openSuccessSnackBar("Suppression de votre profil effectué avec succèss");
        this.authenticationService.doLogout();
      },(error)=>{this.snackBarService.openFailureSnackBar("Erreur lors de la suppression de votre profil")});
   }
 }

 clearDocteur(){
   this.selectedDocteurProfil = null;
   this.boolToEditCardDocteur  =false;
   this.boolToCreateCardDocteur  = false;
   this.boolToSeeCardDocteur  = true;
 }

 clearDocteurforSave(){
   this.boolToEditCardDocteur  =false;
   this.boolToCreateCardDocteur  = false;
   this.boolToSeeCardDocteur  = true;
   
   this.createDocteurByAdmin = null;

 }



 selectDocteur(docteurData :DocteurData){
   console.log('charge les données ', docteurData);
   this.selectedDocteurProfil = docteurData;
   console.log("WHO IS SELECTEDDOCTEUR PROFIL IN selectDocteur", this.selectedDocteurProfil);
   this.boolToSeeCardDocteur  = false;
   this.boolToEditCardDocteur  =true;
   this.boolToCreateCardDocteur  = false;
 }

saveNewDocteur(docteur : Medecins){
 console.log('to save patient');
   this.boolToSeeCardDocteur  = true;
   this.boolToEditCardDocteur  =false;
   this.boolToCreateCardDocteur  = false;
}
 saveDocteur(docteur : DocteurData){
   if(this.selectedDocteurProfil){
     this.updateDocteur(docteur);
   }else{
     this.addDocteur(docteur);
   }
 }

 updateDocteur(docteurData : DocteurData){
   this.docteurService.updateDocteur(docteurData)
   .subscribe(
     response=>{this.snackBarService.openSuccessSnackBar("Docteur  mise à jour avec success!!");
     this.returnUser();
   },
     (error)=>{
       this.snackBarService.openFailureSnackBar("Mise à Jour echouée !!!");
     }
   )
 }

 addDocteur(docteurData : DocteurData){
   this.docteurService.saveDocteur(docteurData)
   
    .subscribe((response)=>{
      this.snackBarService.openSuccessSnackBar("docteur Ajouté avec succès !!!")
    },(error)=>{
      this.snackBarService.openFailureSnackBar("Sauvegarde a echoué !!!");
    })
 }

 /* ===============================================end methode docteur  =================================================*/



}
