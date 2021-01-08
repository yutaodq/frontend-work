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
      field: 'name',
      minWidth: 200
    });
    this.addColumn(    {
      headerName: '牌照',
      field: 'pz'
    });
    this.addColumn({
      headerName: '内部牌照',
      field: 'nbpz'
    });
    this.addColumn(   {
      headerName: '设备类型',
      field: 'type'
    });
    this.addColumn( {
      headerName: '使用状态',
      field: 'zt'
    });

  }
}

// const VehicleGridFields = {
//   id： 'id',
//   name: 'name',
//   pz: 'pz',
//   Nbpz： 'nbpz',
//   type: 'type',
//   zt: 'zt'
// };
