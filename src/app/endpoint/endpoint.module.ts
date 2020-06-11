import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndpointRoutingModule } from './endpoint-routing.module';
import { EndpointComponent } from './endpoint.component';


@NgModule({
  declarations: [EndpointComponent],
  imports: [
    CommonModule,
    EndpointRoutingModule
  ]
})
export class EndpointModule { }
