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

@Component({
  selector: 'zy-vehicle-delete-dialog',
  templateUrl: './vehicle-delete-dialog.component.html',
  styleUrls: ['./vehicle-delete-dialog.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDeleteDialogComponent  {

  constructor() {
  }

}

