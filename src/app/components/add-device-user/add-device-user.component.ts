import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState,DataStateEnum} from "../../State/state.user";
import {Devices} from "../../model/Devices";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EditDeviceService} from "../../services/edit-device.service";
import {UserService} from "../../services/user.service";
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-add-device-user',
  templateUrl: './add-device-user.component.html',
  styleUrls: ['./add-device-user.component.scss']
})
export class AddDeviceUserComponent implements OnInit {

  module: any;
  devices$:Observable<AppDataState<Devices[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;

  editDeviceFormGroup?:FormGroup;
  deviceFormGroup?:FormGroup;
  idUser:number;
  nameUser: string;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private editDeviceService:EditDeviceService,
    private fb:FormBuilder,
    private userService:UserService,
    private vehicleService:VehicleService
  ) {
    this.idUser=this.activatedRoute.snapshot.params['id'];
    this.nameUser=this.activatedRoute.snapshot.params['username'];
  }

  ngOnInit(): void {

    if (this.idUser != null) {
      this.userService.getUserById(this.idUser).subscribe(user => {
        this.deviceFormGroup = this.fb.group({

          id: [, Validators.required],
          username: [user.username, Validators.required],
          numberOfPhone: [user.numberOfPhone, Validators.required],
          users: [user, Validators.required],
          accounts: [user.accounts, Validators.required],
          typeOfEquipment: ["", Validators.required],
          module: ["", Validators.required],
          speed: [, Validators.required],
          active: [true, Validators.required],

        });
      })
    }
    this.devices$ = this.vehicleService.getDeviceByIdUser(this.idUser).pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }


  onSearchByModule() {
    if (this.module!="") {


      this.devices$ = this.vehicleService.getAllDevices().pipe(
        map(data => {
          data = data.filter(res => {
            return res.module.toLocaleLowerCase().match(this.module.toLocaleLowerCase());
          })
          return ({dataState: DataStateEnum.LOADED, data: data})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
    }

  }

  onActive(device: any) {
    this.vehicleService.active(device).subscribe(data=>{
      device.active=data.active;
      console.log(device.accounts.active)
    })
  }

  onDelete(device: any) {
    let v=confirm("Are you sure ?");
    if (v==true)
      this.vehicleService.delete(device).subscribe(data=>{
      })
  }

  onEdit(device: any) {
    this.editDeviceService.getDeviceById(device.id).subscribe(device => {
      this.editDeviceFormGroup = this.fb.group({
        id: [device.id, Validators.required],
        username: [device.users.username, Validators.required],
        accounts: [device.accounts, Validators.required],
        users: [device.users, Validators.required],
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
      this.ngOnInit();
    })
  }

  onSaveDevice() {
    this.vehicleService.saveDevice(this.deviceFormGroup?.value).subscribe(data=>{
      alert("Success Saving Device")

    })
  }
}
