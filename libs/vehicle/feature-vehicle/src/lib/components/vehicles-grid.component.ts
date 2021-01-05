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

@Component({
  selector: 'zy-vehicle-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss'],
  providers: [VehicleColumnsBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class VehiclesGridComponent extends BaseGridViewModel<Vehicle> {

  @Input() private _vehicles: Vehicle[];
  @Input() loading = true;

  private readonly _gridHelperService: GridLocaleService;
  private noRowsOverlayComponentParams;

  constructor(injector: Injector, vehicleColumnsBuilder: VehicleColumnsBuilder) {
    super( injector);
    this._gridColumnsBuilder = vehicleColumnsBuilder
  }
get vehicles() {
    return this._vehicles;
}
  // ngOnInit() {
  //     this.initGridOptions();
  // }
  onBtShowLoading() {
    this.getGridOptions().api.showLoadingOverlay();
    // this.gridApi.showLoadingOverlay();
  }

  onBtShowNoRows() {
    this.getGridOptions().api.showNoRowsOverlay();
    // this.gridApi.showNoRowsOverlay();
  }

  onBtHide() {
    this.getGridOptions().api.hideOverlay();
  }

  protected registerFilterChangeHandlers(): void {
  }

  protected getGridStateKey(): string {
    return 'aa'
    // return GridDataStateKeys.REASSIGN_CASE;
  }
}

