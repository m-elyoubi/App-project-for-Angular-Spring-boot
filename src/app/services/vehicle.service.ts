import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Devices} from "../model/Devices";
import {environment} from "../../environments/environment";
import {Users} from "../model/Users";
import {Accounts} from "../model/Accounts";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private host=environment.host;

  constructor(private http:HttpClient) { }


  getDeviceByIdAccount(id_account:string):Observable<Devices[]>{
    return  this.http.get<Devices[]>(this.host+"/devicesByIdAccount?id_account="+id_account);
  }

  getDeviceByIdUser(id_user:number):Observable<Devices[]>{
    return  this.http.get<Devices[]>(this.host+"/getDeviceByIdUser?id_user="+id_user);
  }

  getAllDevices():Observable<Devices[]>{
    return  this.http.get<Devices[]>(this.host+"/devices");
  }

  getDevicesByAccount(account:Accounts):Observable<Devices[]>{
    return  this.http.get<Devices[]>(this.host+"/devicesByIdAccount?id_account="+account.id);
  }

  getDevicesByIdAccountAndIdUser(account:Accounts,user:Users):Observable<Devices[]>{
    return  this.http.get<Devices[]>(this.host+"/devicesByIdAccountIdUser?id_account="+account.id+"&"+"id_user="+user.id);
  }

  activeDevice(device:Devices):Observable<Devices> {
    device.active=!device.active;
    return this.http.put<Devices>(this.host+"/devices/"+device.id,device);
  }

  deleteDevice(device:Devices):Observable<void> {
    return this.http.delete<void>(this.host+"/devices/"+device.id);
  }

  searchByModuleUser(keyword:String):Observable<Devices[]>{
    return this.http.get<Devices[]>(this.host+"/searchByModule?module="+keyword)
  }

  saveDevice(device:Devices):Observable<Devices>{
    return this.http.post<Devices>(this.host+"/saveDevice",device);
  }
}
