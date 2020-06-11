import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './core/_guard/auth';
import { NotauthorizedComponent } from './core/_configPanel/notauthorized/notauthorized.component';
import {Error404Component} from './error404/error404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocteursComponent } from './docteurs/docteurs.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { LoginComponent } from './login/login.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { Error403Component } from './core/_configPanel/error403/error403.component';

const routes: Routes = [
  
   
  { path: 'error404', loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module) }, 
 
 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  {
    path:'docteurs',component:DocteursComponent,loadChildren:()=> import('./docteurs/docteurs.module').then(m=>m.DocteursModule),canActivate:[AuthGuard]
  },
  {
    path:'patients',component:PatientsComponent,loadChildren:()=>import('./patients/patients.module').then(m=>m.PatientsModule),canActivate:[AuthGuard]
  },
  {
    path:'rendezvous',component:RendezvousComponent,loadChildren:()=>import('./rendezvous/rendezvous.module').then(m=>m.RendezvousModule),canActivate:[AuthGuard]
  },
  
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]
  },
  
   
  { path: '',component:EndpointComponent, loadChildren: () => import('./endpoint/endpoint.module').then(m => m.EndpointModule) },
  
   
  { path: 'profiluser', loadChildren: () => import('./profileuser/profileuser.module').then(m => m.ProfileuserModule), canActivate:[AuthGuard] }, 
  
 
  // url pour la gestion des erreurs
  {path:'error-403',component:Error403Component},

  {
    path:'error-401', component:NotauthorizedComponent, data:{title:''}
  }, 
  {
    path:'**', component:Error404Component, data:{title:''}
  }



];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
