import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {Users} from "../model/Users";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private  host=environment.host
  public AuthenticationUser :Users | undefined;
  public AuthenticationFullUser :Users | undefined;


  constructor(private httpClient:HttpClient) {}

  public login(user:Users):Observable<any> {
    return this.httpClient.post<any>(`${this.host+"/login"}`,user);
  }

  public authenticationUser(user: Users):Observable<Boolean>{

    this.AuthenticationUser=user;
    console.log(this.AuthenticationUser)
    localStorage.setItem("authUser",JSON.stringify({email:user.email,username:user.username,role:user.role,jwt:"JWT_TOKEN"}))

    return of(true);
  }

  public getUser(user:Users):Observable<boolean>{
    this.AuthenticationFullUser=user;
    console.log(this.AuthenticationFullUser)
    return of(true)
  }

  public isAuthentication() {
    return this.AuthenticationUser!=undefined;
  }

  public hasRole(role:string){
    return this.AuthenticationUser!.role.includes(role);
  }

  public logout():Observable<boolean>{
    this.AuthenticationUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
}
