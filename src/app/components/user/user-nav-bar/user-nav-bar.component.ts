import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {userActionEvent, UserActionTypes} from "../../../State/state.user";

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.scss']
})
export class UserNavBarComponent implements OnInit {

  @Output() userEventEmitter:EventEmitter<userActionEvent>=new EventEmitter();
  username: any;
  @Input() userFormGroup: any;
  @Input() allIdAccount: any;
  constructor() { }

  ngOnInit(): void {

  }

  onSearch() {
    this.userEventEmitter.emit({type:UserActionTypes.SEARCH_BY_USERNAME,payload:this.username});
  }

  onSearchByNumber(dataForm: any) {
    this.userEventEmitter.emit({type:UserActionTypes.SEARCH_BY_PHONE_USER,payload:dataForm});
  }

  onSearchByEmail(dataForm: any) {
    this.userEventEmitter.emit({type:UserActionTypes.SEARCH_BY_EMAIL_USER,payload:dataForm});
  }


  onSaveUser() {
    this.userEventEmitter.emit({type:UserActionTypes.NEW_USER});
  }

  getAllIdAccount() {
    this.userEventEmitter.emit({type:UserActionTypes.GET_ALL_ID_ACCOUNT});
  }
}
