import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {
  deviceFormGroup: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSaveDevice() {

  }
}
