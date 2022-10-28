import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Users} from "../../../../model/Users";
import {userActionEvent, UserActionTypes} from "../../../../State/state.user";
import {FormGroup} from "@angular/forms";
import {EventDriverService} from "../../../../State/event.driver.service";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit {
  @Input() user?: Users;
  @Output() userEventEmitter :EventEmitter<userActionEvent>=new EventEmitter();
  @Input() allIdAccount: any;
  @Input() editUserFormGroup?:FormGroup;


  constructor(
    private eventDriverService:EventDriverService,
    public  authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {

  }

  onDelete(user: Users) {
    this.userEventEmitter.emit({type:UserActionTypes.DELETE_USER,payload:user});
  }

  onAdd(user: Users) {
   this.userEventEmitter.emit({type:UserActionTypes.ADD_USER,payload:user});
  }

  onEdit(user: Users) {
   // console.log(this.editUserFormGroup)
    //this.userEventEmitter.emit({type:UserActionTypes.EDIT_USER,payload:user});
   this.eventDriverService.publishEvent({type:UserActionTypes.EDIT_USER,payload:user});
  }

  onActive(user: any) {
    this.userEventEmitter.emit({type:UserActionTypes.ACTIVE_USER,payload:user});
  }

  onUpdateEdit() {
    confirm("onUpdateEdit");
    this.userEventEmitter.emit({type:UserActionTypes.UPDATE_USER, payload:this.editUserFormGroup});

  }


}
