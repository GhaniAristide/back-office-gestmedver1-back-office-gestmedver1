import { EmailValidator } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Postes } from './postes';
import { Rendezvous } from './rendezvous';

export class DocteurData {

    matriculedoc : number;
    nomdoc :String;
    prenomsdoc :String;
    adressemaildoc :String;
    adressepostaldoc : String;
    datenaisodc : Date;
    numerotelephonedoc : String;
    randomKeyCompareWithObject : number;
    rendezvous : Rendezvous;
    datecreateDoc : Date;
    worked : Boolean;
    dateUpdatedInformations : Date;
    enabled : Boolean;
}
