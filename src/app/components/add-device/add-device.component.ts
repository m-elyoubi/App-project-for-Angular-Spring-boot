import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import { AppDataState, DataStateEnum} from "../../State/state.user";
import {Devices} from "../../model/Devices";
import {VehicleService} from "../../services/vehicle.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditDeviceService} from "../../services/edit-device.service";
import {AccountService} from "../../services/account.service";


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  devices$:Observable<AppDataState<Devices[]>> | null=null;
  readonly DataStateEnum=DataStateEnum;
  idAccount:string;
  nameAccount:string;
  editDeviceFormGroup?:FormGroup;
  module: any;
  deviceFormGroup?:FormGroup;
  constructor(
    private vehicleService1:VehicleService,
    private vehicleService:VehicleService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private editDeviceService:EditDeviceService,
    private fb:FormBuilder,
    private accountService:AccountService

  )
  {
    this.idAccount=this.activatedRoute.snapshot.params['id'];
    this.nameAccount=this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    console.log("data ngOnInit")
    if (this.idAccount != null) {
      this.accountService.getAccountById(this.idAccount).subscribe(account => {
        this.deviceFormGroup = this.fb.group({

          id: [, Validators.required],
          numberOfPhone: [account.numberOfPhone, Validators.required],
          users: [account.users, Validators.required],
          accounts: [account, Validators.required],
          typeOfEquipment: ["", Validators.required],
          module: ["", Validators.required],
          speed: [, Validators.required],
          active: [true, Validators.required],

        });
      })
    }

      this.devices$ = this.vehicleService1.getDeviceByIdAccount(this.idAccount).pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );

  }

  onDelete(device:Devices) {
    let v=confirm("Are you sure ?");
    if (v==true)
      this.vehicleService.delete(device).subscribe(data=>{
      })


  }

  onEdit(device: Devices) {
    this.editDeviceService.getDeviceById(device.id).subscribe(device => {
      this.editDeviceFormGroup = this.fb.group({
        id: [device.id, Validators.required],
        numberOfPhone: [device.accounts.numberOfPhone, Validators.required],
        module: [device.module, Validators.required],
        accounts: [device.accounts, Validators.required],
        users: [device.users, Validators.required],
        typeOfEquipment: [device.typeOfEquipment, Validators.required],
        speed: [device.speed, Validators.required],
        active: [device.active, Validators.required],
      })
    });
  }

  onActive(device:Devices) {
    this.vehicleService.active(device).subscribe(data=>{
      device.active=data.active;
      console.log(device.accounts.active)
    })

  }


  onNewDevices() {

  }

  onUpdateEdit() {
    this.editDeviceService.saveUpdate(this.editDeviceFormGroup?.value).subscribe(data=>{
      alert("Success Device Updated  ")
     this.ngOnInit()
    } )
  }

  onSearchByModule() {
    if (this.module=="") {
      this.ngOnInit();
    }
    this.devices$ = this.vehicleService.getAllDevices().pipe(
      map(data=>{
        data = data.filter(res => {
          return res.module.toLocaleLowerCase().match(this.module.toLocaleLowerCase());
        })
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );

  }

  onSaveDevice() {
    this.vehicleService.saveDevice(this.deviceFormGroup?.value).subscribe(data=>{
      alert("Success Saving Device")

    })
  }
}
