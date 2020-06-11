import { Component, OnInit } from '@angular/core';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../_animations/routes.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onClickGoBackHome() {
    this.router.navigate(['']);
  }

}
