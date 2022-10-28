import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserActionTypes} from "../../../State/state.user";
import {FormGroup} from "@angular/forms";
import {AccountActionTypes} from "../../../State/state.account";

@Component({
  selector: 'app-account-nav-bar',
  templateUrl: './account-nav-bar.component.html',
  styleUrls: ['./account-nav-bar.component.scss']
})
export class AccountNavBarComponent implements OnInit {
   @Input() accountFormGroup!:FormGroup;
   @Output() accountEventEmitter :EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSaveAccount() {
    this.accountEventEmitter.emit({type:AccountActionTypes.NEW_ACCOUNT});
  }
}
