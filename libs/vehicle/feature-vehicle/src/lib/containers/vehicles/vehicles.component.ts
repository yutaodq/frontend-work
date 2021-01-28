import { Component, OnInit } from '@angular/core';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Vehicle } from '@zy/model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  providers: []
})

export class VehiclesComponent implements OnInit {


  constructor(
    private _vehiclesFacade: VehiclesFacade,
    private router: Router,
    private i18n: TranslateService,
    private _logger: NGXLogger
  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：Your log message goes here');
  }

  onSelectData(vehicle: Vehicle) {
    console.log(`onSelectData(event):aaaaaaaaaaaaaaaa` );
    this._vehiclesFacade.selectVehicle(vehicle);
    this.router.navigate(['vehicles', vehicle.id,'detail']);
  }

  get vehiclesSandbox() {
    return this._vehiclesFacade;
  }

  create() {
    this._logger.debug('日志功能：create');
    this.router.navigate(['vehicles', 'create']);

  }
}
