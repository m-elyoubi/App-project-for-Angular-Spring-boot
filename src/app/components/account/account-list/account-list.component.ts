import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum} from "../../../State/state.user";
import {Accounts} from "../../../model/Accounts";
import {accountActionEvent, AccountActionTypes} from "../../../State/state.account";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Input() accounts$?: Observable<AppDataState<Accounts[]>>;
  @Output() accountEventEmitter:EventEmitter<accountActionEvent>=new EventEmitter();
  readonly DataStateEnum = DataStateEnum;
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;
  @Input() editAccountFormGroup!:FormGroup;
  contactName: any;
  constructor() { }

  ngOnInit(): void {
  }

  onActive(account: any) {
    this.accountEventEmitter.emit({type:AccountActionTypes.ACTIVE_ACCOUNT,payload:account})
  }

  onDelete(account: any) {
    this.accountEventEmitter.emit({type:AccountActionTypes.DELETE_ACCOUNT,payload:account})

  }

  onAdd(account: any) {
    this.accountEventEmitter.emit({type:AccountActionTypes.ADD_DEVICE_ACCOUNT,payload:account})

  }

  onEdit(account: any) {
    this.accountEventEmitter.emit({type:AccountActionTypes.EDIT_ACCOUNT,payload:account})
  }

  onUpdateEdit() {
   this.accountEventEmitter.emit({type:AccountActionTypes.UPDATE_EDIT_ACCOUNT,payload:this.editAccountFormGroup})
  }

  sort(key: string) {
    this.accountEventEmitter.emit({type:AccountActionTypes.SORT_ACCOUNT,payload:key})

  }

  onSearchByName() {
    this.accountEventEmitter.emit({type:AccountActionTypes.SEARCH_ACCOUNT,payload:this.contactName})

  }
}
