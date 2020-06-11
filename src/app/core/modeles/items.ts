import { Privilege } from './Privileges';

export interface Item {
    title: string;
    url: string;
    picture: string;
    requiredPrivilege: Privilege;
    icon: string;
}