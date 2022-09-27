import { Component, OnInit } from '@angular/core';
import {EditDeviceService} from "../../services/edit-device.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AppDataState,DataStateEnum} from "../../State/state.user";
import {Devices} from "../../model/Devices";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {
  //devices$:Observable<AppDataState<Devices[]>> | null=null;
  readonly DataStateEnum = DataStateEnum;
  idDevice: number;
  editDeviceFormGroup?: FormGroup;

  constructor(private router:Router,private editDeviceService: EditDeviceService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.idDevice = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.editDeviceService.getDeviceById(this.idDevice).subscribe(device => {
      this.editDeviceFormGroup = this.fb.group({
        id: [device.id, Validators.required],
        numberOfPhone: [device.accounts.numberOfPhone, Validators.required],
        module: [device.module, Validators.required],
        typeOfEquipment: [device.typeOfEquipment, Validators.required],
        speed: [device.speed, Validators.required],
        active: [device.active, Validators.required],
      })
    });

  }


  onUpdateEdit() {
    this.editDeviceService.saveUpdate(this.editDeviceFormGroup?.value).subscribe(data=>{
      alert("Success Device Updated  ")
     // this.router.navigateByUrl("/dash/accounts/addDevice");
    })
  }
}
