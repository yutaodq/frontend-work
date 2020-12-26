import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesFaceade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {
  private _columnDefs;
  private _defaultColDef;

  constructor(
    private _vehiclesSandbox: VehiclesFaceade,
    private i18n: TranslateService
  ) {

  }

  ngOnInit(): void {
    this._columnDefs = ColumnDefs;
    this._defaultColDef = DefaultColDer;
  }

  get vehiclesSandbox() {
    return this._vehiclesSandbox;
  }

  get columnDefs() {
    return this._columnDefs;
  }

  get defaultColDef() {
    return this._defaultColDef;
  }

}

const DefaultColDer = {
  initialWidth: 100,
  sortable: true,
  resizable: true,
  filter: true
};

const ColumnDefs = [
  {
    headerName: '标识',
    field: 'id',
    minWidth: 50,
    maxWidth: 90
  },
  {
    headerName: '车辆名称',
    field: 'name',
    minWidth: 200,
  },
  {
    headerName: '牌照',
    field: 'pz'
  },
  {
    headerName: '内部牌照',
    field: 'nbpz'
  },
  {
    headerName: '设备类型',
    field: 'type'
  },
  {
    headerName: '使用状态',
    field: 'zt'
  }
];
