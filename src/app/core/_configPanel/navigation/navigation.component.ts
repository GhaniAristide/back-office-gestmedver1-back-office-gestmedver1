import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import { AuthorizationService } from '../../_services/authorization/authorization.service';
import { Item } from '../../modeles/items';
import { ITEMS } from '../../modeles/items-metadata';
import { Router } from '@angular/router';
import { Utilisateurs } from '../../modeles/utilisateurs';
import { Observable, observable } from 'rxjs';
import { FeatureAuthenticationService } from '../../_services/feature-authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;
  items: Item[];
  @Input() eventLoggIn : boolean =false;
  @Input() eventLogout : boolean =true;

  

  constructor(
    private authenticationService: FeatureAuthenticationService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
    this.clicked = this.clicked === undefined ? false : true;
    this.items = ITEMS;
    this.eventLoggIn = this.authenticationService.isLoggedIn();
    
  }

  ngOnInit(){
    this.eventOnClick();
    this.logStateUser();
    
  
  
  }

  onClickLogout() {
    this.authenticationService.doLogout();
    this.eventLoggIn = false;
    this.eventLogout = true;
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  onClickNavigate(url: string) {
    this.router.navigate([url]);
  }


  loginClick(){
    this.router.navigate(['login'])
  }


  eventOnClick(){
    const realThis = this;
    if(realThis.authenticationService.isLoggedIn()==true){
       realThis.eventLoggIn = true;

      
    }
  }

  logStateUser():Observable<any>{

    let time = new Observable<string>(observer => {
      setInterval(() => observer.next(
        new Date().toString()), 1000);
    });
    if(this.authenticationService.isLoggedIn() ==true){
      this.eventLoggIn = true;
      this.eventLogout =false;
      return time;
    }
    else {
      this.eventLoggIn = false;
      this.eventLogout =true;
      return time;
    }
  }


}
