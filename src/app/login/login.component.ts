import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from '../core/_services/authentication/authentication.service';
import { Router } from '@angular/router';
import {Utilisateurs} from '../core/modeles/utilisateurs';
import  {AlertService} from '../core/_alert/alert.service';
  import { from } from 'rxjs';
import { routeAnimations } from '../core/core.module';
import { FeatureAuthenticationService } from '../core/_services/feature-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[routeAnimations]
})
export class LoginComponent implements OnInit {

  signinForm : FormGroup;
  @Input() loading = false;
  submitted = false;
  returnUrl : string;
  @Input() error :string | null; 
  
  constructor(private formBuilder : FormBuilder, private authService : FeatureAuthenticationService, private router : Router, private snackbarService: AlertService) {
    this.signinForm = this.formBuilder.group({
      email:[''], 
      password:['']
    }) ;
    if (this.authService.currentUserValue){this.router.navigate(['dashboard'])}
   }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({email:['',Validators.required],
                                               password:['',Validators.required]})
  }

  loginUser(){
    const realThis = this;
    this.submitted = true;
    //this.snackbarService.clear();

    if(this.signinForm.invalid){
      this.snackbarService.openAvertissementSnacBar(" Champs manquant");
      return;
    }

    this.loading=true;
    this.authService.login(this.signinForm.value)
    .pipe().subscribe(data=>{
      this.router.navigate(['/dashboard']);
      this.succesSnackBar();
    },eror=>{this.errorSnackBar()})
    
    if(realThis.authService.isLoggedIn){
     
      //this.error="error de connexion veuillez verrifier vos identifiants ";
      this.loading=false;
    }else{this.loading=false;}

    
    //
   
  
  }
  errorSnackBar(){
    this.snackbarService.openFailureSnackBar("Error d autentification !!!")
}

  succesSnackBar(){
    this.snackbarService.openSuccessSnackBar("Connexion effectuée avec success !!!");
    }

  get f(){return this.signinForm.controls;}

  onSubmit(){
    const realThis = this;
    this.submitted = true;
    //this.snackbarService.clearSnackbar();

    if(this.signinForm.invalid){
      this.snackbarService.openAvertissementSnacBar(" Champs manquant");
      return;
    }

  
  
      this.loading=true;
      this.authService.login(this.signinForm.value);
      
      if(this.signinForm.valid && realThis.authService.isLoggedIn){
        
      
      this.loading = false;
      return
    }
    //realThis.stopLoading();
    
    
   
    
  }

  stopLoading(){
    if(!this.authService.isLoggedIn){
      this.loading =false;
      return;
    }
  }

}
