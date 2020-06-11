import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { DocteurData } from 'src/app/core/modeles/docteur-data';


@Component({
  selector: 'app-card-docteur',
  templateUrl: './card-docteur.component.html',
  styleUrls: ['./card-docteur.component.scss']
})
export class CardDocteurComponent implements OnInit {

  @Input('docteurcard')docteurcard :DocteurData;
  @Output() selectedDocteurProfil = new EventEmitter<DocteurData>();
  @Output('selectMyDocteur')selectMyDocteur:DocteurData;


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  selectDocteur(docteurcard : DocteurData){
    this.selectMyDocteur = docteurcard;
    this.selectedDocteurProfil.emit(docteurcard);
  }

}
