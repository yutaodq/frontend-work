import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleFacade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from '@ngx-translate/core';
import { GridOptions } from 'ag-grid-community';
import { ButtonRenderedComponent } from '@zy/shared/ui-grid';
import { Router } from '@angular/router';
import { localeTextGrid } from '@zy/shared/util';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {
  private _columnDefs = [
    {
      headerName: '标识',
      field: 'id',
      minWidth: 50,
      maxWidth: 90
    },
    {
      headerName: '车辆名称',
      field: 'name',
      minWidth: 200
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
    },
    {
      headerName: '操作',
      editable: false,
      sortable: false,
      filter: false,
      cellRenderer: 'buttonRendered',
      cellRendererParams: {
        iconClass: 'fa-sign-out-alt',
        onClick: this.onDetail.bind(this)
      }

    }
  ];
  private _defaultColDef;
  private _gridOptions: GridOptions;
  private _gridApi;
  private _frameworkComponents = {
    buttonRendered: ButtonRenderedComponent
  };

  constructor(
    private _vehiclesSandbox: VehicleFacade,
    private router: Router,
    private i18n: TranslateService,
    private _logger: NGXLogger
  ) {

  }

  ngOnInit(): void {
    this._logger.debug('日志功能：Your log message goes here');
    // this._columnDefs = ColumnDefs;
    this._defaultColDef = DefaultColDer;

    this._gridOptions = <GridOptions>{
      localeText: localeTextGrid,
      defaultColDef: this._defaultColDef,
      columnDefs: this._columnDefs,
      frameworkComponents: this._frameworkComponents
    };
  }

  onDetail(event) {
    console.log(`在控制台打印:onDetail($event)`);
    this._vehiclesSandbox.selectVehicle(event.id);
    this.router.navigate(['vehicles', event.id]);
    // this.router.navigate(['detail', event.rowData.employeeId], { relativeTo: this.activeRouter });
  }

  get vehiclesSandbox() {
    return this._vehiclesSandbox;
  }

  get columnDefs() {
    return this._columnDefs;
  }

  get gridOptions() {
    return this._gridOptions;
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit(); //调整表格大小自适应
    // this._gridApi = params.api;
    // To auto-height AG-Grid
    // this._gridApi.setDomLayout("autoHeight");
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit(); //调整表格大小自适应
    // this._gridApi = params.api;
    // To auto-height AG-Grid
    // this._gridApi.setDomLayout("autoHeight");
  }

  sizeColumns() {
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
    minWidth: 200
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
  },
  {
    headerName: '操作',
    editable: false,
    sortable: false,
    filter: false,
    cellRenderer: 'buttonRendered',
    cellRendererParams: {
      fa: 'info-circle',
      iconClass: 'detail-icon'
    }

  }
];

// headerName: '操作',
//   editable: false,
//   sortable: false,
//   filter: false,
//   cellRenderer: 'buttonRendered',
//   cellRendererParams: {
//   onClick: this.onShowDetail.bind(this),
//     fa: 'info-circle',
//     iconClass: 'detail-icon'
// },
