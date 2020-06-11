import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocteursRoutingModule } from './docteurs-routing.module';
import { DocteursComponent } from './docteurs.component';


@NgModule({
  declarations: [DocteursComponent],
  imports: [
    CommonModule,
    DocteursRoutingModule
  ]
})
export class DocteursModule { }
