import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Users} from "../model/Users";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private http:HttpClient) { }

  getUserId(id:number):Observable<Users>
  {
    let host=environment.host;
    return this.http.get<Users>(host+"/users/"+id);
  }
  updateUser(user:Users):Observable<Users>
  {
    let host=environment.host;
    return this.http.put<Users>(host+"/users/"+user.id,user);
  }
}
