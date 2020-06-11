import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpHeaders, HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Utilisateurs } from '../modeles/utilisateurs';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AlertService } from '../_alert/alert.service';
import { TokenCurrentUser } from '../modeles/tokenUser';

@Injectable({
  providedIn: 'root'
})
export class FeatureAuthenticationService {

  private  loginUrl : String;
  private  findUrlUser : string;
  //public currentUser :Observable<Utilisateurs>;
  
  //private currentUserSubject :BehaviorSubject<Utilisateurs>;
  private currentUserSubject :BehaviorSubject<TokenCurrentUser>;
  public currentUser :Observable<TokenCurrentUser>;
     

  
  constructor( private http : HttpClient, public router : Router, private snackBarService : AlertService) { 
    this.loginUrl = environment.endPoint + '/api/auth';
    this.findUrlUser = environment.endPoint +''

    this.currentUserSubject = new BehaviorSubject<TokenCurrentUser>(JSON.parse(localStorage.getItem('access_token')));
    this.currentUser  = this.currentUserSubject.asObservable();
    
  }

  public isLoggedIn():boolean{
    return this.currentUserSubject.value ? true : false;
  }

  public get currentUserValue():TokenCurrentUser
  {return this.currentUserSubject.value;}

   login(utilisateur : Utilisateurs){
    let api = this.loginUrl+"/signin";
    return this.http.post<any>(`${this.loginUrl}/signin`,utilisateur)
     .pipe(map(user=>{
        localStorage.setItem('access_token',JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
     },(error:any)=>{ this.snackBarService.openFailureSnackBar("impossible de se connecter");}))
   }
  /*login(utilisateur :Utilisateurs){
    let api = this.loginUrl+"/signin";
    return this.http.post<any>(`${this.loginUrl}/signin`,utilisateur)
    .subscribe((response:any)=>{
      localStorage.setItem('access_token',JSON.stringify(response) );//response.token
      this.currentUserSubject.next(response);
      this.router.navigate(['/dashboard']);
      this.succesSnackBar();
    },error=>{
      this.snackBarService.openFailureSnackBar("impossible de se connecter");
    })
 
  } */

  doLogout(){
    let removeToken = localStorage.removeItem('access_token');
    this.currentUserSubject.next(null);
    if(removeToken ==null){ this.router.navigate(['/login'])}
    this.snackBarService.openSuccessSnackBar("Deconnexion effectuée avec succèss!!!")
 
  }


  //avoir le profil Utilisateur
  getUserProfile(utilisateur : Utilisateurs):Observable<Utilisateurs>{
    
     const numkey = 3;
    
    return this.http.get<Utilisateurs>(`http://localhost:8080/api/auth/currentUser/`+utilisateur.id);
  
  }

  errorSnackBar(){
    this.snackBarService.openFailureSnackBar("Error d autentification !!!")
}

succesSnackBar(){
this.snackBarService.openSuccessSnackBar("Connexion effectuée avec success !!!");
}

handleError(error: HttpErrorResponse){
  let msg ='';
  if(error.error instanceof ErrorEvent){
    msg = error.error.message;
  }else{
    msg =`Error Code : ${error.status}\nMessage:${error.message}`;
  }
  return throwError(msg);
}

}
