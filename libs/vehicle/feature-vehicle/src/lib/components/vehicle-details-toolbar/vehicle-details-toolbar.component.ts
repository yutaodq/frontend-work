import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Vehicle } from '@zy/model';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';
import { Router } from '@angular/router';

@Component({
  selector: 'zy-vehicle-details-toolbar',
  templateUrl: './vehicle-details-toolbar.component.html',
  styleUrls: ['./vehicle-details-toolbar.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDetailsToolbarComponent  {
  @Input()   public vehicle:        Vehicle;

  constructor(
    private _vehiclesFacade: VehiclesFacade,
    private _router: Router,
  ) {
  }

  delete() {

  }
  returnToList() {
    this._router.navigate(['vehicles', 'list']);
  }
}

