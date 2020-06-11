import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, 
UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication/authentication.service';
import { AlertService } from '../_alert/alert.service';
import { FeatureAuthenticationService } from '../_services/feature-authentication.service';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate  {

    constructor(public authService: FeatureAuthenticationService, public router :Router, private snackBarService:AlertService){}

    canActivate(next : ActivatedRouteSnapshot,state: RouterStateSnapshot ) :Observable<boolean> | Promise<boolean> | boolean{
       
       /* if(this.authService.isLogged !==true){
            // A remplacer par un snackBar pour fermer//
            
            this.router.navigate(['login']);
            this.snackBarService.openAvertissementSnacBar("Veuillez vous identifier pour avoir access à votre page !!!! ");
            return false;
        }else{
            return true;
        }*/
        const tokenCurrentUser = this.authService.currentUserValue
        if(!tokenCurrentUser){
            // A remplacer par un snackBar pour fermer//
            
            this.router.navigate(['login']);
            this.snackBarService.openAvertissementSnacBar("Veuillez vous identifier pour avoir access à votre page !!!! ");
            return false;
        }else{
            return true;
        }
       
    }
}
