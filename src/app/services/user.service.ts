import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import {Users} from "../model/Users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<Users[]>
  {
    let host=environment.host;
    return  this.http.get<Users[]>(host+"/users");
  }

  searchByName(keyword:string):Observable<Users[]>
  {
    let host=environment.host;
    return this.http.get<Users[]>(host+"/searchName?name="+keyword);
  }
  searchByPhone(keyword:string):Observable<Users[]>
  {
    let host=environment.host;
    return this.http.get<Users[]>(host+"/searchPhone?phone="+keyword);
  }
  searchByEmail(keyword:string):Observable<Users[]>
{
  let host=environment.host;
  return this.http.get<Users[]>(host+"/searchEmail?email="+keyword);
}
  delete(user:Users):Observable<void>
  {
    let host=environment.host;
    return this.http.delete<void>(host+"/users/"+user.id);
  }
  active(user:Users):Observable<Users>
  {
    let host=environment.host;
    user.active=!user.active;
    return this.http.put<Users>(host+"/users/"+user.id,user);
  }
}
