import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from './core/core.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  title = 'gestionmed';
  public routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS; 
  private specialPages: any[] = [
    '/login'
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
