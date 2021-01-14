import { Injectable } from '@angular/core';
import { BaseGridColumnsBuilder, DataGridColumns } from '@zy/shared/ui-grid';


@Injectable()
export class VehicleColumnsBuilder extends BaseGridColumnsBuilder {
  constructor() {
    super();
  }

  public build(): DataGridColumns {
    this.getVehicleGridColumns();
    return this.columns;
  }

  private getVehicleGridColumns(): void {
    this.addColumn({
      headerName: '车辆名称',
      field: VehicleGridFields.name,
      minWidth: 200
    });
    this.addColumn(    {
      headerName: '牌照',
      field: VehicleGridFields.pz
    });
    this.addColumn({
      headerName: '内部牌照',
      field: VehicleGridFields.nbpz
    });
    this.addColumn(   {
      headerName: '设备类型',
      field: VehicleGridFields.type
    });
     this.addColumn( {
      headerName: '使用状态',
      field: VehicleGridFields.zt
    });
    this.addColumn( {
      headerName: '备注',
      field: VehicleGridFields.bz
    });

  }
}

const VehicleGridFields = {
  id: 'id',
  name: 'name',
  pz: 'pz',
  nbpz: 'nbpz',
  type: 'type',
  zt: 'zt',
  bz: 'bz'
};
