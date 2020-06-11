import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Utilisateurs } from 'src/app/core/modeles/utilisateurs';
import {Router} from '@angular/router';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/core/core.module';

@Component({
  selector: 'app-detail-other-profils',
  templateUrl: './detail-other-profils.component.html',
  styleUrls: ['./detail-other-profils.component.scss'],
  animations:[routeAnimations]
})
export class DetailOtherProfilsComponent implements OnInit {

  @Input('utilisateur')public utilisateur : Utilisateurs;

  @Output() deleted = new EventEmitter<Utilisateurs>();
  @Output() selected = new EventEmitter<Utilisateurs>();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  
  ngOnInit(){
  }

  constructor(private router : Router) { }


/**
other utilisateur
*/
  select(utilisateur : Utilisateurs){
    console.log("is selected user");
    this.selected.emit(utilisateur);

  }

  delete(utilisateur : Utilisateurs){
    console.log("is deletede patient");
    console.log("lutilisateur selectionné est : " , this.utilisateur);
    this.selected.emit(utilisateur);
  }



}
