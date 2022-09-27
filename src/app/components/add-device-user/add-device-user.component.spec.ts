import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceUserComponent } from './add-device-user.component';

describe('AddDeviceUserComponent', () => {
  let component: AddDeviceUserComponent;
  let fixture: ComponentFixture<AddDeviceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeviceUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeviceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
