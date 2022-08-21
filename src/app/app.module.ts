import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from "./components/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import { RegistrationComponent } from './components/registration/registration.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccountComponent } from './components/account/account.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    NavBarComponent,
    AccountComponent,
    VehicleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
