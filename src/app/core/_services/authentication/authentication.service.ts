import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Utilisateurs } from '../../modeles/utilisateurs';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject, timer } from 'rxjs';
import { AlertService } from '../../_alert/alert.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    
    private  loginUrl : String;
    currentUser : Utilisateurs;
    loading = false;
    
    
    
  headers = new HttpHeaders({'Content-Type':'application/json', 
                            'Access-Control-Allow-Origin':'*'});

  
  constructor( private http : HttpClient, public router : Router, private snackBarService : AlertService) { 
    this.loginUrl = environment.endPoint + '/api/auth';
    
  }

  //Pour se connecter
  signIn(utilisateur :Utilisateurs){
    let api = this.loginUrl+"/signin";
    return this.http.post<any>(`${this.loginUrl}/signin`,utilisateur)
     .subscribe((res:any)=>{
       localStorage.setItem('access_token',res.token);
       this.getUserProfile(res.id).subscribe((res)=>{
         this.currentUser =res;
         console.log("Utilisateur Connecté est : " ,this.currentUser)
         this.router.navigate(['/dashboard']);
         
         this.succesSnackBar();
         
         //location.reload(true);

       }, error =>{ 
         this.errorSnackBar(), 
         this.handleError;
         
        }
       )
     })
  }

  getToken(){
    return localStorage.getItem('access_token');

  }

  get isLogged(): boolean{
    let authToken = localStorage.getItem('access_token');
    return (authToken !==null) ? true:false;
  }


  // Se deconnecter
  doLogout(){
    let removeToken = localStorage.removeItem('access_token');
    if(removeToken ==null){ this.router.navigate(['/login'])}
    this.snackBarService.openSuccessSnackBar("Deconnexion effectuée avec succèss!!!")
 
  }

  //avoir le profil Utilisateur
  getUserProfile(id):Observable<any>{
    let api =`${this.loginUrl}/currentUser/${id}`;
    return this.http.get(api,{headers:this.headers}).pipe(map((res:Response)=>{
      return res || {}
    }),
    catchError(this.handleError))
  }

  getProfilUser():Observable<Utilisateurs>{
    let api =`${this.loginUrl}/currentUser/${this.currentUser.id}`;
    return this.http.get<Utilisateurs>(api,{headers:this.headers});

  }

  

  handleError(error: HttpErrorResponse){
    let msg ='';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
      this.snackBarService.openFailureSnackBar(msg);
    }else{
      msg =`Error Code : ${error.status}\nMessage:${error.message}`;
    }
    return throwError(msg);
  }

  errorSnackBar(){
        this.snackBarService.openFailureSnackBar("Error d autentification !!!")
  }

  succesSnackBar(){
    this.snackBarService.openSuccessSnackBar("Connexion effectuée avec success !!!");
  }
  
}
