import { Time } from '@angular/common';
import { Patients } from './patients';
import { Medecins } from './medecins';

export class Rendezvous {

    daterdv : Date;
    heurerdv : Time;
    motifrdv :string;
    rdvannule:boolean;
    rdveffectuee :boolean;
    rdvreporter :boolean;
    newsdaterdvreporte :Date;
    motifrdvisreporte :string;
    daterdvcreated :Date;
    daterdvupdated :Date;
    patient :Patients;
    docteurs :Medecins;
}
