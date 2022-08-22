import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore

import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {UserComponent} from "./components/user/user.component";
import {VehicleComponent} from "./components/vehicle/vehicle.component";
import {AccountComponent} from "./components/account/account.component";
import {NewUserComponent} from "./components/new-user/new-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";

const routes: Routes = [
  {path : "dash" , component : NavBarComponent,canActivate :[AuthenticationGuard], children:[
      {path : "editUser/:id" , component : EditUserComponent},
    {path : "users" , component : UserComponent},
      {path : "newUser" , component : NewUserComponent},

      {path : "vehicles" , component : VehicleComponent},
      {path : "accounts" , component : AccountComponent},
      {path : "home" , component : HomeComponent},
    ]},

  {path : "login" , component : LoginComponent},
  {path : "" , component : LoginComponent},
  {path : "registration" , component : RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
