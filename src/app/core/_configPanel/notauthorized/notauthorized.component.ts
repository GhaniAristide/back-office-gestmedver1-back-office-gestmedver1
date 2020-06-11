import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication/authentication.service';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../_animations/routes.animations';

export class Action {
  name: string;
  iconClass: string;
  buttonText: string;
  callback: () => void;
}

@Component({
  selector: 'app-notauthorized',
  templateUrl: './notauthorized.component.html',
  styleUrls: ['./notauthorized.component.scss']
})
export class NotauthorizedComponent implements OnInit {

  private routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  private action: Action;

  private ACTIONS: Map<String, Action> =
  new Map([
    ["dashboard", {
      name: 'dashboard',
      iconClass: 'fa-chevron-left',
      buttonText: "Retourner à l'accueil",
      callback: () => this.router.navigate([''])
    }],
    ["deconnexion", {
      name: 'deconnexion',
      iconClass: 'fa-power-off',
      buttonText: "Déconnexion",
      callback: () => this.authenticationService.doLogout()
    }]
  ]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    let actionParameter = this.route.snapshot.queryParamMap.get("action");

    if(! this.ACTIONS.has(actionParameter)) {
      actionParameter = "deconnexion";
    }

    this.action = this.ACTIONS.get(actionParameter);
  }

  onClickDoAction() {
    this.action.callback();
  }

}
