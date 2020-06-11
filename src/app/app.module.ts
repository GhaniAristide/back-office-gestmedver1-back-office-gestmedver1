import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptors} from './core/_helpers/jwt-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material/material.module';
import { ErrorInterceptors } from './core/_helpers/error-interceptors';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule, FormsModule, MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true }  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
