import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Users} from "../model/Users";
import {Accounts} from "../model/Accounts";

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http:HttpClient) { }

  getAllId():Observable<Accounts[]>
  {
    let host=environment.host;
    return this.http.get<Accounts[]>(host+"/getId");
  }
  saveUser(user:Users):Observable<Users>
  {
    let host=environment.host;
    return this.http.post<Users>(host+"/users",user);
  }
}
