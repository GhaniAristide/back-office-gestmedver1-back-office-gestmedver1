import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Patients } from '../../modeles/patients';
import { AlertService } from '../../_alert/alert.service';
import { PatientData } from '../../modeles/patientData';
import { FeatureAuthenticationService } from '../feature-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {


 private _urlUpdate = `environment.endPoint`;

  private patientUrl :string;

  constructor(private http :HttpClient,private authService : FeatureAuthenticationService) {
    this.patientUrl = environment.endPoint + '/api/patient';
   }

   //liste de tous les patients
   public findallPatients():Observable<Patients[]>{
     return this.http.get<Patients[]>(this.patientUrl+"/allpatients");
   }

   getHeader(){
    let tokenUser = this.authService.currentUserValue;
    if(tokenUser && tokenUser.accessToken){
        const concatToke = tokenUser.type + tokenUser.accessToken;
        console.log("WHO IS CONCATTOKEN", concatToke);
       
        let reqHeader = new HttpHeaders({ 
          'Content-Type': 'application/json',
      
          'Authorization': `${tokenUser.type}  ${tokenUser.accessToken}`
       });
       return reqHeader;
    }

   }

   //retourner un seul patient
   public findOne(keycompare:number):Observable<PatientData>{
    return this.http.get<PatientData>(`${this.patientUrl}/`+keycompare,{headers:this.getHeader()});//,{headers:reqHeader}
   }

   //ajouter un patient
   public savePatient(patient : PatientData):Observable<PatientData>{
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
  
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
   });
     return this.http.post<PatientData>(this.patientUrl+"/createpatients",patient,{headers : reqHeader});
   }

   //modifier un patient
   public updatePatient(updatedpatient : PatientData):Observable<PatientData>{
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
  
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
   });

    return this.http.put<PatientData>(`${this.patientUrl}/`+updatedpatient.id,updatedpatient);  //,{headers:this.getHeader()}

   }

   //supprimer un patient
   public deletePatient(idpatient):Observable<Patients>{
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
  
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
   });
     return this.http.delete<Patients>(`${this.patientUrl}/`+idpatient);
   }
}
