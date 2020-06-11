import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FieldErrorDisplayComponent} from './field-error-display/field-error-display.component';
import {AndSoOnPipe} from './pipes/and-so-on.pipe';
import { MyErrorFormulaireComponent } from './my-error-formulaire/my-error-formulaire.component';

// Contient les composants partagés
const components = [
  FieldErrorDisplayComponent
];

// Contient les pipes partagés
const pipes = [
  AndSoOnPipe
];

@NgModule({
 
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MDBBootstrapModule],
  declarations:[components,pipes, MyErrorFormulaireComponent],
  exports: [components, pipes, CommonModule, FormsModule, ReactiveFormsModule, MDBBootstrapModule]
})
export class SharedModule { }
