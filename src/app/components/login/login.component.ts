import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import { Users } from 'src/app/model/Users';
import {EventDriverService} from "../../State/event.driver.service";
import {userActionEvent, UserActionTypes} from "../../State/state.user";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Users = new Users();
  admin?:Users;
  msg="";

  constructor(
    private authenticationService:AuthenticationService,
    private router:Router,
    private eventDriverService:EventDriverService
    ) {}

  ngOnInit(): void {

    }

  handleLogin() {
console.log(this.user);
this.authenticationService.login(this.user).subscribe(
  data=> {
    console.log(data)
    this.authenticationService.getUser(data).subscribe(data=>{

  })
    this.actionEvent(data);
    this.authenticationService.authenticationUser(this.user).subscribe(
      data => {

        console.log("response received");
        this.router.navigateByUrl("/dash");
      });
  },
  error =>{console.log("exception occurred");
     this.msg="Bad credentials, please enter valid email and password";
   });
}

  register() {
    this.router.navigate(['/registration']);

  }

  actionEvent($event:any) {
    this.eventDriverService.publishEvent({type:UserActionTypes.ADMIN_LOGIN,payload:$event});
  }
}
