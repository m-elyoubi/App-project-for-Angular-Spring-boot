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

  constructor(private http:HttpClient) { }

  getDeviceByIdAccount(id_account:string):Observable<Devices[]>{
    let host=environment.host;
    return  this.http.get<Devices[]>(host+"/device?id_account="+id_account);
  }
  getDeviceByIdUser(id_user:number):Observable<Devices[]>{
    let host=environment.host;
    return  this.http.get<Devices[]>(host+"/getDeviceByIdUser?id_user="+id_user);
  }

  getAllDevices():Observable<Devices[]>{
    let host=environment.host;
    return  this.http.get<Devices[]>(host+"/devices");
  }
  getDevicesByAccount(account:Accounts):Observable<Devices[]>{
    let host=environment.host;
    return  this.http.get<Devices[]>(host+"/devicesByIdAccount?id_account="+account.id);
  }
  getDevicesByIdAccountAndIdUser(account:Accounts,user:Users):Observable<Devices[]>{
    let host=environment.host;
    return  this.http.get<Devices[]>(host+"/devicesByIdAccountIdUser?id_account="+account.id+"&"+"id_user="+user.id);
  }



  active(device:Devices):Observable<Devices>
  {
    let host=environment.host;
    device.active=!device.active;
    return this.http.put<Devices>(host+"/devices/"+device.id,device);
  }

  delete(device:Devices):Observable<void>
  {
    let host=environment.host;
    return this.http.delete<void>(host+"/devices/"+device.id);
  }
  searchByModule(keyword:String):Observable<Devices[]>{
    let host=environment.host;
    return this.http.get<Devices[]>(host+"/searchByModule?module="+keyword)
  }
  saveDevice(device:Devices):Observable<Devices>{
    let host=environment.host;
    return this.http.post<Devices>(host+"/saveDevice",device);
  }
}
