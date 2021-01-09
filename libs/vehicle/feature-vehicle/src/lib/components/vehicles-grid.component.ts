import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Vehicle } from '@zy/model';
import { VehicleColumnsBuilder } from '../grid/vehicle-columns.builder';
import { BaseGridViewModel, GridLocaleService, IGridColumnsBuilder } from '@zy/shared/ui-grid';
import { SearchGridService } from '@zy/shared/util';

@Component({
  selector: 'zy-vehicle-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss'],
  providers: [VehicleColumnsBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class VehiclesGridComponent extends BaseGridViewModel<Vehicle> {

  @Input() loading = true;
  private readonly _gridColumnsBuilder: IGridColumnsBuilder;

  private noRowsOverlayComponentParams;

  constructor(searchGridService: SearchGridService, vehicleColumnsBuilder: VehicleColumnsBuilder) {
    super(searchGridService);
    this._gridColumnsBuilder = vehicleColumnsBuilder
  }

  protected getGridColumnsBuilder(): IGridColumnsBuilder {
    return this._gridColumnsBuilder;
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit(); //调整表格大小自适应
  }
  onBtShowLoading() {
    this.gridOptions.api.showLoadingOverlay();
    // this.gridApi.showLoadingOverlay();
  }

  onBtShowNoRows() {
    this.gridOptions.api.showNoRowsOverlay();
    // this.gridApi.showNoRowsOverlay();
  }

  onBtHide() {
    this.gridOptions.api.hideOverlay();
  }

  protected registerFilterChangeHandlers(): void {
  }

  protected getGridStateKey(): string {
    return 'aa'
    // return GridDataStateKeys.REASSIGN_CASE;
  }
}

