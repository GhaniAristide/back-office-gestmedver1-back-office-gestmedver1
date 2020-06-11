import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocteursComponent } from './docteurs.component';

const routes: Routes = [{ path: '', component: DocteursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocteursRoutingModule { }
