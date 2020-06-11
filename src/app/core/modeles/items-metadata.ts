import { Item } from './items';

export const ITEMS: Item[] = [
    {
        title: 'Docteurs',
        url: '/docteurs',
        picture: "../../../assets/secteurs1.jpg",
        requiredPrivilege: { authority: ["ROLE_DOCTEUR","ROLE_SUPERADMIN","ROLE_ADMIN"] },
        icon: 'table'
    },
    {
        title: 'Rendez-Vous',
        url: '/rendezvous',
        picture: "../../../assets/users1.jpeg",
        requiredPrivilege: { authority: ["ROLE_SUPERADMIN","ROLE_ADMIN",
        "ROLE_DOCTEUR","ROLE_SECRETARIAT","ROLE_PATIENT"]  },
        icon: 'table'
    },
    {
        title: 'Patients',
        url: '/patients',
        picture: "../../../assets/user-roles.png",
        requiredPrivilege: { authority: ["ROLE_PATIENT","ROLE_MODERATEUR",
        "ROLE_SUPERADMIN","ROLE_ADMIN","ROLE_DOCTEUR","ROLE_SECRETARIAT",] },
        icon: 'table'
    }
];
