import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 @Output() sideBarOen=true;
  constructor() { }

  ngOnInit(): void {
  }


  eventAction($event: any) {
    this.sideBarOen=!this.sideBarOen;
  }
}
