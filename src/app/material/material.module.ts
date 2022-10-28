import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";

const MaterialComponents=[
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule
];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
