import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesUseTypeComponent } from './vehicles-use-type.component';

describe('VehicleComponent', () => {
  let component: VehiclesUseTypeComponent;
  let fixture: ComponentFixture<VehiclesUseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesUseTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesUseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
