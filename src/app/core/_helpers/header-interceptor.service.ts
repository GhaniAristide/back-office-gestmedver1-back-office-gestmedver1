import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FeatureAuthenticationService } from '../_services/feature-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService {

  constructor(private http: HttpClient, private authService : FeatureAuthenticationService) { }

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
}
