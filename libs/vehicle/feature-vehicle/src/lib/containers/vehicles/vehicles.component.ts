import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleFacade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from '@ngx-translate/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {
  private _columnDefs;
  private _defaultColDef;
private _gridOptions: GridOptions;
  constructor(
    private _vehiclesSandbox: VehicleFacade,
    private i18n: TranslateService
  ) {

  }

  ngOnInit(): void {
    this._columnDefs = ColumnDefs;
    this._defaultColDef = DefaultColDer;

    this._gridOptions = <GridOptions> {
      defaultColDef: this._defaultColDef,
      columnDefs: this._columnDefs,
    }
  }
  // onGridReady: this.sizeColumns

  get vehiclesSandbox() {
    return this._vehiclesSandbox;
  }

  get columnDefs() {
    return this._columnDefs;
  }
  get gridOptions() {
    return this._gridOptions;
  }


  sizeColumns () {
    this._gridOptions.api.sizeColumnsToFit();//调整表格大小自适应
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
