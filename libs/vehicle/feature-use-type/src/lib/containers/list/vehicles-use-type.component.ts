import { Component, OnInit } from '@angular/core';
import { VehicleUseTypesFacade } from '@zy/shared/vehicles/data-acces/facade/use-type';
import { Vehicle } from '@zy/model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles-use-type.component.html',
  styleUrls: ['./vehicles-use-type.component.scss'],
  providers: [VehicleUseTypesFacade]
})

export class VehiclesUseTypeComponent implements OnInit {


  constructor(
    private _facade: VehicleUseTypesFacade,
    private _logger: NGXLogger
  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：Your log message goes here');
  }

  onSelectData(vehicle: Vehicle) {
    console.log(`onSelectData(event):aaaaaaaaaaaaaaaa` );
    // this._vehiclesFacade.selectVehicle(vehicle);
    // this.router.navigate(['vehicles', vehicle.id,'detail']);
  }

  get facade() {
    return this._facade;
  }

  create() {
    this._logger.debug('日志功能：create');
    // this.router.navigate(['vehicles', 'create']);

  }


}
