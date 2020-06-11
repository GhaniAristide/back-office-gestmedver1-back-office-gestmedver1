import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndpointComponent } from './endpoint.component';

const routes: Routes = [{ path: '', component: EndpointComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndpointRoutingModule { }
