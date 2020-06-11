import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AlertService } from '../../_alert/alert.service';
import { DocteurData } from '../../modeles/docteur-data';
import { FeatureAuthenticationService } from '../feature-authentication.service';
import { HeaderInterceptorService } from '../../_helpers/header-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService {

  private _urlUpdate = `environment.endPoint`;

  private docteurUrl :string;

  constructor(private http : HttpClient, private authService : FeatureAuthenticationService, private headerIntercept : HeaderInterceptorService) { 
    this.docteurUrl = environment.endPoint + '/api/docteur';
  }

  // liste de tous les docteurs
  public findAllDocteur():Observable<DocteurData[]>{
    return this.http.get<DocteurData[]>(this.docteurUrl +"/docteurs");
  }

  public findOne(keycompare :number):Observable<DocteurData>{
    return this.http.get<DocteurData>(`${this.docteurUrl}/`+keycompare,{
      headers:this.headerIntercept.getHeader()
    });
  }

  //ajouter un docteur
  public saveDocteur(docteur : DocteurData):Observable<DocteurData>{
    return this.http.post<DocteurData>(this.docteurUrl+'/createnewdocteur',docteur,{headers:this.headerIntercept.getHeader()})
  }

  //modifier un docteur
  public updateDocteur(updatedocteur : DocteurData):Observable<DocteurData>{
    return this.http.put<DocteurData>(`${this.docteurUrl}/`+updatedocteur.matriculedoc,updatedocteur);//,{headers:this.headerIntercept.getHeader()}
  }

  public deleteDocteur(idocteur):Observable<DocteurData>{
    return this.http.delete<DocteurData>(`${this.docteurUrl}/`+idocteur);
  }

}
