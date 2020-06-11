import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Router, NavigationStart} from '@angular/router';
import { SnackBarComponent } from '../_configPanel/snack-bar/snack-bar.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>();
    private keepAfterRouteChange = false;

  private delaisSeconde : number = 5;



  constructor(private _snackBar : MatSnackBar, private router : Router) {
    this.router.events.subscribe(event=>{
      if( event instanceof NavigationStart){
        if (this.keepAfterRouteChange){this.keepAfterRouteChange= false}
        else{this.subject.next()}
      }
    })
   }

   getAlert():Observable<any>{
     return this.subject.asObservable();
   }

  openSuccessSnackBar(message :string){
    this._snackBar.openFromComponent(SnackBarComponent,{
      duration:this.delaisSeconde * 1000,
      data:{message:message, iconClass:'fas fa-chek mr-2'},
      panelClass:['green-snackbar'],
      verticalPosition:'top',
      horizontalPosition:'right'
    });
  }

openFailureSnackBar(customMessage:string , keepAfterRouteChange = false){
  this.keepAfterRouteChange = keepAfterRouteChange;
  this.subject.next(
    this._snackBar.openFromComponent(SnackBarComponent,{
      duration:this.delaisSeconde * 1000,
      data:{message:customMessage, iconClass:'fas fa-times mr-2'}, 
      panelClass:['red-snackbar'],
      verticalPosition:'top',
      horizontalPosition:'center'
    })
  )
  

}

openAvertissementSnacBar(customMessage:string){

  this._snackBar.openFromComponent(SnackBarComponent,{
    duration:this.delaisSeconde * 1000,
    data:{message:customMessage, iconClass:'fas fa-exclamation-triangle'},
    panelClass:['warning-snackbar'],
    verticalPosition:'top',
    horizontalPosition:'center'
  });

}



clear(){
  console.log('test on clear')
    this.subject.next();
}



}
