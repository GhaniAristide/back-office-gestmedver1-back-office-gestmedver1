import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from './_animations/routes.animations';
import { FooterComponent } from './_configPanel/footer/footer.component';
import { NotauthorizedComponent } from './_configPanel/notauthorized/notauthorized.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { SnackBarComponent } from './_configPanel/snack-bar/snack-bar.component';
import {Error404Component} from './_configPanel/error404/error404.component';
import { NavigationComponent } from './_configPanel/navigation/navigation.component';
import { Error403Component } from './_configPanel/error403/error403.component';



export {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations
};
@NgModule({
  declarations: [FooterComponent, NavigationComponent, Error404Component, NotauthorizedComponent,
                 SnackBarComponent,
                 Error403Component,
                ],
  imports: [
    CommonModule,MDBBootstrapModule.forRoot(), RouterModule
  ],
  exports:[FooterComponent, NavigationComponent],
  entryComponents:[SnackBarComponent]
})
export class CoreModule { }
