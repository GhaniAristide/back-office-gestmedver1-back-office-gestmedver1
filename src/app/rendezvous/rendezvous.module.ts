import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezvousRoutingModule } from './rendezvous-routing.module';
import { RendezvousComponent } from './rendezvous.component';


@NgModule({
  declarations: [RendezvousComponent],
  imports: [
    CommonModule,
    RendezvousRoutingModule
  ]
})
export class RendezvousModule { }
