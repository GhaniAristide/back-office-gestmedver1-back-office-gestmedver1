import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-my-error-formulaire',
  templateUrl: './my-error-formulaire.component.html',
  styleUrls: ['./my-error-formulaire.component.scss']
})
export class MyErrorFormulaireComponent implements ErrorStateMatcher {

  isErrorState(control :FormControl | null, form : FormGroupDirective |NgForm |null):
  boolean{
      const submitted = form && form.submitted;
      return !!(control && control.invalid &&  
       (control.dirty || control.touched || submitted || control.errors 
        || control.get));
  }

}
