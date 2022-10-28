import {Component, Input, OnInit} from '@angular/core';
import {userActionEvent, UserActionTypes} from "../../State/state.user";
import {EventDriverService} from "../../State/event.driver.service";
import {Users} from "../../model/Users";
import {LoginComponent} from "../login/login.component";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 @Input() admin?:Users;
  constructor(
    private eventDriverService:EventDriverService,
    public authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {

    console.log(this.admin)
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent:userActionEvent)=>{
         console.log("it's good")
         this.admin = actionEvent.payload;
         console.log(this.admin)


    });
    console.log("outside")
  }


}
