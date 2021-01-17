import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Vehicle } from '@zy/model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'zy-vehicle-delete-dialog',
  templateUrl: './vehicle-delete-dialog.component.html',
  styleUrls: ['./vehicle-delete-dialog.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDeleteDialogComponent  {

  constructor( private _ref: DynamicDialogRef) {
  }
  public delete(): void{
    this._ref.close(true)

  }
  public cancel(): void{
    this._ref.close(false)

  }

}

