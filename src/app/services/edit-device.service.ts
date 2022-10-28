import { Injectable } from '@angular/core';
import {Devices} from "../model/Devices";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditDeviceService {

  private host=environment.host;

  constructor(private http:HttpClient) { }

  getDeviceById(id_device:number):Observable<Devices>{
    return this.http.get<Devices>(this.host+"/devices/"+id_device);
  }

  saveUpdate(device:Devices):Observable<Devices>{
    return this.http.put<Devices>(this.host+"/updateDevice/"+device.id,device);

  }
}
