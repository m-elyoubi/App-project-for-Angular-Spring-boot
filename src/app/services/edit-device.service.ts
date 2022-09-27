import { Injectable } from '@angular/core';
import {Devices} from "../model/Devices";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditDeviceService {

  constructor(private http:HttpClient) { }

  getDeviceById(id_device:number):Observable<Devices>{
    let host=environment.host;
    return this.http.get<Devices>(host+"/devices/"+id_device);
  }

  saveUpdate(device:Devices):Observable<Devices>{
    let host=environment.host;
    return this.http.put<Devices>(host+"/updateDevice/"+device.id,device);

  }
}
