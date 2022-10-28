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
import {NewUserService} from "./services/new-user.service";
import { UserNavBarComponent } from './components/user/user-nav-bar/user-nav-bar.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserItemsComponent } from './components/user/user-list/user-items/user-items.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AccountNavBarComponent } from './components/account/account-nav-bar/account-nav-bar.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AddDeviceUserComponent } from './components/add-device-user/add-device-user.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import { AdminComponent } from './components/admin/admin.component';
import {MatDividerModule} from "@angular/material/divider";
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FlexModule} from "@angular/flex-layout";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import { MatMenuModule} from '@angular/material/menu';
import { PieComponent } from './components/pie/pie.component';
import {HighchartsChartModule} from "highcharts-angular";
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarComponent } from './components/bar/bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    NavBarComponent,
    AccountComponent,
    VehicleComponent,
    UserComponent,
    UserNavBarComponent,
    UserListComponent,
    UserItemsComponent,
    AddDeviceComponent,
    AccountNavBarComponent,
    AccountListComponent,
    AddDeviceUserComponent,
    AdminComponent,
    SideBarComponent,
    PieComponent,
    BarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgbModule,
    FlexModule,
    MatPaginatorModule,
    NgApexchartsModule,
  ],
  providers: [UserComponent,NewUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
