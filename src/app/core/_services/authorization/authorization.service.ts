import { Injectable } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import { Utilisateurs } from '../../modeles/utilisateurs';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private roles:Set<string> = new Set<string>();
  

  constructor(private authenticationService : AuthenticationService) {
    //this.authenticationService.currentUser().
   }
}
