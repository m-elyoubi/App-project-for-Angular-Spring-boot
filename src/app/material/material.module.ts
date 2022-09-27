import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents=[
  MatSliderModule,
  MatButtonModule
];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
