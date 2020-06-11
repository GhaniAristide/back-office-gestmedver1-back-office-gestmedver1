import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from '../_alert/alert.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptors implements HttpInterceptor {
 
    
    constructor(private authService : AuthenticationService, private router :Router, private snackBarService : AlertService){}

    intercept(request:HttpRequest<any>,next :HttpHandler):Observable<HttpEvent<any>>{
        console.log("Intercepted");
        return next.handle(request).pipe(catchError(err =>{
            if(err.status ===401){
                if(this.authService.isLogged){
                   
                    this.snackBarService.openFailureSnackBar("NOT AUTHORIZED !!");
                    this.router.navigate(['error-401'])
                }else{
                    this.snackBarService.openFailureSnackBar("NOT AUTHORIZED !!");
                    this.authService.doLogout();
                    
                }
            }
            else if(err.status ==400){
                this.snackBarService.openFailureSnackBar("Mauvaise données Insérées");
                
                location.reload(true);
                
            }
            else if(err.status ==403){
                this.router.navigate(['error-403']);
            }
            else if(err.status ==102){
                this.snackBarService.openAvertissementSnacBar("Erreur de connexion reseau | serveur fermé veuillez contacter l administrateur ou verrifier votre connexion internet ")
                this.authService.doLogout();
            }
            //const error = err.error.message || err.statusText;
            return throwError(err);
        }))
    }
}
