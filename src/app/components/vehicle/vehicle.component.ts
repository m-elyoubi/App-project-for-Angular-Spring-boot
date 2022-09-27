import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState,DataStateEnum} from "../../State/state.user";
import {Devices} from "../../model/Devices";
import {VehicleService} from "../../services/vehicle.service";
import {AccountService} from "../../services/account.service";
import {Accounts} from "../../model/Accounts";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Users} from "../../model/Users";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  devices$?:Observable<AppDataState<Devices[]>>;
  readonly DataStateEnum=DataStateEnum;
  allIdAccount?: Accounts[];
  IdAccSelected!: Accounts;
  IdUserSelected!: Users;
  allIdUserJoinAcc?: Users[];
  module: any;

  constructor(private vehicleService:VehicleService,private accountService:AccountService,private userService:UserService,private fb:FormBuilder

  ) {

  }

  ngOnInit(): void {
    if (this.IdAccSelected!=null && this.IdUserSelected!=null){
      this.devices$ = this.vehicleService.getDevicesByIdAccountAndIdUser(this.IdAccSelected, this.IdUserSelected).pipe(
        map(data => {
          return ({dataState: DataStateEnum.LOADED, data: data})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
    }
    else
    {
      this.devices$ = this.vehicleService.getAllDevices().pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
    }

  }



  onActive(device: Devices) {
    this.vehicleService.active(device).subscribe(data=>{
      device.active=data.active;
    })

  }

  getAllIdAccount() {
    this.accountService.getAllAccounts().subscribe(accounts=>{
      this.allIdAccount=accounts;
    })
 if (this.IdAccSelected!=null) {
   this.devices$ = this.vehicleService.getDevicesByAccount(this.IdAccSelected).pipe(
     map(data => {
       console.log("getDevicesByAccount:");
       console.log(data);
       return ({dataState: DataStateEnum.LOADED, data: data})
     }),
     startWith({dataState: DataStateEnum.LOADING}),
     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
   );
 }
  }
  getAllIdUserJoinAcc() {
    if (this.IdAccSelected!=null) {
      this.userService.getUserJoinAcc(this.IdAccSelected).subscribe(users => {
        this.allIdUserJoinAcc = users;
      })

    }
  }

  onSearchByModule() {
    if (this.module=="") {
      this.ngOnInit();
    }
    else if (this.IdAccSelected!=null && this.IdUserSelected!=null){
      this.devices$ = this.vehicleService.getDevicesByIdAccountAndIdUser(this.IdAccSelected, this.IdUserSelected).pipe(
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
    else if (this.IdAccSelected!=null && this.IdUserSelected==null){
      this.devices$ = this.vehicleService.getDevicesByAccount(this.IdAccSelected).pipe(
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
    else {
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


  }


}
