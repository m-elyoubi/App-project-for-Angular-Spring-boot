import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
@Injectable()
export class NavBarComponent implements OnInit {
 @Output() toggleSideBarEventEmitter :EventEmitter<any>=new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
  }
  toggleSideBar(){
 this.toggleSideBarEventEmitter.emit();
  }
}

