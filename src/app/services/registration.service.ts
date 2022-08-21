import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Users} from "../model/Users";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private  host=environment.host;
  constructor(private http:HttpClient) { }
  public registerFromRemote(user:Users):Observable<any>
  {
    return this.http.post(`${this.host+"/registration"}`,user);
  }
}
