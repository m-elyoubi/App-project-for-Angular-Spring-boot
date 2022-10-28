import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {userActionEvent} from "./state.user";

@Injectable({providedIn:"root"})
export class EventDriverService{
  sourceEventSubject:Subject<userActionEvent>=new Subject<userActionEvent>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  publishEvent(event:userActionEvent){
    this.sourceEventSubject.next(event);
  }
}
