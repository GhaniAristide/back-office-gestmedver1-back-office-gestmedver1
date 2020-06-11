import {Roles} from './roles';
export class Utilisateurs {

    //accesToken:String;
    id : Number;
    username : String;
    email :String;
    password : String;
    keyCompareRandomWithObject : number;
    enabled :boolean;
    roles :Roles[];
    
}
