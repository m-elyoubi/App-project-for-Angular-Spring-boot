import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {UserComponent} from "./components/user/user.component";
import {VehicleComponent} from "./components/vehicle/vehicle.component";
import {AccountComponent} from "./components/account/account.component";
import {NewUserComponent} from "./components/new-user/new-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {NewAccountComponent} from "./components/new-account/new-account.component";
import {AddDeviceComponent} from "./components/add-device/add-device.component";
import {EditAccountComponent} from "./components/edit-account/edit-account.component";
import {EditDeviceComponent} from "./components/edit-device/edit-device.component";
import {AddDeviceUserComponent} from "./components/add-device-user/add-device-user.component";
import {AdminComponent} from "./components/admin/admin.component";

const routes: Routes = [
  {path : "dash" , component :AdminComponent,canActivate :[AuthenticationGuard], children:[
      {path : "" ,redirectTo:"home" ,pathMatch: 'full' },
      {path : "editUser/:id" , component : EditUserComponent},
      {path : "addDeviceUser/:id/:username" , component :AddDeviceUserComponent},
      {path : "editAccount/:id" , component : EditAccountComponent},
      {path : "users" , component : UserComponent},
      {path : "newUser" , component : NewUserComponent},
      {path : "newAccount" , component : NewAccountComponent},
      {path : "home" , component : HomeComponent},
      {path : "addDevice/:id/:name" , component :AddDeviceComponent},
      {path : "vehicles" , component : VehicleComponent},
      {path: "accounts",component: AccountComponent},
    ]},

  {path : "login" , component : LoginComponent},
  {path : "registration" , component : RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
