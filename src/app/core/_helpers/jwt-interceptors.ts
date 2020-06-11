import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent } from "@angular/common/http";
FeatureAuthenticationService
import { Observable } from 'rxjs';
import { FeatureAuthenticationService } from '../_services/feature-authentication.service';

@Injectable({
    providedIn:'root'
})

export class JwtInterceptors implements HttpInterceptor {

    constructor(private authService : FeatureAuthenticationService){

    }

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
       
        let tokenUser = this.authService.currentUserValue;
        if(tokenUser && tokenUser.accessToken){
            const concatToke = tokenUser.type + tokenUser.accessToken;
            console.log("WHO IS CONCATTOKEN", concatToke);
            request = request.clone({
                setHeaders:{Authorization:`${tokenUser.type}  ${tokenUser.accessToken}`}
            });
        }
        return next.handle(request);

       /* if(this.authService.isLoggedIn){
            let tokenUser : TokenCurrentUser;
            this.authService.currentUser.subscribe(x=>tokenUser= x);
            const idToken = this.authService.currentUser;
            let concatTokenBearer = 'Bearer' + tokenUser.jwttoken;
            console.log("WHAT  BEARER", idToken);
            const cloned = req.clone({
                setHeaders:{Authorization:concatTokenBearer}
            });
            return next.handle(cloned);
        }else{
            return next.handle(req);
        }  */
       /*if(this.authService.isLoggedIn){
        const authToken = this.authService.currentUser;
        req = req.clone({
            setHeaders: {
                //Authorization:"Bearer" + authToken
                //Authorization: authToken
                Authorization: `${this.authService.currentUser}`
            }
        }); 
       } */
        
       // return next.handle(req);
    }
}
