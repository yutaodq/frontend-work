import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from '@ngx-translate/core';
import { GridOptions } from 'ag-grid-community';
// import { ButtonRenderedComponent } from '@zy/shared/ui-grid';
import { Router } from '@angular/router';
import { localeTextGrid } from '@zy/shared/util';
import { NGXLogger } from 'ngx-logger';
import { ButtonRenderedComponent } from '@zy/shared/ui-grid';
import { Vehicle } from '@zy/model';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
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
    // console.log(`onSelectData(event):` + selectDataId);
    // const id = selectDataId.id;
    this._vehiclesFacade.selectVehicle(vehicle);
    this.router.navigate(['vehicles', vehicle.id,'detail']);
    // this.router.navigate(['vehicles', selectDataId], { relativeTo: this.activeRouter });
  }

  get vehiclesSandbox() {
    return this._vehiclesFacade;
  }

  create() {
    this._logger.debug('日志功能：create');
    this.router.navigate(['vehicles', 'create']);

  }
}
