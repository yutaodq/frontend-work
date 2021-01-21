import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Vehicle } from '@zy/model';
import { VehicleColumnsBuilder } from '../../grid/vehicle-columns.builder';
import { BaseGridViewModel, GridLocaleService, IGridColumnsBuilder } from '@zy/shared/ui-grid';
import { VehicleSearchNgrxGridService } from '@zy/shared/vehicle/data-acces-facade';
import { SearchNgrxGridService } from '@zy/shared/util';

@Component({
  selector: 'zy-vehicle-grid',
  templateUrl: './vehicles-grid.component.html',
  styleUrls: ['./vehicles-grid.component.scss'],
  providers: [ VehicleColumnsBuilder, VehicleSearchNgrxGridService],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class VehiclesGridComponent extends BaseGridViewModel<Vehicle> {

  @Input() loading = true;
  private readonly _gridColumnsBuilder: IGridColumnsBuilder;


  constructor(searchNgrxGridService: VehicleSearchNgrxGridService,
  vehicleColumnsBuilder: VehicleColumnsBuilder
  ) {
    super( searchNgrxGridService);
    this._gridColumnsBuilder = vehicleColumnsBuilder
  }

  protected getGridColumnsBuilder(): IGridColumnsBuilder {
    return this._gridColumnsBuilder;
  }

  protected registerFilterChangeHandlers(): void {
  }

  protected getGridStateKey(): string {
    return 'aa'
    // return GridDataStateKeys.REASSIGN_CASE;
  }
}

