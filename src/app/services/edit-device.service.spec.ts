import { TestBed } from '@angular/core/testing';

import { EditDeviceService } from './edit-device.service';

describe('EditDeviceService', () => {
  let service: EditDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
