import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum, userActionEvent, UserActionTypes} from "../../../State/state.user";
import {Users} from "../../../model/Users";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  p: number = 1;
 @Input() users$:Observable<AppDataState<Users[]>> |null=null;
  @Output() userEventEmitter:EventEmitter<userActionEvent>=new EventEmitter();
  @Input() editUserFormGroup?:FormGroup;
  @Input() allIdAccount:any;
 readonly DataStateEnum=DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

  onActive(u: Users) {
   this.userEventEmitter.emit({type:UserActionTypes.ACTIVE_USER,payload:u});
  }

  onDelete(u: Users) {
    this.userEventEmitter.emit({type:UserActionTypes.DELETE_USER,payload:u});
  }

  onAdd(u: Users) {
    this.userEventEmitter.emit({type:UserActionTypes.ADD_USER,payload:u});

  }

  onEdit(u: Users) {
    this.userEventEmitter.emit({type:UserActionTypes.EDIT_USER,payload:u});
  }
  onUpdateEdit() {
    this.userEventEmitter.emit({type:UserActionTypes.UPDATE_USER , payload:this.editUserFormGroup});

  }


  onActionEvent($event: userActionEvent) {
    this.userEventEmitter.emit($event);
  }
}
